import { Component, Input, OnInit, SimpleChange,  } from '@angular/core';
import { ItemMenuComponent } from '../item-menu/item-menu.component';
import {FirestoreService} from '../../services/firestore/firestore.service';
import { OrderDetailService } from '../../services/data/order-detail.service';
import { Router } from '@angular/router';


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
  //date= new Date();
  total: number = 0;
// cronometro
  time:string;
  minutes:any = '00';
  seconds:any = '00';
  chronometerDisplay = document.querySelector(`[data-chronometer]`)
  chronometerCall

//------------------Funcion  que envia orden--------------------------//
error:string;
sendOrder(){
  this.firestoreservice.createCollection(this.customerName, this.numOrder,this.status,this.minutes,this.seconds,this.orderDetail,this.total).then(()=>{
    alert('! Orden enviada a cocina con Exito!');
    this.orderDetail=this.orderDetail.map((el)=>el.quantity=0);
    this.route.navigate(["/home"])
  }).catch(()=>{
 this.error= 'fail';
  })
}


  // -------------Funciones que se ejecuta por defecto------------------//
  constructor(private firestoreservice: FirestoreService , private data: OrderDetailService,
    private route:Router) { 
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

  deleteRow(_index: number) {
    this.orderDetail.splice(_index, 1);
    this.calculateTotal();
  }

  ngOnInit(): void {
    this.data.currentOrderDetail.subscribe(order => this.orderDetail=order);
    this.data.currentCustomerName.subscribe(name => this.customerName=name);
    this.orderDetail.forEach((element,index) => {
      // Agregar adicionales a orderDetail
      if(element.product === 'Hamburguesa simple'||element.product==='Hamburguesa doble'){
        this.orderDetail[index].detailProduct=[];
        for (let i = 0; i <= element.quantity - 1; i++) {
          element.detailProduct.push({
            nameProduct:element.product+' '+element.kind[0],
            kind:element.kind[0],
            additional:[],
            priceAdditional:0,
          });
        }
      } 
    });
    this.calculateTotal();
  }

  // public sumar(a:number,b:number):number{
  //   return Number(a) + Number(b);
  // }

}

// instancia cuando queremos usar funciones atributos etc que esten dentro de una clase.