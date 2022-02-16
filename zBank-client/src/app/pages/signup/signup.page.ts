import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {

  showRegSignUp: boolean = false;

  constructor(private router: Router) { }


  ngOnInit() {
  }

  showFormRegSignup() {
    this.showRegSignUp = !this.showRegSignUp;
  }

  submitForm() {
    this.router.navigateByUrl('/cards-home')
  }
}
