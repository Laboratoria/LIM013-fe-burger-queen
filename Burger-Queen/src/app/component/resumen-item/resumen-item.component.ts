import { Component, Input, OnInit, SimpleChange,  } from '@angular/core';
import { ItemMenuComponent } from '../item-menu/item-menu.component';
import {FirestoreService} from '../../services/firestore/firestore.service';
import { OrderDetailService } from '../../services/data/order-detail.service';


@Component({
  selector: 'app-resumen-item',
  templateUrl: './resumen-item.component.html',
  styleUrls: ['./resumen-item.component.scss']
})

export class ResumenItemComponent {
 @Input() sendStatusButton:string;
 public ordersPedido=[];
 // numero de orden
 numOrder:any=0;
 status:string='Pendiente';
 //array sincronizado
  orderDetail:any;
// nombre de cliente 
  customerName:string;
// fecha
  date= new Date();
  total: number = 0;
// cronometro
  time:string;
  hours:any= '00';
  minutes:any = '00';
  seconds:any = '00';
  chronometerDisplay = document.querySelector(`[data-chronometer]`)
  chronometerCall
 

//------------------Funcion  que envia orden--------------------------//
error:string;
sendOrder(){
  this.firestoreservice.createCollection(this.customerName, this.getDate, this.numOrder,this.status, this.time,this.orderDetail).then(()=>{
    console.log('exito');
  }).catch(()=>{
 this.error= 'fail';
  })
}

//----------funcion de fecha------------------//
options = {
  month:"short",
  day: "numeric"
};
  getDate= this.date.toLocaleDateString("es", this.options);

//------------------Función de cronometro--------------------------//

chronometer (event)  {
  this.chronometerCall = setInterval(() =>{
    this.seconds++;
    if (this.seconds < 10) this.seconds ='0'  + this.seconds;
    if (this.seconds > 59) {
      this.seconds = '00'// reinicio
      this.minutes ++
      if (this.minutes < 10)  this.minutes ='0'+this.minutes
    }
    if (this.minutes > 59) {
      this.minutes = '00';
      this.hours ++
      if (this.hours < 10) this.hours ='0'+ this.hours;
    }
  }, 1000);
  event.target.setAttribute('disabled','');
}


pause (){
  this.time=this.hours+ ':' + this.minutes+ ':'+this.seconds;
  console.log('tiempo'+this.time);
  //clearInterval(this.chronometerCall)
  // this.play.removeAttribute(`disabled`)
}


  // -------------Funciones que se ejecuta por defecto------------------//
  constructor(private firestoreservice: FirestoreService , private data: OrderDetailService) { 
    this.getOrders();
   
  }
  //------------funcion para obtener data de bg-orders-----------------//
  getOrders(){
    this.firestoreservice.getOrders().subscribe((ordersSnapshot) => {
      this.ordersPedido = [];
      ordersSnapshot.forEach((orderData: any) => {
        this.ordersPedido.push({ ...orderData.payload.doc.data() })  
      });
      this.getNumOrders();      
      console.log(this.numOrder);
    });
  }

//-------------Funcion que genera nmOrder de pedido---------------------//
getNumOrders(){
  this.numOrder= this.ordersPedido.length+1;
  if(this.numOrder<=9 ){
    this.numOrder= '00'+this.numOrder;
  }  else if(this.numOrder<100){
    this.numOrder= '0'+this.numOrder;
  }
}

  addProducts(_index: number) {
    this.orderDetail[_index].quantity++;
    this.calculateSubtotal(_index);
  }

  reduceProducts(_index: number) {
    if (this.orderDetail[_index].quantity > 1) {
      this.orderDetail[_index].quantity--;
      this.calculateSubtotal(_index);
    }
  }

  calculateSubtotal(_index: number) {
    this.orderDetail[_index].subtotal = this.orderDetail[_index].quantity * this.orderDetail[_index].price;
    this.calculateTotal();
  }

  calculateTotal() {
    this.total = 0;
    this.orderDetail.forEach(element => {
      this.total = (element.quantity * element.price) + this.total;
    });
    console.log(this.total);
  }

  deleteRow(_item: number) {
    this.orderDetail.forEach(element =>{
      if (element.item === _item) {
        this.orderDetail.splice(this.orderDetail.indexOf(element), 1);
      }
    });
    this.calculateTotal();
  }

  ngOnInit(): void {
    this.data.currentOrderDetail.subscribe(order => this.orderDetail=order);
    this.data.currentCustomerName.subscribe(name => this.customerName=name);
    console.log(this.orderDetail);
    this.calculateTotal();
  }

  // public sumar(a:number,b:number):number{
  //   return Number(a) + Number(b);
  // }

}

// instancia cuando queremos usar funciones atributos etc que esten dentro de una clase.
