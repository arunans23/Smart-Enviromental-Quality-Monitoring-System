import { Component, OnInit } from '@angular/core';
import {UserService} from "../user.service";
import {AF} from "../providers/af";
import {DataService} from "../data.service";


@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html'
})
export class SummaryComponent implements OnInit {

  userName : string;
  userEmail: string;
  userImage: string;

  lastUpdate: Date;

  check: string;

  constructor(public userService: UserService, public dataService: DataService) {
    this.userName = userService.userName;
    this.userEmail = userService.userEmail;
    this.userImage = userService.userImage;
    this.lastUpdate = dataService.getLastUpdate();
  }

  ngOnInit() {
  }

}
