import { Injectable } from '@angular/core';

@Injectable()
export class ChartService {

  data: any[]= [{
    name: '一号',
    age: 19
  }, {
    name: '二号',
    age: 22
  }, {
    name: 'test',
    age: 19
  }];

  constructor() { }

}
