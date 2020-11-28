import {Component} from '@angular/core';
import {NavigationEnd, NavigationStart, Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'BRsite';
  oldPage: string;

  constructor(
    private router: Router
  ) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        this.oldPage = this.router.url.split('/')[1];
      } else if (event instanceof NavigationEnd) {
        if (!!this.oldPage && this.oldPage !== this.router.url.split('/')[1]) {
          document.querySelector('body').style.overflowY = 'auto';
          // @ts-ignore
          jQuery('html').animate({scrollTop: 0}, 1000);
        }
      }
    });
  }
}
