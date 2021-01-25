import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderDetailService {

// servicio para sincronizar nombre de cliente 
  private customerNameSource = new BehaviorSubject<string>('');
  currentCustomerName = this.customerNameSource.asObservable();

// servicio que sincroniza el cambio entre dos o mas componentes data por defecto orderDetail
  private orderDetailSource = new BehaviorSubject<any>([]);
  currentOrderDetail = this.orderDetailSource.asObservable();

// servicio para sincroniza Detalle de hamburguesa
private detailBurgerSource = new BehaviorSubject<any>([]);
currentDetailBurger = this.detailBurgerSource.asObservable();

  constructor() { }
// metodo que actualiza la data nombre de cliente sincronizado
changeCustomerName(customerName: string) {
  this.customerNameSource.next(customerName);
}

// metodo que actualiza la data sincronizada
  changeOrderDetail(orderDetail: any) {
    // if(this.orderDetailSource['_value'].length>0)
    //   {
    //     this.orderDetailSource['_value'].forEach((element,i) => {
    //       orderDetail.forEach((e) => {
    //         if (element.product === e.product) {
    //           this.orderDetailSource['_value'].splice(i,1);
    //         }
    //       });
    //     });   
    //     this.orderDetailSource.next(this.orderDetailSource['_value'].concat(orderDetail));
    //   }
    //   else{
        this.orderDetailSource.next(orderDetail);
        
  //     }
  //   console.log(this.orderDetailSource)
  }

  // metodo que actualiza la data nombre de cliente sincronizado
  changeDetailBurger(detailBurger: any) {
    this.detailBurgerSource.next(detailBurger);
  }
}
