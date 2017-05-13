import {Injectable, EventEmitter} from "@angular/core";
import {AngularFire, AuthProviders, AuthMethods} from 'angularfire2';
//import * as firebase from 'firebase/app';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AF {
  public userName: string;
  userNameChanged  = new EventEmitter<string>();

  constructor(public af: AngularFire) {}
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
