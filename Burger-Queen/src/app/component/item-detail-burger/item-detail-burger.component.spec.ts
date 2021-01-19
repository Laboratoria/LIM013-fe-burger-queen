import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemDetailBurgerComponent } from './item-detail-burger.component';

describe('ItemDetailBurgerComponent', () => {
  let component: ItemDetailBurgerComponent;
  let fixture: ComponentFixture<ItemDetailBurgerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemDetailBurgerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemDetailBurgerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
