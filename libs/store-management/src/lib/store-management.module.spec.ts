import { async, TestBed } from '@angular/core/testing';
import { StoreManagementModule } from './store-management.module';

describe('StoreManagementModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [StoreManagementModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(StoreManagementModule).toBeDefined();
  });
});
