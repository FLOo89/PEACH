import { Component } from '@angular/core';
import { NavController,NavParams } from 'ionic-angular';
import { sqlitepage} from '../sqlite/sqlite';

@Component({
  selector: 'page-Nprofil',
  templateUrl: 'Nprofil.html'
})






export class NprofilPage {


  Nom: string;
  Prenom :string; 
  Age :number;
  Adresse_mail: string;  

  constructor(public navCtrl: NavController) {
   
  }


  private send_to_database()
  {
    
    if(this.Nom && this.Prenom && this.Age && this.Adresse_mail)
    {
      this.navCtrl.push(sqlitepage, {
      Nom: this.Nom,
      Prenom: this.Prenom,
      Age: this.Age,
      Adresse_mail: this.Adresse_mail}, );

    }


  }



}
