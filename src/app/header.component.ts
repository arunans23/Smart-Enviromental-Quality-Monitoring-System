import { Component, OnInit } from '@angular/core';import { Router } from "@angular/router";
import {AF} from "./providers/af";
import {Constants} from "./shared/constants";
import {UserService} from "./user.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {

    private userName: string;

    private title = Constants.title;
    public isLoggedIn: boolean;
  constructor(public afService: AF, private router: Router, public userService: UserService) {
    // This asynchronously checks if our user is logged it and will automatically
    // redirect them to the Login page when the status changes.
    // This is just a small thing that Firebase does that makes it easy to use.
    this.afService.af.auth.subscribe(
        (auth) => {
          if(auth == null) {
            console.log("Not Logged in.");
            this.router.navigate(['login']);
            this.isLoggedIn = false;
          }
          else {
            console.log("Successfully Logged in.");
            this.isLoggedIn = true;
            // UPDATE: I forgot this at first. Without it when a user is logged in and goes directly to /login
            // the user did not get redirected to the home page.
            this.router.navigate(['']);
          }
        }
    );

    this.userName = userService.userName;
  }
  logout() {
    this.afService.logout();
  }

  //userName: string = this.afService.userName;



}
