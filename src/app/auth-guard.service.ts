<<<<<<< HEAD
import { Injectable } from '@angular/core';
import { options } from './headers';
import { Http, Response } from '@angular/http';


@Injectable()
export class AuthGuardService {

    private isUserLoggedIn;
    //public userName;
    logindata: any;
    isLogged: any;
    constructor(private http: Http) {
        this.isUserLoggedIn = false;
    }
    setUserLoggedInStatus() {
        this.isUserLoggedIn = true;
    }

    public isLoggedIn(logindata): any {

        let logged: boolean = false;
        // this.http.post('/api/login', logindata, options).take(1).map((res) => {
        //     this.logged = res.json();
        // });
        return this.http
            .post('http://localhost:5000/api/login', logindata, options)
            .map((res: Response) => {
                console.log("1", res.json());
                this.isLogged = res.json();
                console.log("t or f", this.isUserLoggedIn);
                return res.json();
            });
        // console.log("api called----");
        // console.log("logged", logged);
        // return logged;
    }

    getUserLoggedInStatus() {
        return this.isUserLoggedIn;
    }


}
=======
import { Injectable } from '@angular/core';

@Injectable()
export class AuthGuardService {

    private isUserLoggedIn;
    //public userName;

    constructor() {
        this.isUserLoggedIn = false;
    }

    setUserLoggedin() {
        this.isUserLoggedIn = true;
    }

    getUserLoggedIn() {
        return this.isUserLoggedIn;
    }

}
>>>>>>> here/master
