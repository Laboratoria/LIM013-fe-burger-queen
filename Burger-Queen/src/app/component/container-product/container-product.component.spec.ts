import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainerProductComponent } from './container-product.component';

describe('ContainerProductComponent', () => {
  let component: ContainerProductComponent;
  let fixture: ComponentFixture<ContainerProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContainerProductComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContainerProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
