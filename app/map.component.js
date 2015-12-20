var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define(["require", "exports", 'angular2/core', './map.service', 'esri-mods'], function (require, exports, core_1, map_service_1, esri_mods_1) {
    var MapComponent = (function () {
        function MapComponent(_service, elRef) {
            this._service = _service;
            this.elRef = elRef;
            this.view = null;
        }
        MapComponent.prototype.ngOnInit = function () {
            this.view = new esri_mods_1.MapView({
                container: this.elRef.nativeElement.firstChild,
                map: this._service.map,
                zoom: 10,
                center: [-120.76, 37.93]
            });
            this._service.setView(this.view);
        };
        MapComponent = __decorate([
            core_1.Component({
                selector: 'esri-map',
                template: '<div id="viewDiv"></div>',
                providers: [map_service_1.default]
            }), 
            __metadata('design:paramtypes', [map_service_1.default, core_1.ElementRef])
        ], MapComponent);
        return MapComponent;
    })();
    exports.MapComponent = MapComponent;
});
//# sourceMappingURL=map.component.js.map