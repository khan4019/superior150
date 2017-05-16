import { MainComponent } from './main/main.component';
import { HomeComponent } from './home/home.component';
import { PhotosComponent } from './photos/photos.component';
import {VideosComponent} from './videos/videos.component';
import {FloorPlanComponent} from './floor-plan/floor-plan.component';
import {RealtorComponent} from './realtor/realtor.component';
import {ContactComponent} from './contact/contact.component';

export const AppRoutes = [
   {
    path: '',
    component: MainComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'photos',
    component: PhotosComponent
  },
  {
    path: 'videos',
    component: VideosComponent
  },
  {
    path: 'floor',
    component: FloorPlanComponent
  },
  {
    path: 'realtor',
    component: RealtorComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  }
];
