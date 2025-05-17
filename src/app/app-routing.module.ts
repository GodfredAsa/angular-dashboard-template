import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { SalesDashboardComponent } from './pages/sales-dashboard/sales-dashboard.component';
import { DashboardTemplateComponent } from './components/dashboard-template/dashboard-template.component';

const routes: Routes = [
  {path: "", component: LoginComponent},
  {path: "dashboard", component: SalesDashboardComponent},
  {path: "template", component: DashboardTemplateComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
