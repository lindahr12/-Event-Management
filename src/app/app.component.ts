import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  public appPages = [
    {
      title: 'Show All Events',
      url: '/home',
      icon: 'md-albums'
    },
    {
      title: 'Add new',
      url: '/add-event',
      icon: 'add-circle'
    },
    {
      title: 'Close List Event',
      url: '/liste-eventtout',
      icon: 'flame'
    },
    {
      title: 'News Events',
      url: '/news-event',
      icon: 'flame'
    },
    {
      title: 'Calendar',
      url: '/calendar',
      icon: 'calendar'
    },

  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
