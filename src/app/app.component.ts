import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { IconSetService } from '@coreui/icons-angular';
import { iconSubset } from './icons/icon-subset';
import { brandSet, flagSet, freeSet } from '@coreui/icons';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  template: '<router-outlet></router-outlet>',
})
export class AppComponent implements OnInit {
  title = 'COOP';

  constructor(
    private router: Router,
    private titleService: Title,
    private iconSetService: IconSetService
  ) {
    titleService.setTitle(this.title);
    iconSetService.icons = { ...iconSubset };
    iconSetService.icons = { ...freeSet, ...brandSet, ...flagSet };
    // If you need only a subset of icons:
    // iconSet.icons = { cifUs: flagSet.cifUs, cifBr: flagSet.cifBr };
    // If you need more icons from different sets:
    // iconSet.icons = { ...freeSet, ...brandSet, ...flagSet };
    // If you need more icons from different sets:
    //iconSetService.icons = { ...freeSet2, ...iconSetService.icons };
    // Add this line to import the icon named "cil-exclamation"
    //iconSetService.icons = { ...iconSetService.icons, 'cil-ban': freeSet.cilBan };
  }

  ngOnInit(): void {
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
    });
  }
}
