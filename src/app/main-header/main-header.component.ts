import {Component, HostListener, OnInit} from '@angular/core';
import {ActivatedRoute, NavigationEnd, Router} from '@angular/router';

@Component({
  selector: 'app-main-header',
  templateUrl: './main-header.component.html',
  styleUrls: ['./main-header.component.css']
})
export class MainHeaderComponent implements OnInit {

  scrollYValue = 0;
  windowHeight = window.innerHeight;

  constructor() { }

  ngOnInit() {
  }

  @HostListener('window:scroll', [ ])
  onWindowScroll() {
    // tslint:disable-next-line:variable-name
    this.scrollYValue = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
  }

}
