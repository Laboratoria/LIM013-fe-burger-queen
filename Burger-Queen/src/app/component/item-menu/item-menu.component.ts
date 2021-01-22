import { Component, Input, OnInit, SimpleChange } from '@angular/core';
import { FirestoreService } from '../../services/firestore/firestore.service';
import { OrderDetailService } from '../../services/data/order-detail.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

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
//eliminar ultimos elementos de detailBurger
  ReduceDetailBurger(objProduct){
    if(objProduct.category === 'hamburguesa'){
      objProduct.detailBurger.splice(-1, 1);
    } 
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
        { this.products.push({quantity:0,detailBurger:[],subtotal:0,totalAdditional:0, ...productData.payload.doc.data() });}
        else{ this.products.push({quantity:0,subtotal:0, ...productData.payload.doc.data() });}
      });
    // verificar si order Detail contiene elementos y si es asi guardar el quntity en productos
      if(this.orderDetail.length>0){
        this.orderDetail.forEach(element => {
          this.products.forEach(e => {
            if(e.product===element.product){
              e.quantity=element.quantity;
              if(e.product==='Hamburguesa simple'&& element.product==='Hamburguesa simple' ){
                e.detailBurger = element.detailBurger
              }
              if(e.product==='Hamburguesa doble'&&element.product==='Hamburguesa doble'){
                e.detailBurger = element.detailBurger
              }
            } 
          });
        });
      }
    });
  }
    //-------------------Filtrar información para enviar a order detail ----------------
  sendOrderDetail(){
    const orderResult = this.products.filter((el)=>el.quantity>0);
    if(orderResult.length<=0){
    Swal.fire(
        '! No hay productos en la order! 😞',
        'Por seleccione los productos del pedido',
        'error'
      )
    }
    if(this.customerName.length<=0){ 
      Swal.fire(
        '! No se ha ingresado un cliente! 😞',
        'Por favor ingrese el nombre del cliente ',
        'error'
      )
      }
    else{
      orderResult.forEach((el,index)=>{
        delete el.img;
        el.subtotal = el.subtotal+el.quantity*el.price;});
      this.data.changeOrderDetail(orderResult);
      this.route.navigate(["/orderDetail"]);
      }
  }
}

