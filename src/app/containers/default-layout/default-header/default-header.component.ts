import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ClassToggleService, HeaderComponent } from '@coreui/angular';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { EmployeeService } from 'src/app/services/cas-services/employee.service';
import { HttpErrorResponse } from '@angular/common/http';
import { DomSanitizer } from '@angular/platform-browser';

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

  @Input() sidebarId: string = "sidebar";

  public newMessages = new Array(4)
  public newTasks = new Array(5)
  public newNotifications = new Array(5)

  display: boolean = false;
  roles = JSON.parse(localStorage.getItem("allRoles"));

  public openDialog(config: any) {
    this.display = true;
  }

  constructor(private classToggler: ClassToggleService, private router: Router, private employeeService: EmployeeService, private sanitizer: DomSanitizer) {
    super();
  }

  ngOnInit() {
    this.user = localStorage.getItem('name');
    this.getDefaultAvatar();
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
    const defaultAvatar = gender === 'Male' ? 'default-male-avatar.png' : 'default-female-avatar.png';
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
  }
}

