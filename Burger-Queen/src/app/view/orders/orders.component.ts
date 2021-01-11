import { Component, OnInit } from '@angular/core';
import { FirestoreService } from 'src/app/services/firestore/firestore.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {
  dataOrder= [];
  constructor(private firestoreService: FirestoreService) { }

  ngOnInit(): void {
     //Traer SN-Orders
    this.firestoreService.getOrders().subscribe((productsSnapshot) => {
      this.dataOrder = [];
      productsSnapshot.forEach((orderData: any) => {
        //  if(orderData.status==='Pendiente'){
          this.dataOrder.push({id: orderData.payload.doc.id, ...orderData.payload.doc.data()
          });
        //  }
      })
       // Solo Data con Categoria pendiente
      this.dataOrder = this.dataOrder.filter((el:any)=>el.status==='Pendiente');
    });
  }

}
