import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-site-form',
  templateUrl: './site-form.component.html',
  styleUrls: ['./site-form.component.css']
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
      phone: ['', [Validators.required, Validators.minLength(11), Validators.maxLength(11)]],
      pass: this.fb.group({
        pass1: [''],
        pass2: ['']
      })
    });
  }

  // 提交表单元素
  postDate() {
    if (this.anotherForm.valid) {
      console.log((this.anotherForm.value));
    }
  }

}
