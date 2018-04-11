import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators, FormControl} from '@angular/forms';

@Component({
  selector: 'app-login-in',
  templateUrl: './login-in.component.html',
  styleUrls: ['./login-in.component.scss']
})
export class LoginInComponent implements OnInit {

  loginForm: FormGroup;
  code: '';
  value: '';

  constructor(private formBuilder: FormBuilder) {
    // console.log('constructor');

    this.createCode();

    this.loginForm = this.formBuilder.group({
      userName: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(6)]],
      password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(16)]],
      verification: this.formBuilder.group({
        inputCode: [''],
        verificationCode: ['']
      }, {
        validator: this.codeValidator
      })
    });
  }

  // 验证码校验
  codeValidator(controlGroup: FormGroup): any {
    const inputCode = controlGroup.get('inputCode').value.toLowerCase() as FormControl;
    const verificationCode = controlGroup.get('verificationCode').value.toLowerCase() as FormControl;
    // console.log(inputCode);
    // console.log(verificationCode); // 没有获取到验证码的值
    const isEqule: boolean = (inputCode === verificationCode);
    return isEqule ? null : { codeValidator: { info: '验证码错误'} };
  }

  // 创建一个随机验证码
  createCode() {
    this.code = '';
    const codeLength = 4; // 验证码长度，此处我设置为4
    // 用一个数组存储验证码所有字符
    const random = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0,
      'A', 'B', 'C', 'D', 'E', 'F', 'G',
      'H', 'I', 'J', 'K', 'L', 'M', 'N',
      'O', 'P', 'Q', 'R', 'S', 'T',
      'U', 'V', 'W', 'X', 'Y', 'Z'];
    for (let i = 0; i < codeLength; i++) {
      const index = Math.floor(Math.random() * random.length); // 设置随机数范围
      this.code += random[index]; // 将每次获取的随机字符拼接
    }
    this.value = this.code;
    // console.log(this.value);
  }

  ngOnInit() {
    // console.log('ngOnInit');
    // this.createCode();
  }

}
