import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NprofilPage } from '../Nprofil/Nprofil';

@Component({
  selector: 'page-Seconnecter',
  templateUrl: 'Seconnecter.html'
})
export class SeconnecterPage {

  constructor(public navCtrl: NavController) {
  }

  username : string;
  password :string; 

  private recupinfo()
  {
    

    if(this.username && this.password)
    {
      this.navCtrl.push(NprofilPage, {
      username: this.username,
     password: this.password}, );

    }
    
    } 
  }


