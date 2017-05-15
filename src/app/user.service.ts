import { Injectable } from '@angular/core';
import {AF} from "./providers/af";

@Injectable()
export class UserService {

  public userName;
  public userEmail;
  // public userImage = "https://media.licdn.com/mpr/mpr/shrinknp_200_200/AAEAAQAAAAAAAAgWAAAAJGMxZWM2MzAzLTExNGQtNDU5Ny1iODIzLTRkZDEwZGZjOTMxMg.jpg";
  public userImage;

  constructor() {
  }

  // getCurrentUser(){
  //
  // }

  // getCurrentUserName(){
  //   return this.af.userName;
  // }
  //
  // getCurrentUserEmail(){
  //   return this.af.getCurrentEmail();
  // }
  //
  // getCurrentUserImage(){
  //   return this.af.getCurrentImage();
  // }

}
