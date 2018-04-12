import { Component } from '@angular/core';
import { NavController, IonicPage,NavParams} from 'ionic-angular';
import { NprofilPage } from '../Nprofil/Nprofil';
import { SeconnecterPage } from '../Seconnecter/Seconnecter';




@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  private createNprofil (){
    
    this.navCtrl.push(NprofilPage); 
  }

  private Signin ()
  {
    this.navCtrl.push(SeconnecterPage); 
  }

}
