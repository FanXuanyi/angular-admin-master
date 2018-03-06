import { Injectable } from '@angular/core';

@Injectable()
export class TableService {

  person: any[] = [
    {
      id: 1,
      name: 'John',
      age: 20,
      sex: 'male',
      telphone: 11111111,
      grade: 'A'
    }, {
      id: 2,
      name: 'Jack',
      age: 17,
      sex: 'male',
      telphone: 12341111,
      grade: 'B'
    }, {
      id: 3,
      name: 'Lucy',
      age: 17,
      sex: 'female',
      telphone: 32145678,
      grade: 'A'
    }
  ];

  constructor() { }

}
