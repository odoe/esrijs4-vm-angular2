var deps = [
    'esri/Map',
    'esri/views/MapView',
    'esri/widgets/Home/HomeViewModel',
    'dojo/topic'
];
var moduleName = function (name) { return name.match(/[^\/]+$/).shift(); };
System.config({
    packages: {
        app: {
            defaultExtension: 'js'
        }
    }
});
function register(name, mods) {
    System.register(name, [], function (exp) {
        return {
            setters: [],
            execute: function () {
                mods.map(function (mod, idx) {
                    exp(moduleName(deps[idx]), mod);
                });
            }
        };
    });
}
require(deps, function () {
    var modules = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        modules[_i - 0] = arguments[_i];
    }
    register('esri-mods', modules);
    System.import('app/boot')
        .then(null, console.error.bind(console));
});
//# sourceMappingURL=load.js.map