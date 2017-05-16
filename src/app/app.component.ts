import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app works!';
  tabLinks = [
    { label: 'Home', link: 'home' },
    { label: 'Photos', link: 'photos' },
    { label: 'Videos', link: 'videos' },
    { label: 'Floor', link: 'floor' },
    { label: 'Realtor', link: 'realtor' },
    { label: 'Contact', link: 'contact' },
  ];
  activeLinkIndex = 0;


  asyncTabs: Observable<any>;

  constructor(private router: Router) {
    this.activeLinkIndex =
      this.tabLinks.indexOf(this.tabLinks.find(tab => router.url.indexOf(tab.link) != -1));
  }
}
