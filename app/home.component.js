var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define(["require", "exports", 'angular2/core', 'esri-mods'], function (require, exports, core_1, esri_mods_1) {
    var HomeComponent = (function () {
        function HomeComponent() {
            this.vm = null;
            this.view = null;
            esri_mods_1.topic.subscribe('map-view', this.onMapView.bind(this));
        }
        HomeComponent.prototype.onMapView = function (view) {
            this.vm = new esri_mods_1.HomeViewModel({
                view: view
            });
        };
        HomeComponent.prototype.onClick = function (e) {
            e.preventDefault();
            this.vm.goHome();
        };
        HomeComponent = __decorate([
            core_1.Component({
                selector: 'esri-home',
                template: '<a class="esri-home" href="#" (click)="onClick($event)"><i class="material-icons">home</i></a>'
            }), 
            __metadata('design:paramtypes', [])
        ], HomeComponent);
        return HomeComponent;
    })();
    exports.HomeComponent = HomeComponent;
});
//# sourceMappingURL=home.component.js.map