import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-manager',
  templateUrl: './manager.component.html',
  styleUrls: ['./manager.component.css']
})
export class ManagerComponent implements OnInit {

  admin_name =  '';
  create_time = '';
  admin_power = '';
  admin_id = '';

  constructor() { }

  ngOnInit() {
  }

}
