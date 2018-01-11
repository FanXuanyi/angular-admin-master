/**
 * Created by FXY on 2018/1/2.
 */
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { MainComponent } from './main.component';
import { HomeComponent } from './home/home.component';
import { MessageComponent } from './message/message.component';
import { WidgetComponent } from './widget/widget.component';
import { TableComponent } from './table/table.component';
import { SiteFormComponent } from './site-form/site-form.component';
import { ChartComponent } from './chart/chart.component';

export const ROUTES: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      { path: 'home', component: HomeComponent },
      { path: 'message', component: MessageComponent },
      { path: 'widget', component: WidgetComponent },
      { path: 'table', component: TableComponent },
      { path: 'site-form', component: SiteFormComponent },
      { path: 'chart', component: ChartComponent }
    ]
  }
];

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    HomeComponent,
    MessageComponent,
    TableComponent,
    SiteFormComponent,
    ChartComponent,
    WidgetComponent
  ],
  imports: [
    RouterModule.forChild(ROUTES)
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    SidebarComponent
  ]
})
export class MainModule {
  value: Date;
}
