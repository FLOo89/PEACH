import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { SQLite } from '@ionic-native/sqlite';

//pages
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { NprofilPage } from '../pages/Nprofil/Nprofil';
import { SeconnecterPage } from '../pages/Seconnecter/Seconnecter';
import { sqlitepage } from '../pages/sqlite/sqlite';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    NprofilPage,
    SeconnecterPage,
    sqlitepage

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    NprofilPage,
    SeconnecterPage,
    sqlitepage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    SQLite,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
