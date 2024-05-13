import { Component } from '@angular/core';

import {
  navItemMenu,
  navItemsSuperAdmin,
  navItemsEMSAdmin,
  navItemsEMSUser,
  navItemsCCAdmin,
  navItemsCCUser,
  navItemsCCUserDeliquent,
  navItemsICMSAdmin,
  navItemsICMSDistrict,
  navItemsICMSDistrictDirector,
  navItemsICMSBranch,
  navItemsSMSAdmin,
  navItemsICMSProvision,
  navItemsICMSBranchManager,
  navItemsICMSBankingOperation,
  navItemsICMSIFB,
  navItemsICMSFinanceIC,
  navItemsICMSFinanceICOWNER,
  navItemsICMSShare,
  navItemsSASVAdmin,
  navItemsSASVUser,
  navItemsMemoAdmin,
  navItemsMemoUser,
  navItemsECXAdmin,
  navItemsECXUser,
  navItemsCMSAdmin,
  navItemsCMSUser,
  navItemSupervisor,
  navItemsAMSAdmin,
  navCC,
  navItemSearch,
  navItemDelinquent,
  navItemAdmin,
  navItemWeeklyCheck,
  complianceCheckMenu,
  navItemsCAOAdmin,
  navItemsCAOUser,
  navItemsCISTAdmin,
  navItemsAMSDirector,
  navItemsAMSManager,
  navItemsAMSTeamLeader,
  navItemsAMSAuditor,
  navItemsAMSMember,
  navItemsAMSAuditee,
  navItemsAdmin

} from './_nav';
import { AuditStaffService } from 'src/app/modules/ams/services/audit-staff/audit-staff.service';
import { Observable, catchError, retry, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Router } from '@angular/router';




@Component({
  selector: 'app-dashboard',
  templateUrl: './default-layout.component.html',
})
export class DefaultLayoutComponent {

  public navItems = [];
  public dashboardRoute: string = ""

  public perfectScrollbarConfig = {
    suppressScrollX: true,
  };




  constructor(private auditStaffService: AuditStaffService, private http: HttpClient, private router: Router) {



    this.addIndentClass(navItemsSuperAdmin);
    this.addIndentClass(navItemsEMSAdmin);
    this.addIndentClass(navItemsEMSUser);
    this.addIndentClass(navItemsCCAdmin);
    this.addIndentClass(navItemsCCUser);
    this.addIndentClass(navItemsCCUserDeliquent);
    this.addIndentClass(navItemsICMSAdmin);
    this.addIndentClass(navItemsICMSDistrict);
    this.addIndentClass(navItemsICMSDistrictDirector);
    this.addIndentClass(navItemsICMSBranch);
    this.addIndentClass(navItemsSMSAdmin);
    this.addIndentClass(navItemsICMSProvision);
    this.addIndentClass(navItemsICMSBranchManager);
    this.addIndentClass(navItemsICMSBankingOperation);
    this.addIndentClass(navItemsICMSIFB);
    this.addIndentClass(navItemsICMSFinanceIC);
    this.addIndentClass(navItemsICMSFinanceICOWNER);
    this.addIndentClass(navItemsICMSShare);
    this.addIndentClass(navItemsSASVAdmin);
    this.addIndentClass(navItemsSASVUser);
    this.addIndentClass(navItemsMemoAdmin);
    this.addIndentClass(navItemsMemoUser);
    this.addIndentClass(navItemsECXAdmin);
    this.addIndentClass(navItemsECXUser);
    this.addIndentClass(navItemsCMSAdmin);
    this.addIndentClass(navItemsCMSUser);
    this.addIndentClass(navItemSupervisor);
    this.addIndentClass(navItemsAMSAdmin);
    this.addIndentClass(navCC);
    this.addIndentClass(navItemsAMSDirector);
    this.addIndentClass(navItemsAMSTeamLeader);
    this.addIndentClass(navItemsAMSAuditor)
    this.addIndentClass(navItemsAMSMember);
    this.addIndentClass(navItemsAMSAuditee);
    this.addIndentClass(navItemsAdmin);

    this.navItems.push(navItemMenu);
    const totalModules = Number(localStorage.getItem('number_of_modules')) + 1;
    const otp = localStorage.getItem('otp') == "true";
    if (!otp) {
      for (let i = 0; i <= totalModules; i++) {
        let moduleStatus = localStorage.getItem("module_" + i) === "true"


        if (moduleStatus) {
          let supervisorMenuItemAdded = false;
          let role = localStorage.getItem("role_" + i);
          if (role.includes('CC')) {
            // ... other code ...

            if (role.includes('ROLE_CC_USER_DELIQUENT')) {
              // Add Delinquent submenu
              if (!complianceCheckMenu.children.includes(navItemDelinquent)) {
                complianceCheckMenu.children.push(navItemDelinquent);
              }
            } else if (role.includes('ROLE_CC_ADMIN')) {
              // Add Admin submenu
              if (!complianceCheckMenu.children.includes(navItemAdmin)) {
                complianceCheckMenu.children.push(navItemAdmin);
              }
            }

            // Check if Compliance Check menu is already in the list before adding
            if (!this.navItems.some(item => item?.name === 'Compliance Check')) {
              this.navItems.push(complianceCheckMenu);

            }
          }




          switch (role) {
            case "ROLE_SUPER_ADMIN":
              this.navItems.push(navItemsAdmin);
              this.dashboardRoute = "default_dashboard"
              // if (localStorage.getItem("supervisor") === "true") {

              //   if (!this.navItems.includes(navItemSupervisor)) {
              //     this.navItems.push(navItemSupervisor);
              //   }
              // }
              break;
            case "ROLE_EMS_ADMIN":
              this.navItems.push(navItemsEMSAdmin);
              this.dashboardRoute = "default_dashboard"
              break;
            case "ROLE_EMS_USER":
              this.navItems.push(navItemsEMSUser);
              this.dashboardRoute = "cc_dashboard"
              break;
            case "ROLE_ICMS_ADMIN":
              this.navItems.push(navItemsICMSAdmin);
              this.dashboardRoute = "icms_dashboard"
              break;
            case "ROLE_ICMS_DISTRICT_IC":
              this.navItems.push(navItemsICMSDistrict);
              this.router.navigate(['icms_dashboard/district']);
              break;
            case "ROLE_ICMS_BRANCH_IC":
              this.navItems.push(navItemsICMSBranch);
              this.router.navigate(['icms_dashboard/branch']);
              break;
            case "ROLE_ICMS_IFB":
              this.navItems.push(navItemsICMSIFB);
              this.router.navigate(['default_dashboard']);
              break;
            case "ROLE_SMS_ADMIN":
              this.navItems.push(navItemsSMSAdmin);
              this.dashboardRoute = 'sms_dashboard'
              break;
            case "ROLE_ICMS_PROVISION":
              this.navItems.push(navItemsICMSProvision);
              this.dashboardRoute = "default_dashboard"

              break;
            case "ROLE_ICMS_BRANCH_MANAGER":
              this.navItems.push(navItemsICMSBranchManager);
              this.dashboardRoute = "default_dashboard"

              break;
            case "ROLE_ICMS_BANKING_OPERATION":
              this.navItems.push(navItemsICMSBankingOperation);
              this.dashboardRoute = "default_dashboard"
              //this.router.navigate(['icms_dashboard/bankingOperation']);
              break;
            case "ROLE_ICMS_FINANCE_IC":
              this.navItems.push(navItemsICMSFinanceIC);
              this.dashboardRoute = "default_dashboard"
              //this.router.navigate(['icms_dashboard/bankingOperation']);
              break;
              case "ROLE_ICMS_FINANCE_OWNER":
                this.navItems.push(navItemsICMSFinanceICOWNER);
                this.dashboardRoute = "default_dashboard"
                //this.router.navigate(['icms_dashboard/bankingOperation']);
                break;
                case "ROLE_ICMS_SHARW":
                  this.navItems.push(navItemsICMSShare);
                  this.dashboardRoute = "default_dashboard"
                  //this.router.navigate(['icms_dashboard/bankingOperation']);
                  break;
            case "ROLE_ICMS_DISTRICT_DIRECTOR":
              this.navItems.push(navItemsICMSDistrictDirector);
              this.router.navigate(['icms_dashboard/district']);
              //this.dashboardRoute = "default_dashboard"

              break;
            case "ROLE_SASV_ADMIN":
              this.navItems.push(navItemsSASVAdmin);
              this.dashboardRoute = "default_dashboard"
              break;
            case "ROLE_MEMO_ADMIN":
              this.navItems.push(navItemsMemoAdmin);
              this.dashboardRoute = "default_dashboard"

              this.authenticateAWS();
              break;
            case "ROLE_MEMO_USER":
              this.navItems.push(navItemsMemoUser);
              this.dashboardRoute = "default_dashboard"
              break;
            case "ROLE_ECX_ADMIN":
              this.navItems.push(navItemsECXAdmin);
              this.dashboardRoute = "default_dashboard"
              break;
            case "ROLE_ECX_USER":
              this.navItems.push(navItemsECXUser);
              this.dashboardRoute = "default_dashboard"
              break;

            case "ROLE_CAO_ADMIN":
              this.navItems.push(navItemsCAOAdmin);
              this.dashboardRoute = "default_dashboard"
              break;
            case "ROLE_CAO_USER":
              this.dashboardRoute = "default_dashboard"
              break;
            case "ROLE_CMS_ADMIN":
              this.navItems.push(navItemsCMSAdmin);
              this.dashboardRoute = "cms_dashboard"
              break;
            case "ROLE_CMS_USER":
              this.navItems.push(navItemsCMSUser);
              this.dashboardRoute = "default_dashboard"
              break;
            case "ROLE_AMS_ADMIN":
              this.navItems.push(navItemsAMSAdmin);
              this.dashboardRoute = "default_dashboard"
              break;
            case "ROLE_AMS_DIRECTOR":
              this.navItems.push(navItemsAMSDirector);
              this.dashboardRoute = "default_dashboard"
              break;
            case "ROLE_AMS_AUDITOR":
              this.navItems.push(navItemsAMSAuditor);
              this.dashboardRoute = "default_dashboard"
              break;
            case "ROLE_AMS_DIRECTOR_AUDITEE":
              if (localStorage.getItem("supervisor") === "true") {
                if (!this.navItems.includes(navItemsAdmin)) {
                  this.navItems.push(navItemsAdmin);
                }
              }
              this.dashboardRoute = "default_dashboard"
              break;
            case "ROLE_AMS_MANAGER":
              this.navItems.push(navItemsAMSManager);
              this.dashboardRoute = "default_dashboard"
              break;
            case "ROLE_AMS_TEAM_LEADER":
              this.navItems.push(navItemsAMSTeamLeader);
              this.dashboardRoute = "default_dashboard"
              break;
            case "ROLE_AMS_MEMBER":
              this.navItems.push(navItemsAMSMember);
              this.dashboardRoute = "default_dashboard"
              break;
            case "ROLE_AMS_AUDITEE":
              this.navItems.push(navItemsAMSAuditee);
              this.dashboardRoute = "default_dashboard"
              break;
            case "ROLE_CIST_ADMIN":
              this.navItems.push(navItemsCISTAdmin);
              this.dashboardRoute = "default_dashboard"
              break;
          }

          if (localStorage.getItem('title').includes('MANAGER') && (localStorage.getItem('branchId') != null)) {
            this.navItems.push(navItemsCAOUser);
            this.dashboardRoute = "default_dashboard";
          }
        }
      }

    }
  }



  addIndentClass(obj: any, level: number = 0) {
    for (const key in obj) {
      if (key === 'name' && typeof obj[key] === 'string') {
        if (level === 1) {
          obj['class'] = 'indent-1';
        } else if (level === 2) {
          obj['class'] = 'indent-2';
        }
      } else if (key === 'children' && Array.isArray(obj[key])) {
        obj[key].forEach((child: any) => this.addIndentClass(child, level + 1));
      }
    }
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







