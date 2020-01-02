import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustonButtonComponent } from './custon-button.component';

describe('CustonButtonComponent', () => {
  let component: CustonButtonComponent;
  let fixture: ComponentFixture<CustonButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustonButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustonButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
