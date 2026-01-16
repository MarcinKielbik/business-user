import { importProvidersFrom, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClarityModule } from '@clr/angular';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ToastContainerComponent } from './shared/toast/toast-container/toast-container.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UserState } from './state/users/user.state';

// import { provideNgxsDevtools } from '@ngxs/devtools-plugin';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';

import { NgxsModule } from '@ngxs/store';

@NgModule({
  declarations: [
    AppComponent,
    ToastContainerComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    ClarityModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,


  ],
  providers: [
    //provideStore([UserState]),
    //provideNgxsDevtools()
    
importProvidersFrom(
      NgxsModule.forRoot([], {
        developmentMode: true
      })
    )

    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
