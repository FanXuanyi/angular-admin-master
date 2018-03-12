import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.loginForm = this.formBuilder.group({
      userName: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(6)]],
      password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(16)]]
    });
  }

  ngOnInit() {
  }

}
