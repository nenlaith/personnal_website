import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'timeline-component',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss']
})
export class TimelineComponent implements OnInit {
  dates = [];

  constructor() {
    this.dates = [ {
      link: 'epitech',
      text: 'Epitech'
    }, {
      link: 'paris-v-Descartes',
      text: 'Paris V Descartes'
    }, {
      link: 'paris-vi-upmc',
      text: 'Paris VI UPMC'
    } ];
  }

  ngOnInit() {
  }

}
