import { Component, Input, OnInit, SimpleChange } from '@angular/core';
import { FirestoreService } from '../../services/firestore/firestore.service';

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
  
  addProducts(item:number) { 
    this.total =0;
    this.products[item-1].quantity++;
    console.log(this.products)
  }
  reduceProducts(item:number) {
    this.total =0;
    if(this.products[item-1].quantity>0){
        this.products[item-1].quantity--;
    }
  }

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

  createdata(){
    this.firestoreService.createCat('consuelo','22');
  }

  // función que escuchará cambios 
  ngOnChanges(changes: SimpleChange) {
    if(changes['childMessageCat'].currentValue==='cat1'){
      this.category=['Desayuno'];
    } else{
      this.category= ['Hamburguesas','Acompañamientos','Bebidas'];
    }
}

  constructor(private firestoreService: FirestoreService) { 
  }
  ngOnInit(): void {
    this.firestoreService.getProducts().subscribe((productsSnapshot) => {
      this.products = [];
      productsSnapshot.forEach((productData: any) => {
        this.products.push({quantity:0, ...productData.payload.doc.data()
        });
      })
    });
  }

}
