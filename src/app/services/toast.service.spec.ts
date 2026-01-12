import { TestBed } from '@angular/core/testing';

import { ToastService } from './toast.service';

describe('ToastService', () => {
  let service: ToastService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ToastService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should emit info toast', () => {
    service.stream$.subscribe(toast => {
      expect(toast.type).toBe('info');
      expect(toast.message).toBe('Test info');
      expect(toast.timeout).toBe(4000);
      expect(toast.id).toBe(1);

      service.info('Test info');

    })
  });

});
