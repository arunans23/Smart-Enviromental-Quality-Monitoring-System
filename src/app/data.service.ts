import { Injectable, EventEmitter} from '@angular/core';
import {Entry} from "./shared/entry";
import {Headers, Http, Response} from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class DataService {

  private entries: Entry[] = [];
  //private entries: Entry[] = [new Entry("Tue Jan 10 2016 01:12:12 GMT+0530 (+0530)", parseFloat("10.1"), parseFloat("12.5"), "arunans.14@cse.mrt.ac.lk")];
  private lastUpdate : Date = null;

  entriesChanged = new EventEmitter<Entry[]>();
  lastUpdateChanged = new EventEmitter<Date>();

  constructor(private http: Http) { }

  addEntry(entry: Entry) {
    this.entries.push(entry);
    console.log(entry);
  }

  storeEntries(){
    const body = JSON.stringify(this.entries);
    const headers = new Headers({
      'Content-Type': 'application/json'
    });
    //console.log(JSON.stringify(this.entries));
    return this.http.put('https://smart-env-quality-monitor.firebaseio.com/entries.json', body, {headers: headers}).subscribe(
        (onerror)=> console.log(onerror)
    );
  }

  retrieveEntries(){
    return this.http.get('https://smart-env-quality-monitor.firebaseio.com/entries.json')
        .map((response: Response ) => response.json())
        .subscribe(
            (data :Entry[]) => {
              this.entries = data;
              console.log(data);
              this.entriesChanged.emit(this.entries);
            }
        );
  }

  getLastUpdate(){
      return this.lastUpdate;
  }

  setLastUpdate(date: Date){
      this.lastUpdate = date;
  }

  retrieveLastUpdate(){
      return this.http.get('https://smart-env-quality-monitor.firebaseio.com/lastUpdate.json')
          .map((response: Response ) => response.json())
          .subscribe(
              (data :Date) => {
                  this.lastUpdate = new Date(data);
                  console.log("lastUpdate " + this.lastUpdate.toString());
                  this.entriesChanged.emit(this.entries);
              }
          );
  }

}
