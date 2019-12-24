import { async, TestBed } from '@angular/core/testing';
import { ReusableModule } from './reusable.module';

describe('ReusableModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ReusableModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(ReusableModule).toBeDefined();
  });
});
