import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';

@Component({
    templateUrl: 'build/pages/board/board.html'
})
export class BoardPage {
    imgs: string[];
    items: Array<{title: string, preview: string, img: string}>;
    constructor(private navCtrl: NavController) {
  
    this.imgs = ['img/1.jpg', 'img/2.jpg'];

    this.items = [];
    for(let i = 1; i < 11; i++) {
      this.items.push({
        title: '게시글 ' + i,
        preview: '게시글 #' + i +'번 입니다.',
        img: this.imgs[Math.floor(Math.random() * this.imgs.length)]
      });
    }
  }

  itemTapped(item) {
    alert(item.title);
  }

}