(function (window, System) {
  var esriLoader = {};

  // return the last part of a module name
  // TODO: there's potential for name collisions here, 
  // so may need to make this a little smarter
  function moduleName(name) {
    return name.match(/[^\/]+$/).shift();
  }

  // takes an array of modules and registers them as a module
  // with system.js using the given module name
  function esriRegister(name, mods, names) {
    System.register(name, [], function (exp) {
      return {
        setters: [],
        execute: function () {
          mods.map(function (mod, idx) {
            exp(moduleName(names[idx]), mod);
          });
        }
      };
    });
  }
  
  // load esri modules and expose via a System.js module
  esriLoader.require = function (config, moduleNames, callback) {
    // TODO: config should be optional, parse from arguments
    
    // call Dojo's require to load esri modules
    require(moduleNames, function () {

      // get modules from arguments
      var modules = [];
      for (var _i = 0; _i < arguments.length; _i++) {
        modules[_i - 0] = arguments[_i];
      }
  
      // register a System.js module to wrap the required modules
      esriRegister(config.moduleName || 'esri', modules, moduleNames);
  
      // call callback (if any)
      if (callback) {
        callback();
      }
    });
  };
  
  // export esriLoader (as a global for now)
  window.esriLoader = esriLoader;
})(window, System);
