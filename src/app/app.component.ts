import { Component } from '@angular/core';
import {  } from "af";
import {DataService} from "./data.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  private loaded: boolean;

  constructor(dS: DataService){
    this.loaded = dS.loaded;
    dS.loadedChanged.subscribe(loaded => {
      this.loaded = loaded;
    })
  }
}
