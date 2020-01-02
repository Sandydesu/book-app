import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ButNowComponent } from './but-now.component';

describe('ButNowComponent', () => {
  let component: ButNowComponent;
  let fixture: ComponentFixture<ButNowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ButNowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ButNowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
