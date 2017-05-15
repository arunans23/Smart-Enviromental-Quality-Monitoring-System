import {Injectable, EventEmitter} from "@angular/core";
import {AngularFire, AuthProviders, AuthMethods} from 'angularfire2';
//import * as firebase from 'firebase/app';
import { Observable } from 'rxjs/Observable';
import {UserService} from "../user.service";

@Injectable()
export class AF {
  public userName: string;
  public userEmail: string;
  public userImage: string;

  constructor(public af: AngularFire, public userService: UserService) {
    this.af.auth.subscribe(auth => {
      if (auth){
        this.userName = auth.auth.displayName;
        this.userEmail = auth.auth.email;
        this.userImage = auth.auth.photoURL;
        console.log(this.userName);
        userService.userName = this.userName;
        userService.userEmail = this.userEmail;
        userService.userImage = this.userImage;
        console.log("check");console.log("check");
      }
    })
  }
  /**
   * Logs in the usernp
   * @returns {firebase.Promise<FirebaseAuthState>}
   */
  loginWithGoogle() {
    return this.af.auth.login({
      provider: AuthProviders.Google,
      method: AuthMethods.Popup,
    });
  }
  /**
   * Logs out the current user
   */
  logout() {
    return this.af.auth.logout();
  }

  
}
