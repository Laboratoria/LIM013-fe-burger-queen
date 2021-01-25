import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-modal-detail-history',
  templateUrl: './modal-detail-history.component.html',
  styleUrls: ['./modal-detail-history.component.scss']
})
export class ModalDetailHistoryComponent implements OnInit {
  @Input() visible:boolean;
  @Input() dataDetail:any;
  @Output() close:EventEmitter<boolean>=new EventEmitter
  quantityBurger:any={burger1:0,burger2:0}

  //Cerrar modal
  closeModal(){
    this.close.emit(false);
  }


  constructor() { }

  ngOnInit(): void {

  }

}
