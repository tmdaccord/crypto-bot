import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-password-reset',
  templateUrl: './password-reset.component.html',
  styleUrls: ['./password-reset.component.scss']
})
export class PasswordResetComponent implements OnInit {
  passwordResetForm: FormGroup;
  email = new FormControl('', [Validators.required, Validators.email]);

  constructor() {
  }

  ngOnInit() {
    this.initForm();
  }


  onSubmit() {
    console.log('Subbbbbbbbbb');
    // TODO
  }

  getEmailErrorMessage() {
    return this.email.hasError('required') ? 'You must enter a value' :
      this.email.hasError('email') ? 'Not a valid email' :
        '';
  }

  private initForm() {
    this.passwordResetForm = new FormGroup({
      email: this.email
    });
  }
}
