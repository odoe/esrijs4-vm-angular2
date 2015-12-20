define(["require", "exports", 'esri-mods'], function (require, exports, esri_mods_1) {
    var MapService = (function () {
        function MapService() {
            this.view = null;
            this.map = null;
            this.map = new esri_mods_1.Map({ basemap: 'topo' });
        }
        MapService.prototype.setView = function (view) {
            console.log('set view', view);
            this.view = view;
            esri_mods_1.topic.publish('map-view', view);
        };
        return MapService;
    })();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = MapService;
});
//# sourceMappingURL=map.service.js.map