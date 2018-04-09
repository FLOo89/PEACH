import { Component } from '@angular/core';
import { NavController,NavParams } from 'ionic-angular';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';


const DATABASE_FILE_NAME :string = 'data.db';

@Component({
  selector: 'page-sqlite',
  templateUrl: 'sqlite.html'
})
export class sqlitepage {
   
   
  Nom: string;
  Prenom :string; 
  Age :number;
  Adresse_mail: string;

   private db:SQLiteObject

  constructor(public navCtrl: NavController, private sqlite: SQLite, public navParams: NavParams) {
    
    this.createDatabaseFile(); 

    this.Nom=navParams.get("Nom");
    this.Prenom=navParams.get("Prenom");
    this.Age=navParams.get("Age");
    this.Adresse_mail=navParams.get("Adresse_mail"); 

    this.save_myprofil(); 
    
    
  
    
  }
  
  private createDatabaseFile(): void {
     this.sqlite.create({
     name: DATABASE_FILE_NAME,
    location: 'default'
  })
    .then((db: SQLiteObject) => {
       console.log('database creée');
       this.db=db;
       this.createtable(); 
      })
       .catch(e => console.log(e));

       
  }
  
  private createtable() : void {
    this.db.executeSql(' CREATE TABLE IF NOT EXISTS `Profils` ( `idProfil` INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT UNIQUE, `Nom` TEXT NOT NULL, `Prenom` TEXT NOT NULL, `username` TEXT NOT NULL UNIQUE, `password` TEXT NOT NULL, `Age` INTEGER NOT NULL, `Adresse_mail` TEXT NOT NULL UNIQUE' ,{})
        .then(() =>{ 
          console.log('table profil crée');})
        
        .catch(e => console.log(e));
  }
   

  public save_myprofil()
  {

    console.log('le nom ->' + this.Nom);
    console.log('le prenom ->' + this.Prenom);
    console.log('l age ->' + this.Age);
    console.log('l adresse mail -> '+ this.Adresse_mail);

    this.db.executeSql('INSERT INTO `Profils` (Nom,Prenom,username,password,Age,Adresse_mail) VALUES (\'' +this.Nom + '\' , \'' + this.Prenom +'\', \'' +'username' + '\', \'' + 'password'+ '\', ' + this.Age + ', \'' + this.Adresse_mail+ '\')',{})
    
    .then(() =>{ 
      console.log('profil inserted');})
    
    .catch(e => console.log(e));
  }


}