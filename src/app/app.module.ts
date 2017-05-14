import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import 'hammerjs';
import {MdButtonModule, MdCheckboxModule, MdIconModule, MdMenuModule, MdToolbarModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppRoutes } from './app.routes';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { PicturesComponent } from './pictures/pictures.component';
import { VideosComponent } from './videos/videos.component';
import { FloorPlanComponent } from './floor-plan/floor-plan.component';
import { RealtorComponent } from './realtor/realtor.component';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FooterComponent,
    HomeComponent,
    PicturesComponent,
    VideosComponent,
    FloorPlanComponent,
    RealtorComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
     RouterModule.forRoot(AppRoutes),
    MdButtonModule,
    MdCheckboxModule,
    MdIconModule,
    MdMenuModule,
    MdToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
