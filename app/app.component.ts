import { Component } from 'angular2/core';
import { MapComponent } from './map.component';
import { HomeComponent } from './home.component';

@Component({
  directives: [MapComponent, HomeComponent],
    selector: 'my-app',
    template:
    `
    <div>
    <esri-map></esri-map>
    <esri-home></esri-home>
    </div>
    `
})
export class AppComponent { }