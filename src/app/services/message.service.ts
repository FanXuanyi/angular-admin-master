import { Injectable } from '@angular/core';

@Injectable()
export class MessageService {

  message = '该消息来自MessageService';
  info: string[] = [
    '第一条消息',
    '第二条消息',
    '第三条消息',
    '第四条消息',
    '第五条消息',
    '第六条消息'
  ];

  constructor() { }

}
