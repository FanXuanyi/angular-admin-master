import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  showMenu= false;

  constructor() { }

  ngOnInit() {
  }

  isShowMenu() {
    this.showMenu = !this.showMenu;
  }

}
