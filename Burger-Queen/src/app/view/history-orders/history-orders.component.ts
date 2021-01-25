import { Component, OnInit } from '@angular/core';
import { FirestoreService } from 'src/app/services/firestore/firestore.service';

@Component({
  selector: 'app-history-orders',
  templateUrl: './history-orders.component.html',
  styleUrls: ['./history-orders.component.scss']
})
export class HistoryOrdersComponent implements OnInit {
  dataOrderDelivered:any;
  total:number;
  totalOrderAmount(){
    this.total=this.dataOrderDelivered.reduce((acum,el)=>acum+el.total,0)
  }
  constructor(private firestoreService: FirestoreService) { }

  ngOnInit(): void {
    //Traer SN-Orders
    this.firestoreService.getOrders().subscribe((productsSnapshot) => {
      this.dataOrderDelivered = [];
      productsSnapshot.forEach((orderData: any) => {
        //  if(orderData.status==='Pendiente'){
          this.dataOrderDelivered.push({id: orderData.payload.doc.id, ...orderData.payload.doc.data()
          });
        //  }
      })
       // Solo Data con Categoria pendiente
      this.dataOrderDelivered = this.dataOrderDelivered.filter((el:any)=>el.status==='Entregado');
      this.totalOrderAmount();
      
    });
  }
  

}
