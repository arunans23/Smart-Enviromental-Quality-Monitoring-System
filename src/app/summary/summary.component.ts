import { Component, OnInit, OnChanges } from '@angular/core';
import {UserService} from "../user.service";
import {AF} from "../providers/af";
import {DataService} from "../data.service";
import {Entry} from "../shared/entry";


@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html'
})
export class SummaryComponent implements OnInit, OnChanges {

  userName : string;
  userEmail: string;
  userImage: string;

  lastUpdate: Date;

  entries: Entry[];

  lastWeekPM25Entries50: number[] = [];
  lastWeekPM25Entries100: number[] = [];
  lastWeekPM25Entries150: number[] = [];

  lastWeekPM10Entries50: number[] = [];
  lastWeekPM10Entries100: number[] = [];
  lastWeekPM10Entries150: number[] = [];

  lastMonthPM25Entries50: number[] = [];
  lastMonthPM25Entries100: number[] = [];
  lastMonthPM25Entries150: number[] = [];

  lastMonthPM10Entries50: number[] = [];
  lastMonthPM10Entries100: number[] = [];
  lastMonthPM10Entries150: number[] = [];

  constructor(public userService: UserService, public dataService: DataService) {
    this.userName = userService.userName;
    this.userEmail = userService.userEmail;
    this.userImage = userService.userImage;
    this.lastUpdate = dataService.getLastUpdate();
    this.entries = dataService.getEntries();
    dataService.entriesChanged.subscribe( entries => {
      if (entries) {
        this.entries = entries;
        this.calculateValues();
        console.log("charts test");
      }
    })
  }


  ngOnInit() {
  }



  public pm25ChartLabels:string[] = ['Good', 'Moderate', 'Unhealthy'];
  // public pm25ChartData:number[] = [12, 45, 10];
  public pm25ChartData:number[] = [this.lastWeekPM25Entries50.length, this.lastWeekPM25Entries100.length, this.lastWeekPM25Entries150.length];
  public pm25ChartType:string = 'doughnut';

  public pm25ChartLabelsLastMonth:string[] = ['Good', 'Moderate', 'Unhealthy'];
  // public pm25ChartData:number[] = [12, 45, 10];
  public pm25ChartDataLastMonth:number[] = [this.lastMonthPM25Entries50.length, this.lastMonthPM25Entries100.length, this.lastMonthPM25Entries150.length];
  public pm25ChartTypeLastMonth:string = 'doughnut';

  public pm10ChartLabels:string[] = ['Good', 'Moderate', 'Unhealthy'];
  // public pm25ChartData:number[] = [12, 45, 10];
  public pm10ChartData:number[] = [this.lastWeekPM10Entries50.length, this.lastWeekPM10Entries100.length, this.lastWeekPM10Entries150.length];
  public pm10ChartType:string = 'doughnut';

  public pm10ChartLabelsLastMonth:string[] = ['Good', 'Moderate', 'Unhealthy'];
  // public pm25ChartData:number[] = [12, 45, 10];
  public pm10ChartDataLastMonth:number[] = [this.lastMonthPM10Entries50.length, this.lastMonthPM10Entries100.length, this.lastMonthPM10Entries150.length];
  public pmChartTypeLastMonth:string = 'doughnut';

  calculateValues(){
    for (var i = 0; i < this.entries.length; i++){
      let currentDate : Date = new Date();
      let lastWeekDate: Date = new Date(currentDate.getUTCSeconds() - 7*24*60*60);
      if (new Date(this.entries[i].dateTime) > lastWeekDate){
        if (this.entries[i].pm25 <= 50){
          this.lastWeekPM25Entries50.push(this.entries[i].pm25);
          console.log("chart 50");
        } else if (this.entries[i].pm25 <= 100){
          this.lastWeekPM25Entries100.push(this.entries[i].pm25);
          console.log("chart 100");
        } else if (this.entries[i].pm25 <= 150){
          this.lastWeekPM25Entries150.push(this.entries[i].pm25);
          console.log("chart 150");
        }
      }
    }

    this.pm25ChartData = [this.lastWeekPM25Entries50.length, this.lastWeekPM25Entries100.length, this.lastWeekPM25Entries150.length];

    for (var i = 0; i < this.entries.length; i++){
      let currentDate : Date = new Date();
      let lastMonthDate: Date = new Date(currentDate.getUTCSeconds() - 7*24*60*60*30);
      if (new Date(this.entries[i].dateTime) > lastMonthDate){
        if (this.entries[i].pm25 <= 50){
          this.lastMonthPM25Entries50.push(this.entries[i].pm25);
          console.log("chart 50");
        } else if (this.entries[i].pm25 <= 100){
          this.lastMonthPM25Entries100.push(this.entries[i].pm25);
          console.log("chart 100");
        } else if (this.entries[i].pm25 <= 150){
          this.lastMonthPM25Entries150.push(this.entries[i].pm25);
          console.log("chart 150");
        }
      }
    }

    this.pm25ChartDataLastMonth = [this.lastMonthPM25Entries50.length, this.lastMonthPM25Entries100.length, this.lastMonthPM25Entries150.length];

    for (var i = 0; i < this.entries.length; i++){
      let currentDate : Date = new Date();
      let lastWeekDate10: Date = new Date(currentDate.getUTCSeconds() - 7*24*60*60);
      if (new Date(this.entries[i].dateTime) > lastWeekDate10){
        if (this.entries[i].pm10 <= 50){
          this.lastWeekPM10Entries50.push(this.entries[i].pm10);
          console.log("chart 50");
        } else if (this.entries[i].pm10 <= 100){
          this.lastWeekPM10Entries100.push(this.entries[i].pm10);
          console.log("chart 100");
        } else if (this.entries[i].pm10 <= 150){
          this.lastWeekPM10Entries150.push(this.entries[i].pm10);
          console.log("chart 150");
        }
      }
    }

    this.pm10ChartData = [this.lastWeekPM10Entries50.length, this.lastWeekPM10Entries100.length, this.lastWeekPM10Entries150.length];

    for (var i = 0; i < this.entries.length; i++){
      let currentDate : Date = new Date();
      let lastMonthDate10: Date = new Date(currentDate.getUTCSeconds() - 7*24*60*60*30);
      if (new Date(this.entries[i].dateTime) > lastMonthDate10){
        if (this.entries[i].pm10 <= 50){
          this.lastMonthPM10Entries50.push(this.entries[i].pm10);
          console.log("chart 50");
        } else if (this.entries[i].pm10 <= 100){
          this.lastMonthPM10Entries100.push(this.entries[i].pm10);
          console.log("chart 100");
        } else if (this.entries[i].pm10 <= 150){
          this.lastMonthPM10Entries150.push(this.entries[i].pm10);
          console.log("chart 150");
        }
      }
    }

    this.pm10ChartDataLastMonth = [this.lastMonthPM10Entries50.length, this.lastMonthPM10Entries100.length, this.lastMonthPM10Entries150.length];
  }


  // events
  public chartClicked(e:any):void {
    console.log(e);
  }

  public chartHovered(e:any):void {
    console.log(e);
  }



  ngOnChanges(){
    this.calculateValues();
  }


}
