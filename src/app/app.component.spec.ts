import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';

describe('AppComponent', () => {

  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
      providers: []
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    // component.minAge = 1;
    fixture.detectChanges();
  });

  it('should be defined', () => {
    expect(component).toBeDefined()
  });

  fdescribe('by default', () => {
    it('should min age be 1 by default', () => {
      // given
      // when
      component.ngOnInit();
      fixture.detectChanges();
      // then
      expect(component.minAge).toEqual(1);
    });
  })

  describe('set age', () => {
    it('should min age be 16', () => {
      // given
      const sampleAge = 16;
      // when
      component.setAge(sampleAge);
      // then
      expect(component.ageValue).toBe(sampleAge);
    });

    it('should min age not to be null', () => {
      // given
      const sampleAge = -1;
      // when
      component.setAge(sampleAge)
      // then

      expect(component.ageValue).not.toBe(sampleAge);

    });

    it('should min age not to be undefined', () => {
      // given
      const sampleAge = -1;
      // when
      component.setAge(sampleAge)
      // then

      expect(component.ageValue).not.toBeUndefined();

      expect(component.ageValue).toBe(component.minAge);
    });
  });

  describe('min age', () => {


    beforeEach(() => {
      component.minAge = 2;
      fixture.detectChanges();

    });


    it('should min age equal 2', () => {

      component.minAge = 2;
      // given
      // when
      component.ngOnInit();
      fixture.detectChanges();
      // then
      expect(component.minAge).toEqual(2);
    })
  });

  describe('max age', () => {
    it('should 100 be max age', () => {
      component.maxAge = 100;

      // given
      // when
      component.ngOnInit();
      fixture.detectChanges();
      // then
      expect(component.maxAge).toEqual(100);
    });
  });

  describe('OnSubmit', ()=>{
     it('should AgeService not to be called with valid data', () => {

      // given
      const sampleAge = { age: 10, termsAccepted: true }
      const ageServiceSpy = spyOn<any>(component["ageService"], "submitAge")
      // when
      component.submitAge()
      //then
      expect(ageServiceSpy).not.toHaveBeenCalledWith(sampleAge);
    });

    it('should AgeService to be called with valid data', () => {

      // given
      const sampleAge = { age: 10, termsAccepted: true }
      const ageServiceSpy = spyOn<any>(component["ageService"], "submitAge")
      component.userForm.get("age")?.setValue(sampleAge.age)
      component.userForm.get("termsAccepted")?.setValue(sampleAge.termsAccepted);

      // when
      component.submitAge()
      //then
      expect(ageServiceSpy).toHaveBeenCalledWith(sampleAge);
    });
})
});
