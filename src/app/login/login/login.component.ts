import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { LoginService } from '../../shared/services';

@Component({
  selector: 'jup-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private router: Router,
              private loginService: LoginService) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: [''],
      password: ['']
    });
  }

  login() {
    const values = this.loginForm.value;

    // TODO: use LoginService
    this.loginService.login(values.email, values.password).subscribe(res => {
      console.log(res);

      this.router.navigate(['dashboard']);
    });

  }

}
