import { Map, MapView, topic } from 'esri-mods';

export default class MapService {
  view: null;
  map: null;
  constructor() {
    this.map = new Map({ basemap: 'topo' });
  },
  
  setView(view) {
    console.log('set view', view);
    this.view = view;
    topic.publish('map-view', view);
  }
}

