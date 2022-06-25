(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-gaseoso-gaseoso-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/gaseoso/gaseoso.page.html":
    /*!***************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/gaseoso/gaseoso.page.html ***!
      \***************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppPagesGaseosoGaseosoPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-content class=\"ion-no-padding\">\n  <!-- video personaje -->\n  <div *ngIf=\"section == 'videopersonaje'\">\n    <img src=\"assets/imgs/8/FONDO.png\" alt=\"\" class=\"fondo-comenzar\" />\n    <img\n      src=\"assets/imgs/8/{{personajeSeleccionadoaux}}-T.png\"\n      class=\"nombre-personaje\"\n    />\n    <img\n      src=\"assets/imgs/8/SVG/{{personajeSeleccionadoaux}}.svg\"\n      class=\"personaje\"\n    />\n    <div class=\"play-video\">\n      <video controls class=\"video\" playsinline>\n        <source\n          src=\"assets/videos/{{personajeSeleccionadoaux}}-2.mp4\"\n          type=\"video/mp4\"\n        />\n      </video>\n    </div>\n    <!-- //// -->\n      <img (click)=\"gotoSolido()\"src=\"assets/imgs/Botones/Botón_atras.png\" class=\"atras\">\n      <img (click)=\"avanzar('p_gaseoso');getInfo();\" class=\"btn-avanzar\" src=\"assets/imgs/8/AVANZAR.png\" alt=\"\" />\n  </div>\n  <!-- Tarjetas -->\n  <div  *ngIf=\"section == 'p_gaseoso'\">\n    <img src=\"assets/imgs/14/FONDO.png\" alt=\"\" class=\"fondo-tarjetas\" />\n    <div class=\"Cont-tarjetas\">\n      <!-- Grilla de las cartas -->\n      <ion-grid>\n        <!-- Fila 1-->\n        <ion-row>\n          <ion-col>\n            <ion-card\n              class=\"tarjetas\"\n              (click)=\"verificar();avanzar('preguntaProblema'); seleccionadorTarjeta(0);\"\n            >\n              <img src=\"assets/imgs/14/t-{{personajeSeleccionadoaux2}}.png\" />\n            </ion-card>\n          </ion-col>\n\n          <ion-col>\n            <ion-card\n              class=\"tarjetas\"\n              (click)=\"verificar();avanzar('preguntaProblema');seleccionadorTarjeta(1);\"\n            >\n              <img src=\"assets/imgs/14/t-{{personajeSeleccionadoaux2}}.png\" />\n            </ion-card>\n          </ion-col>\n\n          <ion-col>\n            <ion-card\n              class=\"tarjetas\"\n              (click)=\"verificar();avanzar('preguntaProblema');seleccionadorTarjeta(2);\"\n            >\n              <img src=\"assets/imgs/14/t-{{personajeSeleccionadoaux2}}.png\" />\n            </ion-card>\n          </ion-col>\n        </ion-row>\n        <!-- Fila 2-->\n        <ion-row>\n          <ion-col>\n            <ion-card\n              class=\"tarjetas\"\n              (click)=\"verificar();avanzar('preguntaProblema');seleccionadorTarjeta(3);\"\n            >\n              <img src=\"assets/imgs/14/t-{{personajeSeleccionadoaux2}}.png\" />\n            </ion-card>\n          </ion-col>\n\n          <ion-col>\n            <ion-card\n              class=\"tarjetas\"\n              (click)=\"verificar();avanzar('preguntaProblema');seleccionadorTarjeta(4);\"\n            >\n              <img src=\"assets/imgs/14/t-{{personajeSeleccionadoaux2}}.png\" />\n            </ion-card>\n          </ion-col>\n\n          <ion-col>\n            <ion-card\n              class=\"tarjetas\"\n              (click)=\"verificar();avanzar('preguntaProblema');seleccionadorTarjeta(5);\"\n            >\n              <img src=\"assets/imgs/14/t-{{personajeSeleccionadoaux2}}.png\" />\n            </ion-card>\n          </ion-col>\n        </ion-row>\n        <!-- Fila 3-->\n        <ion-row>\n          <ion-col>\n            <ion-card\n              class=\"tarjetas\"\n              (click)=\"verificar();avanzar('preguntaProblema');seleccionadorTarjeta(6);\"\n            >\n              <img src=\"assets/imgs/14/t-{{personajeSeleccionadoaux2}}.png\" />\n            </ion-card>\n          </ion-col>\n\n          <ion-col>\n            <ion-card\n              class=\"tarjetas\"\n              (click)=\"verificar();avanzar('preguntaProblema');seleccionadorTarjeta(7);\">\n              <img src=\"assets/imgs/14/t-{{personajeSeleccionadoaux2}}.png\" />\n            </ion-card>\n          </ion-col>\n          <ion-col>\n            <ion-card\n              class=\"tarjetas\"\n              (click)=\"verificar();avanzar('preguntaProblema');seleccionadorTarjeta(8);\"\n            >\n              <img src=\"assets/imgs/14/t-{{personajeSeleccionadoaux2}}.png\" />\n            </ion-card>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </div>\n    <img (click)=\"avanzar('videopersonaje')\"src=\"assets/imgs/Botones/Botón_atras.png\" class=\"atras3\">\n  </div>\n  <!-- Pregunta Problema-->\n  <div *ngIf=\"section =='preguntaProblema'\">\n    <img src=\"assets/imgs/1/FONDO.png\" class=\"fondo-comenzar\" />\n    <img\n      src=\"assets/imgs/14/t-{{personajeSeleccionadoaux2}}.png\"\n      class=\"tarjetita\"\n      (click)=\"openPopUP('tarjeta')\"\n    />\n    <img *ngIf=\"t2==false\"(click)=\"cambiadorTarjeta();avanzar('p_gaseoso');\"src=\"assets/imgs/Ultimos recursos/boton-otra-tarjeta.png\" class=\"btn-otra\">\n     <img  (click)=\"openPopUP('ejemplo')\" class=\"btn-pregunta\" src=\"assets/imgs/15/PREGUNTA.png\" />\n    <!-- pop Up-->\n    <div *ngIf=\"tarjeta\">\n      <img (click)=\"openPopUP('tarjeta')\" src=\"assets/imgs/Botones/Botón_cancelar.png\" class=\"X\">\n      <img\n        src=\"assets/imgs/15/CARTA REVES.png\"\n        (click)=\"openPopUP('tarjeta')\"\n        class=\"pop-up-carta\"\n      />\n      <p class=\"tarjeta\">{{card}}</p>\n    </div>\n\n    <div *ngIf=\"ejemplo2\">\n      <img src=\"assets/imgs/Ultimos recursos/Popup-{{p}}.png\"\n      (click)=\"openPopUP2()\"\n      class=\"pop-up2\">\n      <img\n      src=\"assets/imgs/15/CARTA REVES.png\"\n      class=\"pop-up-carta2\"/>\n    <p class=\"ejemplo2\">{{texto}}</p>\n    </div>\n    <div *ngIf=\"ejemplo3\">\n      <img (click)=\"openPopUP3()\" src=\"assets/imgs/Botones/Botón_cancelar.png\" class=\"X\">\n \n      <img\n      src=\"assets/imgs/15/CARTA REVES.png\"\n      class=\"pop-up-carta\"/>\n    <p class=\"ejemplo2\">{{card}}</p>\n    </div>\n\n\n    <div *ngIf=\"ejemplo\">\n      <img\n        src=\"assets/imgs/15/CARTA REVES.png\"\n        (click)=\"openPopUP('ejemplo')\"\n        class=\"pop-up\"\n      />\n      <img (click)=\"openPopUP('ejemplo')\" src=\"assets/imgs/Botones/Botón_cancelar.png\" class=\"X\">\n      <p class=\"ejemplo\">{{texto}}</p>\n    </div>\n\n\n\n\n    <div class=\"Cont-text\">\n      <ion-textarea\n        [(ngModel)]=\"idea\"\n        class=\"input_preguntaproblema\"\n        autofocus=\"true\"\n        placeholder=\"Escribe aquí lo primero que se te ocurra\"\n        autoGrow=\"true\"\n        wrap=\"hard\"\n        rows=\"3\"\n      ></ion-textarea>\n      <ion-textarea\n        [(ngModel)]=\"idea2\"\n        class=\"input_preguntaproblema\"\n        autofocus=\"true\"\n        placeholder=\"Sigue ideando\"\n        autoGrow=\"true\"\n        wrap=\"hard\"\n        rows=\"3\"\n      ></ion-textarea>\n      <ion-textarea\n        [(ngModel)]=\"idea3\"\n        class=\"input_preguntaproblema\"\n        autofocus=\"true\"\n        placeholder=\"Una idea más\"\n        autoGrow=\"true\"\n        wrap=\"hard\"\n        rows=\"3\"\n      ></ion-textarea>\n      <ion-textarea\n      [(ngModel)]=\"idea4\"\n      class=\"input_preguntaproblema\"\n      autofocus=\"true\"\n      placeholder=\"Otra idea\"\n      autoGrow=\"true\"\n      wrap=\"hard\"\n      rows=\"2\"\n    ></ion-textarea>\n    </div>\n      <img class=\"btn-avanzar_mas\" (click)=\"ideasaved();avanzar('finalizar');\" src=\"assets/imgs/15/LISTO.png\" />\n  </div>\n  <div *ngIf=\"section =='finalizar'\">\n    <img src=\"assets/imgs/16/FONDO-3.png\" alt=\"\" class=\"fondo-comenzar\" />\n    <img src=\"assets/imgs/16/TEXTO.png\" alt=\"\" class=\"Congratulation\" />\n      <img\n        src=\"assets/imgs/16/AVANZAR L.png\"\n          routerLink=\"/liquido\"\n        class=\"btn-avanzar-liquido\"\n      />\n\n  </div>\n  <ion-backdrop *ngIf=\"show\" [visible]=\"false\" tappable=\"false\"></ion-backdrop>\n</ion-content>\n";
      /***/
    },

    /***/
    "./src/app/pages/gaseoso/gaseoso-routing.module.ts":
    /*!*********************************************************!*\
      !*** ./src/app/pages/gaseoso/gaseoso-routing.module.ts ***!
      \*********************************************************/

    /*! exports provided: GaseosoPageRoutingModule */

    /***/
    function srcAppPagesGaseosoGaseosoRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GaseosoPageRoutingModule", function () {
        return GaseosoPageRoutingModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _gaseoso_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./gaseoso.page */
      "./src/app/pages/gaseoso/gaseoso.page.ts");

      var routes = [{
        path: '',
        component: _gaseoso_page__WEBPACK_IMPORTED_MODULE_3__["GaseosoPage"]
      }];

      var GaseosoPageRoutingModule = function GaseosoPageRoutingModule() {
        _classCallCheck(this, GaseosoPageRoutingModule);
      };

      GaseosoPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], GaseosoPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/pages/gaseoso/gaseoso.module.ts":
    /*!*************************************************!*\
      !*** ./src/app/pages/gaseoso/gaseoso.module.ts ***!
      \*************************************************/

    /*! exports provided: GaseosoPageModule */

    /***/
    function srcAppPagesGaseosoGaseosoModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GaseosoPageModule", function () {
        return GaseosoPageModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _gaseoso_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./gaseoso-routing.module */
      "./src/app/pages/gaseoso/gaseoso-routing.module.ts");
      /* harmony import */


      var _gaseoso_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./gaseoso.page */
      "./src/app/pages/gaseoso/gaseoso.page.ts");

      var GaseosoPageModule = function GaseosoPageModule() {
        _classCallCheck(this, GaseosoPageModule);
      };

      GaseosoPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _gaseoso_routing_module__WEBPACK_IMPORTED_MODULE_5__["GaseosoPageRoutingModule"]],
        declarations: [_gaseoso_page__WEBPACK_IMPORTED_MODULE_6__["GaseosoPage"]]
      })], GaseosoPageModule);
      /***/
    },

    /***/
    "./src/app/pages/gaseoso/gaseoso.page.scss":
    /*!*************************************************!*\
      !*** ./src/app/pages/gaseoso/gaseoso.page.scss ***!
      \*************************************************/

    /*! exports provided: default */

    /***/
    function srcAppPagesGaseosoGaseosoPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".fondo-comenzar {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n  z-index: -2;\n}\n\n.fondo-tarjetas {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n  z-index: -2;\n}\n\n.nombre-personaje {\n  position: fixed;\n  width: 80vw;\n  top: 3vh;\n  left: 11vw;\n  height: 18vh;\n}\n\n.personaje {\n  position: fixed;\n  width: 70vw;\n  bottom: 0vh;\n  left: 15vw;\n  height: 77vh;\n}\n\n.video {\n  width: 79vw;\n  height: auto;\n}\n\n.play-video {\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  width: 80vw;\n  height: 25vh;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-color: rgba(var(--ion-color-primary-rgb), 0.8);\n  border: 1px solid white;\n  border-radius: 10px;\n  cursor: pointer;\n  z-index: 3;\n}\n\n.btn-avanzar {\n  position: absolute;\n  width: 55vw;\n  bottom: 5vh;\n  right: 3vw;\n}\n\n.acerca {\n  position: absolute;\n  width: 90%;\n  left: 50%;\n  bottom: 12%;\n  transform: translate(-50%, 0%);\n}\n\n.Cont-tarjetas {\n  position: absolute;\n  width: 100vw;\n  height: 74vh;\n  top: 17vh;\n  left: 3vw;\n}\n\n.tarjetas {\n  height: 13vh;\n  width: 9vh;\n}\n\n.tarjetita {\n  position: absolute;\n  width: 25vw;\n  top: 5vh;\n  left: 10vw;\n  height: 20vh;\n  -webkit-animation-name: resplandor;\n          animation-name: resplandor;\n  -webkit-animation-timing-function: linear;\n          animation-timing-function: linear;\n  -webkit-animation-duration: 2s;\n          animation-duration: 2s;\n  -webkit-animation-iteration-count: infinite;\n          animation-iteration-count: infinite;\n}\n\n@-webkit-keyframes resplandor {\n  0% {\n    box-shadow: 0px 0px 0px #c71b85;\n  }\n  50% {\n    box-shadow: 0px 0px 30px #c71b85;\n  }\n  100% {\n    box-shadow: 0px 0px 0px #c71b85;\n  }\n}\n\n@keyframes resplandor {\n  0% {\n    box-shadow: 0px 0px 0px #c71b85;\n  }\n  50% {\n    box-shadow: 0px 0px 30px #c71b85;\n  }\n  100% {\n    box-shadow: 0px 0px 0px #c71b85;\n  }\n}\n\n.texto_p {\n  position: absolute;\n  width: 58vw;\n  top: 6vh;\n  right: 5vw;\n  height: 12vh;\n}\n\n.btn-pregunta {\n  position: absolute;\n  width: 50vw;\n  top: 18vh;\n  right: 11vw;\n  height: 7vh;\n}\n\n.btn-otra {\n  position: absolute;\n  width: 50vw;\n  top: 8vh;\n  right: 11vw;\n  height: 7vh;\n}\n\n.input_preguntaproblema {\n  height: 10vh;\n  margin-top: 5vh;\n  margin-left: 7vw;\n  width: 87vw;\n  background-color: #e4e2e3;\n  border-radius: 5px;\n  font-family: \"Delius\";\n  color: black;\n  padding-left: 10px;\n  padding-right: 10px;\n  text-align: center;\n  font-size: 0.9rem;\n}\n\n.Cont-text {\n  position: absolute;\n  top: 23vh;\n}\n\n.mas {\n  position: absolute;\n  height: 20vh;\n  width: 100vw;\n  bottom: 10vh;\n  left: 2vw;\n}\n\n.mas_icon {\n  width: 30%;\n  margin-top: 4vh;\n  margin-left: 8vw;\n  height: 16vh;\n}\n\n.input_preguntaproblema_mas {\n  top: -1vh;\n  height: 7vh;\n  margin-left: 6vw;\n  width: 51vw;\n  background-color: #e4e2e3;\n  border-radius: 5px;\n  font-family: \"Delius\";\n  color: black;\n  text-align: center;\n}\n\n.Cont-mas {\n  position: absolute;\n  height: 20vh;\n  width: 100vw;\n  bottom: -5vh;\n  left: 35vw;\n}\n\n.btn-avanzar_mas {\n  width: 47vw;\n  position: fixed;\n  bottom: 3vh;\n  left: 45vw;\n}\n\n.btn-avanzar-liquido {\n  position: absolute;\n  width: 60vw;\n  height: auto;\n  bottom: 6vh;\n  right: 19vw;\n}\n\n.Congratulation {\n  position: absolute;\n  width: 100vw;\n  bottom: 26vh;\n  left: 16vw;\n  height: 82vh;\n}\n\n.pop-up {\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  width: 80%;\n  z-index: 3;\n}\n\n.pop-up2 {\n  position: absolute;\n  left: 10vw;\n  top: 3vh;\n  width: 80vw;\n  z-index: 8;\n  height: 40vh;\n}\n\n.pop-up-carta {\n  position: absolute;\n  left: 10vw;\n  top: 15vh;\n  width: 80vw;\n  height: 71vh;\n  z-index: 3;\n}\n\n.pop-up-carta2 {\n  position: absolute;\n  left: 13vw;\n  top: 45vh;\n  width: 74vw;\n  height: 45vh;\n  z-index: 3;\n}\n\n.atras {\n  position: absolute;\n  left: 6vh;\n  top: 68vh;\n  width: 18vw;\n  height: 10vh;\n}\n\n.atras2 {\n  position: absolute;\n  left: 23vh;\n  top: 8vh;\n  width: 47vw;\n  height: 8vh;\n}\n\n.atras3 {\n  position: absolute;\n  left: 6vh;\n  top: 84vh;\n  width: 18vw;\n  height: 10vh;\n}\n\n.ejemplo {\n  position: absolute;\n  border-radius: 5px;\n  font-family: \"Delius\";\n  color: white;\n  font-size: 0.9rem;\n  padding-left: 10px;\n  padding-right: 10px;\n  text-align: center;\n  left: 50%;\n  top: 40%;\n  width: 70vw;\n  z-index: 3;\n  transform: translate(-50%, -50%);\n  height: 43vh;\n}\n\n.ejemplo2 {\n  position: absolute;\n  border-radius: 5px;\n  font-family: \"Delius\";\n  color: white;\n  font-size: 1.4rem;\n  padding-left: 10px;\n  padding-right: 10px;\n  text-align: center;\n  left: 12vw;\n  top: 44vh;\n  width: 76vw;\n  z-index: 3;\n  height: 46vh;\n}\n\n.tarjeta {\n  position: absolute;\n  border-radius: 5px;\n  font-family: \"Delius\";\n  color: white;\n  font-size: 1.4rem;\n  padding-left: 10px;\n  padding-right: 10px;\n  text-align: center;\n  left: 12vw;\n  top: 44vh;\n  width: 76vw;\n  z-index: 3;\n  height: 46vh;\n}\n\n.X {\n  position: absolute;\n  left: 83vw;\n  top: 19vh;\n  width: 5vw;\n  height: 5vh;\n  z-index: 35;\n}\n\nion-backdrop {\n  background-color: var(--ion-color-primary);\n  opacity: 0.9;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZ2FzZW9zby9nYXNlb3NvLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7QUFBSjs7QUFHQTtFQUNJLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7QUFBSjs7QUFFQTtFQUNFLGVBQUE7RUFDQSxXQUFBO0VBQ0EsUUFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxlQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtBQUVGOztBQUNBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QUFFRjs7QUFBQTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7RUFDQSxnQ0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSx5REFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsVUFBQTtBQUdGOztBQURBO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7QUFJRjs7QUFGQTtFQUNJLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsOEJBQUE7QUFLSjs7QUFGQTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxTQUFBO0VBQ0EsU0FBQTtBQUtGOztBQUZBO0VBQ0UsWUFBQTtFQUNBLFVBQUE7QUFLRjs7QUFGQTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFFBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUFlLGtDQUFBO1VBQUEsMEJBQUE7RUFDZix5Q0FBQTtVQUFBLGlDQUFBO0VBQ0EsOEJBQUE7VUFBQSxzQkFBQTtFQUNBLDJDQUFBO1VBQUEsbUNBQUE7QUFNRjs7QUFKQTtFQUNFO0lBR0UsK0JBQUE7RUFPRjtFQUxBO0lBR0UsZ0NBQUE7RUFPRjtFQUxBO0lBR0UsK0JBQUE7RUFPRjtBQUNGOztBQXRCQTtFQUNFO0lBR0UsK0JBQUE7RUFPRjtFQUxBO0lBR0UsZ0NBQUE7RUFPRjtFQUxBO0lBR0UsK0JBQUE7RUFPRjtBQUNGOztBQUxBO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsUUFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0FBT0Y7O0FBTEE7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7QUFRRjs7QUFOQTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFFBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtBQVNGOztBQVBBO0VBQ0UsWUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QUFVRjs7QUFSQTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtBQVdGOztBQVRBO0VBQ0ksa0JBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxTQUFBO0FBWUo7O0FBVkE7RUFDRSxVQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtBQWFGOztBQVhBO0VBQ0UsU0FBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUFjRjs7QUFaRTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtBQWVKOztBQWJFO0VBQ0UsV0FBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtBQWdCSjs7QUFkRTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtBQWlCSjs7QUFmRTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtBQWtCSjs7QUFmRTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7RUFDQSxnQ0FBQTtFQUNBLFVBQUE7RUFDQSxVQUFBO0FBa0JKOztBQWhCRTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFFBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7QUFtQko7O0FBakJFO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtBQW9CSjs7QUFsQkU7RUFDRSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0FBcUJKOztBQW5CRTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQXNCSjs7QUFwQkU7RUFDRSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7QUF1Qko7O0FBckJFO0VBQ0Usa0JBQUE7RUFDQSxTQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FBd0JKOztBQXRCRTtFQUNFLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7RUFDQSxnQ0FBQTtFQUNBLFlBQUE7QUF5Qko7O0FBdkJFO0VBQ0Usa0JBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7QUEwQko7O0FBeEJFO0VBQ0Usa0JBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7QUEyQko7O0FBekJFO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtBQTRCSjs7QUExQkU7RUFDRSwwQ0FBQTtFQUNBLFlBQUE7QUE2QkoiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9nYXNlb3NvL2dhc2Vvc28ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4uZm9uZG8tY29tZW56YXIge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICB3aWR0aDogMTAwdnc7XG4gICAgaGVpZ2h0OiAxMDB2aDtcbiAgICB6LWluZGV4OiAtMjtcbiAgfVxuICBcbi5mb25kby10YXJqZXRhc3tcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgd2lkdGg6IDEwMHZ3O1xuICAgIGhlaWdodDogMTAwdmg7XG4gICAgei1pbmRleDogLTI7XG4gIH1cbi5ub21icmUtcGVyc29uYWple1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHdpZHRoOiA4MHZ3O1xuICB0b3A6IDN2aDtcbiAgbGVmdDogMTF2dztcbiAgaGVpZ2h0OiAxOHZoO1xufVxuLnBlcnNvbmFqZXtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB3aWR0aDogNzB2dztcbiAgYm90dG9tOiAwdmg7XG4gIGxlZnQ6IDE1dnc7XG4gIGhlaWdodDogNzd2aDtcbn1cblxuLnZpZGVve1xuICB3aWR0aDogNzl2dztcbiAgaGVpZ2h0OiBhdXRvO1xufVxuLnBsYXktdmlkZW8ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDUwJTtcbiAgdG9wOiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICB3aWR0aDogODB2dztcbiAgaGVpZ2h0OiAyNXZoO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSh2YXIoLS1pb24tY29sb3ItcHJpbWFyeS1yZ2IpLCAwLjgpO1xuICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB6LWluZGV4OiAzO1xufVxuLmJ0bi1hdmFuemFye1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiA1NXZ3O1xuICBib3R0b206IDV2aDtcbiAgcmlnaHQ6IDN2dztcbn1cbi5hY2VyY2Ege1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDogOTAlO1xuICAgIGxlZnQ6IDUwJTtcbiAgICBib3R0b206IDEyJTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAwJSk7XG4gIH1cbiAgLy9UYXJqZXRhc1xuLkNvbnQtdGFyamV0YXN7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDEwMHZ3O1xuICBoZWlnaHQ6IDc0dmg7XG4gIHRvcDogMTd2aDtcbiAgbGVmdDogM3Z3O1xufVxuXG4udGFyamV0YXN7XG4gIGhlaWdodDogMTN2aDtcbiAgd2lkdGg6IDl2aDtcbn1cbi8vUHJlZ3VudGEgUHJvYmxlbWFcbi50YXJqZXRpdGF7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDI1dnc7XG4gIHRvcDogNXZoO1xuICBsZWZ0OiAxMHZ3O1xuICBoZWlnaHQ6IDIwdmg7ICBhbmltYXRpb24tbmFtZTogcmVzcGxhbmRvcjtcbiAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogbGluZWFyO1xuICBhbmltYXRpb24tZHVyYXRpb246IDJzO1xuICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTtcbn1cbkBrZXlmcmFtZXMgcmVzcGxhbmRvcntcbiAgMCV7XG4gICAgLW1vei1ib3gtc2hhZG93OiAwcHggMHB4IDBweCAjYzcxYjg1O1xuICAgIC13ZWJraXQtYm94LXNoYWRvdzogMHB4IDBweCAwcHggI2M3MWI4NTtcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDBweCAjYzcxYjg1O1xuICB9XG4gIDUwJXtcbiAgICAtbW96LWJveC1zaGFkb3c6IDBweCAwcHggMzBweCAjYzcxYjg1O1xuICAgIC13ZWJraXQtYm94LXNoYWRvdzogMHB4IDBweCAzMHB4ICNjNzFiODU7XG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAzMHB4ICNjNzFiODU7XG4gIH1cbiAgMTAwJXsgIFxuICAgIC1tb3otYm94LXNoYWRvdzogMHB4IDBweCAwcHggI2M3MWI4NTtcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDBweCAwcHggMHB4ICNjNzFiODU7XG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAwcHggI2M3MWI4NTtcbiAgfVxufVxuLnRleHRvX3B7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDU4dnc7XG4gIHRvcDogNnZoO1xuICByaWdodDogNXZ3O1xuICBoZWlnaHQ6IDEydmg7XG59XG4uYnRuLXByZWd1bnRhe1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiA1MHZ3O1xuICB0b3A6IDE4dmg7XG4gIHJpZ2h0OiAxMXZ3O1xuICBoZWlnaHQ6IDd2aDtcbn1cbi5idG4tb3RyYXtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogNTB2dztcbiAgdG9wOiA4dmg7XG4gIHJpZ2h0OiAxMXZ3O1xuICBoZWlnaHQ6IDd2aDtcbn1cbi5pbnB1dF9wcmVndW50YXByb2JsZW1he1xuICBoZWlnaHQ6IDEwdmg7XG4gIG1hcmdpbi10b3A6IDV2aDtcbiAgbWFyZ2luLWxlZnQ6IDd2dztcbiAgd2lkdGg6IDg3dnc7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlNGUyZTM7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgZm9udC1mYW1pbHk6IFwiRGVsaXVzXCI7XG4gIGNvbG9yOiBibGFjaztcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMC45cmVtO1xuICB9XG4uQ29udC10ZXh0e1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMjN2aDtcbn1cbi5tYXN7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGhlaWdodDogMjB2aDtcbiAgICB3aWR0aDogMTAwdnc7XG4gICAgYm90dG9tOiAxMHZoO1xuICAgIGxlZnQ6IDJ2dztcbiB9IFxuLm1hc19pY29ue1xuICB3aWR0aDogMzAlO1xuICBtYXJnaW4tdG9wOiA0dmg7XG4gIG1hcmdpbi1sZWZ0OiA4dnc7XG4gIGhlaWdodDogMTZ2aDtcbn1cbi5pbnB1dF9wcmVndW50YXByb2JsZW1hX21hc3tcbiAgdG9wOiAtMXZoO1xuICBoZWlnaHQ6IDd2aDtcbiAgbWFyZ2luLWxlZnQ6IDZ2dztcbiAgd2lkdGg6IDUxdnc7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlNGUyZTM7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgZm9udC1mYW1pbHk6IFwiRGVsaXVzXCI7XG4gIGNvbG9yOiBibGFjaztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG4gIC5Db250LW1hc3tcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgaGVpZ2h0OiAyMHZoO1xuICAgIHdpZHRoOiAxMDB2dztcbiAgICBib3R0b206IC01dmg7XG4gICAgbGVmdDogMzV2dztcbiAgfVxuICAuYnRuLWF2YW56YXJfbWFzIHtcbiAgICB3aWR0aDogNDd2dztcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgYm90dG9tOiAzdmg7XG4gICAgbGVmdDogNDV2dztcbiAgfVxuICAuYnRuLWF2YW56YXItbGlxdWlkbyB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHdpZHRoOiA2MHZ3O1xuICAgIGhlaWdodDogYXV0bztcbiAgICBib3R0b206IDZ2aDtcbiAgICByaWdodDogMTl2dztcbiAgfVxuICAuQ29uZ3JhdHVsYXRpb257XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHdpZHRoOiAxMDB2dztcbiAgICBib3R0b206IDI2dmg7XG4gICAgbGVmdDogMTZ2dztcbiAgICBoZWlnaHQ6IDgydmg7XG4gIH1cbiAgLy9wb3AgVXAgdGFyamV0YVxuICAucG9wLXVwIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogNTAlO1xuICAgIHRvcDogNTAlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAgIHdpZHRoOiA4MCU7XG4gICAgei1pbmRleDogMztcbiAgfVxuICAucG9wLXVwMiB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IDEwdnc7XG4gICAgdG9wOiAzdmg7XG4gICAgd2lkdGg6IDgwdnc7XG4gICAgei1pbmRleDogODtcbiAgICBoZWlnaHQ6IDQwdmg7XG4gIH1cbiAgLnBvcC11cC1jYXJ0YSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IDEwdnc7XG4gICAgdG9wOiAxNXZoO1xuICAgIHdpZHRoOiA4MHZ3O1xuICAgIGhlaWdodDogNzF2aDtcbiAgICB6LWluZGV4OiAzO1xuICB9XG4gIC5wb3AtdXAtY2FydGEye1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiAxM3Z3O1xuICAgIHRvcDogNDV2aDtcbiAgICB3aWR0aDogNzR2dztcbiAgICBoZWlnaHQ6IDQ1dmg7XG4gICAgei1pbmRleDogMztcbiAgfVxuICAuYXRyYXN7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IDZ2aDtcbiAgICB0b3A6IDY4dmg7XG4gICAgd2lkdGg6IDE4dnc7XG4gICAgaGVpZ2h0OiAxMHZoO1xuICB9XG4gIC5hdHJhczJ7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IDIzdmg7XG4gICAgdG9wOiA4dmg7XG4gICAgd2lkdGg6IDQ3dnc7XG4gICAgaGVpZ2h0OiA4dmg7XG4gIH1cbiAgLmF0cmFzM3tcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogNnZoO1xuICAgIHRvcDogODR2aDtcbiAgICB3aWR0aDogMTh2dztcbiAgICBoZWlnaHQ6IDEwdmg7XG4gIH1cbiAgLmVqZW1wbG97XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBmb250LWZhbWlseTogXCJEZWxpdXNcIjtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZm9udC1zaXplOiAwLjlyZW07XG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGxlZnQ6IDUwJTtcbiAgICB0b3A6IDQwJTtcbiAgICB3aWR0aDogNzB2dztcbiAgICB6LWluZGV4OiAzO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAgIGhlaWdodDogNDN2aDtcbiAgfVxuICAuZWplbXBsbzJ7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBmb250LWZhbWlseTogXCJEZWxpdXNcIjtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZm9udC1zaXplOiAxLjRyZW07XG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGxlZnQ6IDEydnc7XG4gICAgdG9wOiA0NHZoO1xuICAgIHdpZHRoOiA3NnZ3O1xuICAgIHotaW5kZXg6IDM7XG4gICAgaGVpZ2h0OiA0NnZoO1xuICB9XG4gIC50YXJqZXRhe1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgZm9udC1mYW1pbHk6IFwiRGVsaXVzXCI7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGZvbnQtc2l6ZTogMS40cmVtO1xuICAgIHBhZGRpbmctbGVmdDogMTBweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBsZWZ0OiAxMnZ3O1xuICAgIHRvcDogNDR2aDtcbiAgICB3aWR0aDogNzZ2dztcbiAgICB6LWluZGV4OiAzO1xuICAgIGhlaWdodDogNDZ2aDtcbiAgfVxuICAuWHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogODN2dztcbiAgICB0b3A6IDE5dmg7XG4gICAgd2lkdGg6IDV2dztcbiAgICBoZWlnaHQ6IDV2aDtcbiAgICB6LWluZGV4OiAzNTtcbiAgfVxuICBpb24tYmFja2Ryb3Age1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgICBvcGFjaXR5OiAwLjk7XG4gIH0iXX0= */";
      /***/
    },

    /***/
    "./src/app/pages/gaseoso/gaseoso.page.ts":
    /*!***********************************************!*\
      !*** ./src/app/pages/gaseoso/gaseoso.page.ts ***!
      \***********************************************/

    /*! exports provided: GaseosoPage */

    /***/
    function srcAppPagesGaseosoGaseosoPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GaseosoPage", function () {
        return GaseosoPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _services_servicio_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./../../services/servicio.service */
      "./src/app/services/servicio.service.ts");
      /* harmony import */


      var _assets_json_tarjetas_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./../../../assets/json/tarjetas.json */
      "./src/assets/json/tarjetas.json");

      var _assets_json_tarjetas_json__WEBPACK_IMPORTED_MODULE_3___namespace = /*#__PURE__*/__webpack_require__.t(
      /*! ./../../../assets/json/tarjetas.json */
      "./src/assets/json/tarjetas.json", 1);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

      var GaseosoPage = /*#__PURE__*/function () {
        function GaseosoPage(serv, route, router) {
          _classCallCheck(this, GaseosoPage);

          this.serv = serv;
          this.route = route;
          this.router = router;
          this.t2 = false;
          this.ejemplo = false;
          this.show = false;
          this.ejemplo2 = false;
          this.ejemplo3 = false;
          this.personajesArr = ['crispi', 'cori', 'cesia', 'carmel', 'cristal'];
          this.aux = ["", "", "", "", "", "", "", "", ""];
          this.section = "";
          this.idea4 = "";
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

        _createClass(GaseosoPage, [{
          key: "avanzar",
          value: function avanzar(section) {
            this.section = section;
          }
        }, {
          key: "verificar",
          value: function verificar() {
            this.show = !this.show;
            this.ejemplo2 = !this.ejemplo2;
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var _this = this;

              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      this.card = '';
                      this.section = "videopersonaje";
                      this.mipromesa();
                      this.route.params.subscribe(function (params) {
                        var _personaje = params.personajeSeleccionado;
                        var DEFAULT_SELECT = '';
                        var NUM_SELECT = {
                          0: _this.personajesArr[0],
                          1: _this.personajesArr[2],
                          2: _this.personajesArr[1],
                          3: _this.personajesArr[3],
                          4: _this.personajesArr[4]
                        };
                        var number = NUM_SELECT[_personaje] || DEFAULT_SELECT;
                        _this.personajeSeleccionadoaux = number.toUpperCase();
                        _this.personajeSeleccionadoaux2 = number;
                        _this.p = _this.personajeSeleccionadoaux;
                        _this.Tarjetas = _assets_json_tarjetas_json__WEBPACK_IMPORTED_MODULE_3__;

                        for (var i = 0; i < _this.aux.length; i++) {
                          _this.aux[i] = _this.Tarjetas.tarjeta[_personaje].tarjetas[i + 1];
                        }

                        _this.aux.sort(function () {
                          return Math.random() - 0.4;
                        });
                      });

                    case 4:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "getInfo",
          value: function getInfo() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      _context2.next = 2;
                      return this.serv.localFirebase(this.pdf.id, this.pdf.num);

                    case 2:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }, {
          key: "cambiadorTarjeta",
          value: function cambiadorTarjeta() {
            this.t2 = !this.t2;
          }
        }, {
          key: "seleccionadorTarjeta",
          value: function seleccionadorTarjeta(tarjeta) {
            if (this.t2 == false) {
              this.pdf.tarjeta = this.aux[tarjeta];
              this.texto = this.pdf.P2;
              this.card = this.pdf.tarjeta;
            } else {
              this.pdf.tarjeta2 = this.aux[tarjeta];
              this.card = this.pdf.tarjeta2;
            }
          }
        }, {
          key: "openPopUP",
          value: function openPopUP(item) {
            switch (item) {
              case 'tarjeta':
                this.tarjeta = !this.tarjeta;
                break;

              case 'ejemplo':
                this.ejemplo = !this.ejemplo;
                break;

              default:
                break;
            }

            this.show = !this.show;
          }
        }, {
          key: "openPopUP2",
          value: function openPopUP2() {
            this.ejemplo2 = !this.ejemplo2;

            if (this.ejemplo2 == false) {
              this.ejemplo3 = !this.ejemplo3;
            }
          }
        }, {
          key: "openPopUP3",
          value: function openPopUP3() {
            this.ejemplo3 = !this.ejemplo3;
            this.show = !this.show;
          }
        }, {
          key: "ideasaved",
          value: function ideasaved() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      this.pdf.idea1 = this.idea;
                      this.pdf.idea2 = this.idea2;
                      this.pdf.idea3 = this.idea3;
                      this.pdf.idea4 = this.idea4;
                      this.pdf.gaseoso = "Terminado";
                      this.serv.addItem(this.pdf);
                      this.serv.AddItem(this.pdf);

                    case 7:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));
          }
        }, {
          key: "mipromesa",
          value: function mipromesa() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
              var _this2 = this;

              return regeneratorRuntime.wrap(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      new Promise(function (resolve) {
                        _this2.objaux = JSON.parse(_this2.serv.getItem('_cap_pdf2'));
                        _this2.pdf = _this2.objaux;
                        return resolve(_this2.pdf);
                      });

                    case 1:
                    case "end":
                      return _context4.stop();
                  }
                }
              }, _callee4);
            }));
          }
        }, {
          key: "alLector",
          value: function alLector() {
            this.router.navigateByUrl('scanner');
          }
        }, {
          key: "gotoSolido",
          value: function gotoSolido() {
            this.router.navigateByUrl('/solido/pasoG/0');
          }
        }]);

        return GaseosoPage;
      }();

      GaseosoPage.ctorParameters = function () {
        return [{
          type: _services_servicio_service__WEBPACK_IMPORTED_MODULE_2__["ServicioService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }];
      };

      GaseosoPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-gaseoso',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./gaseoso.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/gaseoso/gaseoso.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./gaseoso.page.scss */
        "./src/app/pages/gaseoso/gaseoso.page.scss"))["default"]]
      })], GaseosoPage);
      /***/
    },

    /***/
    "./src/assets/json/tarjetas.json":
    /*!***************************************!*\
      !*** ./src/assets/json/tarjetas.json ***!
      \***************************************/

    /*! exports provided: tarjeta, default */

    /***/
    function srcAssetsJsonTarjetasJson(module) {
      module.exports = JSON.parse("{\"tarjeta\":[{\"Personaje\":\"crispi\",\"tarjetas\":{\"1\":\"El cielo es un vecindario.\",\"2\":\"Empieza por un garaje.\",\"3\":\"Pon otros usos.\",\"4\":\"Sin planos no se hacen rascacielos.\",\"5\":\"Dale un vuelco a tu rutina.\",\"6\":\"Piensa cosas imposibles de hacer.\",\"7\":\"Haz trocitos y después júntalos.\",\"8\":\"Corta una conexión.\",\"9\":\"Haz cosas imperfectas.\",\"10\":\"Devuélvete\"}},{\"Personaje\":\"cesia\",\"tarjetas\":{\"1\":\"Quita las partes importantes.\",\"2\":\"Cuantas manos y cabezas sean necesarias.\",\"3\":\"Primero lo primero.\",\"4\":\"Cambia de roles.\",\"5\":\"Aporte valor de verdad\",\"6\":\"Modifica.\",\"7\":\"Duro como una roca, flexible como…\",\"8\":\"Sé aburrido.\",\"9\":\"Rómpalo!\",\"10\":\"No hay reglas\"}},{\"Personaje\":\"cori\",\"tarjetas\":{\"1\":\"Combina lo incombinable.\",\"2\":\"Piensa como un lobo.\",\"3\":\"Elimina, Reduce, Incrementa y crea.\",\"4\":\"Observa de cerca los detalles más vergonzosos y amplíalos.\",\"5\":\"Adapta.\",\"6\":\"Mira los dos lados, el oscuro y el claro.\",\"7\":\"Desordénalo todo.\",\"8\":\"¿Qué haría tu mejor amigo?\",\"9\":\"La idea no es un motivo\",\"10\":\"Ni a Dios lo que es de Dios, ni al César lo que es del César\"}},{\"Personaje\":\"carmel\",\"tarjetas\":{\"1\":\"Haz una lista de cuatro cosas que podrías hacer y haz lo último en la lista.\",\"2\":\"Elimina.\",\"3\":\"Cambia de roles.\",\"4\":\"Una sencilla solución, dos difíciles soluciones.\",\"5\":\"Déjà vu.\",\"6\":\"Toma un descanso.\",\"7\":\"Nado submarino largas distancias.\",\"8\":\"Comparte valor\",\"9\":\"Si tu te lo crees, los demas lo compraran\",\"10\":\"Todo bombero no desea otra cosa en la vida más que ser bombero\"}},{\"Personaje\":\"cristal\",\"tarjetas\":{\"1\":\"Conviertelo en tu APP favorita.\",\"2\":\"Busca un libro y lee su primer párrafo.\",\"3\":\"Actùa con pasiòn.\",\"4\":\"Juega el juego.\",\"5\":\"¿Qué pasaría si…?\",\"6\":\"Nunca ponga los huevos en una sola canasta\",\"7\":\"Como en casa\",\"8\":\"Como lo haria la persona que mas admiras \",\"9\":\"Los detalles marcan la diferencia\",\"10\":\"Que aprendiste ayer\"}}]}");
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-gaseoso-gaseoso-module-es5.js.map