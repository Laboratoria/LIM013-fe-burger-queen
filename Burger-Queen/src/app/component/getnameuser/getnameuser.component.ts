import { Component, OnInit, SimpleChange, SimpleChanges } from '@angular/core';
import { FirestoreService } from 'src/app/services/firestore/firestore.service';
import { OrderDetailService } from '../../services/data/order-detail.service';

@Component({
  selector: 'app-getnameuser',
  templateUrl: './getnameuser.component.html',
  styleUrls: ['./getnameuser.component.scss']
})
export class GetnameuserComponent implements OnInit {
  nameClient:string = '';
  customerName: string;
  dataOrderReady:any;
  quantityOrderReady:number;

  constructor(private data: OrderDetailService, private firestoreService: FirestoreService) { }
  // actualizar informacion de cliente
  sendCustomerName(){
    this.data.changeCustomerName(this.customerName.toUpperCase());
  }


ngOnInit(): void {
  this.data.currentCustomerName.subscribe(name => this.customerName = name)
  //traer data ready
  this.firestoreService.getOrders().subscribe((productsSnapshot) => {
    this.dataOrderReady = [];
    productsSnapshot.forEach((orderData: any) => {
      //  if(orderData.status==='Pendiente'){
        this.dataOrderReady.push({id: orderData.payload.doc.id, ...orderData.payload.doc.data()
        });
      //  }
    })
     // Solo Data con Categoria pendiente
    this.quantityOrderReady = this.dataOrderReady.filter((el:any)=>el.status==='Por Entregar').length;
  });
}
}
