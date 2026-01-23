import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AgeService } from './services/age.service';
import { ToastService } from './services/toast.service';
import { UserPayload } from './interfaces/user-payload';
import { UserService } from './services/user.service';
import { NameComparator } from './name.comparator';
import { ClrDatagrid, ClrDatagridSortOrder } from '@clr/angular';
<<<<<<< HEAD
import { Select, Store } from '@ngxs/store';
import { AddUser, LoadUsers } from './user/user.action';
import { UserState } from './user/user.state';
import { Observable } from 'rxjs/internal/Observable';
=======
import { StoreUserService } from './services/store-user.service';

import { STORAGE_KEY } from './storage-key';
import { Store } from '@ngxs/store';
import { AddUser } from './state/users/users.actions';
>>>>>>> f345d5b4dff85130fdc46a1ced36ed6a24f8f865


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

<<<<<<< HEAD
  // users: UserPayload[] = [];

  @Select(UserState.users) users$!: Observable<UserPayload[]>;

  private STORAGE_KEY = 'userData';
=======
  users: UserPayload[] = [];
>>>>>>> f345d5b4dff85130fdc46a1ced36ed6a24f8f865

  nameComparator = new NameComparator();
  defaultSortOrder = ClrDatagridSortOrder.ASC;

<<<<<<< HEAD
  constructor(private fb: FormBuilder, private ageService: AgeService, private toast: ToastService, private userService: UserService, private store: Store) { }
   
=======
  constructor(private fb: FormBuilder, private ageService: AgeService, private toast: ToastService, private userService: UserService, private storeUserService: StoreUserService, private store: Store) { }

>>>>>>> f345d5b4dff85130fdc46a1ced36ed6a24f8f865
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
    
    this.storeUserService.readUserData();

<<<<<<< HEAD
    /*
    const data = localStorage.getItem(this.STORAGE_KEY);
    if (data) {
      try {
        const parsed = JSON.parse(data);
        this.users = Array.isArray(parsed) ? parsed : [parsed];
      } catch {
        this.users = [];
      }
    }
*/

    //this.store.dispatch(new AddUser(this.userForm.value));
    this.store.dispatch(new LoadUsers());


=======
>>>>>>> f345d5b4dff85130fdc46a1ced36ed6a24f8f865
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

        if (this.userForm.invalid) {
          return;
        }

        const user: UserPayload = this.userForm.value;

<<<<<<< HEAD
        this.store.dispatch(new AddUser(user));
=======
        this.users.push(user);
        // localStorage.setItem(STORAGE_KEY, JSON.stringify(this.users));
        this.userService.saveUserData(user);
>>>>>>> f345d5b4dff85130fdc46a1ced36ed6a24f8f865
        this.userForm.reset();


        // this.users.push(user);

        // localStorage.setItem(this.STORAGE_KEY, JSON.stringify(this.users));

        // this.userForm.reset();



      },
      error: () => {
        this.toast.error('Błąd zapisu');
      }


    });

    this.store.dispatch(new AddUser(user));


  }
}
