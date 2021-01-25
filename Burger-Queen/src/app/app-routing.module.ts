import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HistoryOrdersComponent } from './view/history-orders/history-orders.component';
import { HomeComponent } from './view/home/home.component';
import { OrderDetailComponent } from './view/order-detail/order-detail.component';
import { OrdersComponent } from './view/orders/orders.component';
import { ReadyOrdersComponent } from './view/ready-orders/ready-orders.component';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'home', component: HomeComponent},
  {path:'orderDetail',component:OrderDetailComponent},
  {path:'orders', component:OrdersComponent},
  {path:'readyOrders', component: ReadyOrdersComponent},
  {path:'historyOrders', component:HistoryOrdersComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
