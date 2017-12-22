
import { Component, OnDestroy, OnInit, Inject } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Observable } from "rxjs/Rx";
import { FormGroup, FormBuilder, Validators, FormControl, AbstractControl } from "@angular/forms";
import { AuthGuardService } from "../auth-guard.service";
import { LoginService } from "./login.service";
import { DOCUMENT } from "@angular/platform-browser";
import { Router } from '@angular/router';

@Component({
    selector: 'login',
    templateUrl: './login.html',
    styleUrls: ['./login.css'],
})

export class LoginComponent implements OnDestroy, OnInit {

    ngOnDestroy(): void {
        //this.observable.unsubscribe();
    }

    observable: any;
    public form: FormGroup;
    public username: AbstractControl;
    public password: AbstractControl;
    uname: string = '';
    pass: string = '';
    constructor(private fb: FormBuilder, translate: TranslateService, private router: Router, private ags: AuthGuardService, private loginservice: LoginService, @Inject(DOCUMENT) private document: any) {

        this.observable = Observable.interval(1000).subscribe(x => {
            translate.use(localStorage.getItem('lang'));
            //translate.use(localStorage.getItem('lang'));
        });

        this.form = fb.group({
            'username': ['', Validators.compose([Validators.required])],
            'password': ['', Validators.compose([Validators.required, Validators.minLength(4)])],
        });

        this.username = this.form.controls['username'];
        this.password = this.form.controls['password'];
        var color = localStorage.getItem("color");
        if (color == "pink-blue") {
            this.document.getElementById("color").setAttribute("href", "./assets/styles/pink-blue.css");
        }
        else {
            this.document.getElementById("color").setAttribute("href", "./assets/styles/orange-blue.css");
        }


        // this language will be used as a fallback when a translation isn't found in the current languag
    }
    ngOnInit() {


    }

    res = [];

    public onSubmit(): void {

        let json1 = {
            "username": this.uname,
            "password": this.pass
        };

        console.log(json1);

        this.ags.isLoggedIn(json1).subscribe((res) => {
            if (res.data != "invalid") {
                this.ags.setUserLoggedInStatus();
                localStorage.setItem("loginname", btoa(this.uname));
                this.router.navigate(['/parent/adminWidget']);
            }
        });

    }

}
