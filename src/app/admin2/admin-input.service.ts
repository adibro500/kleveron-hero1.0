import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Data } from "@angular/router/router";
import { Observable } from "rxjs/Observable";
import { options } from '../headers';

@Injectable()
export class AdminService {

    constructor(private http: Http) {

    }


    putMasterData(inputdata) {

        console.log("inputdata", inputdata);
        return this.http.post("http://localhost:5000/save/admin-input2", inputdata, options).map(res => res.text()).subscribe(data => console.log(data));


    }
    getMasterData() {

        console.log("inputdata");
        return this.http.get("http://localhost:5000/get/admin2", options).map(res => res.json());


    }

    putFormData(inputdata) {

        console.log("inputdata", inputdata);
        return this.http.post("http://localhost:5000/save/admin2", inputdata, options).map(res => res.text()).subscribe(data => console.log(data));


    }






}

export interface IUser { user: string; html: string }