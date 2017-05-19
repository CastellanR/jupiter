import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AccountService } from '../../shared/services';

@Component({
  selector: 'jup-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private router: Router,
              private accountService: AccountService) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: [''],
      password: ['']
    });

    if(this.accountService.token) {
      this.router.navigate(['dashboard']);
    }
  }

  login() {
    const values = this.loginForm.value;

    this.accountService.login(values.email, values.password).subscribe(res => {
      console.log(res);

      if(res.authToken) {
        this.router.navigate(['dashboard']);
      }
    });

  }

}
