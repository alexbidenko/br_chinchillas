import { Component, OnInit } from '@angular/core';
import {ChinchillasService} from '../chinchillas.service';
import {ActivatedRoute, NavigationEnd, Router} from '@angular/router';

@Component({
  selector: 'app-purchase',
  templateUrl: './purchase.component.html',
  styleUrls: ['./purchase.component.css']
})
export class PurchaseComponent implements OnInit {

  url = 'http://52.14.34.221:7510';

  buyingChinchillas: Array<{
    chinchilla: Chinchilla,
    purchase: Purchase
  }> = [];
  filteredChinchillas: Array<{
    chinchilla: Chinchilla,
    purchase: Purchase
  }> = [];
  section: string;

  constructor(
    private chinchillasService: ChinchillasService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.section = this.route.snapshot.paramMap.get('section');
        this.filter();
      }
    });
  }

  ngOnInit() {
    this.chinchillasService.getPurchases().subscribe(purchases => {
      this.chinchillasService.getChinchillas().subscribe(chinchillas => {
        purchases.forEach(purchase => {
          this.buyingChinchillas.push({
            chinchilla: chinchillas.find(chinchilla => {
              return chinchilla.id === purchase.chinchillaId;
            }),
            purchase
          });
        });
        this.filter();
      });
    });
  }

  filter() {
    this.filteredChinchillas = this.buyingChinchillas.filter(chinchilla => {
      if (this.section === 'sale' && chinchilla.purchase.status === 1) {
        return true;
      } else if (this.section === 'reserve' && chinchilla.purchase.status === 2) {
        return true;
      } else {
        return this.section === 'sold' && chinchilla.purchase.status === 3;
      }
    });
  }
}
