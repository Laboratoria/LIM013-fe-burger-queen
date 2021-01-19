import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalDetailBurgerComponent } from './modal-detail-burger.component';

describe('ModalDetailBurgerComponent', () => {
  let component: ModalDetailBurgerComponent;
  let fixture: ComponentFixture<ModalDetailBurgerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalDetailBurgerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalDetailBurgerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
