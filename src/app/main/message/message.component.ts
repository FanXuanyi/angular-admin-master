import {Component, Input, OnInit} from '@angular/core';
import { MessageService } from '../../services/message.service';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss'],
  providers: [MessageService]
})
export class MessageComponent implements OnInit {

  title = 'Hello, Angular!';

  message: string;
  info: string[];

  deleteItem(index) {
    // console.log(index);
    this.info.splice(index, 1);
  }

  constructor(private messageService: MessageService) {
    this.message = messageService.message;
    this.info = messageService.info;
  }

  ngOnInit() {
  }

}
