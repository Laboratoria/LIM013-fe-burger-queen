import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  @Input() visible:boolean;
  @Output() close:EventEmitter<boolean>=new EventEmitter;
  closeM:boolean=true;
  //Cerrar modal
  closeModal(){
    this.close.emit(false);
    this.closeM=false;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
