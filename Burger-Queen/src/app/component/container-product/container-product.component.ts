import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-container-product',
  templateUrl: './container-product.component.html',
  styleUrls: ['./container-product.component.scss']
})
export class ContainerProductComponent implements OnInit {
  
  @Output() selectCatEvent = new EventEmitter<string>();
  public category = {catbreakfast:'cat1',catRest:'cat2'}

  selectcatBreakfast() { 
    this.category.catbreakfast = 'cat1';
    this.category.catRest = 'cat2';
    this.selectCatEvent.emit(this.category.catbreakfast);
  }
  selectcatRest() { 
    this.category.catbreakfast = 'cat2';
    this.category.catRest = 'cat1';
    this.selectCatEvent.emit(this.category.catbreakfast);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
