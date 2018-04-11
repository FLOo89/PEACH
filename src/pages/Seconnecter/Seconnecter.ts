import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NprofilPage } from '../Nprofil/Nprofil';
import { ScannerPage } from '../Scanner/Scanner';

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
      this.navCtrl.push(ScannerPage, {
      username: this.username,
     password: this.password}, );

    }
    
    } 
  }


