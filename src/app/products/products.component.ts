import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products: Product[] = [
    {
      title: 'Расческа для шиншилл',
      image: 'image_1.jpg',
      description: 'Имеет очень тонкие зубья, позволяющие расчесать даже очень плотный мех. Материал яблоня, металл.',
      cost: 1000
    },
    {
      title: 'Полнорационный корм для шиншилл',
      image: 'image_2.jpg',
      description: 'Состав: гранулы, зерновые, сушенные ягоды, фрукты, травы, корнеплоды. Состав гранулята:\n' +
        'Сырой протеин 17%; \n' +
        'Жир 2%;\n' +
        'Клетчатка 13,5%;\n' +
        'Кальций 1,1%;\n' +
        'Фосфор 0,6% \n' +
        'Лизин 0,8%;\n' +
        'Метионин 0,6%;\n' +
        'Вмтамин А 11000МЕ/кг;\n' +
        'Витамин Д 170МЕ/кг;\n' +
        'Витамин Е 50мг/кг\n' +
        // tslint:disable-next-line:max-line-length
        'Состав: зернопродукты, жом свекловичный, шроты,травяная мука, зерновые, известняк, масло растительное стабилизированное, соль, аминокислоты, фосфаты, макроэлементы, робенидина гидрохлорид, пробиотик, закрепитель гранулы, антиоксидант.',
      cost: 160
    }
  ];
  openedProduct = this.products[1];

  constructor() { }

  ngOnInit() {
  }

  openProduct(i: number) {
    this.openedProduct = this.products[i];
    // @ts-ignore
    jQuery.fancybox.open(jQuery('#openedProductModal'));
  }
}
