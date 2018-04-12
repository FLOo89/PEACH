import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NprofilPage } from '../Nprofil/Nprofil';
import { App, MenuController } from 'ionic-angular';
import { BarcodeScanner, BarcodeScannerOptions} from '@ionic-native/barcode-scanner' 

@Component({
  selector: 'page-Scanner',
  templateUrl: 'Scanner.html'
})
export class ScannerPage {

    options: BarcodeScannerOptions;
    encodText: string ='';
    encodedData: any ={};
    scannedData : any ={};




  constructor(public navCtrl: NavController, public scanner: BarcodeScanner) {

  }
  scan(){
      this.options={
          prompt :'scan your barcode'

      };

      this.scanner.scan(this.options).then((data)=>{
          
        this.scannedData =data ;
    }, 
    (err)=>{
        console.log('error:', err);

    })
  }
  encode(){
      this.scanner.encode(this.scanner.Encode.TEXT_TYPE,this.encodText).then((data)=>{
          this.encodedData=data;
      },
      (err)=>{ console.log('error:', err);})
  }
}