import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { ScannerPage } from '../pages/Scanner/Scanner';
import {ProfilPage } from '../pages/Profil/Profil';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {

  @ViewChild(Nav) nav: Nav; 
  rootPage:any = HomePage;
  ActivePAge: any;


  pages : Array<{title:string, component: any, icon: string}>;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {

    
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();

    this.pages=[
      {title: 'Scanner', component: ScannerPage, icon: "barcode"},
      {title: 'Profil', component: ProfilPage, icon: "contact"},
     // {title: 'Mes Produits', component: Page3},
     // {title: 'Résumé', component: Page4},

    ]


    });
  }


  OpenPage(page){

    this.nav.setRoot(page.component);
    this.ActivePAge=page; 
    }

    checkActive(p) {

      return this.ActivePAge; 
    }
}

