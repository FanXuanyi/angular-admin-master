import { Component, OnInit } from '@angular/core';
import { NgbCalendarGregorian } from '@ng-bootstrap/ng-bootstrap/datepicker/ngb-calendar';
import { NgbDate } from '@ng-bootstrap/ng-bootstrap/datepicker/ngb-date';

@Component({
  selector: 'app-widget',
  templateUrl: './widget.component.html',
  styleUrls: ['./widget.component.css']
})
export class WidgetComponent implements OnInit {

  chooseDate = new Date;
  chooseYear = this.chooseDate.getFullYear();
  chooseMonth = this.chooseDate.getMonth() + 1;
  maxDate = new NgbCalendarGregorian();
  checkDate31 = new NgbDate(this.chooseYear, this.chooseMonth, 31);
  checkDate30 = new NgbDate(this.chooseYear, this.chooseMonth, 30);
  checkDate29 = new NgbDate(this.chooseYear, this.chooseMonth, 29);
  maxDay: number;
  day: any[] = [];
  date: any;
  today: string[] = [];

  constructor() {
    this.onloadCalendar();
  }

  ngOnInit() {
  }

  changeYearMonth(year, month) {
    this.chooseYear += year;
    this.chooseMonth += month;
    if (this.chooseMonth > 12) {
      this.chooseYear++;
      this.chooseMonth -= 12;
    }
    if (this.chooseMonth < 1) {
      this.chooseYear--;
      this.chooseMonth += 12;
    }
    this.onloadCalendar();
  }

  onloadCalendar() {
    // 获取某个月最大的天数
    this.checkDate31 = new NgbDate(this.chooseYear, this.chooseMonth, 31);
    this.checkDate30 = new NgbDate(this.chooseYear, this.chooseMonth, 30);
    this.checkDate29 = new NgbDate(this.chooseYear, this.chooseMonth, 29);
    if (this.maxDate.isValid(this.checkDate31)) {
      this.maxDay = 31;
    } else {
      if (this.maxDate.isValid(this.checkDate30)) {
        this.maxDay = 30;
      } else {
        if (this.maxDate.isValid(this.checkDate29)) {
          this.maxDay = 29;
        } else {
          this.maxDay = 28;
        }
      }
    }

    // 获取某个月的第一天是星期几
    this.chooseDate.setFullYear(this.chooseYear, this.chooseMonth - 1, 1);
    this.chooseDate.setDate(1);

    // 制作二维数组存放日期
    let i = 1;
    let days = this.chooseDate.getDay();
    this.day = [];
    while (i <= this.maxDay) {
      this.day[days] = [i];
      days++;
      i++;
    }

    // 标注当天日期
    this.date = new Date;
    for (let i = 0; i < 42; i++) {
      if (this.day[i]) {
        this.today[i] = 'slip'; // slip表示鼠标移动到某一天的动画效果
      }
    }
    if (this.chooseYear === parseInt(this.date.getFullYear()) && this.chooseMonth === parseInt(this.date.getMonth() + 1)) {
      const a = Math.floor((this.date.getDate() / 7));
      const b = this.date.getDate() % 7;
      this.today[a * 7 + b] = 'hightlight'; // hightlight表示高亮显示当天
    }

  }

}
