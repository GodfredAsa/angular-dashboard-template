import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { NavElComponent } from './components/nav-el/nav-el.component';
import { LoginComponent } from './pages/login/login.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { SalesDashboardComponent } from './pages/sales-dashboard/sales-dashboard.component';
import { StatsCardComponent } from './components/stats-card/stats-card.component';
import { BarChartComponent } from './components/bar-chart/bar-chart.component';
import { DashboardTemplateComponent } from './components/dashboard-template/dashboard-template.component';

@NgModule({
  declarations: [
    AppComponent,
    SideBarComponent,
    NavElComponent,
    LoginComponent,
    SignUpComponent,
    SalesDashboardComponent,
    StatsCardComponent,
    BarChartComponent,
    DashboardTemplateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
