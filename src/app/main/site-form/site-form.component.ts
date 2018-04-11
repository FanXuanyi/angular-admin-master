import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-site-form',
  templateUrl: './site-form.component.html',
  styleUrls: ['./site-form.component.scss']
})
export class SiteFormComponent implements OnInit {

  public myForm: any = {
    username: '',
    password: '',
    confirmPass: ''
  };

  onSubmit(value) {
    console.log(value);
  }

  public anotherForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.createForm();
  }

  ngOnInit() {
  }

  // 创建表单元素
  createForm() {
    this.anotherForm = this.fb.group({
      personName: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(6)]],
      phone: ['', [Validators.required, this.phoneValidator]],
      pass: this.fb.group({
        pass1: [''],
        pass2: ['']
      }, {
        validator: this.passValidator
      })
    });
  }

  // 定义一个手机号码的校验器
  phoneValidator(control: FormControl): any {
    console.dir(control);
    // 获取到输入框的值
    const val = control.value;
    // 手机号码正则
    const mobieReg = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1}))+\d{8})$/;
    const result = mobieReg.test(val);
    return result ? null : { phone: { info: '手机号码格式不正确' } };
  }

  // 定义一个密码组的验证方法
  passValidator(controlGroup: FormGroup): any {
    // 获取密码输入框的值
    const pass1 = controlGroup.get('pass1').value as FormControl;
    const pass2 = controlGroup.get('pass2').value as FormControl;
    console.log('你输入的值：', pass1, pass2);
    const isEqule: boolean = (pass1 === pass2);
    return isEqule ? null : { passValidator: { info: '两次密码不一致'} };

  }

  // 提交表单元素
  postDate() {
    if (this.anotherForm.valid) {
      console.log((this.anotherForm.value));
    }
  }

}
