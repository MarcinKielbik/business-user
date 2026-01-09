import { Component } from '@angular/core';
import { Toast } from '../../../interfaces/toast';
import { Subscription, timer } from 'rxjs';
import { ToastService } from '../../../services/toast.service';

@Component({
  selector: 'app-toast-container',
  templateUrl: './toast-container.component.html',
  styleUrl: './toast-container.component.css'
})
export class ToastContainerComponent {
  toast: Toast[] = [];
  private sub?: Subscription;

  constructor(private toastService: ToastService) { }

  ngOnInit(): void {
    this.sub = this.toastService.stream$.subscribe(t => {
      this.toast.push(t);
      if (t.timeout > 0) {
        timer(t.timeout).subscribe(() => this.dismiss(t.id));
      }
    });
  }

  dismiss(id: number) {
    this.toast = this.toast.filter(t => t.id !== id);
  }

  ngOnDestroy(): void {
    this.sub?.unsubscribe();
  }

}
