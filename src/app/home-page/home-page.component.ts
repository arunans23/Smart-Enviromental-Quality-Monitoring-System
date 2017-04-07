import { Component } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: 'home-page.component.html'
})
export class HomePageComponent {
  title = 'app works!';

  private pm25data :number[] = [];
  private pm10data :number[] = [];

  private currentText :string = "";
  private currentPM25Sum :number = 0;
  private currentPM10Sum :number = 0;

  // lineChart
  public lineChartData:Array<any> = [
     {data: [0, 0, 0, 0, 0, 0, 0], label: 'PM2.5'}
    //{data: this.pm25data, label: 'PM2.5'}
     //{data: [28, 48, 40, 19, 86, 27, 90], label: 'PM10'}
    //{data: this.pm10data, label: 'PM10'}
  ];
  public lineChartLabels:Array<any> = ['10am', '12noon', '2pm', '4pm', '6pm', '8pm'];
  public lineChartOptions:any = {
    responsive: true
  };
  public lineChartColors:Array<any> = [
    { // grey
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    },
    { // dark grey
      backgroundColor: 'rgba(77,83,96,0.2)',
      borderColor: 'rgba(77,83,96,1)',
      pointBackgroundColor: 'rgba(77,83,96,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(77,83,96,1)'
    },
    { // grey
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    }
  ];
  public lineChartLegend:boolean = true;
  public lineChartType:string = 'line';

  public randomize():void {
    let _lineChartData:Array<any> = new Array(this.lineChartData.length);
    for (let i = 0; i < this.lineChartData.length; i++) {
      _lineChartData[i] = {data: new Array(this.lineChartData[i].data.length), label: this.lineChartData[i].label};
      for (let j = 0; j < this.lineChartData[i].data.length; j++) {
        _lineChartData[i].data[j] = Math.floor((Math.random() * 100) + 1);
      }
    }
    this.lineChartData = _lineChartData;
  }

  // events
  public chartClicked(e:any):void {
    console.log(e);
  }

  public chartHovered(e:any):void {
    console.log(e);
  }

  openFile(event) {
    let input = event.target;
    for (var index = 0; index < input.files.length; index++) {
      let reader = new FileReader();
      reader.onload = () => {
        // this 'text' is the content of the file
        var text = reader.result;
        //console.log(((text.split("\n"))[0].split(' '))[0]);

        const textArray = text.split("\n");

        for (var i = 0; i < 6; i++){
          this.currentPM25Sum = 0;
          this.currentPM10Sum = 0;
          for (var m = 0; m < 10; m++){
            this.currentText= textArray[10 * i + m];
            this.currentPM25Sum += parseInt((this.currentText.split(' '))[2]);
            //this.currentPM10Sum += parseInt((this.currentText.split(' ' || '\t\t'))[5]);
            //console.logPM25((this.currentText.split(' '))[2]);
          }
          console.log(this.currentPM25Sum/100);
          this.pm25data.push(this.currentPM25Sum/100);
          this.pm10data.push(this.currentPM10Sum/100);
        }
      }
      reader.readAsText(input.files[index]);
    }
  }

  update(){
    let _lineChartData:Array<any> = new Array(this.lineChartData.length);
    for (let i = 0; i < this.lineChartData.length; i++) {
      _lineChartData[i] = {data: this.pm25data, label: this.lineChartData[i].label};
    }
    this.lineChartData = _lineChartData;
  }
}
