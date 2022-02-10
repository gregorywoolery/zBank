import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { BottomSheetPage } from 'src/app/components/bottom-sheet/bottom-sheet.page';
import SwiperCore, { Pagination } from "swiper";

SwiperCore.use([Pagination]);
@Component({
  selector: 'app-cards-home',
  templateUrl: './cards-home.page.html',
  styleUrls: ['./cards-home.page.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CardsHomePage implements OnInit {

  constructor(public router: Router, private modalCtrl: ModalController) { }

  ngOnInit() {
    this.presentModal();
  }

  async presentModal() {
    const modal = await this.modalCtrl.create({
      component: BottomSheetPage,
      breakpoints: [0, 0.4, 1],
      initialBreakpoint: 0.5,
      cssClass: 'custom-bottom-sheet',
      backdropBreakpoint: 0.5
    });

    await modal.present();
  }

  openTransactions() {
    this.router.navigate(['bank-cards']);
  }

}
