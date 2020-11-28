import { Component, OnInit } from '@angular/core';
import {ChinchillasService} from '../../chinchillas.service';
import {ActivatedRoute, NavigationEnd, Router} from '@angular/router';

@Component({
  selector: 'app-babies',
  templateUrl: './babies.component.html',
  styleUrls: ['./babies.component.css']
})
export class BabiesComponent implements OnInit {

  url = 'http://52.14.34.221:7510';

  chinchillas: Chinchilla[] = [];
  filteredChinchillas: Chinchilla[] = [];
  year: number;
  years: number[] = [];

  constructor(
    private chinchillasService: ChinchillasService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.year = +this.route.snapshot.paramMap.get('year');
        this.filteredChinchillas =
          this.chinchillas.filter(chinchilla => new Date(chinchilla.birthday).getFullYear() === this.year);
      }
    });
  }

  ngOnInit() {
    for (let i = new Date().getFullYear(); i > 2015; i--) {
      this.years.push(i);
    }

    this.chinchillasService.getChinchillas().subscribe(chinchillas => {
      this.chinchillas = chinchillas.filter(chinchilla => chinchilla.status === 1 || chinchilla.status === 3);
      this.filteredChinchillas =
        this.chinchillas.filter(chinchilla => new Date(chinchilla.birthday).getFullYear() === this.year);
    });
  }

}
