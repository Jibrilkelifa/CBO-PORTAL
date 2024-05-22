"use strict";
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.isDevkitMigration = exports.createMigrationSchematicRule = exports.cdkMigrations = void 0;
const tasks_1 = require("@angular-devkit/schematics/tasks");
const update_tool_1 = require("../update-tool");
const project_tsconfig_paths_1 = require("../utils/project-tsconfig-paths");
const devkit_file_system_1 = require("./devkit-file-system");
const devkit_migration_1 = require("./devkit-migration");
const find_stylesheets_1 = require("./find-stylesheets");
const attribute_selectors_1 = require("./migrations/attribute-selectors");
const class_inheritance_1 = require("./migrations/class-inheritance");
const class_names_1 = require("./migrations/class-names");
const constructor_signature_1 = require("./migrations/constructor-signature");
const css_selectors_1 = require("./migrations/css-selectors");
const element_selectors_1 = require("./migrations/element-selectors");
const input_names_1 = require("./migrations/input-names");
const method_call_arguments_1 = require("./migrations/method-call-arguments");
const misc_template_1 = require("./migrations/misc-template");
const output_names_1 = require("./migrations/output-names");
const property_names_1 = require("./migrations/property-names");
const symbol_removal_1 = require("./migrations/symbol-removal");
/** List of migrations which run for the CDK update. */
exports.cdkMigrations = [
    attribute_selectors_1.AttributeSelectorsMigration,
    class_inheritance_1.ClassInheritanceMigration,
    class_names_1.ClassNamesMigration,
    constructor_signature_1.ConstructorSignatureMigration,
    css_selectors_1.CssSelectorsMigration,
    element_selectors_1.ElementSelectorsMigration,
    input_names_1.InputNamesMigration,
    method_call_arguments_1.MethodCallArgumentsMigration,
    misc_template_1.MiscTemplateMigration,
    output_names_1.OutputNamesMigration,
    property_names_1.PropertyNamesMigration,
    symbol_removal_1.SymbolRemovalMigration,
];
/**
 * Creates a Angular schematic rule that runs the upgrade for the
 * specified target version.
 */
function createMigrationSchematicRule(targetVersion, extraMigrations, upgradeData, onMigrationCompleteFn) {
    return async (tree, context) => {
        const logger = context.logger;
        const workspace = await (0, project_tsconfig_paths_1.getWorkspaceConfigGracefully)(tree);
        if (workspace === null) {
            logger.error('Could not find workspace configuration file.');
            return;
        }
        // Keep track of all project source files which have been checked/migrated. This is
        // necessary because multiple TypeScript projects can contain the same source file and
        // we don't want to check these again, as this would result in duplicated failure messages.
        const analyzedFiles = new Set();
        const fileSystem = new devkit_file_system_1.DevkitFileSystem(tree);
        const projectNames = workspace.projects.keys();
        const migrations = [...exports.cdkMigrations, ...extraMigrations];
        let hasFailures = false;
        for (const projectName of projectNames) {
            const project = workspace.projects.get(projectName);
            const buildTsconfigPath = (0, project_tsconfig_paths_1.getTargetTsconfigPath)(project, 'build');
            const testTsconfigPath = (0, project_tsconfig_paths_1.getTargetTsconfigPath)(project, 'test');
            if (!buildTsconfigPath && !testTsconfigPath) {
                logger.warn(`Skipping migration for project ${projectName}. Unable to determine 'tsconfig.json' file in workspace config.`);
                continue;
            }
            // In some applications, developers will have global stylesheets which are not
            // specified in any Angular component. Therefore we glob up all CSS and SCSS files
            // in the project and migrate them if needed.
            // TODO: rework this to collect global stylesheets from the workspace config.
            // TODO: https://github.com/angular/components/issues/24032.
            const additionalStylesheetPaths = (0, find_stylesheets_1.findStylesheetFiles)(tree, project.root);
            if (buildTsconfigPath !== null) {
                runMigrations(project, projectName, buildTsconfigPath, additionalStylesheetPaths, false);
            }
            if (testTsconfigPath !== null) {
                runMigrations(project, projectName, testTsconfigPath, additionalStylesheetPaths, true);
            }
        }
        let runPackageManager = false;
        // Run the global post migration static members for all
        // registered devkit migrations.
        migrations.forEach(m => {
            const actionResult = isDevkitMigration(m) && m.globalPostMigration !== undefined
                ? m.globalPostMigration(tree, targetVersion, context)
                : null;
            if (actionResult) {
                runPackageManager = runPackageManager || actionResult.runPackageManager;
            }
        });
        // If a migration requested the package manager to run, we run it as an
        // asynchronous post migration task. We cannot run it synchronously,
        // as file changes from the current migration task are not applied to
        // the file system yet.
        if (runPackageManager) {
            context.addTask(new tasks_1.NodePackageInstallTask({ quiet: false }));
        }
        if (onMigrationCompleteFn) {
            onMigrationCompleteFn(context, targetVersion, hasFailures);
        }
        /** Runs the migrations for the specified workspace project. */
        function runMigrations(project, projectName, tsconfigPath, additionalStylesheetPaths, isTestTarget) {
            const program = update_tool_1.UpdateProject.createProgramFromTsconfig(tsconfigPath, fileSystem);
            const updateContext = {
                isTestTarget,
                projectName,
                project,
                tree,
            };
            const updateProject = new update_tool_1.UpdateProject(updateContext, program, fileSystem, analyzedFiles, context.logger);
            const result = updateProject.migrate(migrations, targetVersion, upgradeData, additionalStylesheetPaths);
            // Commit all recorded edits in the update recorder. We apply the edits after all
            // migrations ran because otherwise offsets in the TypeScript program would be
            // shifted and individual migrations could no longer update the same source file.
            fileSystem.commitEdits();
            hasFailures = hasFailures || result.hasFailures;
        }
    };
}
exports.createMigrationSchematicRule = createMigrationSchematicRule;
/** Whether the given migration type refers to a devkit migration */
function isDevkitMigration(value) {
    return devkit_migration_1.DevkitMigration.isPrototypeOf(value);
}
exports.isDevkitMigration = isDevkitMigration;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGV2a2l0LW1pZ3JhdGlvbi1ydWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2Nkay9zY2hlbWF0aWNzL25nLXVwZGF0ZS9kZXZraXQtbWlncmF0aW9uLXJ1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBOzs7Ozs7R0FNRzs7O0FBR0gsNERBQXdFO0FBR3hFLGdEQUE2QztBQUk3Qyw0RUFBb0c7QUFFcEcsNkRBQXNEO0FBQ3RELHlEQUF1RjtBQUN2Rix5REFBdUQ7QUFDdkQsMEVBQTZFO0FBQzdFLHNFQUF5RTtBQUN6RSwwREFBNkQ7QUFDN0QsOEVBQWlGO0FBQ2pGLDhEQUFpRTtBQUNqRSxzRUFBeUU7QUFDekUsMERBQTZEO0FBQzdELDhFQUFnRjtBQUNoRiw4REFBaUU7QUFDakUsNERBQStEO0FBQy9ELGdFQUFtRTtBQUVuRSxnRUFBbUU7QUFFbkUsdURBQXVEO0FBQzFDLFFBQUEsYUFBYSxHQUFpQztJQUN6RCxpREFBMkI7SUFDM0IsNkNBQXlCO0lBQ3pCLGlDQUFtQjtJQUNuQixxREFBNkI7SUFDN0IscUNBQXFCO0lBQ3JCLDZDQUF5QjtJQUN6QixpQ0FBbUI7SUFDbkIsb0RBQTRCO0lBQzVCLHFDQUFxQjtJQUNyQixtQ0FBb0I7SUFDcEIsdUNBQXNCO0lBQ3RCLHVDQUFzQjtDQUN2QixDQUFDO0FBVUY7OztHQUdHO0FBQ0gsU0FBZ0IsNEJBQTRCLENBQzFDLGFBQTRCLEVBQzVCLGVBQTBDLEVBQzFDLFdBQXdCLEVBQ3hCLHFCQUF1QztJQUV2QyxPQUFPLEtBQUssRUFBRSxJQUFVLEVBQUUsT0FBeUIsRUFBRSxFQUFFO1FBQ3JELE1BQU0sTUFBTSxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUM7UUFDOUIsTUFBTSxTQUFTLEdBQUcsTUFBTSxJQUFBLHFEQUE0QixFQUFDLElBQUksQ0FBQyxDQUFDO1FBRTNELElBQUksU0FBUyxLQUFLLElBQUksRUFBRTtZQUN0QixNQUFNLENBQUMs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LEVBQUUsVUFBVSxDQUFDLENBQUM7WUFDbEYsTUFBTSxhQUFhLEdBQWtCO2dCQUNuQyxZQUFZO2dCQUNaLFdBQVc7Z0JBQ1gsT0FBTztnQkFDUCxJQUFJO2FBQ0wsQ0FBQztZQUVGLE1BQU0sYUFBYSxHQUFHLElBQUksMkJBQWEsQ0FDckMsYUFBYSxFQUNiLE9BQU8sRUFDUCxVQUFVLEVBQ1YsYUFBYSxFQUNiLE9BQU8sQ0FBQyxNQUFNLENBQ2YsQ0FBQztZQUVGLE1BQU0sTUFBTSxHQUFHLGFBQWEsQ0FBQyxPQUFPLENBQ2xDLFVBQVUsRUFDVixhQUFhLEVBQ2IsV0FBVyxFQUNYLHlCQUF5QixDQUMxQixDQUFDO1lBRUYsaUZBQWlGO1lBQ2pGLDhFQUE4RTtZQUM5RSxpRkFBaUY7WUFDakYsVUFBVSxDQUFDLFdBQVcsRUFBRSxDQUFDO1lBRXpCLFdBQVcsR0FBRyxXQUFXLElBQUksTUFBTSxDQUFDLFdBQVcsQ0FBQztRQUNsRCxDQUFDO0lBQ0gsQ0FBQyxDQUFDO0FBQ0osQ0FBQztBQW5IRCxvRUFtSEM7QUFFRCxvRUFBb0U7QUFDcEUsU0FBZ0IsaUJBQWlCLENBQy9CLEtBQThCO0lBRTlCLE9BQU8sa0NBQWUsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUM7QUFDOUMsQ0FBQztBQUpELDhDQUlDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBMTEMgQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5cbmltcG9ydCB7UnVsZSwgU2NoZW1hdGljQ29udGV4dCwgVHJlZX0gZnJvbSAnQGFuZ3VsYXItZGV2a2l0L3NjaGVtYXRpY3MnO1xuaW1wb3J0IHtOb2RlUGFja2FnZUluc3RhbGxUYXNrfSBmcm9tICdAYW5ndWxhci1kZXZraXQvc2NoZW1hdGljcy90YXNrcyc7XG5pbXBvcnQge1Byb2plY3REZWZpbml0aW9ufSBmcm9tICdAYW5ndWxhci1kZXZraXQvY29yZS9zcmMvd29ya3NwYWNlJztcblxuaW1wb3J0IHtVcGRhdGVQcm9qZWN0fSBmcm9tICcuLi91cGRhdGUtdG9vbCc7XG5pbXBvcnQge1dvcmtzcGFjZVBhdGh9IGZyb20gJy4uL3VwZGF0ZS10b29sL2ZpbGUtc3lzdGVtJztcbmltcG9ydCB7TWlncmF0aW9uQ3Rvcn0gZnJvbSAnLi4vdXBkYXRlLXRvb2wvbWlncmF0aW9uJztcbmltcG9ydCB7VGFyZ2V0VmVyc2lvbn0gZnJvbSAnLi4vdXBkYXRlLXRvb2wvdGFyZ2V0LXZlcnNpb24nO1xuaW1wb3J0IHtnZXRUYXJnZXRUc2NvbmZpZ1BhdGgsIGdldFdvcmtzcGFjZUNvbmZpZ0dyYWNlZnVsbHl9IGZyb20gJy4uL3V0aWxzL3Byb2plY3QtdHNjb25maWctcGF0aHMnO1xuXG5pbXBvcnQge0RldmtpdEZpbGVTeXN0ZW19IGZyb20gJy4vZGV2a2l0LWZpbGUtc3lzdGVtJztcbmltcG9ydCB7RGV2a2l0Q29udGV4dCwgRGV2a2l0TWlncmF0aW9uLCBEZXZraXRNaWdyYXRpb25DdG9yfSBmcm9tICcuL2RldmtpdC1taWdyYXRpb24nO1xuaW1wb3J0IHtmaW5kU3R5bGVzaGVldEZpbGVzfSBmcm9tICcuL2ZpbmQtc3R5bGVzaGVldHMnO1xuaW1wb3J0IHtBdHRyaWJ1dGVTZWxlY3RvcnNNaWdyYXRpb259IGZyb20gJy4vbWlncmF0aW9ucy9hdHRyaWJ1dGUtc2VsZWN0b3JzJztcbmltcG9ydCB7Q2xhc3NJbmhlcml0YW5jZU1pZ3JhdGlvbn0gZnJvbSAnLi9taWdyYXRpb25zL2NsYXNzLWluaGVyaXRhbmNlJztcbmltcG9ydCB7Q2xhc3NOYW1lc01pZ3JhdGlvbn0gZnJvbSAnLi9taWdyYXRpb25zL2NsYXNzLW5hbWVzJztcbmltcG9ydCB7Q29uc3RydWN0b3JTaWduYXR1cmVNaWdyYXRpb259IGZyb20gJy4vbWlncmF0aW9ucy9jb25zdHJ1Y3Rvci1zaWduYXR1cmUnO1xuaW1wb3J0IHtDc3NTZWxlY3RvcnNNaWdyYXRpb259IGZyb20gJy4vbWlncmF0aW9ucy9jc3Mtc2VsZWN0b3JzJztcbmltcG9ydCB7RWxlbWVudFNlbGVjdG9yc01pZ3JhdGlvbn0gZnJvbSAnLi9taWdyYXRpb25zL2VsZW1lbnQtc2VsZWN0b3JzJztcbmltcG9ydCB7SW5wdXROYW1lc01pZ3JhdGlvbn0gZnJvbSAnLi9taWdyYXRpb25zL2lucHV0LW5hbWVzJztcbmltcG9ydCB7TWV0aG9kQ2FsbEFyZ3VtZW50c01pZ3JhdGlvbn0gZnJvbSAnLi9taWdyYXRpb25zL21ldGhvZC1jYWxsLWFyZ3VtZW50cyc7XG5pbXBvcnQge01pc2NUZW1wbGF0ZU1pZ3JhdGlvbn0gZnJvbSAnLi9taWdyYXRpb25zL21pc2MtdGVtcGxhdGUnO1xuaW1wb3J0IHtPdXRwdXROYW1lc01pZ3JhdGlvbn0gZnJvbSAnLi9taWdyYXRpb25zL291dHB1dC1uYW1lcyc7XG5pbXBvcnQge1Byb3BlcnR5TmFtZXNNaWdyYXRpb259IGZyb20gJy4vbWlncmF0aW9ucy9wcm9wZXJ0eS1uYW1lcyc7XG5pbXBvcnQge1VwZ3JhZGVEYXRhfSBmcm9tICcuL3VwZ3JhZGUtZGF0YSc7XG5pbXBvcnQge1N5bWJvbFJlbW92YWxNaWdyYXRpb259IGZyb20gJy4vbWlncmF0aW9ucy9zeW1ib2wtcmVtb3ZhbCc7XG5cbi8qKiBMaXN0IG9mIG1pZ3JhdGlvbnMgd2hpY2ggcnVuIGZvciB0aGUgQ0RLIHVwZGF0ZS4gKi9cbmV4cG9ydCBjb25zdCBjZGtNaWdyYXRpb25zOiBNaWdyYXRpb25DdG9yPFVwZ3JhZGVEYXRhPltdID0gW1xuICBBdHRyaWJ1dGVTZWxlY3RvcnNNaWdyYXRpb24sXG4gIENsYXNzSW5oZXJpdGFuY2VNaWdyYXRpb24sXG4gIENsYXNzTmFtZXNNaWdyYXRpb24sXG4gIENvbnN0cnVjdG9yU2lnbmF0dXJlTWlncmF0aW9uLFxuICBDc3NTZWxlY3RvcnNNaWdyYXRpb24sXG4gIEVsZW1lbnRTZWxlY3RvcnNNaWdyYXRpb24sXG4gIElucHV0TmFtZXNNaWdyYXRpb24sXG4gIE1ldGhvZENhbGxBcmd1bWVudHNNaWdyYXRpb24sXG4gIE1pc2NUZW1wbGF0ZU1pZ3JhdGlvbixcbiAgT3V0cHV0TmFtZXNNaWdyYXRpb24sXG4gIFByb3BlcnR5TmFtZXNNaWdyYXRpb24sXG4gIFN5bWJvbFJlbW92YWxNaWdyYXRpb24sXG5dO1xuXG5leHBvcnQgdHlwZSBOdWxsYWJsZURldmtpdE1pZ3JhdGlvbiA9IE1pZ3JhdGlvbkN0b3I8VXBncmFkZURhdGEgfCBudWxsLCBEZXZraXRDb250ZXh0PjtcblxudHlwZSBQb3N0TWlncmF0aW9uRm4gPSAoXG4gIGNvbnRleHQ6IFNjaGVtYXRpY0NvbnRleHQsXG4gIHRhcmdldFZlcnNpb246IFRhcmdldFZlcnNpb24sXG4gIGhhc0ZhaWx1cmU6IGJvb2xlYW4sXG4pID0+IHZvaWQ7XG5cbi8qKlxuICogQ3JlYXRlcyBhIEFuZ3VsYXIgc2NoZW1hdGljIHJ1bGUgdGhhdCBydW5zIHRoZSB1cGdyYWRlIGZvciB0aGVcbiAqIHNwZWNpZmllZCB0YXJnZXQgdmVyc2lvbi5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZU1pZ3JhdGlvblNjaGVtYXRpY1J1bGUoXG4gIHRhcmdldFZlcnNpb246IFRhcmdldFZlcnNpb24sXG4gIGV4dHJhTWlncmF0aW9uczogTnVsbGFibGVEZXZraXRNaWdyYXRpb25bXSxcbiAgdXBncmFkZURhdGE6IFVwZ3JhZGVEYXRhLFxuICBvbk1pZ3JhdGlvbkNvbXBsZXRlRm4/OiBQb3N0TWlncmF0aW9uRm4sXG4pOiBSdWxlIHtcbiAgcmV0dXJuIGFzeW5jICh0cmVlOiBUcmVlLCBjb250ZXh0OiBTY2hlbWF0aWNDb250ZXh0KSA9PiB7XG4gICAgY29uc3QgbG9nZ2VyID0gY29udGV4dC5sb2dnZXI7XG4gICAgY29uc3Qgd29ya3NwYWNlID0gYXdhaXQgZ2V0V29ya3NwYWNlQ29uZmlnR3JhY2VmdWxseSh0cmVlKTtcblxuICAgIGlmICh3b3Jrc3BhY2UgPT09IG51bGwpIHtcbiAgICAgIGxvZ2dlci5lcnJvcignQ291bGQgbm90IGZpbmQgd29ya3NwYWNlIGNvbmZpZ3VyYXRpb24gZmlsZS4nKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBLZWVwIHRyYWNrIG9mIGFsbCBwcm9qZWN0IHNvdXJjZSBmaWxlcyB3aGljaCBoYXZlIGJlZW4gY2hlY2tlZC9taWdyYXRlZC4gVGhpcyBpc1xuICAgIC8vIG5lY2Vzc2FyeSBiZWNhdXNlIG11bHRpcGxlIFR5cGVTY3JpcHQgcHJvamVjdHMgY2FuIGNvbnRhaW4gdGhlIHNhbWUgc291cmNlIGZpbGUgYW5kXG4gICAgLy8gd2UgZG9uJ3Qgd2FudCB0byBjaGVjayB0aGVzZSBhZ2FpbiwgYXMgdGhpcyB3b3VsZCByZXN1bHQgaW4gZHVwbGljYXRlZCBmYWlsdXJlIG1lc3NhZ2VzLlxuICAgIGNvbnN0IGFuYWx5emVkRmlsZXMgPSBuZXcgU2V0PFdvcmtzcGFjZVBhdGg+KCk7XG4gICAgY29uc3QgZmlsZVN5c3RlbSA9IG5ldyBEZXZraXRGaWxlU3lzdGVtKHRyZWUpO1xuICAgIGNvbnN0IHByb2plY3ROYW1lcyA9IHdvcmtzcGFjZS5wcm9qZWN0cy5rZXlzKCk7XG4gICAgY29uc3QgbWlncmF0aW9ucyA9IFsuLi5jZGtNaWdyYXRpb25zLCAuLi5leHRyYU1pZ3JhdGlvbnNdIGFzIE51bGxhYmxlRGV2a2l0TWlncmF0aW9uW107XG4gICAgbGV0IGhhc0ZhaWx1cmVzID0gZmFsc2U7XG5cbiAgICBmb3IgKGNvbnN0IHByb2plY3ROYW1lIG9mIHByb2plY3ROYW1lcykge1xuICAgICAgY29uc3QgcHJvamVjdCA9IHdvcmtzcGFjZS5wcm9qZWN0cy5nZXQocHJvamVjdE5hbWUpITtcbiAgICAgIGNvbnN0IGJ1aWxkVHNjb25maWdQYXRoID0gZ2V0VGFyZ2V0VHNjb25maWdQYXRoKHByb2plY3QsICdidWlsZCcpO1xuICAgICAgY29uc3QgdGVzdFRzY29uZmlnUGF0aCA9IGdldFRhcmdldFRzY29uZmlnUGF0aChwcm9qZWN0LCAndGVzdCcpO1xuXG4gICAgICBpZiAoIWJ1aWxkVHNjb25maWdQYXRoICYmICF0ZXN0VHNjb25maWdQYXRoKSB7XG4gICAgICAgIGxvZ2dlci53YXJuKFxuICAgICAgICAgIGBTa2lwcGluZyBtaWdyYXRpb24gZm9yIHByb2plY3QgJHtwcm9qZWN0TmFtZX0uIFVuYWJsZSB0byBkZXRlcm1pbmUgJ3RzY29uZmlnLmpzb24nIGZpbGUgaW4gd29ya3NwYWNlIGNvbmZpZy5gLFxuICAgICAgICApO1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgLy8gSW4gc29tZSBhcHBsaWNhdGlvbnMsIGRldmVsb3BlcnMgd2lsbCBoYXZlIGdsb2JhbCBzdHlsZXNoZWV0cyB3aGljaCBhcmUgbm90XG4gICAgICAvLyBzcGVjaWZpZWQgaW4gYW55IEFuZ3VsYXIgY29tcG9uZW50LiBUaGVyZWZvcmUgd2UgZ2xvYiB1cCBhbGwgQ1NTIGFuZCBTQ1NTIGZpbGVzXG4gICAgICAvLyBpbiB0aGUgcHJvamVjdCBhbmQgbWlncmF0ZSB0aGVtIGlmIG5lZWRlZC5cbiAgICAgIC8vIFRPRE86IHJld29yayB0aGlzIHRvIGNvbGxlY3QgZ2xvYmFsIHN0eWxlc2hlZXRzIGZyb20gdGhlIHdvcmtzcGFjZSBjb25maWcuXG4gICAgICAvLyBUT0RPOiBodHRwczovL2dpdGh1Yi5jb20vYW5ndWxhci9jb21wb25lbnRzL2lzc3Vlcy8yNDAzMi5cbiAgICAgIGNvbnN0IGFkZGl0aW9uYWxTdHlsZXNoZWV0UGF0aHMgPSBmaW5kU3R5bGVzaGVldEZpbGVzKHRyZWUsIHByb2plY3Qucm9vdCk7XG5cbiAgICAgIGlmIChidWlsZFRzY29uZmlnUGF0aCAhPT0gbnVsbCkge1xuICAgICAgICBydW5NaWdyYXRpb25zKHByb2plY3QsIHByb2plY3ROYW1lLCBidWlsZFRzY29uZmlnUGF0aCwgYWRkaXRpb25hbFN0eWxlc2hlZXRQYXRocywgZmFsc2UpO1xuICAgICAgfVxuICAgICAgaWYgKHRlc3RUc2NvbmZpZ1BhdGggIT09IG51bGwpIHtcbiAgICAgICAgcnVuTWlncmF0aW9ucyhwcm9qZWN0LCBwcm9qZWN0TmFtZSwgdGVzdFRzY29uZmlnUGF0aCwgYWRkaXRpb25hbFN0eWxlc2hlZXRQYXRocywgdHJ1ZSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGV0IHJ1blBhY2thZ2VNYW5hZ2VyID0gZmFsc2U7XG4gICAgLy8gUnVuIHRoZSBnbG9iYWwgcG9zdCBtaWdyYXRpb24gc3RhdGljIG1lbWJlcnMgZm9yIGFsbFxuICAgIC8vIHJlZ2lzdGVyZWQgZGV2a2l0IG1pZ3JhdGlvbnMuXG4gICAgbWlncmF0aW9ucy5mb3JFYWNoKG0gPT4ge1xuICAgICAgY29uc3QgYWN0aW9uUmVzdWx0ID1cbiAgICAgICAgaXNEZXZraXRNaWdyYXRpb24obSkgJiYgbS5nbG9iYWxQb3N0TWlncmF0aW9uICE9PSB1bmRlZmluZWRcbiAgICAgICAgICA/IG0uZ2xvYmFsUG9zdE1pZ3JhdGlvbih0cmVlLCB0YXJnZXRWZXJzaW9uLCBjb250ZXh0KVxuICAgICAgICAgIDogbnVsbDtcbiAgICAgIGlmIChhY3Rpb25SZXN1bHQpIHtcbiAgICAgICAgcnVuUGFja2FnZU1hbmFnZXIgPSBydW5QYWNrYWdlTWFuYWdlciB8fCBhY3Rpb25SZXN1bHQucnVuUGFja2FnZU1hbmFnZXI7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICAvLyBJZiBhIG1pZ3JhdGlvbiByZXF1ZXN0ZWQgdGhlIHBhY2thZ2UgbWFuYWdlciB0byBydW4sIHdlIHJ1biBpdCBhcyBhblxuICAgIC8vIGFzeW5jaHJvbm91cyBwb3N0IG1pZ3JhdGlvbiB0YXNrLiBXZSBjYW5ub3QgcnVuIGl0IHN5bmNocm9ub3VzbHksXG4gICAgLy8gYXMgZmlsZSBjaGFuZ2VzIGZyb20gdGhlIGN1cnJlbnQgbWlncmF0aW9uIHRhc2sgYXJlIG5vdCBhcHBsaWVkIHRvXG4gICAgLy8gdGhlIGZpbGUgc3lzdGVtIHlldC5cbiAgICBpZiAocnVuUGFja2FnZU1hbmFnZXIpIHtcbiAgICAgIGNvbnRleHQuYWRkVGFzayhuZXcgTm9kZVBhY2thZ2VJbnN0YWxsVGFzayh7cXVpZXQ6IGZhbHNlfSkpO1xuICAgIH1cblxuICAgIGlmIChvbk1pZ3JhdGlvbkNvbXBsZXRlRm4pIHtcbiAgICAgIG9uTWlncmF0aW9uQ29tcGxldGVGbihjb250ZXh0LCB0YXJnZXRWZXJzaW9uLCBoYXNGYWlsdXJlcyk7XG4gICAgfVxuXG4gICAgLyoqIFJ1bnMgdGhlIG1pZ3JhdGlvbnMgZm9yIHRoZSBzcGVjaWZpZWQgd29ya3NwYWNlIHByb2plY3QuICovXG4gICAgZnVuY3Rpb24gcnVuTWlncmF0aW9ucyhcbiAgICAgIHByb2plY3Q6IFByb2plY3REZWZpbml0aW9uLFxuICAgICAgcHJvamVjdE5hbWU6IHN0cmluZyxcbiAgICAgIHRzY29uZmlnUGF0aDogV29ya3NwYWNlUGF0aCxcbiAgICAgIGFkZGl0aW9uYWxTdHlsZXNoZWV0UGF0aHM6IHN0cmluZ1tdLFxuICAgICAgaXNUZXN0VGFyZ2V0OiBib29sZWFuLFxuICAgICkge1xuICAgICAgY29uc3QgcHJvZ3JhbSA9IFVwZGF0ZVByb2plY3QuY3JlYXRlUHJvZ3JhbUZyb21Uc2NvbmZpZyh0c2NvbmZpZ1BhdGgsIGZpbGVTeXN0ZW0pO1xuICAgICAgY29uc3QgdXBkYXRlQ29udGV4dDogRGV2a2l0Q29udGV4dCA9IHtcbiAgICAgICAgaXNUZXN0VGFyZ2V0LFxuICAgICAgICBwcm9qZWN0TmFtZSxcbiAgICAgICAgcHJvamVjdCxcbiAgICAgICAgdHJlZSxcbiAgICAgIH07XG5cbiAgICAgIGNvbnN0IHVwZGF0ZVByb2plY3QgPSBuZXcgVXBkYXRlUHJvamVjdChcbiAgICAgICAgdXBkYXRlQ29udGV4dCxcbiAgICAgICAgcHJvZ3JhbSxcbiAgICAgICAgZmlsZVN5c3RlbSxcbiAgICAgICAgYW5hbHl6ZWRGaWxlcyxcbiAgICAgICAgY29udGV4dC5sb2dnZXIsXG4gICAgICApO1xuXG4gICAgICBjb25zdCByZXN1bHQgPSB1cGRhdGVQcm9qZWN0Lm1pZ3JhdGUoXG4gICAgICAgIG1pZ3JhdGlvbnMsXG4gICAgICAgIHRhcmdldFZlcnNpb24sXG4gICAgICAgIHVwZ3JhZGVEYXRhLFxuICAgICAgICBhZGRpdGlvbmFsU3R5bGVzaGVldFBhdGhzLFxuICAgICAgKTtcblxuICAgICAgLy8gQ29tbWl0IGFsbCByZWNvcmRlZCBlZGl0cyBpbiB0aGUgdXBkYXRlIHJlY29yZGVyLiBXZSBhcHBseSB0aGUgZWRpdHMgYWZ0ZXIgYWxsXG4gICAgICAvLyBtaWdyYXRpb25zIHJhbiBiZWNhdXNlIG90aGVyd2lzZSBvZmZzZXRzIGluIHRoZSBUeXBlU2NyaXB0IHByb2dyYW0gd291bGQgYmVcbiAgICAgIC8vIHNoaWZ0ZWQgYW5kIGluZGl2aWR1YWwgbWlncmF0aW9ucyBjb3VsZCBubyBsb25nZXIgdXBkYXRlIHRoZSBzYW1lIHNvdXJjZSBmaWxlLlxuICAgICAgZmlsZVN5c3RlbS5jb21taXRFZGl0cygpO1xuXG4gICAgICBoYXNGYWlsdXJlcyA9IGhhc0ZhaWx1cmVzIHx8IHJlc3VsdC5oYXNGYWlsdXJlcztcbiAgICB9XG4gIH07XG59XG5cbi8qKiBXaGV0aGVyIHRoZSBnaXZlbiBtaWdyYXRpb24gdHlwZSByZWZlcnMgdG8gYSBkZXZraXQgbWlncmF0aW9uICovXG5leHBvcnQgZnVuY3Rpb24gaXNEZXZraXRNaWdyYXRpb24oXG4gIHZhbHVlOiBNaWdyYXRpb25DdG9yPGFueSwgYW55Pixcbik6IHZhbHVlIGlzIERldmtpdE1pZ3JhdGlvbkN0b3I8YW55PiB7XG4gIHJldHVybiBEZXZraXRNaWdyYXRpb24uaXNQcm90b3R5cGVPZih2YWx1ZSk7XG59XG4iXX0=