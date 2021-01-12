import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalDetailHistoryComponent } from './modal-detail-history.component';

describe('ModalDetailHistoryComponent', () => {
  let component: ModalDetailHistoryComponent;
  let fixture: ComponentFixture<ModalDetailHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalDetailHistoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalDetailHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
