import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {WebcamModule} from 'ngx-webcam';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Step20TakePhotoComponent } from './step20-take-photo/step20-take-photo.component';
import { CountdownModule } from 'ngx-countdown';
import { Step10HomeComponent } from './step10-home/step10-home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    Step20TakePhotoComponent,
    Step10HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    WebcamModule,
    CountdownModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
