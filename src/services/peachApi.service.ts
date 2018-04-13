import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';

import { PeachApiUser } from '../models/peachApiUser.model';
import { PeachApiLogin } from '../models/peachApiUser.model';

@Injectable()
export class PeachApiService {

    private baseUrl: string = 'http://localhost:8080/api/'

    constructor(private http : Http) {
         
    }

   

     postLogin(email,password): Promise<any> {
      
        let url = "http://localhost:8080/api/users/login";
        let param = {email : email , password : password };
        let request = this.http.post(url,param);
        return request.toPromise();
     }
     postRegister(email, password, username, age, allergie, bio): Promise<any> {
       
        let url = "http://localhost:8080/api/users/register";
        let param = { email : email , password : password , username : username , age : age , allergie : allergie , bio : bio };
        console.log(param);
        let request = this.http.post(url,param);
        return request.toPromise();
     }
    }