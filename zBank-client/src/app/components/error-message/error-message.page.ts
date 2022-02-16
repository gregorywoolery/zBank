import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-error-message',
  templateUrl: './error-message.page.html',
  styleUrls: ['./error-message.page.scss'],
})
export class ErrorMessagePage implements OnInit {
  @Input() message: string;
  @Input() field: AbstractControl;
  @Input() error: string;


  constructor() { }

  ngOnInit() { }

  shouldShowComponent() {
    if (this.field.touched && this.field.errors?.[this.error]) {
      return true;
    }
    return false;
  }

}
