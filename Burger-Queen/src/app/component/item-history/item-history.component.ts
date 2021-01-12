import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-item-history',
  templateUrl: './item-history.component.html',
  styleUrls: ['./item-history.component.scss']
})
export class ItemHistoryComponent implements OnInit {
  @Input() childDataOrder: any;
  modalVisibility:boolean=false;
  orderDetailSelect:any;
  //Dar formato de fecha y hora
  formatDate(_date){
    return _date.toDate().toLocaleDateString() +' '+ _date.toDate().toLocaleTimeString('en-US');
  }
  showModal(){
    this.modalVisibility=true;
  }
  closeModal(e){
    this.modalVisibility=false;
  }
  sendoDetailOrder(_objDetail){
    this.orderDetailSelect=_objDetail;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
