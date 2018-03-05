import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-site-form',
  templateUrl: './site-form.component.html',
  styleUrls: ['./site-form.component.css']
})
export class SiteFormComponent implements OnInit {

  @Input()
  username = 'lollipop';

  onSubmit(value) {
    console.log(value);
  }

  constructor() { }

  ngOnInit() {
  }

}
