import { Component } from '@angular/core';
import { NavController,NavParams } from 'ionic-angular';
import { sqlitepage} from '../sqlite/sqlite';
import { ScannerPage } from '../Scanner/Scanner';

@Component({
  selector: 'page-Nprofil',
  templateUrl: 'Nprofil.html'
})
export class NprofilPage {


  Nom: string;
  Prenom :string; 
  Age :number;
  Adresse_mail: string;  
  Allergies:Array<string>=[];
 

  constructor(public navCtrl: NavController) {

  }



  /// TODO: refaire la fonction quand alex aura fini l API. 
  private send_to_database()
  {
    
    if(this.Nom && this.Prenom && this.Age && this.Adresse_mail)
    {
      this.navCtrl.push(ScannerPage, {
      Nom: this.Nom,
      Prenom: this.Prenom,
      Age: this.Age,
      Adresse_mail: this.Adresse_mail}, );
       
      
      for(var i=0; i<this.Allergies.length; i++)
      {
        console.log(this.Allergies[i]); 
      }

    }

   
  }

     private itemSelected(item)
    {
      
    }


}
