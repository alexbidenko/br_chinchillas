import {Component, Input, OnInit} from '@angular/core';
import {ChinchillasService} from '../chinchillas.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  url = 'http://52.14.34.221:7510';

  @Input() chinchilla?: Chinchilla;
  @Input() purchase?: Purchase;
  @Input() product?: Product;
  @Input() page: string;
  country: string;

  avatar: string;

  constructor(
    private chinchillasService: ChinchillasService
  ) { }

  ngOnInit() {
    if (this.page === 'adults') {
      this.avatar = this.chinchilla.adultAvatar;
    } else if (this.page === 'babies') {
      this.avatar = this.chinchilla.babyAvatar;
    } else if (this.page === 'products') {
      this.avatar = this.product.image;
    } else {
      this.avatar = !!this.chinchilla.adultAvatar ? this.chinchilla.adultAvatar : this.chinchilla.babyAvatar;
    }

    // @ts-ignore
    this.chinchillasService.getLocation().subscribe(location => this.country = location.country);
  }

}
