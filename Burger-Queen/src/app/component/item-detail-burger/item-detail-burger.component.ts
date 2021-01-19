import { Component, Input, OnInit } from '@angular/core';
import { OrderDetailService } from 'src/app/services/data/order-detail.service';

@Component({
  selector: 'app-item-detail-burger',
  templateUrl: './item-detail-burger.component.html',
  styleUrls: ['./item-detail-burger.component.scss']
})
export class ItemDetailBurgerComponent implements OnInit {
  detailBurger:any;
  optionSelected:any=[];
  @Input() closeModal: boolean;
  
  // isChecked:any;
  // actualizar campo de nombre de producto y opción seleccionada
  updateOpt(_index){
    this.detailBurger.detailBurger[_index].kind=this.optionSelected[_index];
    this.detailBurger.detailBurger[_index].nameProduct=this.detailBurger.product+' '+this.optionSelected[_index];
  }
  //Eliminar fila de producto
  deleteRow(_index: number) {
    this.detailBurger.detailBurger.splice(_index, 1);
  }
  // checkBoxSelected(){
  //   console.log(this.isChecked);
  // }
  confirmar(){
    this.data.changeDetailBurger(this.detailBurger);
    console.log(this.detailBurger);
  }

  constructor(private data: OrderDetailService) { }

  ngOnInit(): void {
    this.data.currentDetailBurger.subscribe(dataBurger => this.detailBurger=dataBurger);
  }
}
