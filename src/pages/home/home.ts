import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NprofilPage } from '../Nprofil/Nprofil';
import { SeconnecterPage } from '../Seconnecter/Seconnecter';
import { sqlitepage } from '../sqlite/sqlite'


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  private createNprofil (){
    
    this.navCtrl.push(sqlitepage); 
  }

  private Signin ()
  {
    this.navCtrl.push(SeconnecterPage); 
  }

}
