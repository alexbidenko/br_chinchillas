import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  achievements = [
    {
      description: 'Сириус сапфир 67% носитель фиолета ЗооПалитра 6.10.18 84б 1-е место в окрасе эксперт Мазуров В.',
      image: 'image_1.jpg'
    },
    {
      // tslint:disable-next-line:max-line-length
      description: 'Сэр Шерлок бежевый фиолет носитель сапфира Зоопалитра 6.04.19 81б 1-е место в окрасе эксп. Мазуров B., 88б 1-е место эксп. Rebecka Wolden.',
      image: 'image_2.jpg'
    },
    {
      description: 'Сэр Дональд белый бархат носитель фиолета CHINCHILLA-SHOW 4.01.19. 1-е место в окрасе 83,5б эксп. Мазуров В.',
      image: 'image_3.jpg'
    },
    {
      description: 'Даная бело-розовый Зоопалитра 6.04.19 82б 1-е место в окрасе эксперт Мазуров В.',
      image: 'image_4.jpg'
    },
    {
      description: 'Самурай меховой стандарт ЗооПалитра 17.03.18 39б 1-е место в окрасе лучший племенной малыш эксп. Мазуров В.',
      image: 'image_5.jpg'
    },
    {
      // tslint:disable-next-line:max-line-length
      description: 'Калифорния бежевый носитель фиолета и сапфира ЗооПалитра 6.10.18 81б 2-е место эксп Мазуров В., 74б(1) эксп. Claus Thygesen (Дания) оценка не зарегистрирована.',
      image: 'image_6.jpg'
    },
    {
      description: 'Леди Рианна белый бархатный фиолетовый эбони CHINCHILLA-SHOW 4.01.19 82б 2-е место эксп. Мазуров В.\n',
      image: 'image_7.jpg'
    },
    {
      description: 'Даллас бело-розовый CHINCHILLA-SHOW 4.01.19 83б 2-е место эксп. Мазуров В.',
      image: 'image_8.jpg'
    },
    {
      // tslint:disable-next-line:max-line-length
      description: 'Бахус меховой стандарт ЗооПалитра 07.10.17 40б 1-е место эксп Мазуров В., 57б 1-e место эксп. Thomas Juschak, лучший взрослый, BIS.\n',
      image: 'image_9.jpg'
    }
  ];

  constructor() { }

  ngOnInit() {
    // @ts-ignore
    jQuery('[data-fancybox="gallery-achievements"]').fancybox({
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
