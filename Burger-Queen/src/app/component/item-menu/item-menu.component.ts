import { Component, Input, OnInit, SimpleChange } from '@angular/core';
import { FirestoreService } from '../../services/firestore/firestore.service';
import { OrderDetailService } from '../../services/data/order-detail.service';

@Component({
  selector: 'app-item-menu',
  templateUrl: './item-menu.component.html',
  styleUrls: ['./item-menu.component.scss']
})
export class ItemMenuComponent implements OnInit {
  @Input() childMessageCat: string;
  public products = [];
  producstFilter = [];
  category= [];
  total:number=0;
  //array sincronizado
  orderDetail:any;
  //-------------------------- agregar prodcutos ----------------------------
  addProducts(item:number) { 
    this.total =0;
    this.products[item-1].quantity++;
    console.log(this.products)
  }
  //----------------------- quitar cantidad de productos -------------------
  reduceProducts(_item:number) {
    this.total =0;
    if(this.products[_item-1].quantity>0){
        this.products[_item-1].quantity--;
    }
  }
// --------------------- filtrar data a mostrar ------------------------------
  selectopt(category){
    switch (category) {
      case 'Desayuno':
        return this.producstFilter=this.products.filter((product)=>product.category==="desayuno");
        break;
      case 'Hamburguesas':
        return this.producstFilter=this.products.filter((product)=>product.category==="hamburguesa");
      case 'Acompañamientos':
        return this.producstFilter=this.products.filter((product)=>product.category==="acompanamiento");
        case 'Bebidas':
      return this.producstFilter=this.products.filter((product)=>product.category==="bebida");
      default:
        break;
    }
  }


  // función que escuchará cambios 
  ngOnChanges(changes: SimpleChange) {
    if(changes['childMessageCat'].currentValue==='cat1'){
      this.category=['Desayuno'];
    } else{
      this.category= ['Hamburguesas','Acompañamientos','Bebidas'];
    }
}

  constructor(private firestoreService: FirestoreService, private data: OrderDetailService) { 
  }
  ngOnInit(): void {
    this.firestoreService.getProducts().subscribe((productsSnapshot) => {
      this.products = [];
      productsSnapshot.forEach((productData: any) => {
        this.products.push({quantity:0, ...productData.payload.doc.data()
        });
      })
    });
    //service data orderDetail
    this.data.currentOrderDetail.subscribe(order => this.orderDetail=order);
    console.log(this.orderDetail);
  }

    //-------------------Filtrar información para enviar a order detail ----------------

    sendOrderDetail(){
      const orderResult = this.products.filter((el)=>el.quantity>0);
      orderResult.forEach((el,index)=>{
        delete el.category;
        delete el.img;
        el.item = index+1;
        el.subtotal = el.quantity*el.price;
      })
      if(orderResult.length<=0)
        {
          console.log('no hay elementos en el pedido')
        }
      else{
        this.data.changeOrderDetail(orderResult)
        }
    }

}

