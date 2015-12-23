import { Component, ElementRef } from 'angular2/core';
import { HomeViewModel } from 'esri-mods';

@Component({
  selector: 'esri-home',
  inputs: ['view'],
  template: '<a class="esri-home" href="#" (click)="onClick($event)"><i class="material-icons">home</i></a>'
})
export class HomeComponent {

  vm: HomeViewModel = null;

  constructor() {
    this.vm = new HomeViewModel({});
  }

  setView(view) {
    this.vm.set('view', view);
  }

  onClick(e) {
    e.preventDefault();
    if (!this.vm.view) {
        return;
    }
    this.vm.goHome();
  }
}