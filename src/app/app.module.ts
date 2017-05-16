import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import {FlexLayoutModule} from '@angular/flex-layout';

import 'hammerjs';
import {MdButtonModule, MdCheckboxModule, MdIconModule, MdMenuModule, MdToolbarModule, MdCardModule, MdInputModule, MdTabsModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { SwiperModule } from 'angular2-useful-swiper'; 


import { AppRoutes } from './app.routes';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { PhotosComponent } from './photos/photos.component';
import { VideosComponent } from './videos/videos.component';
import { FloorPlanComponent } from './floor-plan/floor-plan.component';
import { RealtorComponent } from './realtor/realtor.component';
import { ContactComponent } from './contact/contact.component';
import { MainComponent } from './main/main.component';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FooterComponent,
    HomeComponent,
    PhotosComponent,
    VideosComponent,
    FloorPlanComponent,
    RealtorComponent,
    ContactComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(AppRoutes),
    FlexLayoutModule,
    MdButtonModule,
    MdIconModule,
    MdMenuModule,
    MdToolbarModule,
    MdTabsModule,
    SwiperModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
