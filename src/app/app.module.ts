import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {PlaylistAddComponent} from "./components/playlist/add/playlist-add.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HTTP_INTERCEPTORS, HttpClient, HttpClientModule} from "@angular/common/http";
import {CommonModule} from "@angular/common";
import {LoginComponent} from "./components/login/login.component";
import { JwtInterceptor} from "./interceptors/jwt-interceptor";
import {PlaylistListComponent} from "./components/playlist/list/playlist-list.component";

@NgModule({
  declarations: [
    AppComponent,
    PlaylistAddComponent,
    PlaylistListComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [
    HttpClient,
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true, },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
