import { Component, OnInit } from '@angular/core';
import {UserService} from "../user.service";
import {AF} from "../providers/af";


@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html'
})
export class SummaryComponent implements OnInit {

  userName : string;
  userEmail: string;
  userImage: string;

  constructor(public userService: UserService) {
    this.userName = userService.userName;
    this.userEmail = userService.userEmail;
    this.userImage = userService.userImage;
  }

  ngOnInit() {
  }

}
