import { Component, OnInit } from '@angular/core';
import { ChartService } from '../../services/chart.service';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss'],
  providers: [ChartService]
})
export class ChartComponent implements OnInit {
  data: any[];
  x: any[]; // X轴
  y: any[]; // Y轴
  xtext: any[]; // X轴TEXT
  color: any[] = ['gray', 'pink', 'red', 'blue', 'yellow', 'green', '#fff'];
  chart: any;
  newData: any[] = [];
  index = 0;

  constructor(public chartService: ChartService) {

    this.data = chartService.data;
    // console.log(this.data);
    for (const item of this.data) {
      // console.log(item);
      item.name = item.name;
      item.y = item.age; // 给Y轴赋值
      this.xtext = item.name; // 给X轴TEXT赋值
      item.color = this.color[this.index++];
      // console.log(item);
      this.newData.push(item);
      // console.log(this.newData);
    }
    // this.chart.series[0].setData(this.data); // 数据填充到highcharts上面
  }

  ngOnInit() {
    this.chart = new Highcharts.Chart({
      chart: {
        renderTo: 'dataChart',
        type: 'column' // 显示类型 柱形
      },
      title: {
        text: '年龄分布图' // 图表的标题
      },
      xAxis: {
        categories: this.xtext
      },
      yAxis: {
        title: {
          text: '年龄' // Y轴的名称
        },
      },
      series: [{
        name: '姓名'
      }]
    });

    this.chart.series[0].setData(this.newData); // 数据填充到highcharts上面

    // 数据固定
    Highcharts.chart('barChart', {
      chart: {
        type: 'bar'
      },
      title: {
        text: '第一个图表'
      },
      xAxis: {
        categories: ['苹果', '香蕉', '橙子']
      },
      yAxis: {
        title: {
          text: '吃水果个数'
        }
      },
      series: [{
        name: '小明',
        data: [1, 0, 4]
      }, {
        name: '小红',
        data: [5, 7, 3]
      }],
      credits: {
        enabled: false
      }
    });
    Highcharts.chart('lineChart', {
      chart: {
        type: 'line'
      },
      title: {
        text: '阶梯型直线图'
      },
      xAxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
      },
      series: [{
        data: [1, 2, 3, 4, null, 6, 7, null, 9],
        step: 'right',
        name: 'Right'
      }, {
        data: [5, 6, 7, 8, null, 10, 11, null, 13],
        step: 'center',
        name: 'Center'
      }, {
        data: [9, 10, 11, 12, null, 14, 15, null, 17],
        step: 'left',
        name: 'Left'
      }]
    });
    Highcharts.chart('splineChart', {
      chart: {
        type: 'spline'
      },
      title: {
        text: '曲线图'
      },
      xAxis: {
        categories: ['1', '2', '3', '4', '5']
      },
      series: [{
        data: [3, 5, 10, 6, 15]
      }]
    });
    Highcharts.chart('areaChart', {
      chart: {
        type: 'area'
      },
      title: {
        text: '面积图'
      },
      xAxis: {
        categories: ['1', '2', '3', '4', '5']
      },
      series: [{
        data: [3, 5, 10, 6, 15],
        color: 'green'
      }, {
        data: [5, 10, 7, 3, 8]
      }]
    });
    Highcharts.chart('pieChart', {
      chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false
      },
      title: {
        text: '饼图'
      },
      tooltip: {
        headerFormat: '{series.name}<br>',
        pointFormat: '{point.name}: <b>{point.percentage:.1f}%</b>'
      },
      plotOptions: {
        pie: {
          allowPonitSelect: true,
          cursor: 'pointer',
          dataLabels: {
            enabled: true,
            format: '<b>{point.name}</b>: {point.percentage:.1f}',
            style: {
              color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
            }
          }
        }
      },
      series: [{
        type: 'pie',
        name: '占比',
        data: [
          ['A', 45.0],
          ['B', 26.8],
          {
            name: 'C',
            y: 12.8,
            sliced: true,
            selected: true
          },
          ['D', 8.5],
          ['E', 6.2],
          ['其他', 0.7]
        ]
      }]
    });
    // Highcharts.char('columnChart', {
    //   chart: {
    //     type: 'column'
    //   },
    //   title: {
    //     text: '柱状图'
    //   },
    //   subtitle: {
    //     text: '这是一个基础柱状图'
    //   },
    //   xAxis: {
    //     categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    //     crosshair: true
    //   },
    //   yAxis: {
    //     min: 0,
    //     title: {
    //       text: '数量'
    //     }
    //   },
    //   tooltip: {
    //     headerFormat: '<span style="font-size:10px;">{point.key}</span><table>',
    //     pointFormat: '<tr><td style="color:{series.color};padding:0;">{series.name}: </td>' + '<td style="padding:0;"><b>{point.y:.1f} mm</b></td></tr>',
    //     footFormat: '</table>',
    //     shared: true,
    //     useHTML: true
    //   },
    //   plotOptions: {
    //     column: {
    //       borderWidth: 0
    //     }
    //   },
    //   series: [{
    //     name: 'A',
    //     data: [40, 70, 106, 129, 145, 176, 135, 148, 216, 196, 98, 54]
    //   }, {
    //     name: 'B',
    //     data: [84, 78, 98, 93, 106, 85, 105, 104, 91, 54, 107, 93]
    //   }]
    // });
  }

}
