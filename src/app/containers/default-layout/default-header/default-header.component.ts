import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ClassToggleService, HeaderComponent } from '@coreui/angular';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { EmployeeService } from 'src/app/services/sso-services/employee.service';
import { HttpErrorResponse } from '@angular/common/http';
import { DomSanitizer } from '@angular/platform-browser';
import { AuthService } from 'src/app/_services/auth.service';
import { EMSService } from 'src/app/services/ems-services/ems-services.service';


@Component({
  selector: 'app-default-header',
  templateUrl: './default-header.component.html',
  styleUrls: ['./default-header.component.scss']
})
export class DefaultHeaderComponent extends HeaderComponent {

  [x: string]: any;
  user: string;
  imageData: any;
  defaultAvatarPath: string;
  cc:boolean;

  @Input() sidebarId: string = "sidebar";

  public newMessages = new Array(4)
  public newTasks = new Array(5)
  public newNotifications = new Array(5)
 

  display: boolean = false;
  roles = JSON.parse(localStorage.getItem("allRoles"));

  public openDialog(config: any) {
    this.display = true;
  }


  constructor(private classToggler: ClassToggleService, private router: Router, private employeeService: EmployeeService, private sanitizer: DomSanitizer, private authService:AuthService,private emsService:EMSService) {
    super();
  }

  ngOnInit() {

    this.getDefaultAvatar();
    this.user = localStorage.getItem('name');

    const totalModules = Number(localStorage.getItem('number_of_modules')) + 1;

    for (let i = 0; i <= totalModules; i++) {
      let moduleStatus = localStorage.getItem("module_" + i) === "true"
      if (moduleStatus) {
        switch (localStorage.getItem("role_" + i)) {
          case "ROLE_SUPER_ADMIN":
            console.log("ROLE_SUPER_ADMIN");
            break;
          case "ROLE_EMS_ADMIN":
            console.log("ROLE_EMS_ADMIN");
            break;
          case "ROLE_EMS_USER":
            console.log("ROLE_EMS_USER");
            break;
          case "ROLE_CC_ADMIN":
             this.cc = true;
             break;
          case "ROLE_CC_USER":
            this.cc = true;
             break;
          case "ROLE_CC_USER_DELIQUENT":
            this.cc = true;
            break;
          case "ROLE_ICMS_ADMIN":
            console.log("ROLE_ICMS_ADMIN");
            break;
          case "ROLE_ICMS_DISTRICT_IC":
            console.log("ROLE_ICMS_DISTRICT_IC");
            break;
          case "ROLE_ICMS_BRANCH_IC":
            console.log("ROLE_ICMS_BRANCH_IC");
            break;
          case "ROLE_ICMS_PROVISION":
            console.log("ROLE_ICMS_PROVISION");
            break;
          case "ROLE_ICMS_BRANCH_MANAGER":
            console.log("ROLE_ICMS_BRANCH_MANAGER");
            break;
          case "ROLE_SASV_ADMIN":
            console.log("ROLE_SASV_ADMIN");
            break;
          case "ROLE_SASV_USER":
            console.log("ROLE_SASV_USER");
            break;
          case "ROLE_MEMO_ADMIN":
            console.log("ROLE_MEMO_ADMIN");
            break;
          case "ROLE_MEMO_USER":
            console.log("ROLE_MEMO_USER");
            break;
          case "ROLE_ECX_ADMIN":
            console.log("ROLE_ECX_ADMIN");
            break;
          case "ROLE_ECX_USER":
            console.log("ROLE_ECX_USER");
            break;
          case "ROLE_CMS_ADMIN":
            console.log("ROLE_CMS_ADMIN");
            break;
          case "ROLE_CMS_USER":
            console.log("ROLE_CMS_USER");
            break;
          case "ROLE_CMS_ADMIN":
            console.log("ROLE_CMS_ADMIN");
            break;
        }
      }
    }

  
  }

  logout() {
    localStorage.clear();
    this.router.navigate(['login']);
  }

  public downloadPDF() {
    const pages = document.querySelectorAll('.page');
    const pdf = new jsPDF('p', 'mm', 'a4');

    let currentPage = 0;
    const processPage = () => {
      if (currentPage >= pages.length) {
        pdf.save('user manual.pdf');
        return;
      }

      html2canvas(pages[currentPage] as HTMLElement).then(canvas => {
        const imgData = canvas.toDataURL('image/png');
        const imgWidth = 190;
        const imgHeight = (canvas.height * imgWidth) / canvas.width;

        if (currentPage > 0) {
          pdf.addPage();
        }
        pdf.addImage(imgData, 'PNG', 10, 10, imgWidth, imgHeight);

        currentPage++;
        processPage();
      });
    };
    processPage();
  }

  getDefaultAvatar() {
    const gender = localStorage.getItem('gender');
    const defaultAvatar = gender === 'Male' ? 'default-female-avatar.png' : 'default-male-avatar.png';
    const defaultAvatarPath = `./assets/img/${defaultAvatar}`;

    const employeeId = Number(localStorage.getItem('employeeId'));
    console.log(`Fetching avatar image for employee ${employeeId}...`);

    this.employeeService.getAvatarImage(employeeId).subscribe(
      (response: any) => {
        const blob = new Blob([response], { type: 'image/jpeg' });
        const url = URL.createObjectURL(blob);
        this.imageData = this.sanitizer.bypassSecurityTrustUrl(url);
      },
      (error: HttpErrorResponse) => {
        console.log(`Error fetching avatar image for employee ${employeeId}: ${JSON.stringify(error)}`);
        if (error) {
          this.imageData = defaultAvatarPath;
        }
      }
    );
    console
  }
}

