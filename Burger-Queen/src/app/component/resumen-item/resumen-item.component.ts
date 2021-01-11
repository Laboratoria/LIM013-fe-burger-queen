import { Component, Input, OnInit, SimpleChange} from '@angular/core';
import { FirestoreService } from '../../services/firestore/firestore.service';
import { OrderDetailService } from '../../services/data/order-detail.service';


@Component({
  selector: 'app-resumen-item',
  templateUrl: './resumen-item.component.html',
  styleUrls: ['./resumen-item.component.scss']
})

export class ResumenItemComponent {
  //@Input() sendStatusButton: string;
  public ordersPedido = [];
  //inicialize en 0 
  total: number = 0;
  //Numero de orden
  numOrder: any = 0;
  //Estado de pedido
  status: string = 'Pendiente';
  //Array sincronizado
  orderDetail: any;
  //Nombre de cliente 
  customerName: string;
  //Fecha
  date = new Date();
  // //Cronometro
  time: string;


  //------------------Funcion  que envia orden--------------------------//
  error: string;
  sendOrder() {
    this.firestoreservice.createCollection(this.customerName, this.getDate, this.numOrder, this.status, this.time, this.orderDetail).then(() => {
      console.log('exito');
    }).catch(() => {
      this.error = 'fail';
    })
  }

  //---------------------------funcion de fecha--------------------------//
  options = {
    month: "short",
    day: "numeric"
  };
 
getDate = this.date.toLocaleDateString("es", this.options);


  // -------------Funciones que se ejecuta por defecto------------------//
  constructor(private firestoreservice: FirestoreService, private data: OrderDetailService) {
    this.getOrders();
    console.log('ingrese fecha');
    console.log(this.date.toLocaleDateString("es", this.options));
  }
  //------------funcion para obtener data de bg-orders-----------------//
  getOrders() {
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
  getNumOrders() {
    this.numOrder = this.ordersPedido.length + 1;
    if (this.numOrder <= 9) {
      this.numOrder = '00' + this.numOrder;
    } else if (this.numOrder < 100) {
      this.numOrder = '0' + this.numOrder;
    }
  }


  //---------------------- funciones de tabla------------------------------//
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


  //-----------------------------------//
  ngOnInit(): void {
    this.data.currentOrderDetail.subscribe(order => this.orderDetail = order);
    this.data.currentCustomerName.subscribe(name => this.customerName = name);
    this.orderDetail.forEach((element, index) => {
      // Agregar adicionales a orderDetail
      if (element.product === 'Hamburguesa simple' || element.product === 'Hamburguesa doble') {
        this.orderDetail[index].detailProduct = [];
        for (let i = 0; i <= element.quantity - 1; i++) {
          element.detailProduct.push({
            nameProduct: element.product + ' ' + element.kind[0],
            kind: element.kind[0],
            additional: [],
            priceAdditional: 0,
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

