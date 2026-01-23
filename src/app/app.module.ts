import { importProvidersFrom, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClarityModule } from '@clr/angular';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ToastContainerComponent } from './shared/toast/toast-container/toast-container.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
<<<<<<< HEAD
import { NgxsModule } from "@ngxs/store";
import { NgxsRouterPluginModule } from "@ngxs/router-plugin";

import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { UserState } from './user/user.state';

const optionalLoggerModule = [NgxsRouterPluginModule.forRoot(), NgxsReduxDevtoolsPluginModule.forRoot()];
=======
import { UserState } from './state/users/user.state';

// import { provideNgxsDevtools } from '@ngxs/devtools-plugin';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';

import { NgxsModule } from '@ngxs/store';
import { NgxsLoggerPluginModule } from '@ngxs/logger-plugin';

const optionalLoggerModule = environment.ngxsLogger ? [NgxsLoggerPluginModule.forRoot(), NgxsReduxDevtoolsPluginModule.forRoot()] : [];
>>>>>>> f345d5b4dff85130fdc46a1ced36ed6a24f8f865

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
<<<<<<< HEAD


    NgxsModule.forRoot([UserState]),
    NgxsRouterPluginModule.forRoot(),
    optionalLoggerModule,
    NgxsReduxDevtoolsPluginModule.forRoot({
      disabled: false
    })
  ],
  providers: [

=======
    optionalLoggerModule
  ],
  providers: [
    //provideStore([UserState]),
    //provideNgxsDevtools()
    
importProvidersFrom(
      NgxsModule.forRoot([], {
        developmentMode: true
      })
    )

    
>>>>>>> f345d5b4dff85130fdc46a1ced36ed6a24f8f865
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
