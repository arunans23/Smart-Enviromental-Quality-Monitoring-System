import { Component, OnInit, OnChanges } from '@angular/core';
import {DataService} from "../data.service";
import {Entry} from "../shared/entry";
import {UserService} from "../user.service";

@Component({
  selector: 'app-add-data',
  templateUrl: './add-data.component.html'
})
export class AddDataComponent implements OnInit, OnChanges {

  private lastUpdate: Date;

  private newEntries :Entry[] = [];

  constructor(public dataService: DataService, public userService: UserService) {

  }

  ngOnInit() {
    this.lastUpdate = this.dataService.getLastUpdate();
    this.dataService.retrieveEntries();
    this.dataService.retrieveLastUpdate();
    this.dataService.lastUpdateChanged.subscribe(
        (date: Date) => this.lastUpdate = date
    )
  }

  openFile(event) {
    let input = event.target;
    for (var index = 0; index < input.files.length; index++) {
      let reader = new FileReader();
      reader.onload = () => {
        // this 'text' is the content of the file
        var text = reader.result;
        //console.log(((text.split("\n"))[0].split(' '))[0]);
        //console.log(text);
        const textArray = text.split("\n");
        //console.log(textArray[0].split(" "));

        for (var i = 0; i < textArray.length; i++) {
          const lineArray = textArray[i].split(" ");
          //console.log(lineArray);
          const dateArray = lineArray[0].split("--");
          //console.log(dateArray);
          const dateLocal = dateArray[0].split(".");

          //console.log(dateLocal[2]+"."+dateLocal[1] + "." +  dateLocal[0] + " " + dateArray[1]);
          const date = new Date(dateLocal[2]+"."+dateLocal[1] + "." +  dateLocal[0] + " " + dateArray[1]);
          //console.log(date.toString());
          //console.log(this.lastUpdate);
          if (date > this.lastUpdate) {
            //console.log(new Entry(date.toString(), lineArray[1], lineArray[2], this.userService.userEmail ));
            this.dataService.addEntry(new Entry(date.toString(), parseFloat(lineArray[1]), parseFloat(lineArray[2]), this.userService.userEmail ));
            console.log("Test");
            this.dataService.setLastUpdate(date);
            this.newEntries.push(new Entry(date.toString(), parseFloat(lineArray[1]), parseFloat(lineArray[2]), this.userService.userEmail));
          }
        }
        console.log("Test1");
        this.dataService.storeEntries();
        this.dataService.storeLastUpdate();
      }
      reader.readAsText(input.files[index]);
    }

  }

  checkDate(){
    console.log(this.lastUpdate.toString())
  }

  ngOnChanges(){
    this.newEntries = [];
  }

}
