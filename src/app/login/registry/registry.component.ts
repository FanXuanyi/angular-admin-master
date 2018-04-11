import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-registry',
  templateUrl: './registry.component.html',
  styleUrls: ['./registry.component.scss']
})
export class RegistryComponent implements OnInit {

  regForm: FormGroup;
  code: '';
  value: '';

  constructor(private formBuilder: FormBuilder) {

    this.createCode();

    this.regForm = this.formBuilder.group({
      userName: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(6)]],
      pass: this.formBuilder.group({
        pass1: [''],
        pass2: ['']
      }, {
        validator: this.passValidator
      }),
      verification: this.formBuilder.group({
        inputCode: [''],
        verificationCode: ['']
      }, {
        validator: this.codeValidator
      })
    });
  }

  passValidator(controlGroup: FormGroup): any {
    // 获取密码输入框的值
    const pass1 = controlGroup.get('pass1').value as FormControl;
    const pass2 = controlGroup.get('pass2').value as FormControl;
    // console.log('你输入的值：', pass1, pass2);
    const isEqule: boolean = (pass1 === pass2);
    return isEqule ? null : { passValidator: { info: '两次密码不一致'} };
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
  }

  ngOnInit() {
    // this.createCode();
  }

}
