import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumenItemComponent } from './resumen-item.component';

describe('ResumenItemComponent', () => {
  let component: ResumenItemComponent;
  let fixture: ComponentFixture<ResumenItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResumenItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResumenItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
