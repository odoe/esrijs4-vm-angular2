import { Component, ElementRef } from 'angular2/core';
import { HomeViewModel, topic } from 'esri-mods';

@Component({
  selector: 'esri-home',
  template: '<a class="esri-home" href="#" (click)="onClick($event)"><i class="material-icons">home</i></a>'
})
export class HomeComponent {

  vm: HomeViewModel = null;

  view: null;

  constructor() {
    topic.subscribe('map-view', this.onMapView.bind(this));
  }


  onMapView(view) {
    this.vm = new HomeViewModel({
      view: view
    });
  }

  onClick(e) {
    e.preventDefault();
    this.vm.goHome();
  }
}