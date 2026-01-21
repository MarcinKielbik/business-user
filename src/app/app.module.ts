import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClarityModule } from '@clr/angular';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ToastContainerComponent } from './shared/toast/toast-container/toast-container.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxsModule } from "@ngxs/store";
import { NgxsRouterPluginModule } from "@ngxs/router-plugin";

import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { UserState } from './user/user.state';

const optionalLoggerModule = [NgxsRouterPluginModule.forRoot(), NgxsReduxDevtoolsPluginModule.forRoot()];

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


    NgxsModule.forRoot([UserState]),
    NgxsRouterPluginModule.forRoot(),
    optionalLoggerModule,
    NgxsReduxDevtoolsPluginModule.forRoot({
      disabled: false
    })
  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
