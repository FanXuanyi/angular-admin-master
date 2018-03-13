import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-registry',
  templateUrl: './registry.component.html',
  styleUrls: ['./registry.component.css']
})
export class RegistryComponent implements OnInit {

  regForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.regForm = this.formBuilder.group({
      userName: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(6)]],
      pass: this.formBuilder.group({
        pass1: [''],
        pass2: ['']
      }, {
        validator: this.passValidator
      })
    });
  }

  passValidator(controlGroup: FormGroup): any {
    // 获取密码输入框的值
    const pass1 = controlGroup.get('pass1').value as FormControl;
    const pass2 = controlGroup.get('pass2').value as FormControl;
    console.log('你输入的值：', pass1, pass2);
    const isEqule: boolean = (pass1 === pass2);
    return isEqule ? null : { passValidator: { info: '两次密码不一致'} };
  }

  ngOnInit() {
  }

}
