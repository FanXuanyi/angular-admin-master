/**
 * Created by FXY on 2018/1/2.
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { MainComponent } from './main.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MessageComponent } from './message/message.component';
import { WidgetComponent } from './widget/widget.component';
import { TableComponent } from './table/table.component';
import { SiteFormComponent } from './site-form/site-form.component';
import { ChartComponent } from './chart/chart.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PageComponent } from './table/page/page.component';
import { ManagerComponent } from './manager/manager.component';
import { EditComponent } from './edit/edit.component';
import { SettingComponent } from './setting/setting.component';

export const ROUTES: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      { path: 'home', component: HomeComponent },
      { path: 'dashboard', component: DashboardComponent},
      { path: 'message', component: MessageComponent },
      { path: 'widget', component: WidgetComponent },
      { path: 'table', component: TableComponent },
      { path: 'site-form', component: SiteFormComponent },
      { path: 'chart', component: ChartComponent },
      { path: 'manager', component: ManagerComponent },
      { path: 'edit', component: EditComponent },
      { path: 'setting', component: SettingComponent }
    ]
  }
];

@NgModule({
  declarations: [
    MainComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    HomeComponent,
    DashboardComponent,
    MessageComponent,
    TableComponent,
    SiteFormComponent,
    ChartComponent,
    WidgetComponent,
    PageComponent,
    ManagerComponent,
    EditComponent,
    SettingComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES),
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    SidebarComponent
  ]
})
export class MainModule { }
