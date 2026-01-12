import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AgePayload, AgeService } from './services/age.service';
import { ToastService } from './services/toast.service';
import { UserPayload } from './interfaces/user-payload';
import { UserService } from './services/user.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  title = 'check-age';
  userForm!: FormGroup;
  message = '';
  ageValue?: number
  minAge = 1;
  maxAge = 100;



  constructor(private fb: FormBuilder, private ageService: AgeService, private toast: ToastService, private userService: UserService) { }

  ngOnInit(): void {
    this.userForm = this.fb.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      organization: ['', [Validators.required]],

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
    return this.userForm.get("age");
  }

  submitUser() {
    if (this.userForm.invalid) {
      console.log('Wpisz poprawne dane');
      return;
    }


    const { firstName, lastName, email, organization, age, termsAccepted } =
      this.userForm.value as UserPayload;



    const user: UserPayload = {
      firstName,
      lastName,
      email,
      organization,
      age,
      termsAccepted: !!termsAccepted
    };


    this.userService.submitUser(user).subscribe({
      next: () => {
        this.toast.success('Dane zapisane poprawnie');
        this.userService.saveUserData(user);
        this.userService.readUserData();
      }
    });




    /*
      submitAge() {
         
        const age = this.userForm.value.age;
        this.message = age >= 18 ? 'Jesteś pełnoletni' : 'Nie masz 18 lat';
        console.log(this.message);
    
        const terms: boolean = this.userForm.value.termsAccepted;
        console.log(terms);
    
        const agePayload: AgePayload = { age, termsAccepted: terms };
        this.ageService.submitAge(agePayload).subscribe({
          next: () => {
            this.toast.success('Dane zapisane poprawnie');
          },
          error: (err) => {
            this.toast.error('Błąd zapisu');
            console.error('Błąd serwisu', err);
          }
        })
    */





  }
}
