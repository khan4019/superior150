import { HomeComponent } from './home/home.component';
import { PicturesComponent } from './pictures/pictures.component';
import {VideosComponent} from './videos/videos.component';
import {FloorPlanComponent} from './floor-plan/floor-plan.component';
import {RealtorComponent} from './realtor/realtor.component';
import {ContactComponent} from './contact/contact.component';

export const AppRoutes = [
  {
    path: 'home',
    component: HomeComponent
  },
    {
    path: 'pictures',
    component: PicturesComponent
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
