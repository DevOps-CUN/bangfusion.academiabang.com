(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-tipo-virtual-virtual-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/tipo/virtual/virtual.page.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/tipo/virtual/virtual.page.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\n  <div *ngIf=\"section == 'video'\">\n    <img (click)=\"maqueta();\"src=\"assets/imgs/Botones/Botón_cancelar.png\" class=\"cerrar\">\n    <video  controls class=\"video\" playsinline>\n      <source \n        src=\"https://player.vimeo.com/external/599636474.hd.mp4?s=2e698112b37339b8d18c81d5d3e793e2f7c4e9ed&profile_id=174&oauth2_token_id=1180246399\"\n        type=\"video/mp4\"\n      />\n    </video>\n  </div>\n  <div *ngIf=\"section == 'virtual'\">\n    <img src=\"assets/imgs/19/FONDO.png\" alt=\"\" class=\"fondo-comenzar\" />\n    <img src=\"assets/imgs/19/BASE.png\" alt=\"\" class=\"base\" />\n    <ion-button\n      (click)=\"section = 'ultimas';iniciador()\"\n      class=\"btn-avanzar\"\n      fill=\"clear\"\n      shape=\"round\"\n    >\n      <img src=\"assets/imgs/19/AVANZAR.png\" />\n    </ion-button>\n  </div>\n  <!-- Ultimas preguntas -->\n  <div *ngIf=\"section == 'ultimas'\">\n    <img (click)=\"avanzar('foto');\"src=\"assets/imgs/Botones/Botón_atras.png\" class=\"atras\">\n    <img src=\"assets/imgs/Ultimos recursos/fondo-analisis.png\"  alt=\"\" class=\"fondo-comenzar\" />\n    <img src=\"assets/imgs/19/C.png\" (click)=\"openPopUP('C')\" alt=\"\" class=\"c\" />\n    <img src=\"assets/imgs/Ultimos recursos/1c.png\"(click)=\"openPopUP('C')\"class=\"c2\"/>\n    <img src=\"assets/imgs/19/R.png\" (click)=\"openPopUP('R')\" alt=\"\" class=\"r\" />\n    <img src=\"assets/imgs/Ultimos recursos/2r.png\"(click)=\"openPopUP('R')\"class=\"r2\"/>\n    <img src=\"assets/imgs/19/P.png\" (click)=\"openPopUP('P')\" alt=\"\" class=\"p2\" />\n    <img src=\"assets/imgs/Ultimos recursos/3p.png\"(click)=\"openPopUP('P')\"class=\"p3\"/>\n    <img src=\"assets/imgs/19/V.png\" (click)=\"openPopUP('V')\" alt=\"\" class=\"v\" />\n    <img src=\"assets/imgs/Ultimos recursos/4v.png\"(click)=\"openPopUP('V')\"class=\"v2\"/>\n              <!-- popups -->\n              <div   *ngIf=\"V\" >\n                <img\n                src=\"assets/imgs/19/POP UP V.png\"\n                (click)=\"openPopUP('V')\"\n                class=\"pop-up\"\n                />\n                <ion-textarea\n                class=\"text_V\"\n                [(ngModel)]=\"textV\"\n                autofocus=\"true\"\n                placeholder=\" Escribe aqui...\"\n                autoGrow=\"false\"\n                wrap=\"hard\"\n                rows=\"8\"\n              ></ion-textarea>\n            \n              </div>\n              <div  *ngIf=\"C\">\n                <img\n                src=\"assets/imgs/19/POP UP C.png\"\n                (click)=\"openPopUP('C')\"\n                class=\"pop-up\"\n                />\n                <ion-textarea\n                class=\"text_V\"\n                autofocus=\"true\"\n                placeholder=\" Escribe aqui...\"\n                [(ngModel)]=\"textC\"\n                autoGrow=\"false\"\n                wrap=\"hard\"\n                rows=\"8\"\n              ></ion-textarea>\n              </div>\n              <div *ngIf=\"P\">\n                <img\n                src=\"assets/imgs/19/POP UP P.png\"\n                (click)=\"openPopUP('P')\"\n                \n                class=\"pop-up\"\n                />\n                <ion-textarea\n                class=\"text_V\"\n                autofocus=\"true\"\n                [(ngModel)]=\"textP\"\n                placeholder=\" Escribe aqui...\"\n                autoGrow=\"false\"\n                wrap=\"hard\"\n                rows=\"8\"\n              ></ion-textarea>\n              </div>\n              <div *ngIf=\"R\">\n                <img\n                src=\"assets/imgs/19/POP UP R.png\"\n                (click)=\"openPopUP('R')\"\n                \n                class=\"pop-up\"\n                />\n                <ion-textarea\n                class=\"text_V\"\n                autofocus=\"true\"\n                placeholder=\" Escribe aqui...\"\n                autoGrow=\"false\"\n                [(ngModel)]=\"textR\"\n                wrap=\"hard\"\n                rows=\"8\"\n              ></ion-textarea>\n              </div>\n    <img (click)=\"learn();section = 'felicitaciones1'\"\n    class=\"btn-avanzar\"\n    src=\"assets/imgs/23/AVANZAR.png\" >\n  </div>\n  <!-- Felicitaciones 1 -->\n  <div *ngIf=\"section == 'felicitaciones1'\" >\n    <img src=\"assets/imgs/24/FONDO.png\" class=\"fondo-comenzar\"/>\n    <img (click)=\"avanzar('herramientas');\"src=\"assets/imgs/Botones/Botón_atras.png\" class=\"atras\">\n    <img src=\"assets/imgs/24/TEXTO.png\" class=\"texto_felicitaciones\"/>\n    <img src=\"assets/imgs/Ultimos recursos/Escanea.png\" class=\"acerca\"/>\n    <img     \n    (click)=\"learn();alLector()\"\n    class=\"btn-finalizar2\"\n    src=\"assets/imgs/23/AVANZAR.png\" >\n  </div>\n  <!-- Felicitaciones salida scanner -->\n  <div *ngIf=\"section == 'feli1'\" >\n    <img src=\"assets/imgs/24/FONDO.png\" alt=\"\" class=\"fondo-comenzar\"/>\n    <img src=\"assets/imgs/24/final.png\" alt=\"\" class=\"texto_feli\"/>\n    <img       \n    (click)=\"section ='feli2'\"\n    class=\"btn-avanzar\"\n    src=\"assets/imgs/23/AVANZAR.png\" >\n  </div>\n        <!-- Felicitaciones 2 -->\n  <div *ngIf=\"section == 'feli2'\">\n    <img src=\"assets/imgs/24/FONDO.png\" alt=\"\" class=\"fondo-comenzar\"/>\n    <img src=\"assets/imgs/24/TEXTO.png\" alt=\"\" class=\"texto_felicitaciones\"/>\n    <div class=\"acerca\">\n      <ion-textarea\n      class=\"texto_aprender\"\n      autofocus=\"true\"\n      [(ngModel)]=\"aprendizaje\"\n      placeholder=\"¿Qué aprendiste hoy?\"\n      autoGrow=\"true\"\n      wrap=\"hard\"\n      rows=\"3\"\n    ></ion-textarea>\n    </div>  \n    <img (click)=\"learn();\"\n    class=\"btn-descargar\" \n    src=\"assets/imgs/24/DESCARGAR.png\" >\n    <img       \n    (click)=\"learn();\"\n    routerLink=\"/home/home\"\n    class=\"btn-finalizar\" \n    src=\"assets/imgs/24/FINALIZAR.png\" >\n  </div>\n  <ion-backdrop *ngIf=\"show\" [visible]=\"false\" tappable=\"false\"></ion-backdrop>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/pages/tipo/virtual/virtual-routing.module.ts":
/*!**************************************************************!*\
  !*** ./src/app/pages/tipo/virtual/virtual-routing.module.ts ***!
  \**************************************************************/
/*! exports provided: VirtualPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VirtualPageRoutingModule", function() { return VirtualPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _virtual_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./virtual.page */ "./src/app/pages/tipo/virtual/virtual.page.ts");




const routes = [
    {
        path: '',
        component: _virtual_page__WEBPACK_IMPORTED_MODULE_3__["VirtualPage"]
    }
];
let VirtualPageRoutingModule = class VirtualPageRoutingModule {
};
VirtualPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], VirtualPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/tipo/virtual/virtual.module.ts":
/*!******************************************************!*\
  !*** ./src/app/pages/tipo/virtual/virtual.module.ts ***!
  \******************************************************/
/*! exports provided: VirtualPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VirtualPageModule", function() { return VirtualPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _virtual_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./virtual-routing.module */ "./src/app/pages/tipo/virtual/virtual-routing.module.ts");
/* harmony import */ var _virtual_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./virtual.page */ "./src/app/pages/tipo/virtual/virtual.page.ts");







let VirtualPageModule = class VirtualPageModule {
};
VirtualPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _virtual_routing_module__WEBPACK_IMPORTED_MODULE_5__["VirtualPageRoutingModule"]
        ],
        declarations: [_virtual_page__WEBPACK_IMPORTED_MODULE_6__["VirtualPage"]]
    })
], VirtualPageModule);



/***/ }),

/***/ "./src/app/pages/tipo/virtual/virtual.page.scss":
/*!******************************************************!*\
  !*** ./src/app/pages/tipo/virtual/virtual.page.scss ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".fondo-comenzar {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  z-index: -2;\n}\n\n.video {\n  width: 100vw;\n}\n\n.cerrar {\n  position: absolute;\n  right: 2vw;\n  top: 1vh;\n  width: 10vw;\n  height: 8vh;\n  z-index: 3;\n}\n\n.base {\n  position: absolute;\n  width: 89vw;\n  top: 25vh;\n  left: 6vw;\n}\n\n.btn-op1 {\n  position: absolute;\n  width: 33vw;\n  height: 12vh;\n  top: 75vh;\n  left: 2vw;\n}\n\n.btn-op2 {\n  position: absolute;\n  width: 33vw;\n  height: 12vh;\n  top: 75vh;\n  left: 23vw;\n}\n\n.btn-op3 {\n  position: absolute;\n  width: 33vw;\n  height: 12vh;\n  top: 75vh;\n  left: 44vw;\n}\n\n.btn-op4 {\n  position: absolute;\n  width: 33vw;\n  height: 12vh;\n  top: 75vh;\n  left: 65vw;\n}\n\n.btn-avanzar {\n  position: absolute;\n  width: 65vw;\n  bottom: 4vh;\n  right: 2vw;\n}\n\n.pop-up {\n  position: absolute;\n  left: 50%;\n  top: 30%;\n  transform: translate(-50%, -50%);\n  width: 80%;\n  z-index: 3;\n}\n\nion-backdrop {\n  background-color: var(--ion-color-primary);\n  opacity: 0.9;\n}\n\n.texto_felicitaciones {\n  position: absolute;\n  width: 94vw;\n  top: 7vh;\n  left: 3vw;\n}\n\n.acerca {\n  position: absolute;\n  width: 92vw;\n  top: 32vh;\n  left: 4vw;\n}\n\n.btn-descargar {\n  position: absolute;\n  width: 77vw;\n  top: 80vh;\n  left: 11vw;\n}\n\n.btn-finalizar {\n  position: absolute;\n  width: 77vw;\n  top: 88vh;\n  left: 11vw;\n}\n\n.texto_aprender {\n  height: 40vh;\n  margin-left: 1vw;\n  width: 90vw;\n  background-color: #e4e2e3;\n  border-radius: 5px;\n  font-family: \"Delius\";\n  color: black;\n  padding-left: 10px;\n  padding-right: 10px;\n  text-align: center;\n}\n\n.c {\n  position: absolute;\n  width: 41vw;\n  top: 30vh;\n  left: 8vw;\n}\n\n.c2 {\n  position: absolute;\n  width: 10vw;\n  top: 30vh;\n  left: 8vw;\n  height: 5vh;\n}\n\n.r {\n  position: absolute;\n  width: 41vw;\n  top: 30vh;\n  left: 54vw;\n}\n\n.r2 {\n  position: absolute;\n  width: 10vw;\n  top: 30vh;\n  left: 54vw;\n  height: 5vh;\n}\n\n.p2 {\n  position: absolute;\n  width: 41vw;\n  top: 55vh;\n  left: 8vw;\n}\n\n.p3 {\n  position: absolute;\n  width: 10vw;\n  top: 55vh;\n  left: 8vw;\n  height: 5vh;\n}\n\n.v {\n  position: absolute;\n  width: 41vw;\n  top: 55vh;\n  left: 54vw;\n}\n\n.v2 {\n  position: absolute;\n  width: 10vw;\n  top: 55vh;\n  left: 54vw;\n  height: 5vh;\n}\n\n.text_V {\n  position: absolute;\n  z-index: 3;\n  bottom: 9vh;\n  height: 34vh;\n  width: 80vw;\n  left: 12vw;\n  background-color: #e4e2e3;\n  border-radius: 31px;\n  font-family: \"Delius\";\n  color: black;\n  padding-left: 10px;\n  padding-right: 15px;\n  text-align: center;\n}\n\n.btn-finalizar2 {\n  position: absolute;\n  width: 53vw;\n  top: 88vh;\n  left: 32vw;\n}\n\n.atras {\n  position: absolute;\n  left: 2vh;\n  top: 87vh;\n  width: 17vw;\n  height: 10vh;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdGlwby92aXJ0dWFsL3ZpcnR1YWwucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQUNKOztBQUNBO0VBQ0ksWUFBQTtBQUVKOztBQUFBO0VBQ0ksa0JBQUE7RUFDQSxVQUFBO0VBQ0EsUUFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtBQUdKOztBQURBO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLFNBQUE7QUFJSjs7QUFGQTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxTQUFBO0VBQ0EsU0FBQTtBQUtKOztBQUhBO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0FBTUo7O0FBSkE7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7QUFPSjs7QUFMQTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtBQVFKOztBQU5BO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7QUFTSjs7QUFQQTtFQUNJLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7RUFDQSxnQ0FBQTtFQUNBLFVBQUE7RUFDQSxVQUFBO0FBVUo7O0FBUkE7RUFDSSwwQ0FBQTtFQUNBLFlBQUE7QUFXSjs7QUFQQTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0FBVUo7O0FBUkE7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0VBQ0EsU0FBQTtBQVdKOztBQVRBO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7QUFZSjs7QUFWQTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0FBYUo7O0FBWEE7RUFDSSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQWNKOztBQVhBO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLFNBQUE7QUFjSjs7QUFaQTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtBQWVKOztBQWJBO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7QUFnQko7O0FBZEE7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7QUFpQko7O0FBZkE7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0VBQ0EsU0FBQTtBQWtCSjs7QUFoQkE7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7QUFtQko7O0FBakJBO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7QUFvQko7O0FBbEJBO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0FBcUJKOztBQW5CQTtFQUNJLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FBc0JKOztBQXBCQTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0FBdUJKOztBQXJCQTtFQUNJLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQXdCSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3RpcG8vdmlydHVhbC92aXJ0dWFsLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb25kby1jb21lbnphciB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB6LWluZGV4OiAtMjtcbiAgfVxuLnZpZGVve1xuICAgIHdpZHRoOiAxMDB2dztcbn1cbi5jZXJyYXJ7ICAgIFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogMnZ3O1xuICAgIHRvcDogMXZoO1xuICAgIHdpZHRoOiAxMHZ3O1xuICAgIGhlaWdodDogOHZoO1xuICAgIHotaW5kZXg6IDM7XG4gIH1cbi5iYXNle1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDogODl2dztcbiAgICB0b3A6IDI1dmg7XG4gICAgbGVmdDogNnZ3O1xufVxuLmJ0bi1vcDF7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHdpZHRoOiAzM3Z3O1xuICAgIGhlaWdodDogMTJ2aDtcbiAgICB0b3A6IDc1dmg7XG4gICAgbGVmdDogMnZ3O1xufVxuLmJ0bi1vcDJ7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHdpZHRoOiAzM3Z3O1xuICAgIGhlaWdodDogMTJ2aDtcbiAgICB0b3A6IDc1dmg7XG4gICAgbGVmdDogMjN2dztcbn1cbi5idG4tb3Aze1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDogMzN2dztcbiAgICBoZWlnaHQ6IDEydmg7XG4gICAgdG9wOiA3NXZoO1xuICAgIGxlZnQ6IDQ0dnc7XG59XG4uYnRuLW9wNHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgd2lkdGg6IDMzdnc7XG4gICAgaGVpZ2h0OiAxMnZoO1xuICAgIHRvcDogNzV2aDtcbiAgICBsZWZ0OiA2NXZ3O1xufVxuLmJ0bi1hdmFuemFye1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDogNjV2dztcbiAgICBib3R0b206IDR2aDtcbiAgICByaWdodDogMnZ3O1xufVxuLnBvcC11cCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IDUwJTtcbiAgICB0b3A6IDMwJTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgICB3aWR0aDogODAlO1xuICAgIHotaW5kZXg6IDM7XG4gIH1cbmlvbi1iYWNrZHJvcCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICAgIG9wYWNpdHk6IDAuOTtcbiAgfVxuICBcbi8vZmVsaWNpdGFjaW9uZXMgMVxuLnRleHRvX2ZlbGljaXRhY2lvbmVze1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDogOTR2dztcbiAgICB0b3A6IDd2aDtcbiAgICBsZWZ0OiAzdnc7XG59XG4uYWNlcmNhe1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDogOTJ2dztcbiAgICB0b3A6IDMydmg7XG4gICAgbGVmdDogNHZ3O1xufVxuLmJ0bi1kZXNjYXJnYXJ7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHdpZHRoOiA3N3Z3O1xuICAgIHRvcDogODB2aDtcbiAgICBsZWZ0OiAxMXZ3O1xufVxuLmJ0bi1maW5hbGl6YXJ7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHdpZHRoOiA3N3Z3O1xuICAgIHRvcDo4OHZoO1xuICAgIGxlZnQ6IDExdnc7XG59XG4udGV4dG9fYXByZW5kZXJ7XG4gICAgaGVpZ2h0OiA0MHZoO1xuICAgIG1hcmdpbi1sZWZ0OiAxdnc7XG4gICAgd2lkdGg6IDkwdnc7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2U0ZTJlMztcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgZm9udC1mYW1pbHk6IFwiRGVsaXVzXCI7XG4gICAgY29sb3I6IGJsYWNrO1xuICAgIHBhZGRpbmctbGVmdDogMTBweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi8vdWx0aW1hcyBQcmVndW50YXNcbi5je1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDogNDF2dztcbiAgICB0b3A6IDMwdmg7XG4gICAgbGVmdDogOHZ3O1xufVxuLmMye1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDogMTB2dztcbiAgICB0b3A6IDMwdmg7XG4gICAgbGVmdDogOHZ3O1xuICAgIGhlaWdodDogNXZoO1xufVxuLnJ7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHdpZHRoOiA0MXZ3O1xuICAgIHRvcDogMzB2aDtcbiAgICBsZWZ0OiA1NHZ3O1xufVxuLnIye1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDogMTB2dztcbiAgICB0b3A6IDMwdmg7XG4gICAgbGVmdDogNTR2dztcbiAgICBoZWlnaHQ6IDV2aDtcbn1cbi5wMntcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgd2lkdGg6IDQxdnc7XG4gICAgdG9wOiA1NXZoO1xuICAgIGxlZnQ6IDh2dztcbn1cbi5wM3tcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgd2lkdGg6IDEwdnc7XG4gICAgdG9wOiA1NXZoO1xuICAgIGxlZnQ6IDh2dztcbiAgICBoZWlnaHQ6IDV2aDtcbn1cbi52e1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDogNDF2dztcbiAgICB0b3A6IDU1dmg7XG4gICAgbGVmdDogNTR2dztcbn1cbi52MntcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgd2lkdGg6IDEwdnc7XG4gICAgdG9wOiA1NXZoO1xuICAgIGxlZnQ6IDU0dnc7XG4gICAgaGVpZ2h0OiA1dmg7XG59XG4udGV4dF9We1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB6LWluZGV4OiAzO1xuICAgIGJvdHRvbTogOXZoO1xuICAgIGhlaWdodDogMzR2aDtcbiAgICB3aWR0aDogODB2dztcbiAgICBsZWZ0OiAxMnZ3O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNlNGUyZTM7XG4gICAgYm9yZGVyLXJhZGl1czogMzFweDtcbiAgICBmb250LWZhbWlseTogXCJEZWxpdXNcIjtcbiAgICBjb2xvcjogYmxhY2s7XG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDE1cHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmJ0bi1maW5hbGl6YXIye1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDogNTN2dztcbiAgICB0b3A6IDg4dmg7XG4gICAgbGVmdDogMzJ2dztcbn1cbi5hdHJhc3tcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogMnZoO1xuICAgIHRvcDogODd2aDtcbiAgICB3aWR0aDogMTd2dztcbiAgICBoZWlnaHQ6IDEwdmg7XG4gIH0iXX0= */");

/***/ }),

/***/ "./src/app/pages/tipo/virtual/virtual.page.ts":
/*!****************************************************!*\
  !*** ./src/app/pages/tipo/virtual/virtual.page.ts ***!
  \****************************************************/
/*! exports provided: VirtualPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VirtualPage", function() { return VirtualPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _services_servicio_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../../services/servicio.service */ "./src/app/services/servicio.service.ts");




let VirtualPage = class VirtualPage {
    constructor(serv, router) {
        this.serv = serv;
        this.router = router;
        this.section = "";
        this.show = false;
        this.textV = "";
        this.textC = "";
        this.textR = "";
        this.textP = "";
        this.V = false;
        this.pdf = {
            id: '',
            num: '',
            nombre: '',
            ambiente: '',
            factor: '',
            personaje: '',
            solitario: true,
            solido: '',
            gaseoso: '',
            liquido: '',
            P1: '',
            P2: '',
            P3_1: '',
            P3_2: '',
            P3_3: '',
            P3_4: '',
            tarjeta: '',
            tarjeta2: '',
            idea1: '',
            idea2: '',
            idea3: '',
            idea4: '',
            ideaselecionada: '',
            aprendizaje: '',
            V: '',
            C: '',
            R: '',
            P: '',
            tipo: '',
            img: ''
        };
    }
    avanzar(section) {
        this.section = section;
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.section = "video";
            this.mipromesa();
        });
    }
    iniciador() {
        this.pdf = this.objaux;
        this.pdf.tipo = "virtual";
    }
    openPopUP(item) {
        this.show = !this.show;
        switch (item) {
            case 'V':
                this.V = !this.V;
                break;
            case 'R':
                this.R = !this.R;
                break;
            case 'C':
                this.C = !this.C;
                break;
            case 'P':
                this.P = !this.P;
                break;
            default:
                break;
        }
        this.pdf.V = this.textV;
        this.pdf.C = this.textC;
        this.pdf.P = this.textP;
        this.pdf.R = this.textR;
    }
    learn() {
        this.pdf.tipo = "virtual";
        this.serv.addItem(this.pdf);
        this.serv.editar2(this.pdf.id, this.pdf, this.pdf.num);
    }
    alLector() {
        this.router.navigateByUrl('scanner');
    }
    maqueta() {
        this.router.navigateByUrl('mvirtual');
    }
    mipromesa() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            new Promise((resolve) => {
                this.objaux = JSON.parse(this.serv.getItem('_cap_pdf2'));
                this.pdf = this.objaux;
                return resolve(this.pdf);
            });
        });
    }
    mipromesa2() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            new Promise((resolve) => {
                this.objaux = JSON.parse(this.serv.getItem('pdf'));
                this.pdf = this.objaux;
                return resolve(this.pdf);
            });
        });
    }
};
VirtualPage.ctorParameters = () => [
    { type: _services_servicio_service__WEBPACK_IMPORTED_MODULE_3__["ServicioService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
VirtualPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-virtual',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./virtual.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/tipo/virtual/virtual.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./virtual.page.scss */ "./src/app/pages/tipo/virtual/virtual.page.scss")).default]
    })
], VirtualPage);



/***/ })

}]);
//# sourceMappingURL=pages-tipo-virtual-virtual-module-es2015.js.map