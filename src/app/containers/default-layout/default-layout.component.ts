import { Component } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import {
  navItemMenu,
  navItemsAdmin,
  navItemsSuperAdmin,
  navItemSupervisor,
  navItemsAMSAdmin,
  navItemsAMSManager,
  navItemsAMSAuditor,
  navItemsAMSMember,
  navItemsAMSAuditee,
  navItemsAMSTeamLeader,
  navItemsAMSDirector,
  navItemsCISTAdmin,
  navItemsICMSAdmin,
  navItemsICMSBranch,
  navItemsICMSDistrict,
  navItemsICMSIFB,
  navItemsICMSFinanceIC,
  navItemsICMSFinanceOWNER,
  navItemsICMSShareIC,
  navItemsICMSShareOWNER,
  navItemsSMSAdmin,
  navItemsICMSBranchManager,
  navItemsICMSBankingOperation,
  navItemsICMSDistrictDirector,
  navItemsICMSProvision,
  navItemsCCAdmin,
  navItemsCCUser,
  navItemsCCUserDeliquent,
  navItemsECXAdmin,
  navItemsECXUser,
  navItemsCAOAdmin,
  navItemsCAOUser,
  navItemsSASVAdmin,
  navItemsSASVUser,
  navItemsMemoAdmin,
  navItemsMemoUser,
  navItemsEMSAdmin,
  navItemsEMSUser,
  navItemsCMSAdmin,
  navItemsCMSUser,
  navItemSearch,
  navItemDelinquent,
  navItemAdmin,
  navItemWeeklyCheck,
  complianceCheckMenu,

} from './_nav';
import { AuditStaffService } from 'src/app/modules/ams/services/audit-staff/audit-staff.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './default-layout.component.html',
})
export class DefaultLayoutComponent {
  public navItems = [];
  public dashboardRoute: string = "";
  public perfectScrollbarConfig = { suppressScrollX: true };

  // Define a configuration object for roles
  private roleConfig = {
    "ROLE_SUPER_ADMIN": { navItems: navItemsAdmin, dashboardRoute: "default_dashboard" },
    "ROLE_SUPERVISOR": { navItems: navItemSupervisor, dashboardRoute: "default_dashboard" },
    "ROLE_EMS_ADMIN": { navItems: navItemsEMSAdmin, dashboardRoute: "default_dashboard" },
    "ROLE_EMS_USER": { navItems: navItemsEMSUser, dashboardRoute: "cc_dashboard" },
    "ROLE_CC_ADMIN": { navItems: navItemsCCAdmin, dashboardRoute: "default_dashboard" },
    "ROLE_CC_USER": { navItems: navItemsCCUser, dashboardRoute: "default_dashboard" },
    "ROLE_CC_USER_DELIQUENT": { navItems: navItemsCCUserDeliquent, dashboardRoute: "default_dashboard" },
    "ROLE_ICMS_ADMIN": { navItems: navItemsICMSAdmin, dashboardRoute: "icms_dashboard" },
    "ROLE_ICMS_DISTRICT": { navItems: navItemsICMSDistrict, dashboardRoute: "icms_dashboard/district" },
    "ROLE_ICMS_DISTRICT_DIRECTOR": { navItems: navItemsICMSDistrictDirector, dashboardRoute: "icms_dashboard/district" },
    "ROLE_ICMS_BRANCH_IC": { navItems: navItemsICMSBranch, dashboardRoute: "icms_dashboard/branch" },
    "ROLE_SMS_ADMIN": { navItems: navItemsSMSAdmin, dashboardRoute: "sms_dashboard" },
    "ROLE_ICMS_PROVISION": { navItems: navItemsICMSProvision, dashboardRoute: "default_dashboard" },
    "ROLE_ICMS_BRANCH_MANAGER": { navItems: navItemsICMSBranchManager, dashboardRoute: "default_dashboard" },
    "ROLE_ICMS_BANKING_OPERATION": { navItems: navItemsICMSBankingOperation, dashboardRoute: "default_dashboard" },
    "ROLE_ICMS_IFB": { navItems: navItemsICMSIFB, dashboardRoute: "default_dashboard" },
    "ROLE_ICMS_FINANCE_IC": { navItems: navItemsICMSFinanceIC, dashboardRoute: "default_dashboard" },
    "ROLE_ICMS_FINANCE_OWNER": { navItems: navItemsICMSFinanceOWNER, dashboardRoute: "default_dashboard" },
    "ROLE_ICMS_SHARE_IC": { navItems: navItemsICMSShareIC, dashboardRoute: "default_dashboard" },
    "ROLE_ICMS_SHARE_OWNER": { navItems: navItemsICMSShareOWNER, dashboardRoute: "default_dashboard" },
    "ROLE_SASV_ADMIN": { navItems: navItemsSASVAdmin, dashboardRoute: "default_dashboard" },
    "ROLE_SASV_USER": { navItems: navItemsSASVUser, dashboardRoute: "default_dashboard" },
    "ROLE_CAO_ADMIN": { navItems: navItemsCAOAdmin, dashboardRoute: "default_dashboard" },
    "ROLE_CAO_USER": { navItems: navItemsCAOUser, dashboardRoute: "default_dashboard" },
    "ROLE_MEMO_ADMIN": { navItems: navItemsMemoAdmin, dashboardRoute: "default_dashboard" },
    "ROLE_MEMO_USER": { navItems: navItemsMemoUser, dashboardRoute: "default_dashboard" },
    "ROLE_ECX_ADMIN": { navItems: navItemsECXAdmin, dashboardRoute: "default_dashboard" },
    "ROLE_ECX_USER": { navItems: navItemsECXUser, dashboardRoute: "default_dashboard" },
    "ROLE_CMS_ADMIN": { navItems: navItemsCMSAdmin, dashboardRoute: "cms_dashboard" },
    "ROLE_CMS_USER": { navItems: navItemsCMSUser, dashboardRoute: "default_dashboard" },
    "ROLE_AMS_ADMIN": { navItems: navItemsAMSAdmin, dashboardRoute: "default_dashboard" },
    "ROLE_AMS_DIRECTOR": { navItems: navItemsAMSDirector, dashboardRoute: "default_dashboard" },
    "ROLE_AMS_AUDITOR": { navItems: navItemsAMSAuditor, dashboardRoute: "default_dashboard" },
    "ROLE_AMS_DIRECTOR_AUDITEE": { navItems: navItemsAdmin, dashboardRoute: "default_dashboard" }, // This role also includes a supervisor check
    "ROLE_AMS_MANAGER": { navItems: navItemsAMSManager, dashboardRoute: "default_dashboard" },
    "ROLE_AMS_TEAM_LEADER": { navItems: navItemsAMSTeamLeader, dashboardRoute: "default_dashboard" },
    "ROLE_AMS_MEMBER": { navItems: navItemsAMSMember, dashboardRoute: "default_dashboard" },
    "ROLE_AMS_AUDITEE": { navItems: navItemsAMSAuditee, dashboardRoute: "default_dashboard" },
    "ROLE_CIST_ADMIN": { navItems: navItemsCISTAdmin, dashboardRoute: "default_dashboard" },
    "ROLE_SEARCH": { navItems: navItemSearch, dashboardRoute: "default_dashboard" },
    "ROLE_DELINQUENT": { navItems: navItemDelinquent, dashboardRoute: "default_dashboard" },
    "ROLE_WEEKLY_CHECK": { navItems: navItemWeeklyCheck, dashboardRoute: "default_dashboard" },
    "ROLE_COMPLIANCE_CHECK_MENU": { navItems: complianceCheckMenu, dashboardRoute: "default_dashboard"}
  };


  constructor(private auditStaffService: AuditStaffService, private http: HttpClient, private router: Router) {
    this.setupNavigationItems();
  }

  private setupNavigationItems() {
    const totalModules = Number(localStorage.getItem('number_of_modules')) + 1;
    const otp = localStorage.getItem('otp') == "true";
    this.navItems = [navItemMenu]; // Initialize this.navItems with navItemMenu
    if (!otp) {
      for (let i = 0; i <= totalModules; i++) {
        let moduleStatus = localStorage.getItem("module_" + i) === "true"
        if (moduleStatus) {
          let role = localStorage.getItem("role_" + i);
          let config = this.roleConfig[role];
          if (config && config.navItems) {
            // Add isOpen property to navItem
            config.navItems.isOpen = false;
            if (config.navItems.children) {
              this.addIsOpenProperty(config.navItems.children);
            }
            // Push only config.navItems to the this.navItems array
            this.navItems.push(config.navItems);
            this.dashboardRoute = config.dashboardRoute;
          }
        }
      }
    }
  }
  
 addIsOpenProperty(navItems) {
    navItems.forEach(item => {
      item.isOpen = false;
      if (item.children) {
        this.addIsOpenProperty(item.children);
      }
    });
  }


  authenticateAWS(): Observable<any> {
    console.log(" i started working");
    const body = new URLSearchParams()
    body.set('username', localStorage.getItem("un"));
    body.set('password', localStorage.getItem("ps"));
    body.set('dontUseMe', 'false');

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded'
      })
    };

    return this.http.post("http://localhost:9081/authenticate-ews", body.toString(), httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      );
  }

  handleError(error: any) {
    console.error('An error occurred:', error);
    return throwError(error);
  }
}
