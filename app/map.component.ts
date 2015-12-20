import { Component, ElementRef } from 'angular2/core';
import MapService from './map.service';
import { MapView } from 'esri-mods';

@Component({
    selector: 'esri-map',
    template: '<div id="viewDiv"></div>',
    providers: [MapService]
})
export class MapComponent {
  
  view: null,
  
  constructor(public _service: MapService, private elRef:ElementRef) {}
  
  ngOnInit() {
    this.view = new MapView({
      container: this.elRef.nativeElement.firstChild,
      map: this._service.map,
      zoom: 10,
      center: [-120.76, 37.93]
    });
    this._service.setView(this.view);
  }
}