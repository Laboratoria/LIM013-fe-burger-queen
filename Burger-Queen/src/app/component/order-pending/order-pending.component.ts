import { Component, Input, OnInit } from '@angular/core';
import { FirestoreService } from '../../services/firestore/firestore.service';
//import { OrderDetailService } from '../../services/data/order-detail.servic

@Component({
  selector: 'app-order-pending',
  templateUrl: './order-pending.component.html',
  styleUrls: ['./order-pending.component.scss']
})
export class OrderPendingComponent implements OnInit {
 // @Input()childDataOrderPending:any;
//  orderPendingD :any;

  // 
  ordersPending:any = [];
  //Cronometro
  time: string;
  minutes: any = '00';
  seconds: any = '00';
  chronometerDisplay = document.querySelector(`[data-chronometer]`)
  chronometerCall


  //------------------Función de cronometro--------------------------//

  chronometer(event) {
    this.chronometerCall = setInterval(() => {
      this.seconds++;
      if (this.seconds < 10) this.seconds = '0' + this.seconds;
      if (this.seconds > 59) {
        this.seconds = '00'// reinicio
        this.minutes++
        if (this.minutes < 10) this.minutes = '0' + this.minutes
      }
      if (this.minutes > 59) {
        this.minutes = '00';
      }
    }, 1000);
    event.target.setAttribute('disabled', '');
  }

  // pause (){
  //   this.time=this.hours+ ':' + this.minutes+ ':'+this.seconds;
  //   console.log('tiempo'+this.time);
  //   //clearInterval(this.chronometerCall)
  //   // this.play.removeAttribute(`disabled`)
  // }


  //------------funcion para obtener data de bg-orders-----------------//
//   getOrdersPending() {
//     this.firestoreservice.getOrdersPending().subscribe((ordersSnapshot) => {
//       this.ordersPending = [];
//       ordersSnapshot.forEach((orderData: any) => {
//         this.ordersPending.push({ ...orderData.payload.doc.data() })
//       });
//     });
//  }

mostrar(){
  console.log(this.ordersPending);
}

  constructor(private firestoreservice: FirestoreService,) { 

  }

  ngOnInit(): void {
    this.firestoreservice.getOrders().subscribe((ordersSnapshot) => {
      this.ordersPending = [];
      ordersSnapshot.forEach((orderData: any) => {
        this.ordersPending.push({ ...orderData.payload.doc.data() })
      });
    });
  }

}
