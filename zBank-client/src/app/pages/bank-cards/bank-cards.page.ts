import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bank-cards',
  templateUrl: './bank-cards.page.html',
  styleUrls: ['./bank-cards.page.scss'],
})
export class BankCardsPage implements OnInit {

  constructor(public router: Router) { }

  ngOnInit() {
  }

  goHome() {
    this.router.navigate(['cards-home']);
  }

}
