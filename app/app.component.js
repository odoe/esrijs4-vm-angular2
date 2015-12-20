var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define(["require", "exports", 'angular2/core', './map.component', './home.component'], function (require, exports, core_1, map_component_1, home_component_1) {
    var AppComponent = (function () {
        function AppComponent() {
        }
        AppComponent = __decorate([
            core_1.Component({
                directives: [map_component_1.MapComponent, home_component_1.HomeComponent],
                selector: 'my-app',
                template: "\n    <div>\n    <esri-map></esri-map>\n    <esri-home></esri-home>\n    </div>\n    "
            }), 
            __metadata('design:paramtypes', [])
        ], AppComponent);
        return AppComponent;
    })();
    exports.AppComponent = AppComponent;
});
//# sourceMappingURL=app.component.js.map