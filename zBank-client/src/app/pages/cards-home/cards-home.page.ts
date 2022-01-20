import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import SwiperCore, { Pagination } from "swiper";

SwiperCore.use([Pagination]);
@Component({
  selector: 'app-cards-home',
  templateUrl: './cards-home.page.html',
  styleUrls: ['./cards-home.page.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CardsHomePage implements OnInit {

  constructor(public router: Router) { }

  ngOnInit() {
  }

  openTransactions() {
    this.router.navigate(['bank-cards']);
  }

}
