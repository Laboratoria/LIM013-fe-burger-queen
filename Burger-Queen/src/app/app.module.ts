import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './component/footer/footer.component';
import { NavBarComponent } from './component/nav-bar/nav-bar.component';
import { ItemMenuComponent } from './component/item-menu/item-menu.component';
import { ResumenItemComponent } from './component/resumen-item/resumen-item.component';
import { HistoryOrdersComponent } from './view/history-orders/history-orders.component';
import { HomeComponent } from './view/home/home.component';
import { ReadyOrdersComponent } from './view/ready-orders/ready-orders.component';
import { OrdersComponent } from './view/orders/orders.component';
import { OrderDetailComponent } from './view/order-detail/order-detail.component';
import { ContainerProductComponent } from './component/container-product/container-product.component';
import { GetnameuserComponent } from './component/getnameuser/getnameuser.component';
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { AngularFirestore } from '@angular/fire/firestore';
import { ItemOrderComponent } from './component/item-order/item-order.component';
import { ItemHistoryComponent } from './component/item-history/item-history.component';
import { ModalDetailHistoryComponent } from './component/modal-detail-history/modal-detail-history.component';
import { ModalDetailBurgerComponent } from './component/modal-detail-burger/modal-detail-burger.component';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavBarComponent,
    ItemMenuComponent,
    ResumenItemComponent,
    HistoryOrdersComponent,
    HomeComponent,
    ReadyOrdersComponent,
    OrdersComponent,
    OrderDetailComponent,
    ContainerProductComponent,
    GetnameuserComponent,
    ItemOrderComponent,
    ItemHistoryComponent,
    ModalDetailHistoryComponent,
    ModalDetailBurgerComponent
  ],
  imports: [
    SweetAlert2Module.forRoot(),
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
  ],
  providers: [AngularFirestore],
  bootstrap: [AppComponent]
})
export class AppModule { }
