import { Component, Input } from '@angular/core';
import { LoginComponent } from "./login/login.component";
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  template: `
 <router-outlet></router-outlet>  
  `,
})
export class AppComponent {

  @Input()
  hideMenu = false;

  constructor(private router: Router) {
    this.router.events.subscribe((res) => {
      if (!this.router.url.includes("/")) {
        this.hideMenu = true;
      }
      else
        this.hideMenu = false;
      console.log(this.router.url, "Current URL");
    })

  }

  title = 'app';
}
