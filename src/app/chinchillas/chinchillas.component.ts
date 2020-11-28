import {AfterViewInit, Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-chinchillas',
  templateUrl: './chinchillas.component.html',
  styleUrls: ['./chinchillas.component.css']
})
export class ChinchillasComponent implements OnInit, AfterViewInit {

  year: number;
  isAdultsActive = false;
  isBabiesActive = false;

  constructor() { }

  ngOnInit() {
    this.year = new Date().getFullYear();
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.isAdultsActive = true;
    }, 200);
    setTimeout(() => {
      this.isAdultsActive = false;
    }, 800);
    setTimeout(() => {
      this.isBabiesActive = true;
    }, 1000);
    setTimeout(() => {
      this.isBabiesActive = false;
    }, 1600);
  }
}
