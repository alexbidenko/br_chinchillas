import { Component, OnInit } from '@angular/core';
import {ChinchillasService} from '../chinchillas.service';
import {ActivatedRoute, NavigationEnd, Router} from '@angular/router';

@Component({
  selector: 'app-chinchilla',
  templateUrl: './chinchilla.component.html',
  styleUrls: ['./chinchilla.component.css']
})
export class ChinchillaComponent implements OnInit {

  url = 'http://52.14.34.221:7510';

  chinchilla: Chinchilla;
  id: string;
  purchase: Purchase;
  page: string;
  avatar: string;
  mother: Chinchilla;
  father: Chinchilla;
  country: string;

  constructor(
    private chinchillasService: ChinchillasService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.page = this.route.snapshot.paramMap.get('page');
        const id = +this.route.snapshot.paramMap.get('id');
        this.id = ('0000' + id).slice(-4);
        this.openChinchilla(id);
      }
    });
  }

  ngOnInit() {
  }

  openChinchilla(id: number) {
    this.page = 'adults';
    this.chinchillasService.getChinchillas().subscribe(chinchillas => {
      this.chinchilla = chinchillas.find(chinchilla => {
        return chinchilla.id === id;
      });

      if (this.chinchilla.mother > 0) {
        this.mother = chinchillas.find(chinchilla => {
          return chinchilla.id === this.chinchilla.mother;
        });
      } else {
        this.mother = null;
      }

      if (this.chinchilla.father > 0) {
        this.father = chinchillas.find(chinchilla => {
          return chinchilla.id === this.chinchilla.father;
        });
      } else {
        this.father = null;
      }

      this.onGetChinchilla();
    });
  }

  onGetChinchilla() {
    if (this.page === 'adults') {
      this.avatar = this.chinchilla.adultAvatar;
    } else if (this.page === 'babies') {
      this.avatar = this.chinchilla.babyAvatar;
    } else {
      this.avatar = !!this.chinchilla.adultAvatar ? this.chinchilla.adultAvatar : this.chinchilla.babyAvatar;
    }

    this.chinchillasService.getPurchases().subscribe(purchases => {
      this.purchase = purchases.find(purchase => {
        return purchase.chinchillaId === this.chinchilla.id;
      });
    });

    this.chinchillasService.getLocation().subscribe(location => {
      // @ts-ignore
      this.country = location.country;
    });

    // @ts-ignore
    jQuery('[data-fancybox="gallery-adults"]').fancybox({
      loop: true,
      buttons: [
        'zoom',
        'slideShow',
        'fullScreen',
        'thumbs',
        'close'
      ],
      protect: true
    });

    // @ts-ignore
    jQuery('[data-fancybox="gallery-babies"]').fancybox({
      loop: true,
      buttons: [
        'zoom',
        'slideShow',
        'fullScreen',
        'thumbs',
        'close'
      ],
      protect: true
    });
  }
}
