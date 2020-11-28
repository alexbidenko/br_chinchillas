import { Component, OnInit } from '@angular/core';
import {ChinchillasService} from '../../chinchillas.service';

@Component({
  selector: 'app-adults',
  templateUrl: './adults.component.html',
  styleUrls: ['./adults.component.css']
})
export class AdultsComponent implements OnInit {

  url = 'http://52.14.34.221:7510';

  chinchillas: Chinchilla[] = [];

  constructor(
    private chinchillasService: ChinchillasService
  ) { }

  ngOnInit() {
    this.chinchillasService.getChinchillas().subscribe(chinchillas => {
      this.chinchillas = chinchillas.filter(chinchilla => chinchilla.status === 2 || chinchilla.status === 3);
    });
  }

}
