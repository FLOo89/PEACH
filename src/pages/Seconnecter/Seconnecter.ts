import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NprofilPage } from '../Nprofil/Nprofil';
import { ScannerPage } from '../Scanner/Scanner';


import {PeachApiService} from '../../services/peachApi.service';


@Component({
  selector: 'page-Seconnecter',
  templateUrl: 'Seconnecter.html'
})
export class SeconnecterPage {

  netResponse: any;
  constructor(public PeachApiService : PeachApiService, public navCtrl: NavController) {
  }


callPostLogin(username,password) {

  let p = this.PeachApiService.postLogin(username,password);


  p.then(data => {
    console.log(JSON.stringify(data));
    this.navCtrl.push(ScannerPage);
  })
  .catch(err => console.log(err))
}


  


}
