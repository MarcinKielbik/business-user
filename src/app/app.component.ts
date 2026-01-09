import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AgePayload, AgeService } from './services/age.service';
import { ToastService } from './services/toast.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'check-age';
  ageForm!: FormGroup;
  message = '';
  ageValue?: number
  minAge = 1;
  maxAge = 100;



  constructor(private fb: FormBuilder, private ageService: AgeService, private toast: ToastService) { }

  ngOnInit(): void {
    this.ageForm = this.fb.group({
      age: ['', [Validators.required, Validators.min(0)]],
      termsAccepted: [false, [Validators.requiredTrue]]
    });
    this.age()?.valueChanges.subscribe(age => this.setAge(age));
  }

  getMinAge(): number {
    return this.minAge;
  }


  getMaxAge(): number {
    return this.maxAge;
  }

  setAge(age: number): void {
    this.ageValue = age > 0 ? age : this.getMinAge();
  }


  private age(): AbstractControl<number> | null {
    return this.ageForm.get("age");
  }

  submitAge() {
    if (this.ageForm.invalid) {
      console.log('Wpisz poprawny wiek');
      return;
    }

    const age = this.ageForm.value.age;
    this.message = age >= 18 ? 'Jesteś pełnoletni' : 'Nie masz 18 lat';
    console.log(this.message);

    const terms: boolean = this.ageForm.value.termsAccepted;
    console.log(terms);

    const agePayload: AgePayload = {age, termsAccepted: terms};

    this.ageService.submitAge(agePayload).subscribe({
      next: () => {
        this.toast.success('Dane zapisane poprawnie');
      },
      error: (err) => {
        this.toast.error('Błąd zapisu');
        console.error('Błąd serwisu', err);
      }
    })

  }
}
