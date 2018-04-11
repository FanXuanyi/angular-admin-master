import { Component, OnInit } from '@angular/core';
import { TableService } from '../../services/table.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  providers: [TableService]
})
export class TableComponent implements OnInit {

  person: any[];
  totalNum: number; // 总数据条数
  pageSize: number; // 每页数据条数
  pageData: number; // 每页数据
  totalPage: number; // 总页数
  curPage: number; // 当前页码

  constructor(private tableService: TableService) {
    this.person = tableService.person;
    this.totalNum = this.person.length;
    this.pageSize = 5;
    this.pageData = this.pageSize;
    this.totalPage = Math.floor((this.totalNum - 1) / this.pageData) + 1;
    this.curPage = 1;
  }

  // 修改信息
  onModify(id) {
    console.log(id);
  }

  // 删除信息
  onDelete(id) {
    console.log(id);
  }

  getPageData(pageNo) {
    const self = this;
    self.curPage = pageNo;
    this.pageSize = this.pageData * pageNo;
  }

  ngOnInit() { }

}
