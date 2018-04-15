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

   

     postLogin(username,password): Promise<any> {
      
        let url = "http://localhost:8080/api/users/login";
        let param = {username: username , password : password };
        let request = this.http.post(url,param);
        return request.toPromise();
     }
     postRegister(email, password, username, age, allergies, bio): Promise<any> {
       
        let url = "http://localhost:8080/api/users/register";
        let param = { email : email , password : password , username : username , age : age , allergies : allergies , bio : bio };
        console.log(param);
        let request = this.http.post(url,param);
        return request.toPromise();
     }
    }