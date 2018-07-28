import { Component, OnInit } from '@angular/core';
import * as WFL from '../../../node_modules/wire-frame-landscape/src/index.js';

@Component({
  selector: 'background-component',
  templateUrl: './background.component.html',
  styleUrls: ['./background.component.scss']
})
export class BackgroundComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    // WFL
    // .create('canvas-wrapper', 42)
    // .setSplittings(15, 15)
    // .setRotation(Math.PI / 7, - Math.PI / 7, Math.PI / 7.0)
    // .setDimensionsType("FILL", { x: 1, y: 1, multiplier: 1.5 })
    // .setColors("#006BA6", "#0496FF")
    // // .setColors("#FFFFFF", "#006BA6")
    // .setAmplitudeFunction(WFL.Magnitude.randomSawtoothWave(-10, 20, 0.005))
    // .addAnimation(WFL.Animation.linearSingleRotation("roll", 0, Math.PI / 10.0, ( Math.PI / 10.0 ) / 100000))
    // .start();
  }
}
