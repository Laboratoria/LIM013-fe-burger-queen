import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './component/footer/footer.component';
import { NavBarComponent } from './component/nav-bar/nav-bar.component';
import { ItemMenuComponent } from './component/item-menu/item-menu.component';
import { ResumenItemComponent } from './component/resumen-item/resumen-item.component';
import { MenuViewComponent } from './view/menu-view/menu-view.component';
import { MenuComponent } from './view/menu/menu.component';
import { OrdersViewComponent } from './view/orders-view/orders-view.component';
import { ReadyordersViewComponent } from './view/readyorders-view/readyorders-view.component';
import { HistoryOrdersComponent } from './view/history-orders/history-orders.component';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavBarComponent,
    ItemMenuComponent,
    ResumenItemComponent,
    MenuViewComponent,
    MenuComponent,
    OrdersViewComponent,
    ReadyordersViewComponent,
    HistoryOrdersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
