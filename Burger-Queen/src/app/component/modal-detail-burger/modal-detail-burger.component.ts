import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { OrderDetailService } from 'src/app/services/data/order-detail.service';

@Component({
  selector: 'app-modal-detail-burger',
  templateUrl: './modal-detail-burger.component.html',
  styleUrls: ['./modal-detail-burger.component.scss']
})
export class ModalDetailBurgerComponent implements OnInit {
  @Input() visible:boolean;
  @Output() close:EventEmitter<boolean>=new EventEmitter;
  detailBurger:any;
  optionSelected:any=[];
   // isChecked:any;

  // isChecked:any;
  //Cerrar modal
  closeModal(){
    this.close.emit(false);
  }
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
