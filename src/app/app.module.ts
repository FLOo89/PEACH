import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { SQLite } from '@ionic-native/sqlite';
import { BarcodeScanner} from '@ionic-native/barcode-scanner' 

//pages
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { NprofilPage } from '../pages/Nprofil/Nprofil';
import { SeconnecterPage } from '../pages/Seconnecter/Seconnecter';
import { sqlitepage } from '../pages/sqlite/sqlite';
import { ScannerPage} from '../pages/Scanner/Scanner'


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    NprofilPage,
    SeconnecterPage,
    sqlitepage,
    ScannerPage

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
    sqlitepage,
    ScannerPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    SQLite,
    BarcodeScanner
   
   
  ]
})
export class AppModule {}
