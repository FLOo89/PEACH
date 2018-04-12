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
  constructor(public PeachApiService : PeachApiService ) {
  }


callPostLogin(email,password) {

  let p = this.PeachApiService.postLogin(email,password);


  p.then(data => {

    console.log(JSON.stringify(data));
    this.netResponse = JSON.stringify(data.json().args);
  })
}


  

  private recupinfo()
  {
    
     
  }

}
