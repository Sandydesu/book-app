import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PriceDetailsCardComponent } from './price-details-card.component';

describe('PriceDetailsCardComponent', () => {
  let component: PriceDetailsCardComponent;
  let fixture: ComponentFixture<PriceDetailsCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PriceDetailsCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PriceDetailsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
