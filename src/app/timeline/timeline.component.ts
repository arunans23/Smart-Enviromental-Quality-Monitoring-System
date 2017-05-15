import { Component, OnInit } from '@angular/core';
import {DataService} from "../data.service";
import {Entry} from "../shared/entry";

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html'
})
export class TimelineComponent implements OnInit {

  entries: Entry[] = [];

  constructor(public dataService: DataService) { }

  ngOnInit() {
    this.entries = this.dataService.getEntries();
  }


}
