declare var System: any;

// configure system.js
System.config({
  packages: {
    app: {
      defaultExtension: 'js'
    }
  }
});

// load esri modules needed by this application
// into a System.js module called esri-mods
esriLoader.require({
  moduleName: 'esri-mods'
}, [
  'esri/Map',
  'esri/views/MapView',
  'esri/widgets/Home/HomeViewModel'
], () => {
  // then bootstrap application
  System.import('app/boot')
    .then(null, console.error.bind(console));  
});
