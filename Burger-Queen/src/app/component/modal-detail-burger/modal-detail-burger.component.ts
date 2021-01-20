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
  //Cerrar modal
  closeModal(){
    this.close.emit(false);
  }
  //Eliminar fila de producto
  deleteRow(_index: number) {
    this.detailBurger.detailBurger.splice(_index, 1);
    // contabilizar elementos de detalle de hamburguesa
    this.detailBurger.quantity=this.detailBurger.detailBurger.length;
  }
// Actualizar Detail Burger
  updateDetailBurger(){
    this.data.changeDetailBurger(this.detailBurger);
  }
  constructor(private data: OrderDetailService) { }
  ngOnInit(): void {
    // subscribirse al servicio de obtención de data y asignación a Detail Burger
    this.data.currentDetailBurger.subscribe(dataBurger => this.detailBurger=dataBurger);
  }

}
