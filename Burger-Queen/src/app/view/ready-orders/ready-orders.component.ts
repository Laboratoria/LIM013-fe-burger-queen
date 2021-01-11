import { Component, OnInit } from '@angular/core';
import { FirestoreService } from 'src/app/services/firestore/firestore.service';

@Component({
  selector: 'app-ready-orders',
  templateUrl: './ready-orders.component.html',
  styleUrls: ['./ready-orders.component.scss']
})
export class ReadyOrdersComponent implements OnInit {
  dataOrderReady=[]
  constructor(private firestoreService: FirestoreService) { }

  ngOnInit(): void {
     //Traer SN-Orders
     this.firestoreService.getOrders().subscribe((productsSnapshot) => {
      this.dataOrderReady = [];
      productsSnapshot.forEach((orderData: any) => {
        //  if(orderData.status==='Pendiente'){
          this.dataOrderReady.push({id: orderData.payload.doc.id, ...orderData.payload.doc.data()
          });
        //  }
      })
       // Solo Data con Categoria pendiente
      this.dataOrderReady = this.dataOrderReady.filter((el:any)=>el.status==='Por Entregar');
    });

  }

}
