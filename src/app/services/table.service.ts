import { Injectable } from '@angular/core';

@Injectable()
export class TableService {

  person: any[] = [{
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
    }, {
      id: 4,
      name: 'John',
      age: 20,
      sex: 'male',
      telphone: 11111111,
      grade: 'A'
    }, {
      id: 5,
      name: 'Jack',
      age: 17,
      sex: 'male',
      telphone: 12341111,
      grade: 'B'
    }, {
      id: 6,
      name: 'Lucy',
      age: 17,
      sex: 'female',
      telphone: 32145678,
      grade: 'A'
    }, {
    id: 7,
    name: 'John',
    age: 20,
    sex: 'male',
    telphone: 11111111,
    grade: 'A'
  }, {
    id: 8,
    name: 'Ben',
    age: 23,
    sex: 'male',
    telphone: 12341155,
    grade: 'B'
  }, {
    id: 9,
    name: 'Lucy',
    age: 17,
    sex: 'female',
    telphone: 32145678,
    grade: 'A'
  }, {
    id: 10,
    name: 'John',
    age: 20,
    sex: 'male',
    telphone: 11111111,
    grade: 'A'
  }, {
    id: 11,
    name: 'Jack',
    age: 25,
    sex: 'male',
    telphone: 12341678,
    grade: 'B'
  }, {
    id: 12,
    name: 'Lily',
    age: 21,
    sex: 'female',
    telphone: 12345678,
    grade: 'A'
  }];

  constructor() { }

}
