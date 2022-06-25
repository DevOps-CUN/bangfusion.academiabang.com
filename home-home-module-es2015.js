(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content class=\"ion-no-padding\" [fullscreen]=\"true\">\n  <!-- inicio -->\n  <div *ngIf=\"section == 'home'\">\n    <img src=\"assets/imgs/1/FONDO.png\" alt=\"\" class=\"fondo-comenzar\" />\n    <img type=\"image/png\" class=\"logo\" src=\"assets/imgs/1/LOGO.png\" alt=\"\" />\n    <img src=\"assets/imgs/Ultimos recursos/Tablero-bang1.png\" alt=\"\" class=\"texto-home\" />\n      <img (click)=\"startsession();\" class=\"btn-jugar\" src=\"assets/imgs/Ultimos recursos/boton-iniciar-sesion.png\" />\n      <img (click)=\"avanzar('explora');\" class=\"btn-explora\" src=\"assets/imgs/Ultimos recursos/boton explora tu tablero.png\" />\n  </div>\n\n  <!-- explora -->\n  <div *ngIf=\"section == 'explora'\">\n    <img src=\"assets/imgs/Ultimos recursos/Fondo-explora.png\" alt=\"\" class=\"fondo-comenzar\" />\n    <img (click)=\"avanzar('home');\"src=\"assets/imgs/Botones/Botón_atras.png\" class=\"atras\">\n    <img\n      (click)=\"alLector()\"\n      src=\"assets/imgs/2/SOLIDO.png\"\n      alt=\"\"\n      class=\"solidoE\"\n    />\n    <img\n      (click)=\"alLector()\"\n      src=\"assets/imgs/2/GASEOSO.png\"\n      alt=\"\"\n      class=\"gaseosoE\"\n    />\n    <img\n      (click)=\"alLector()\"\n      src=\"assets/imgs/2/LIQUIDO.png\"\n      class=\"liquidoE\"/>\n\n  </div>\n  \n  <!-- inicio Jugar y Ideas -->\n  <div *ngIf=\"section == 'antes'\">\n    <img src=\"assets/imgs/1/FONDO.png\" alt=\"\" class=\"fondo-comenzar\" />\n    <img type=\"image/png\" class=\"logo\" src=\"assets/imgs/1/LOGO.png\" alt=\"\" />\n    <object data=\"assets/imgs/1/TEXTO.png\" type=\"\" class=\"texto\"></object>\n    <img (click)=\"avanzar('home');\"src=\"assets/imgs/Botones/Botón_atras.png\" class=\"atras\">\n      <img (click)=\"section='jugar'\"\n      class=\"btn-jugar\"\n      src=\"assets/imgs/1/JUGAR.png\" />\n      <img (click)=\"ideas(pdf);getAllIdeas(pdf);section='ideas'\"\n      class=\"btn-ideas\"\n      src=\"assets/imgs/Ultimos recursos/boton-mis-ideas.png\" />\n  </div>\n\n  <div  *ngIf=\"section == 'ideas'\" >\n    <img class=\"Fondito\" src=\"assets/imgs/1/FONDO.png\" >\n    <div  *ngIf=\"eliminarB\">\n\n      <img id=\"fondo-eliminar\" src=\"assets/imgs/15/CARTA REVES.png\" >\n       <p id=\"texto-eliminar\">¿Deseas eliminar este Bang?</p>\n      <img id=\"boton-eliminar\"(click)=\"eliminarN();openPopUP('eliminar');avanzar('antes');\" src=\"assets/imgs/15/ELIMINAR.png\" >\n      <img id=\"boton-cancelar\" (click)=\"openPopUP('eliminar');\" src=\"assets/imgs/15/CANCELAR-ELIMINAR.png\" >\n   </div>\n   <div class=\"cuerpo-ideas\">   \n     <div class=\"Cont-ideas\" *ngFor=\"let item of getBang; let i=index\">\n\n      <img (click)=\"openPopUP('eliminar');guardarEliminacion(i);\" src=\"assets/imgs/Botones/Botón_cancelar.png\" class=\"cerrar\">\n        <div\n            (click)=\"BangSeleccionado(i);\"\n            class=\"ideas\" \n            autoGrow=\"true\"\n            wrap=\"hard\"\n            rows=\"2\"> \n            <p class=\"text_ideas\">\n            {{getBang[i]}}\n            </p>\n          <img class=\"desarrolla\" src=\"assets/imgs/24/DESCARGAR.png\" >\n        </div>\n  <!-- // -->\n    </div>\n   </div>\n    <img (click)=\"avanzar('antes');\"src=\"assets/imgs/Botones/Botón_atras.png\" class=\"atras\">\n   \n  </div>\n\n  <!-- como jugar -->\n  <div *ngIf=\"section == 'jugar'\">\n    <img src=\"assets/imgs/1/FONDO.png\" alt=\"\" class=\"fondo-comenzar\" />\n    <div class=\"title-bg\">\n      <h1 class=\"como-jugar ion-text-center\">¿Cómo jugar?</h1>\n    </div>\n    <img (click)=\"avanzar('antes');\"src=\"assets/imgs/Botones/Botón_atras.png\" class=\"atras\">\n    <img src=\"assets/imgs/2/SVG/TEXTO.svg\" alt=\"\" class=\"cori-texto\" />\n    <img src=\"assets/imgs/2/SVG/FLECHAS.svg\" class=\"flechas\" alt=\"\" />\n    <img\n      (click)=\"openPopUP('solido')\"\n      src=\"assets/imgs/2/SOLIDO.png\"\n      alt=\"\"\n      class=\"solido\"\n    />\n    <img\n      (click)=\"openPopUP('gaseoso')\"\n      src=\"assets/imgs/2/GASEOSO.png\"\n      alt=\"\"\n      class=\"gaseoso\"\n    />\n    <img\n      (click)=\"openPopUP('liquido')\"\n      src=\"assets/imgs/2/LIQUIDO.png\"\n      class=\"liquido\"/>\n      <img *ngIf=\"vioT\"\n      class=\"btn-avanzar\"\n        src=\"assets/imgs/2/AVANZAR.png\"\n        alt=\"\"\n        (click)=\"section='cuantasPersonas'\"/>\n\n    <!-- popups -->\n    <img\n      src=\"assets/imgs/2/POP_UP_LIQUIDO.png\"\n      alt=\"\"\n      (click)=\"openPopUP('liquido')\"\n      *ngIf=\"liquido\"\n      class=\"pop-up\"\n    />\n    <img\n      src=\"assets/imgs/2/POP_UP_GASEOSO.png\"\n      alt=\"\"\n      (click)=\"openPopUP('gaseoso')\"\n      *ngIf=\"gaseoso\"\n      class=\"pop-up\"\n    />\n    <img\n      src=\"assets/imgs/2/POP_UP_SOLIDO.png\"\n      alt=\"\"\n      (click)=\"openPopUP('solido')\"\n      *ngIf=\"solido\"\n      class=\"pop-up\"\n    />\n  </div>\n\n  <!-- cuantas personas van a jugar -->\n  <div *ngIf=\"section == 'cuantasPersonas'\">\n    <img src=\"assets/imgs/3/FONDO.png\" alt=\"\" class=\"fondo-cuantas-personas\" />\n      <img \n      (click)=\"avanzar('ambiente'); cuantasPersonas(1);eliminar();\"\n      class=\"una-persona\"\n      src=\"assets/imgs/3/UNA_PERSONA.png\" alt=\"\" />\n      \n      <!--(click)=\"avanzar('ambiente'); cuantasPersonas(5);\" -->\n      <ion-fab-button\n      class=\"btn-info2\"\n      (click)=\"openPopUP('info')\">\n      <ion-icon name=\"add\" size=\"small\"></ion-icon>\n    </ion-fab-button>\n      <img \n      class=\"varias-personas\"\n      src=\"assets/imgs/Ultimos recursos/grupo-info.png\" alt=\"\" />\n          <!-- popups -->\n        <img\n        src=\"assets/imgs/Ultimos recursos/pop-up-grupo-info.png\"\n        (click)=\"openPopUP('info')\"\n        *ngIf=\"info\"\n        class=\"pop-up\"\n      />\n  </div>\n\n  <!-- Para comenzar debes tener claro el ambiente en el que deseas jugar -->\n\n  <div *ngIf=\"section == 'ambiente'\">\n    <img src=\"assets/imgs/4/FONDO.png\" alt=\"\" class=\"fondo-cuantas-personas\" />\n    <img (click)=\"avanzar('cuantasPersonas');\"src=\"assets/imgs/Botones/Botón_atras.png\" class=\"atras2\">\n    <div class=\"img-empresarial\">\n      <ion-fab-button\n        class=\"btn-info\"\n        (click)=\"switchAmbienteImg('empresarial')\"\n      >\n        <ion-icon name=\"add\" size=\"small\"></ion-icon>\n      </ion-fab-button>\n      <img\n        class=\"ambiente\"\n        (click)=\"guardar('empresarial');gotoSolido();\"\n        src=\"assets/imgs/4/{{imgAmbiente.empresarial}}.png\"\n      />\n    </div>\n\n    <div class=\"img-familiar\">\n      <ion-fab-button class=\"btn-info\" (click)=\"switchAmbienteImg('familiar')\">\n        <ion-icon name=\"add\" size=\"small\"></ion-icon>\n      </ion-fab-button>\n      <!--(click)=\"guardar('familiar');gotoSolido();\"-->\n      <img\n        class=\"ambiente\"\n        src=\"assets/imgs/4/{{imgAmbiente.familiar}}.png\"\n      />\n    </div>\n\n    <div class=\"img-social\">\n      <ion-fab-button class=\"btn-info\" (click)=\"switchAmbienteImg('social')\">\n        <ion-icon name=\"add\" size=\"small\"></ion-icon>\n      </ion-fab-button>\n         <!--(click)=\"guardar('social');gotoSolido();\"-->\n      <img\n        class=\"ambiente\"\n        src=\"assets/imgs/4/{{imgAmbiente.social}}.png\"\n      />\n    </div>\n  </div>\n\n  <ion-backdrop *ngIf=\"show\" [visible]=\"false\" tappable=\"false\"></ion-backdrop>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/home/home-routing.module.ts":
/*!*********************************************!*\
  !*** ./src/app/home/home-routing.module.ts ***!
  \*********************************************/
/*! exports provided: HomePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageRoutingModule", function() { return HomePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home.page */ "./src/app/home/home.page.ts");




const routes = [
    {
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_3__["HomePage"],
    }
];
let HomePageRoutingModule = class HomePageRoutingModule {
};
HomePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], HomePageRoutingModule);



/***/ }),

/***/ "./src/app/home/home.module.ts":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home.page */ "./src/app/home/home.page.ts");
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home-routing.module */ "./src/app/home/home-routing.module.ts");







let HomePageModule = class HomePageModule {
};
HomePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
            _home_routing_module__WEBPACK_IMPORTED_MODULE_6__["HomePageRoutingModule"]
        ],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_5__["HomePage"]]
    })
], HomePageModule);



/***/ }),

/***/ "./src/app/home/home.page.scss":
/*!*************************************!*\
  !*** ./src/app/home/home.page.scss ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".fondo-comenzar {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n  z-index: -2;\n}\n\n.btn-explora {\n  position: fixed;\n  width: 60vw;\n  bottom: 6vh;\n  left: 20vw;\n}\n\n.Fondito {\n  position: fixed;\n  height: 100vh;\n  width: 100vw;\n  z-index: 0;\n}\n\n.cerrar {\n  width: 9vw;\n  height: auto;\n  z-index: 2;\n  position: absolute;\n  right: 9%;\n  margin-top: 1%;\n}\n\n#fondo-eliminar {\n  position: absolute;\n  z-index: 20;\n  width: 80vw;\n  left: 10vw;\n  top: 18vh;\n}\n\n#texto-eliminar {\n  position: absolute;\n  z-index: 20;\n  font-size: 1.8rem;\n  font-family: \"Delius\";\n  top: 20vh;\n  left: 15%;\n  width: 70%;\n  text-align: center;\n}\n\n#boton-eliminar {\n  position: absolute;\n  z-index: 20;\n  width: 50vw;\n  top: 50vh;\n  left: 26vw;\n}\n\n#boton-cancelar {\n  position: absolute;\n  z-index: 20;\n  width: 50vw;\n  top: 60vh;\n  left: 26vw;\n}\n\n.atras {\n  position: absolute;\n  left: 2vh;\n  top: 3vh;\n  width: 17vw;\n  height: 10vh;\n}\n\n.atras2 {\n  position: absolute;\n  left: 2vh;\n  top: 23vh;\n  width: 16vw;\n  height: 9vh;\n}\n\n.logo {\n  position: fixed;\n  left: 15vw;\n  top: 3vh;\n  width: 70vw;\n  height: 40vh;\n}\n\n.ambiente {\n  border: 0;\n  height: 20vh;\n  width: 100vw;\n}\n\n.texto {\n  position: fixed;\n  right: -13vw;\n  bottom: 6vh;\n  height: 40vh;\n  width: 100vw;\n}\n\n.texto-home {\n  position: fixed;\n  right: 17vw;\n  bottom: 27vh;\n  height: 27vh;\n  width: 65vw;\n}\n\n.btn-jugar {\n  position: fixed;\n  width: 60vw;\n  bottom: 13vh;\n  left: 20vw;\n}\n\n.btn-ideas {\n  position: fixed;\n  width: 60vw;\n  bottom: 1vh;\n  left: 20vw;\n}\n\n.como-jugar {\n  font-family: Shadow;\n  color: var(--ion-color-secondary);\n}\n\n.title-bg {\n  padding: 5vh 0;\n  background-color: rgba(var(--ion-color-primary-rgb), 0.7);\n}\n\n.cori-texto {\n  text-align: center;\n  margin: 0 3vw;\n  width: 80vw;\n  height: 27vh;\n}\n\n.flechas {\n  width: 70vw;\n  position: fixed;\n  left: 15vw;\n  bottom: 10vh;\n}\n\n.solido {\n  position: fixed;\n  bottom: 38vh;\n  width: 43vw;\n  left: 35vw;\n  height: 19vh;\n  color: rgba(255, 255, 255, 0.1);\n  -webkit-animation-name: resplandor;\n          animation-name: resplandor;\n  -webkit-animation-timing-function: linear;\n          animation-timing-function: linear;\n  -webkit-animation-duration: 2s;\n          animation-duration: 2s;\n  -webkit-animation-iteration-count: infinite;\n          animation-iteration-count: infinite;\n}\n\n.solidoE {\n  position: fixed;\n  top: 22vh;\n  width: 38vw;\n  left: 10vw;\n  height: 19vh;\n  color: rgba(255, 255, 255, 0.1);\n  -webkit-animation-name: resplandor;\n  animation-name: resplandor;\n  -webkit-animation-timing-function: linear;\n  animation-timing-function: linear;\n  -webkit-animation-duration: 2s;\n  animation-duration: 2s;\n  -webkit-animation-iteration-count: infinite;\n  animation-iteration-count: infinite;\n}\n\n@-webkit-keyframes resplandor {\n  0% {\n    box-shadow: 0px 0px 0px #c71b85;\n  }\n  50% {\n    box-shadow: 0px 0px 30px #c71b85;\n  }\n  100% {\n    box-shadow: 0px 0px 0px #c71b85;\n  }\n}\n\n@keyframes resplandor {\n  0% {\n    box-shadow: 0px 0px 0px #c71b85;\n  }\n  50% {\n    box-shadow: 0px 0px 30px #c71b85;\n  }\n  100% {\n    box-shadow: 0px 0px 0px #c71b85;\n  }\n}\n\n.gaseoso {\n  position: fixed;\n  bottom: 12vh;\n  width: 45vw;\n  right: 10vw;\n  height: 19vh;\n  -webkit-animation-name: resplandor;\n          animation-name: resplandor;\n  -webkit-animation-timing-function: linear;\n          animation-timing-function: linear;\n  -webkit-animation-duration: 2s;\n          animation-duration: 2s;\n  -webkit-animation-iteration-count: infinite;\n          animation-iteration-count: infinite;\n}\n\n.gaseosoE {\n  position: fixed;\n  top: 44vh;\n  width: 45vw;\n  right: 5vw;\n  height: 19vh;\n  -webkit-animation-name: resplandor;\n  animation-name: resplandor;\n  -webkit-animation-timing-function: linear;\n  animation-timing-function: linear;\n  -webkit-animation-duration: 2s;\n  animation-duration: 2s;\n  -webkit-animation-iteration-count: infinite;\n  animation-iteration-count: infinite;\n}\n\n.liquido {\n  position: fixed;\n  bottom: 3vh;\n  width: 36vw;\n  left: 5vw;\n  height: 31vh;\n  -webkit-animation-name: resplandor;\n          animation-name: resplandor;\n  -webkit-animation-timing-function: linear;\n          animation-timing-function: linear;\n  -webkit-animation-duration: 2s;\n          animation-duration: 2s;\n  -webkit-animation-iteration-count: infinite;\n          animation-iteration-count: infinite;\n}\n\n.liquidoE {\n  position: fixed;\n  bottom: 3vh;\n  width: 36vw;\n  left: 13vw;\n  height: 31vh;\n  -webkit-animation-name: resplandor;\n  animation-name: resplandor;\n  -webkit-animation-timing-function: linear;\n  animation-timing-function: linear;\n  -webkit-animation-duration: 2s;\n  animation-duration: 2s;\n  -webkit-animation-iteration-count: infinite;\n  animation-iteration-count: infinite;\n}\n\n.btn-avanzar {\n  position: fixed;\n  width: 50vw;\n  bottom: 1vh;\n  right: 2vw;\n}\n\n.pop-up {\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  width: 80%;\n  z-index: 3;\n}\n\n.fondo-cuantas-personas {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n}\n\n.una-persona {\n  position: absolute;\n  left: 28vw;\n  top: 24vh;\n  width: 46vw;\n  height: auto;\n}\n\n.varias-personas {\n  position: absolute;\n  left: 26vw;\n  top: 58vh;\n  width: 50vw;\n  height: 34vh;\n}\n\n.image-btn {\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  height: -webkit-fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n}\n\n.img-empresarial {\n  position: fixed;\n  bottom: 40vh;\n  cursor: pointer;\n  display: flex;\n}\n\n.img-familiar {\n  position: fixed;\n  bottom: 20vh;\n  cursor: pointer;\n  display: flex;\n}\n\n.img-social {\n  position: fixed;\n  bottom: 0;\n  cursor: pointer;\n  display: flex;\n}\n\n.btn-info {\n  position: absolute;\n  top: 13vh;\n  opacity: 0;\n}\n\n.btn-info2 {\n  position: absolute;\n  top: 84vh;\n  width: 9vw;\n  height: 5vh;\n  opacity: 0%;\n  left: 67vw;\n  z-index: 3;\n}\n\n.text_ideas {\n  border-radius: 5px;\n  font-family: \"Delius\";\n  color: black;\n  padding-left: 10px;\n  padding-right: 10px;\n  text-align: center;\n}\n\n.cuerpo-ideas {\n  position: absolute;\n  display: grid;\n  left: 7vw;\n  top: 9vh;\n}\n\n.cuerpo-ideas .Cont-ideas {\n  left: 7vw;\n  width: 100vw;\n  margin-top: 6vh;\n}\n\n.cuerpo-ideas .ideas {\n  height: 10vh;\n  width: 90vw;\n  background-color: #e4e2e3;\n}\n\n.cuerpo-ideas .desarrolla {\n  width: 100vw;\n}\n\nion-backdrop {\n  background-color: var(--ion-color-primary);\n  opacity: 0.9;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7QUFDRjs7QUFDQTtFQUNFLGVBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7QUFFRjs7QUFDQTtFQUNFLGVBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7QUFFRjs7QUFBQTtFQUNFLFVBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLGNBQUE7QUFHRjs7QUFEQTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtBQUlGOztBQUZBO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxxQkFBQTtFQUNBLFNBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0FBS0Y7O0FBSEE7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7QUFNRjs7QUFKQTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtBQU9GOztBQUxBO0VBQ0Usa0JBQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FBUUY7O0FBTkE7RUFDRSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7QUFTRjs7QUFQQTtFQUNFLGVBQUE7RUFDQSxVQUFBO0VBQ0EsUUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FBVUY7O0FBUkE7RUFDQSxTQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7QUFXQTs7QUFUQTtFQUNFLGVBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0FBWUY7O0FBVkE7RUFD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O0FBc0JGOztBQW5CQTtFQUNFLGVBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7QUFzQkY7O0FBcEJBO0VBQ0UsZUFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtBQXVCRjs7QUFwQkE7RUFDRSxlQUFBO0VBQ0EsU0FBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0FBdUJGOztBQXBCQTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7QUF1QkY7O0FBckJBO0VBQ0Usa0JBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtFQUNBLFVBQUE7QUF3QkY7O0FBdEJBO0VBQ0Usa0JBQUE7RUFDQSxxQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUF5QkY7O0FBdkJBO0VBQ0Usa0JBQUE7RUFDQSxhQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7QUEwQkY7O0FBekJFO0VBQ0UsU0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FBMkJKOztBQXpCRTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7QUEyQko7O0FBekJFO0VBQ0UsWUFBQTtBQTJCSjs7QUF2QkE7RUFDRSwwQ0FBQTtFQUNBLFlBQUE7QUEwQkYiLCJmaWxlIjoic3JjL2FwcC9ob21lL2hvbWUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvbmRvLWNvbWVuemFyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDB2dztcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgei1pbmRleDogLTI7XG59XG4uYnRuLWV4cGxvcmF7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgd2lkdGg6IDYwdnc7XG4gIGJvdHRvbTogNnZoO1xuICBsZWZ0OiAyMHZ3O1xufVxuXG4uRm9uZGl0b3tcbiAgcG9zaXRpb246IGZpeGVkO1xuICBoZWlnaHQ6IDEwMHZoO1xuICB3aWR0aDogMTAwdnc7XG4gIHotaW5kZXg6MDtcbn1cbi5jZXJyYXJ7XG4gIHdpZHRoOiA5dnc7XG4gIGhlaWdodDogYXV0bztcbiAgei1pbmRleDogMjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogOSU7XG4gIG1hcmdpbi10b3A6IDElO1xufVxuI2ZvbmRvLWVsaW1pbmFye1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IDIwO1xuICB3aWR0aDogODB2dztcbiAgbGVmdDogMTB2dztcbiAgdG9wOiAxOHZoO1xufVxuI3RleHRvLWVsaW1pbmFye1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IDIwO1xuICBmb250LXNpemU6IDEuOHJlbTtcbiAgZm9udC1mYW1pbHk6IFwiRGVsaXVzXCI7XG4gIHRvcDogMjB2aDtcbiAgbGVmdDogMTUlO1xuICB3aWR0aDogNzAlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4jYm90b24tZWxpbWluYXJ7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogMjA7XG4gIHdpZHRoOiA1MHZ3O1xuICB0b3A6IDUwdmg7XG4gIGxlZnQ6IDI2dnc7XG59XG4jYm90b24tY2FuY2VsYXJ7XG4gIHBvc2l0aW9uOmFic29sdXRlO1xuICB6LWluZGV4OiAyMDtcbiAgd2lkdGg6IDUwdnc7XG4gIHRvcDogNjB2aDtcbiAgbGVmdDogMjZ2dztcbn1cbi5hdHJhc3tcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAydmg7XG4gIHRvcDogM3ZoO1xuICB3aWR0aDogMTd2dztcbiAgaGVpZ2h0OiAxMHZoO1xufVxuLmF0cmFzMntcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAydmg7XG4gIHRvcDogMjN2aDtcbiAgd2lkdGg6IDE2dnc7XG4gIGhlaWdodDogOXZoO1xufVxuLmxvZ28ge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGxlZnQ6IDE1dnc7XG4gIHRvcDogM3ZoO1xuICB3aWR0aDogNzB2dztcbiAgaGVpZ2h0OiA0MHZoO1xufVxuLmFtYmllbnRle1xuYm9yZGVyOiAwO1xuaGVpZ2h0OiAyMHZoO1xud2lkdGg6IDEwMHZ3O1xufVxuLnRleHRvIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICByaWdodDogLTEzdnc7XG4gIGJvdHRvbTogNnZoO1xuICBoZWlnaHQ6IDQwdmg7XG4gIHdpZHRoOiAxMDB2dztcbn1cbi50ZXh0by1ob21le1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHJpZ2h0OiAxN3Z3O1xuICBib3R0b206IDI3dmg7XG4gIGhlaWdodDogMjd2aDtcbiAgd2lkdGg6IDY1dnc7XG59XG4uYnRuLWp1Z2FyIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB3aWR0aDogNjB2dztcbiAgYm90dG9tOiAxM3ZoO1xuICBsZWZ0OiAyMHZ3O1xufVxuLmJ0bi1pZGVhcyB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgd2lkdGg6IDYwdnc7XG4gIGJvdHRvbTogMXZoO1xuICBsZWZ0OiAyMHZ3O1xufVxuLy8gY29tbyBqdWdhclxuXG4uY29tby1qdWdhciB7XG4gIGZvbnQtZmFtaWx5OiBTaGFkb3c7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KTtcbn1cbi50aXRsZS1iZyB7XG4gIHBhZGRpbmc6IDV2aCAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LXJnYiksIDAuNyk7XG59XG4uY29yaS10ZXh0byB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luOiAwIDN2dztcbiAgd2lkdGg6IDgwdnc7XG4gIGhlaWdodDogMjd2aDtcbn1cbi5mbGVjaGFzIHtcbiAgd2lkdGg6IDcwdnc7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgbGVmdDogMTV2dztcbiAgYm90dG9tOiAxMHZoO1xuXG59XG4uc29saWRvIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBib3R0b206IDM4dmg7XG4gIHdpZHRoOiA0M3Z3O1xuICBsZWZ0OiAzNXZ3O1xuICBoZWlnaHQ6IDE5dmg7XG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSk7XG4gIGFuaW1hdGlvbi1uYW1lOiByZXNwbGFuZG9yO1xuICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBsaW5lYXI7XG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMnM7XG4gIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGluZmluaXRlO1xufVxuLnNvbGlkb0V7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAyMnZoO1xuICB3aWR0aDogMzh2dztcbiAgbGVmdDogMTB2dztcbiAgaGVpZ2h0OiAxOXZoO1xuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpO1xuICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiByZXNwbGFuZG9yO1xuICBhbmltYXRpb24tbmFtZTogcmVzcGxhbmRvcjtcbiAgLXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBsaW5lYXI7XG4gIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGxpbmVhcjtcbiAgLXdlYmtpdC1hbmltYXRpb24tZHVyYXRpb246IDJzO1xuICBhbmltYXRpb24tZHVyYXRpb246IDJzO1xuICAtd2Via2l0LWFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGluZmluaXRlO1xuICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTtcbn1cbkBrZXlmcmFtZXMgcmVzcGxhbmRvcntcbiAgMCV7XG4gICAgLW1vei1ib3gtc2hhZG93OiAwcHggMHB4IDBweCAjYzcxYjg1O1xuICAgIC13ZWJraXQtYm94LXNoYWRvdzogMHB4IDBweCAwcHggI2M3MWI4NTtcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDBweCAjYzcxYjg1O1xuICB9XG4gIDUwJXtcbiAgICAtbW96LWJveC1zaGFkb3c6IDBweCAwcHggMzBweCAjYzcxYjg1O1xuICAgIC13ZWJraXQtYm94LXNoYWRvdzogMHB4IDBweCAzMHB4ICNjNzFiODU7XG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAzMHB4ICNjNzFiODU7XG4gIH1cbiAgMTAwJXsgIFxuICAgIC1tb3otYm94LXNoYWRvdzogMHB4IDBweCAwcHggI2M3MWI4NTtcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDBweCAwcHggMHB4ICNjNzFiODU7XG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAwcHggI2M3MWI4NTtcbiAgfVxuICBcbn1cblxuLmdhc2Vvc28ge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGJvdHRvbTogMTJ2aDtcbiAgd2lkdGg6IDQ1dnc7XG4gIHJpZ2h0OiAxMHZ3O1xuICBoZWlnaHQ6IDE5dmg7XG4gIGFuaW1hdGlvbi1uYW1lOiByZXNwbGFuZG9yO1xuICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBsaW5lYXI7XG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMnM7XG4gIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGluZmluaXRlO1xufVxuLmdhc2Vvc29Fe1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogNDR2aDtcbiAgd2lkdGg6IDQ1dnc7XG4gIHJpZ2h0OiA1dnc7XG4gIGhlaWdodDogMTl2aDtcbiAgLXdlYmtpdC1hbmltYXRpb24tbmFtZTogcmVzcGxhbmRvcjtcbiAgYW5pbWF0aW9uLW5hbWU6IHJlc3BsYW5kb3I7XG4gIC13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogbGluZWFyO1xuICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBsaW5lYXI7XG4gIC13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOiAycztcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAycztcbiAgLXdlYmtpdC1hbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTtcbiAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7XG59XG4ubGlxdWlkbyB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgYm90dG9tOiAzdmg7XG4gIHdpZHRoOiAzNnZ3O1xuICBsZWZ0OiA1dnc7XG4gIGhlaWdodDogMzF2aDtcbiAgYW5pbWF0aW9uLW5hbWU6IHJlc3BsYW5kb3I7XG4gIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGxpbmVhcjtcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAycztcbiAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7XG59XG4ubGlxdWlkb0V7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgYm90dG9tOiAzdmg7XG4gIHdpZHRoOiAzNnZ3O1xuICBsZWZ0OiAxM3Z3O1xuICBoZWlnaHQ6IDMxdmg7XG4gIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IHJlc3BsYW5kb3I7XG4gIGFuaW1hdGlvbi1uYW1lOiByZXNwbGFuZG9yO1xuICAtd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGxpbmVhcjtcbiAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogbGluZWFyO1xuICAtd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjogMnM7XG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMnM7XG4gIC13ZWJraXQtYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7XG4gIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGluZmluaXRlO1xufVxuLmJ0bi1hdmFuemFyIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB3aWR0aDogNTB2dztcbiAgYm90dG9tOiAxdmg7XG4gIHJpZ2h0OiAydnc7XG59XG4ucG9wLXVwIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiA1MCU7XG4gIHRvcDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgd2lkdGg6IDgwJTtcbiAgei1pbmRleDogMztcbn1cbi8vIGN1YW50YXMgcGVyc29uYXMgdmFuIGEganVnYXJcblxuLmZvbmRvLWN1YW50YXMtcGVyc29uYXMge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn1cbi51bmEtcGVyc29uYSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMjh2dztcbiAgdG9wOiAyNHZoO1xuICB3aWR0aDogNDZ2dztcbiAgaGVpZ2h0OiBhdXRvO1xufVxuLnZhcmlhcy1wZXJzb25hcyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMjZ2dztcbiAgdG9wOiA1OHZoO1xuICB3aWR0aDogNTB2dztcbiAgaGVpZ2h0OiAzNHZoO1xufVxuXG4vLyBhbWJpZW50ZSBkZSBqdWdhclxuLmltYWdlLWJ0biB7XG4gIHdpZHRoOiBmaXQtY29udGVudDtcbiAgaGVpZ2h0OiBmaXQtY29udGVudDtcbn1cblxuLmltZy1lbXByZXNhcmlhbCB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgYm90dG9tOiA0MHZoO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG4uaW1nLWZhbWlsaWFyIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBib3R0b206IDIwdmg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZGlzcGxheTogZmxleDtcbn1cblxuLmltZy1zb2NpYWwge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGJvdHRvbTogMDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG4uYnRuLWluZm8ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMTN2aDtcbiAgb3BhY2l0eTogMDtcbn1cbi5idG4taW5mbzJ7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA4NHZoO1xuICB3aWR0aDogOXZ3O1xuICBoZWlnaHQ6IDV2aDtcbiAgb3BhY2l0eTogMCU7XG4gIGxlZnQ6IDY3dnc7XG4gIHotaW5kZXg6IDM7XG59XG4udGV4dF9pZGVhc3tcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBmb250LWZhbWlseTogXCJEZWxpdXNcIjtcbiAgY29sb3I6IGJsYWNrO1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gIHBhZGRpbmctcmlnaHQ6IDEwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5jdWVycG8taWRlYXN7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgZGlzcGxheTogZ3JpZDtcbiAgbGVmdDogN3Z3O1xuICB0b3A6IDl2aDtcbiAgLkNvbnQtaWRlYXN7XG4gICAgbGVmdDogN3Z3O1xuICAgIHdpZHRoOiAxMDB2dztcbiAgICBtYXJnaW4tdG9wOiA2dmg7XG4gIH1cbiAgLmlkZWFze1xuICAgIGhlaWdodDogMTB2aDtcbiAgICB3aWR0aDogOTB2dztcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTRlMmUzO1xuICB9XG4gIC5kZXNhcnJvbGxhe1xuICAgIHdpZHRoOiAxMDB2dztcbiAgfVxufVxuXG5pb24tYmFja2Ryb3Age1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gIG9wYWNpdHk6IDAuOTtcbn1cbiJdfQ== */");

/***/ }),

/***/ "./src/app/home/home.page.ts":
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _services_servicio_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../services/servicio.service */ "./src/app/services/servicio.service.ts");




let HomePage = class HomePage {
    constructor(serv, route, router) {
        this.serv = serv;
        this.route = route;
        this.router = router;
        // Funcionalidades
        this.show = false;
        this.eliminarB = false;
        this.vioS = false;
        this.vioL = false;
        this.vioG = false;
        this.vioT = false;
        this.info = false;
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
        this.gaseoso = false;
        this.imgAmbiente = {
            empresarial: 'EMPRESARIAL',
            familiar: 'FAMILIAR',
            social: 'SOCIAL'
        };
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.arrBangs = [];
            this.serv.deleteItem();
            this.section = 'home';
            this.serv.verify = false;
            this.mipromesa();
        });
    }
    ngAfterViewInit() {
        this.route.params.subscribe(params => {
            const _params = params.section;
            this.section = _params;
        });
    }
    ideas(pdf) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const cantidad = (yield this.serv.consultarid(pdf)).subscribe(res => {
                if (this.pdf.num == "") {
                    this.pdf.num = res.length + 1;
                    this.serv.AddItem(this.pdf);
                }
            });
        });
    }
    getAllIdeas(pdf) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let contenedor;
            const ideas = yield this.serv.consultar(pdf).then(res => {
                contenedor = res;
                this.contIdeas = contenedor;
            }).then(() => {
                this.organizador();
            });
        });
    }
    organizador() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.arrBangs[this.contIdeas.length];
            for (let a = 0; a < this.contIdeas.length; a++) {
                this.arrBangs[a] = yield this.contIdeas[a].data().P1;
            }
            this.getBang = this.arrBangs;
        });
    }
    deleteBang(n) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let almacenador = yield this.contIdeas[n].data();
            this.serv.eliminar(almacenador.id, almacenador.num);
        });
    }
    guardarEliminacion(i) {
        this.eliminarV = i;
    }
    eliminarN() {
        this.deleteBang(this.eliminarV);
    }
    eliminar() {
        this.serv.deleteItem();
    }
    BangSeleccionado(item) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let almacenador = yield this.contIdeas[item].data();
            yield this.serv.addItem(this.contIdeas[item].data());
            this.router.navigateByUrl('/pdf');
        });
    }
    openPopUP(item) {
        switch (item) {
            case 'eliminar':
                this.eliminarB = !this.eliminarB;
                break;
            case 'info':
                this.info = !this.info;
                break;
            case 'solido':
                this.solido = !this.solido;
                this.vioS = true;
                break;
            case 'liquido':
                this.liquido = !this.liquido;
                this.vioL = true;
                break;
            case 'gaseoso':
                this.gaseoso = !this.gaseoso;
                this.vioG = true;
                break;
            default:
                break;
        }
        this.show = !this.show;
        if ((this.vioS == true) && (this.vioL == true) && (this.vioG == true)) {
            this.vioT = true;
        }
    }
    startsession() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.serv.deleteItem();
            this.serv.loginGoogle().finally(() => {
                this.union();
            }).then(() => {
                this.pdf.id = this.serv.email;
                this.pdf.nombre = this.serv.nombre;
            });
        });
    }
    avanzar(section) {
        this.section = section;
    }
    union() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.serv.verify !== false) {
                yield this.avanzar('antes');
            }
        });
    }
    goToIdeas() {
        this.router.navigateByUrl('/home/home');
    }
    cuantasPersonas(personas) {
        console.log(personas);
    }
    switchAmbienteImg(ambiente) {
        this.imgAmbiente[ambiente] = this.imgAmbiente[ambiente] ==
            this.imgAmbiente[ambiente].split('-')[0] ? `${this.imgAmbiente[ambiente]}-2` : this.imgAmbiente[ambiente].split('-')[0];
    }
    datos() {
        this.ideas(this.pdf);
    }
    guardar(item) {
        this.ideas(this.pdf);
        this.pdf.ambiente = item;
        this.avanzar('home');
        this.serv.AddItem(this.pdf);
    }
    alLector() {
        this.router.navigateByUrl('scanner');
    }
    gotoSolido() {
        this.router.navigateByUrl('/solido/comenzar/0');
    }
    mipromesa() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            new Promise((resolve) => {
                this.objaux = JSON.parse(this.serv.getItem('_cap_pdf2'));
                if (this.objaux.num != "") {
                    this.pdf = this.objaux;
                    return resolve(this.pdf);
                }
            });
        });
    }
};
HomePage.ctorParameters = () => [
    { type: _services_servicio_service__WEBPACK_IMPORTED_MODULE_3__["ServicioService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
HomePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./home.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./home.page.scss */ "./src/app/home/home.page.scss")).default]
    })
], HomePage);



/***/ })

}]);
//# sourceMappingURL=home-home-module-es2015.js.map