import { Component, Input, OnInit, SimpleChange } from '@angular/core';
import { FirestoreService } from '../../services/firestore/firestore.service';
import { OrderDetailService } from '../../services/data/order-detail.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-item-menu',
  templateUrl: './item-menu.component.html',
  styleUrls: ['./item-menu.component.scss']
})
export class ItemMenuComponent implements OnInit {
  @Input() childMessageCat: string;
  modalVisibility:boolean=false;
  products = [];
  producstFilter = [];
  category= [];
  total:number=0;
  // detailBurger:any=[];
  //array sincronizado
  orderDetail:any;
// nombre de cliente
  customerName:string;
  //-------------------------- agregar prodcutos ----------------------------
  addProducts(item:number) { 
    this.total =0;
    this.products[item-1].quantity++;
  }
  //----------------------- quitar cantidad de productos -------------------
  reduceProducts(_item:number) {
    this.total =0;
    if(this.products[_item-1].quantity>0){
        this.products[_item-1].quantity--;
    }
    console.log(this.products)
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
  // Abrir modal
  showModal(_quantity){
    if(_quantity>0){this.modalVisibility=true;}
    else{ alert('Tiene que agregar almenos una hamburguesa')}
  }
  // Cerrar modale
  closeModal(e){
    this.modalVisibility=false;
  }
  // Agregar opciones a detalle de hamburguesa
  sendDetailBurger(){
    // Agregar adicionales
    this.products.forEach((element,index) => {
      // Agregar adicionales a orderDetail
      if(element.product === 'Hamburguesa simple'||element.product==='Hamburguesa doble'){
        for (let i = 0; i <= element.quantity - 1; i++) {
          if(element.detailBurger[i]===undefined)
          {
            element.detailBurger.push({
              nameProduct:element.product,
              kind:element.kind[0],
              additional:[],
              priceAdditional:0,
            });
          }
        }
      } 
    });
    console.log(this.products)
  }

  //update product
  updateProduct(_productBurger:any){
    this.data.changeDetailBurger(_productBurger);
  }
  // función que escuchará cambios 
  ngOnChanges(changes: SimpleChange) {
    if(changes['childMessageCat'].currentValue==='cat1'){
      this.category=['Desayuno'];
    } else{
      this.category= ['Hamburguesas','Acompañamientos','Bebidas'];
    }
}
  constructor(private firestoreService: FirestoreService, private data: OrderDetailService, private route: Router) { 
  }
  ngOnInit(): void {
    //service data orderDetail
    this.data.currentOrderDetail.subscribe(order => this.orderDetail=order);
    this.data.currentCustomerName.subscribe(name => this.customerName=name);
    this.firestoreService.getProducts().subscribe((productsSnapshot) => {
      this.products = [];
      productsSnapshot.forEach((productData: any) => {
        if(productData.payload.doc.data().category==='hamburguesa')
        { this.products.push({quantity:0,detailBurger:[], ...productData.payload.doc.data() });}
        else{ this.products.push({quantity:0, ...productData.payload.doc.data() });}
      });
      // verificar si order Detail contiene elementos y si es asi guardar el quntity en productos
      if(this.orderDetail.length>0){
        this.orderDetail.forEach(element => {
          this.products.forEach(e => {
            if(e.product===element.product){
              e.quantity=element.quantity;
            } 
          });
        });
      }
    });
    // traer info de detalle de hamburguesa
    this.data.currentDetailBurger.subscribe(dataBurger => {
      switch (dataBurger.product) {
        case 'Hamburguesa simple':
          this.products[4].detailBurger=dataBurger.detailBurger;
          this.products[4].quantity=dataBurger.detailBurger.length;
          break;
        case 'Hamburguesa doble':
          this.products[5].detailBurger=dataBurger.detailBurger;
          this.products[5].quantity=dataBurger.detailBurger.length;
          break;
      
        default:
          break;
      }
      console.log(this.products);
    });
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
      if(orderResult.length<=0||this.customerName.length<=0)
        { alert('Por favor llene los campos');}
      else{
        this.data.changeOrderDetail(orderResult);
        this.route.navigate(["/orderDetail"]);
        }
    }

}

