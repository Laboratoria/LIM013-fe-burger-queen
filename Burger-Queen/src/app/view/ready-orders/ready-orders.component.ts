import { Component, OnInit } from '@angular/core';
import { FirestoreService } from 'src/app/services/firestore/firestore.service';

@Component({
  selector: 'app-ready-orders',
  templateUrl: './ready-orders.component.html',
  styleUrls: ['./ready-orders.component.scss']
})
export class ReadyOrdersComponent implements OnInit {
  dataOrder=[]
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
      this.dataOrder = this.dataOrder.filter((el:any)=>el.status==='Por Entregar');
    });

  }

}
