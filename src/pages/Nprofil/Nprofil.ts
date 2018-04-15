import {
  Component
} from '@angular/core';
import {
  NavController,
  NavParams
} from 'ionic-angular';
import {
  ScannerPage
} from '../Scanner/Scanner';
import {
  PeachApiService
} from '../../services/peachApi.service';

@Component({
  selector: 'page-Nprofil',
  templateUrl: 'Nprofil.html'
})
export class NprofilPage {


  Nom: string;
  Prenom: string;
  Age: number;
  Adresse_mail: string;
  Allergies: Array < string > = [];
  netResponse: any;


  constructor(public navCtrl: NavController, public PeachApiService: PeachApiService) {

  }
  callPostregister(email, password, username, age, allergie, bio) {

   var allergieSerialized = this.serialized(allergie);
    let p = this.PeachApiService.postRegister(email, password, username, age, allergieSerialized, bio);
    p.then(data => {
      console.log(JSON.stringify(data));
     
    })
  }


  /// TODO: refaire la fonction quand alex aura fini l API. 
  private send_to_database() {

    if (this.Nom && this.Prenom && this.Age && this.Adresse_mail) {
      this.navCtrl.push(ScannerPage, {
        Nom: this.Nom,
        Prenom: this.Prenom,
        Age: this.Age,
        Adresse_mail: this.Adresse_mail
      }, );


      for (var i = 0; i < this.Allergies.length; i++) {
        console.log(this.Allergies[i]);
      }

    }


  }

  
  private serialized(data : Array < string >)
  {
     var serial: string ="";
     for (var i = 0; i < data.length; i++)
     {
       serial = serial + data[i] +"#";
     }
     console.log(serial);

     return serial; 



  }


}
