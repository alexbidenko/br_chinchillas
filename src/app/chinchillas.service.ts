import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChinchillasService {

  url = 'http://52.14.34.221:7510';

  chinchillas: Observable<Array<Chinchilla>>;
  purchases: Observable<Array<Purchase>>;
  location: Observable<object>;

  constructor(
    private httpClient: HttpClient
  ) { }

  getChinchillas(): Observable<Array<Chinchilla>> {
    if (!this.chinchillas) {
      const url = this.url + '/chinchillas/all';
      // const url = 'https://br-chinchillas.ru/back/chinchillas/all.php';
      this.chinchillas = this.httpClient.get<Chinchilla[]>(url);
    }
    return this.chinchillas;
  }

  getPurchases(): Observable<Array<Purchase>> {
    if (!this.purchases) {
      const url = this.url + '/purchases/get';
      // const url = 'https://br-chinchillas.ru/back/purchases/get.php';
      this.purchases = this.httpClient.get<Purchase[]>(url);
    }
    return this.purchases;
  }

  getLocation(): Observable<object> {
    if (!this.location) {
      this.location = this.httpClient.get('https://ipinfo.io');
    }
    return this.location;
  }
}
