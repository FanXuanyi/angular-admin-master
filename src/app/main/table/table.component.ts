import { Component, OnInit } from '@angular/core';
import { TableService } from '../../services/table.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
  providers: [TableService]
})
export class TableComponent implements OnInit {

  person: any[];

  constructor(private tableService: TableService) {
    this.person = tableService.person;
  }

  ngOnInit() {
  }

  // 修改信息
  onModify(id) {
    console.log(id);
  }

  // 删除信息
  onDelete(id) {
    console.log(id);
  }

}
