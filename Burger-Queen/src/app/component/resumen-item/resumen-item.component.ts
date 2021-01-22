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
  this.orderDetail.forEach(el => {
    if(el.category==='hamburguesa'){
      delete el.kind;
      delete el.additional;
    }
  });
  this.firestoreservice.createCollection(this.customerName, this.numOrder,this.status,this.minutes,this.seconds,this.orderDetail,this.total).then(()=>{
    alert('! Orden enviada a cocina con Exito!');
    this.data.changeOrderDetail([]);
    this.data.changeCustomerName('');
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
      this.orderDetail[_index].detailBurger.splice(-1,1);
      this.orderDetail[_index].quantity--;
      this.calculateSubtotal(_index);
    }
  }

  calculateSubtotal(_index: number) {
    this.orderDetail[_index].subtotal = this.orderDetail[_index].subtotal + this.orderDetail[_index].quantity * this.orderDetail[_index].price;
    this.calculateTotal();
  }

  calculateTotal() {
    this.total = 0;
    this.orderDetail.forEach(element => {
      this.total = (element.quantity * element.price) + this.total;
    });
  }
//Agregar precio a Adicionales
changePriceAdd($event,_detailBurger:any,_data:any){
    switch ($event.target.checked) {
      case true:
        _detailBurger.priceAdditional++;
        _data.subtotal++;
        _data.totalAdditional++;
        break;
      default:
        if(_detailBurger.priceAdditional>0){
        _detailBurger.priceAdditional--;
        _data.subtotal--;
        _data.totalAdditional--;
      }
        break;
    }
    this.calculateTotal();
}

  deleteRow(_index: number) {
    this.orderDetail.splice(_index, 1);
    this.calculateTotal();
  }
  //Eliminar fila de producto
  deleteRowDB(_data:any,_index: number) {
    _data.detailBurger.splice(_index, 1);
    // contabilizar elementos de detalle de hamburguesa
    _data.quantity=_data.detailBurger.length;
  }

  //agregar Hamburguesa
  addDetailBurger(objProduct){
    // Agregar adicionales a orderDetail solo si no existe elementos
    if(objProduct.category === 'hamburguesa'){
      
      for (let i = 0; i <= objProduct.quantity - 1; i++) {
        if(objProduct.detailBurger[i]===undefined){
          objProduct.detailBurger.push({
            nameProduct:objProduct.product,
            kind:objProduct.kind[0],
            additional:{cheese:false, egg:false },
            priceAdditional:0,
          });
        }
      }
      objProduct.quantity=objProduct.detailBurger.length;
    } 
  }

  // volver a home
  backHome(){
    this.route.navigate(["/home"]);

  }

  ngOnInit(): void {
    this.data.currentOrderDetail.subscribe(order => this.orderDetail=order);
    this.data.currentCustomerName.subscribe(name => this.customerName=name);
    this.calculateTotal();
  }
}

