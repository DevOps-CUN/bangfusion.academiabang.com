(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-tipo-fisico-fisico-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/tipo/fisico/fisico.page.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/tipo/fisico/fisico.page.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content class=\"ion-no-padding\">\n  <div *ngIf=\"section == 'video'\">\n    <img (click)=\"avanzar('realizar');\"src=\"assets/imgs/Botones/Botón_cancelar.png\" class=\"cerrar\">\n    <video  controls class=\"video\" playsinline>\n      <source \n        src=\"https://firebasestorage.googleapis.com/v0/b/safeexam-473f1.appspot.com/o/bangPro%2FMaquetas.mp4?alt=media&token=d276bd2b-7d60-4d97-ac46-9e67c2a36fec\"\n        type=\"video/mp4\"\n      />\n    </video>\n  </div>\n<!-- Foto realizar -->\n  <div *ngIf=\"section == 'realizar'\">\n    <img src=\"assets/imgs/20/FONDO.png\" class=\"fondo-comenzar\" />\n    <img src=\"assets/imgs/Ultimos recursos/titulo.png\" alt=\"\" class=\"titulo\"/>\n    <img (click)=\"avanzar('video');\"src=\"assets/imgs/Botones/Botón_atras.png\" class=\"atras\">\n    <div class=\"btn_contenedor\">\n      <img (click)=\"section = 'cronometro'\" src=\"assets/imgs/Ultimos recursos/entorno.png\"/>\n      <img (click)=\"section = 'cronometro'\" src=\"assets/imgs/Ultimos recursos/reciclaje.png\" alt=\"\" />\n      <img (click)=\"section = 'cronometro'\" src=\"assets/imgs/Ultimos recursos/plastilina.png\" alt=\"\" />\n      <img (click)=\"section = 'cronometro'\" src=\"assets/imgs/Ultimos recursos/lapiz y papel.png\" alt=\"\" />\n  </div>\n  </div>\n<!-- Foto Cronometro -->\n  <div *ngIf=\"section == 'cronometro'\" >\n    <img src=\"assets/imgs/Ultimos recursos/fondo-cronometro.png\" class=\"fondo-comenzar\" />\n    <img src=\"assets/imgs/21/TITULO.png\" class=\"titulo\">\n    <img (click)=\"avanzar('video');\"src=\"assets/imgs/Botones/Botón_atras.png\" class=\"atras\">\n    <img src=\"assets/imgs/21/CRONOMETRO.png\" \n    class=\"crono\">\n    <img    \n     (click)=\"openPopUP('cronometro'); iniciar();\"\n    class=\"btn-iniciar\"src=\"assets/imgs/21/INICIAR.png\" >\n    <div *ngIf=\"cronometro\">\n      <img *ngIf=\"pausado == false\" (click)=\"pausar()\" src=\"assets/imgs/Ultimos recursos/pausar.png\" class=\"pausar\">\n      <img *ngIf=\"pausado == true\" (click)=\"reproducir()\" src=\"assets/imgs/Ultimos recursos/play.png\" class=\"pausar\">\n\n      <img (click)=\"reiniciar()\" src=\"assets/imgs/Ultimos recursos/reiniciar.png\" class=\"reiniciar\">\n      <img (click)=\"detener()\" src=\"assets/imgs/Botones/Botón_cancelar.png\" class=\"X\">\n      <img\n      src=\"assets/imgs/15/CARTA REVES.png\"\n      class=\"pop-up2\"\n      > \n      <p class=\"pop-up-minute\">\n        {{min}}: \n      </p>\n      <p class=\"pop-up-second\">\n        {{sec}}\n      </p>\n\n    </div>\n    <img \n    (click)=\"section ='foto'; iniciador();\"\n    class=\"btn-avanzar\"\n    src=\"assets/imgs/21/AVANZAR.png\" >\n\n  </div>\n      <!-- Foto Prototipo -->\n  <div *ngIf=\"section == 'foto'\" >\n    <img src=\"assets/imgs/Ultimos recursos/fondo-camara.png\" alt=\"\" class=\"fondo-comenzar\" />\n    <img (click)=\"avanzar('cronometro');\"src=\"assets/imgs/Botones/Botón_atras.png\" class=\"atras\">\n    <img src=\"assets/imgs/22/CAMARA.png\" alt=\"\" class=\"camara\">\n        <label for=\"file-upload\" class=\"subir\">\n          <i class=\"fas fa-cloud-upload-alt\"></i>\n      </label>\n      <input id=\"file-upload\" (change)=\"uploadFile($event.target.files)\" type=\"file\" style='display: none;'/>\n      \n    <img  (click)=\"enviar();section ='ultimas'\"\n    class=\"btn-avanzar\"\n    src=\"assets/imgs/22/AVANZAR.png\" >\n  </div>\n      <!-- Ultimas preguntas -->\n  <div *ngIf=\"section == 'ultimas'\">\n    <img (click)=\"avanzar('foto');\"src=\"assets/imgs/Botones/Botón_atras.png\" class=\"atras\">\n    <img src=\"assets/imgs/Ultimos recursos/fondo-analisis.png\"  alt=\"\" class=\"fondo-comenzar\" />\n    <img src=\"assets/imgs/19/C.png\" (click)=\"openPopUP('C')\" alt=\"\" class=\"c\" />\n    <img src=\"assets/imgs/Ultimos recursos/1c.png\"(click)=\"openPopUP('C')\"class=\"c2\"/>\n    <img src=\"assets/imgs/19/R.png\" (click)=\"openPopUP('R')\" alt=\"\" class=\"r\" />\n    <img src=\"assets/imgs/Ultimos recursos/2r.png\"(click)=\"openPopUP('R')\"class=\"r2\"/>\n    <img src=\"assets/imgs/19/P.png\" (click)=\"openPopUP('P')\" alt=\"\" class=\"p2\" />\n    <img src=\"assets/imgs/Ultimos recursos/3p.png\"(click)=\"openPopUP('P')\"class=\"p3\"/>\n    <img src=\"assets/imgs/19/V.png\" (click)=\"openPopUP('V')\" alt=\"\" class=\"v\" />\n    <img src=\"assets/imgs/Ultimos recursos/4v.png\"(click)=\"openPopUP('V')\"class=\"v2\"/>\n              <!-- popups -->\n              <div   *ngIf=\"V\" >\n                <img\n                src=\"assets/imgs/19/POP UP V.png\"\n                (click)=\"openPopUP('V')\"\n                class=\"pop-up\"\n                />\n                <ion-textarea\n                class=\"text_V\"\n                [(ngModel)]=\"textV\"\n                autofocus=\"true\"\n                placeholder=\" Escribe aqui...\"\n                autoGrow=\"false\"\n                wrap=\"hard\"\n                rows=\"8\"\n              ></ion-textarea>\n              </div>\n              <div  *ngIf=\"C\">\n                <img\n                src=\"assets/imgs/19/POP UP C.png\"\n                (click)=\"openPopUP('C')\"\n                class=\"pop-up\"\n                />\n                <ion-textarea\n                class=\"text_V\"\n                autofocus=\"true\"\n                placeholder=\" Escribe aqui...\"\n                [(ngModel)]=\"textC\"\n                autoGrow=\"false\"\n                wrap=\"hard\"\n                rows=\"8\"\n              ></ion-textarea>\n              </div>\n              <div *ngIf=\"P\">\n                <img\n                src=\"assets/imgs/19/POP UP P.png\"\n                (click)=\"openPopUP('P')\"\n                \n                class=\"pop-up\"\n                />\n                <ion-textarea\n                class=\"text_V\"\n                autofocus=\"true\"\n                [(ngModel)]=\"textP\"\n                placeholder=\" Escribe aqui...\"\n                autoGrow=\"false\"\n                wrap=\"hard\"\n                rows=\"8\"\n              ></ion-textarea>\n              </div>\n              <div *ngIf=\"R\">\n                <img\n                src=\"assets/imgs/19/POP UP R.png\"\n                (click)=\"openPopUP('R')\"\n                \n                class=\"pop-up\"\n                />\n                <ion-textarea\n                class=\"text_V\"\n                autofocus=\"true\"\n                placeholder=\" Escribe aqui...\"\n                autoGrow=\"false\"\n                [(ngModel)]=\"textR\"\n                wrap=\"hard\"\n                rows=\"8\"\n              ></ion-textarea>\n              </div>\n    <img (click)=\"section = 'herramientas'\"\n    class=\"btn-avanzar\"\n    src=\"assets/imgs/23/AVANZAR.png\" >\n  </div>\n      <!-- Herramientas -->\n  <div *ngIf=\"section == 'herramientas'\">\n    <img src=\"assets/imgs/Ultimos recursos/fondo-maqueta.png\" alt=\"\" class=\"fondo-comenzar\" />\n    <img (click)=\"avanzar('ultimas');\"src=\"assets/imgs/Botones/Botón_atras.png\" class=\"atras\">\n    <img src=\"assets/imgs/23/CANVA.png\" alt=\"\" class=\"canva\" />\n    <img src=\"assets/imgs/23/J.png\" alt=\"\" class=\"j\" />\n    <img src=\"assets/imgs/23/M.png\" alt=\"\" class=\"m\" />\n    <img src=\"assets/imgs/23/P.png\" alt=\"\" class=\"p\" />\n    <img  (click)=\"storageR();\"\n    class=\"btn-avanzar\"\n    src=\"assets/imgs/23/AVANZAR.png\" >\n  </div>\n  <!-- Felicitaciones 1 -->\n  <div *ngIf=\"section == 'felicitaciones1'\" >\n    <img src=\"assets/imgs/24/FONDO.png\" class=\"fondo-comenzar\"/>\n    <img (click)=\"avanzar('herramientas');\"src=\"assets/imgs/Botones/Botón_atras.png\" class=\"atras\">\n    <img src=\"assets/imgs/24/TEXTO.png\" class=\"texto_felicitaciones\"/>\n    <img src=\"assets/imgs/Ultimos recursos/Escanea.png\" class=\"acerca\"/>\n    <img     \n    (click)=\"alLector();\"\n    class=\"btn-finalizar2\"\n    src=\"assets/imgs/23/AVANZAR.png\" >\n  </div>\n  <!-- Felicitaciones salida scanner -->\n  <div *ngIf=\"section == 'feli1'\" >\n    <img src=\"assets/imgs/24/FONDO.png\" alt=\"\" class=\"fondo-comenzar\"/>\n    <img src=\"assets/imgs/24/final.png\" alt=\"\" class=\"texto_feli\"/>\n    <img       \n    (click)=\"mipromesa2();section ='feli2';\"\n    class=\"btn-avanzar\"\n    src=\"assets/imgs/23/AVANZAR.png\" >\n  </div>\n        <!-- Felicitaciones 2 -->\n  <div *ngIf=\"section == 'feli2'\">\n    <img src=\"assets/imgs/24/FONDO.png\" alt=\"\" class=\"fondo-comenzar\"/>\n    <img src=\"assets/imgs/24/TEXTO.png\" alt=\"\" class=\"texto_felicitaciones\"/>\n    <div class=\"acerca\">\n      <ion-textarea\n      class=\"texto_aprender\"\n      autofocus=\"true\"\n      [(ngModel)]=\"aprendizaje\"\n      placeholder=\"¿Qué aprendiste hoy?\"\n      autoGrow=\"true\"\n      wrap=\"hard\"\n      rows=\"3\"\n    ></ion-textarea>\n    </div>  \n    <img (click)=\"learn();toPdf();\"\n    class=\"btn-descargar\" \n    src=\"assets/imgs/24/DESCARGAR.png\" >\n    <img       \n    (click)=\"learn();\"\n    routerLink=\"/home/home\"\n    class=\"btn-finalizar\" \n    src=\"assets/imgs/24/FINALIZAR.png\" >\n  </div>\n  <ion-backdrop *ngIf=\"show\" [visible]=\"false\" tappable=\"false\"></ion-backdrop>\n</ion-content>  ");

/***/ }),

/***/ "./src/app/pages/tipo/fisico/fisico-routing.module.ts":
/*!************************************************************!*\
  !*** ./src/app/pages/tipo/fisico/fisico-routing.module.ts ***!
  \************************************************************/
/*! exports provided: FisicoPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FisicoPageRoutingModule", function() { return FisicoPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _fisico_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./fisico.page */ "./src/app/pages/tipo/fisico/fisico.page.ts");




const routes = [
    {
        path: '',
        component: _fisico_page__WEBPACK_IMPORTED_MODULE_3__["FisicoPage"]
    }
];
let FisicoPageRoutingModule = class FisicoPageRoutingModule {
};
FisicoPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], FisicoPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/tipo/fisico/fisico.module.ts":
/*!****************************************************!*\
  !*** ./src/app/pages/tipo/fisico/fisico.module.ts ***!
  \****************************************************/
/*! exports provided: FisicoPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FisicoPageModule", function() { return FisicoPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _fisico_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./fisico-routing.module */ "./src/app/pages/tipo/fisico/fisico-routing.module.ts");
/* harmony import */ var _fisico_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./fisico.page */ "./src/app/pages/tipo/fisico/fisico.page.ts");







let FisicoPageModule = class FisicoPageModule {
};
FisicoPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _fisico_routing_module__WEBPACK_IMPORTED_MODULE_5__["FisicoPageRoutingModule"]
        ],
        declarations: [_fisico_page__WEBPACK_IMPORTED_MODULE_6__["FisicoPage"]]
    })
], FisicoPageModule);



/***/ }),

/***/ "./src/app/pages/tipo/fisico/fisico.page.scss":
/*!****************************************************!*\
  !*** ./src/app/pages/tipo/fisico/fisico.page.scss ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".fondo-comenzar {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n  z-index: -2;\n}\n\n.atras {\n  position: absolute;\n  left: 1vh;\n  bottom: 14vh;\n  width: 18vw;\n  height: 10vh;\n  z-index: 1;\n}\n\n.btn_contenedor {\n  bottom: 14vh;\n  left: 5vw;\n  z-index: 2;\n  position: absolute;\n  width: 90vw;\n  height: 46vh;\n}\n\n.cerrar {\n  position: absolute;\n  right: 2vw;\n  top: 1vh;\n  width: 10vw;\n  height: 8vh;\n  z-index: 3;\n}\n\n.crono {\n  position: absolute;\n  top: 32vh;\n  left: 15vw;\n  width: 70vw;\n  height: 45vh;\n}\n\n.titulo {\n  position: absolute;\n  top: 17vh;\n  left: 21vw;\n  width: 60vw;\n  height: 13vh;\n}\n\n.btn-avanzar {\n  position: absolute;\n  bottom: 4vh;\n  left: 55vw;\n  width: 41vw;\n}\n\n.btn-iniciar {\n  position: absolute;\n  bottom: 19vh;\n  left: 25vw;\n  width: 50vw;\n}\n\n.texto {\n  position: absolute;\n  left: 10vw;\n  color: white;\n  width: 80vw;\n}\n\n.texto p {\n  text-align: center;\n  font-family: \"Delius\";\n  font-size: 0.8rem;\n}\n\n.pop-up {\n  position: absolute;\n  left: 50%;\n  top: 30%;\n  transform: translate(-50%, -50%);\n  width: 80vw;\n  z-index: 3;\n  height: 42vh;\n}\n\n.pop-up-minute {\n  position: absolute;\n  left: 50%;\n  top: 30%;\n  transform: translate(-72%, -50%);\n  width: 80vw;\n  z-index: 3;\n  border-radius: 5px;\n  font-family: \"Delius\";\n  font-size: 6.4rem;\n  color: white;\n  padding-left: 10px;\n  padding-right: 10px;\n  text-align: center;\n}\n\n.pop-up-second {\n  position: absolute;\n  left: 46%;\n  top: 30%;\n  transform: translate(-23%, -50%);\n  width: 80vw;\n  z-index: 3;\n  border-radius: 5px;\n  font-family: \"Delius\";\n  font-size: 6.4rem;\n  color: white;\n  padding-left: 10px;\n  padding-right: 10px;\n  text-align: center;\n}\n\n.camara {\n  position: absolute;\n  top: 35vh;\n  left: 1vw;\n  width: 100vw;\n  height: 40vh;\n}\n\n.btn-tomar {\n  position: absolute;\n  bottom: 22vh;\n  left: 21vw;\n  width: 60vw;\n}\n\n.canva {\n  position: absolute;\n  width: 38vw;\n  top: 36vh;\n  left: 50vw;\n  height: 21vh;\n}\n\n.c {\n  position: absolute;\n  width: 41vw;\n  top: 30vh;\n  left: 8vw;\n  height: 22vh;\n}\n\n.c2 {\n  position: absolute;\n  width: 10vw;\n  top: 30vh;\n  left: 8vw;\n  height: 5vh;\n}\n\n.r {\n  position: absolute;\n  width: 41vw;\n  top: 30vh;\n  left: 54vw;\n  height: 22vh;\n}\n\n.r2 {\n  position: absolute;\n  width: 10vw;\n  top: 30vh;\n  left: 54vw;\n  height: 5vh;\n}\n\n.p2 {\n  position: absolute;\n  width: 41vw;\n  top: 55vh;\n  left: 8vw;\n  height: 22vh;\n}\n\n.p3 {\n  position: absolute;\n  width: 10vw;\n  top: 55vh;\n  left: 8vw;\n  height: 5vh;\n}\n\n.v {\n  position: absolute;\n  width: 41vw;\n  top: 55vh;\n  left: 54vw;\n  height: 22vh;\n}\n\n.v2 {\n  position: absolute;\n  width: 10vw;\n  top: 55vh;\n  left: 54vw;\n  height: 5vh;\n}\n\n.j {\n  position: absolute;\n  width: 65vw;\n  top: 25vh;\n  left: 17vw;\n  height: 12vh;\n}\n\n.pop-up2 {\n  position: absolute;\n  left: 50%;\n  top: 48%;\n  transform: translate(-50%, -50%);\n  width: 80%;\n  z-index: 3;\n}\n\n.X {\n  position: absolute;\n  left: 83vw;\n  top: 17vh;\n  width: 5vw;\n  height: 5vh;\n  z-index: 8;\n}\n\n.detener {\n  position: absolute;\n  left: 63vw;\n  top: 73vh;\n  width: 23vw;\n  height: 13vh;\n  z-index: 8;\n}\n\n.pausar {\n  position: absolute;\n  left: 38vw;\n  top: 73vh;\n  width: 23vw;\n  height: 13vh;\n  z-index: 8;\n}\n\n.reiniciar {\n  position: absolute;\n  left: 13vw;\n  top: 73vh;\n  width: 23vw;\n  height: 13vh;\n  z-index: 8;\n}\n\n.m {\n  position: absolute;\n  width: 64vw;\n  top: 57vh;\n  left: 19vw;\n  height: 16vh;\n}\n\n.p {\n  position: absolute;\n  width: 40vw;\n  top: 36vh;\n  left: 12vw;\n  height: 21vh;\n}\n\n.texto_herramientas {\n  position: absolute;\n  width: 100vw;\n  top: 76vh;\n  left: 2vw;\n}\n\n.texto_felicitaciones {\n  position: absolute;\n  width: 94vw;\n  top: 7vh;\n  left: 3vw;\n  height: 22vh;\n}\n\n.texto_feli {\n  position: absolute;\n  width: 100vw;\n  top: 33vh;\n  left: 0vw;\n  height: 45vh;\n}\n\n.acerca {\n  position: absolute;\n  width: 92vw;\n  top: 32vh;\n  left: 4vw;\n  height: 51vh;\n}\n\n.btn-descargar {\n  position: absolute;\n  width: 77vw;\n  top: 80vh;\n  left: 11vw;\n}\n\n.btn-finalizar {\n  position: absolute;\n  width: 77vw;\n  top: 88vh;\n  left: 11vw;\n}\n\n.btn-finalizar2 {\n  position: absolute;\n  width: 53vw;\n  top: 88vh;\n  left: 32vw;\n}\n\n.texto_aprender {\n  height: 40vh;\n  margin-left: 1vw;\n  width: 90vw;\n  background-color: #e4e2e3;\n  border-radius: 5px;\n  font-family: \"Delius\";\n  color: black;\n  padding-left: 10px;\n  padding-right: 10px;\n  text-align: center;\n}\n\n.text_V {\n  position: absolute;\n  z-index: 3;\n  bottom: 9vh;\n  height: 34vh;\n  width: 80vw;\n  left: 12vw;\n  background-color: #e4e2e3;\n  border-radius: 31px;\n  font-family: \"Delius\";\n  color: black;\n  padding-left: 10px;\n  padding-right: 15px;\n  text-align: center;\n}\n\n.video {\n  width: 100vw;\n}\n\nion-backdrop {\n  background-color: var(--ion-color-primary);\n  opacity: 0.9;\n}\n\n#uploadBtn {\n  position: absolute;\n  bottom: 10%;\n  left: 15%;\n  height: 25%;\n  background-image: url('TOMAR.png');\n}\n\n.subir {\n  padding: 5px 10px;\n  background: #f55d3e00;\n  color: rgba(255, 255, 255, 0);\n  border: 0px solid #fff;\n  position: absolute;\n  bottom: 19%;\n  left: 21%;\n  height: 10%;\n  width: 68%;\n  background-image: url('TOMAR.png');\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdGlwby9maXNpY28vZmlzaWNvLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7QUFDSjs7QUFDQTtFQUNJLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7QUFFSjs7QUFBQTtFQUNJLFlBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUFHSjs7QUFBQTtFQUNJLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFFBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7QUFHSjs7QUFEQTtFQUNJLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQUlKOztBQUZBO0VBQ0ksa0JBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FBS0o7O0FBSEE7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtBQU1KOztBQUpBO0VBQ0ksa0JBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7QUFPSjs7QUFMQTtFQUNJLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FBUUo7O0FBUEk7RUFDSSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EsaUJBQUE7QUFTUjs7QUFOQTtFQUNJLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7RUFDQSxnQ0FBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtBQVNKOztBQVBBO0VBQ0ksa0JBQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtFQUNBLGdDQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VB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RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7QUFtQ0o7O0FBakNBO0VBQ0ksWUFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUFvQ0o7O0FBakNBO0VBQ0ksa0JBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUFvQ0o7O0FBbENBO0VBQ0ksWUFBQTtBQXFDSjs7QUFuQ0E7RUFDSSwwQ0FBQTtFQUNBLFlBQUE7QUFzQ0o7O0FBcENBO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxrQ0FBQTtBQXVDSjs7QUFyQ0E7RUFDSSxpQkFBQTtFQUNBLHFCQUFBO0VBQ0EsNkJBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtFQUNBLGtDQUFBO0FBd0NKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvdGlwby9maXNpY28vZmlzaWNvLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb25kby1jb21lbnphciB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHdpZHRoOiAxMDB2dztcbiAgICBoZWlnaHQ6IDEwMHZoO1xuICAgIHotaW5kZXg6IC0yO1xuICB9XG4uYXRyYXN7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IDF2aDtcbiAgICBib3R0b206IDE0dmg7XG4gICAgd2lkdGg6IDE4dnc7XG4gICAgaGVpZ2h0OiAxMHZoO1xuICAgIHotaW5kZXg6IDE7XG4gIH1cbi5idG5fY29udGVuZWRvciB7XG4gICAgYm90dG9tOiAxNHZoO1xuICAgIGxlZnQ6IDV2dztcbiAgICB6LWluZGV4OiAyO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDogOTB2dztcbiAgICBoZWlnaHQ6IDQ2dmg7XG5cbiAgfVxuLmNlcnJhcnsgICAgXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHJpZ2h0OiAydnc7XG4gICAgdG9wOiAxdmg7XG4gICAgd2lkdGg6IDEwdnc7XG4gICAgaGVpZ2h0OiA4dmg7XG4gICAgei1pbmRleDogMztcbiAgfVxuLmNyb25ve1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDMydmg7XG4gICAgbGVmdDogMTV2dztcbiAgICB3aWR0aDogNzB2dztcbiAgICBoZWlnaHQ6IDQ1dmg7XG59XG4udGl0dWxve1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDE3dmg7XG4gICAgbGVmdDogMjF2dztcbiAgICB3aWR0aDogNjB2dztcbiAgICBoZWlnaHQ6IDEzdmg7XG59XG4uYnRuLWF2YW56YXJ7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJvdHRvbTogNHZoO1xuICAgIGxlZnQ6IDU1dnc7XG4gICAgd2lkdGg6IDQxdnc7XG59XG4uYnRuLWluaWNpYXJ7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJvdHRvbTogMTl2aDtcbiAgICBsZWZ0OiAyNXZ3O1xuICAgIHdpZHRoOiA1MHZ3O1xufVxuLnRleHRve1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiAxMHZ3O1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICB3aWR0aDogODB2dztcbiAgICBwe1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIGZvbnQtZmFtaWx5OiBcIkRlbGl1c1wiO1xuICAgICAgICBmb250LXNpemU6IDAuOHJlbTtcbiAgICB9XG59XG4ucG9wLXVwIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogNTAlO1xuICAgIHRvcDogMzAlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAgIHdpZHRoOiA4MHZ3O1xuICAgIHotaW5kZXg6IDM7XG4gICAgaGVpZ2h0OiA0MnZoO1xuICB9XG4ucG9wLXVwLW1pbnV0ZXtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogNTAlO1xuICAgIHRvcDogMzAlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC03MiUsIC01MCUpO1xuICAgIHdpZHRoOiA4MHZ3O1xuICAgIHotaW5kZXg6IDM7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGZvbnQtZmFtaWx5OiBcIkRlbGl1c1wiO1xuICAgIGZvbnQtc2l6ZTogNi40cmVtO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gICAgcGFkZGluZy1yaWdodDogMTBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4ucG9wLXVwLXNlY29uZHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogNDYlO1xuICAgIHRvcDogMzAlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC0yMyUsIC01MCUpO1xuICAgIHdpZHRoOiA4MHZ3O1xuICAgIHotaW5kZXg6IDM7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGZvbnQtZmFtaWx5OiBcIkRlbGl1c1wiO1xuICAgIGZvbnQtc2l6ZTogNi40cmVtO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gICAgcGFkZGluZy1yaWdodDogMTBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4vLyBGb3RvIFByb3RvdGlwb1xuLmNhbWFyYXtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAzNXZoO1xuICAgIGxlZnQ6IDF2dztcbiAgICB3aWR0aDogMTAwdnc7XG4gICAgaGVpZ2h0OiA0MHZoO1xufVxuLmJ0bi10b21hcntcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm90dG9tOiAyMnZoO1xuICAgIGxlZnQ6IDIxdnc7XG4gICAgd2lkdGg6IDYwdnc7XG59XG4vLyBIZXJyYW1pZW50YXNcbi5jYW52YXtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgd2lkdGg6IDM4dnc7XG4gICAgdG9wOiAzNnZoO1xuICAgIGxlZnQ6IDUwdnc7XG4gICAgaGVpZ2h0OiAyMXZoO1xufVxuLmN7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHdpZHRoOiA0MXZ3O1xuICAgIHRvcDogMzB2aDtcbiAgICBsZWZ0OiA4dnc7XG4gICAgaGVpZ2h0OiAyMnZoO1xufVxuLmMye1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDogMTB2dztcbiAgICB0b3A6IDMwdmg7XG4gICAgbGVmdDogOHZ3O1xuICAgIGhlaWdodDogNXZoO1xufVxuLnJ7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHdpZHRoOiA0MXZ3O1xuICAgIHRvcDogMzB2aDtcbiAgICBsZWZ0OiA1NHZ3O1xuICAgIGhlaWdodDogMjJ2aDtcbn1cbi5yMntcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgd2lkdGg6IDEwdnc7XG4gICAgdG9wOiAzMHZoO1xuICAgIGxlZnQ6IDU0dnc7XG4gICAgaGVpZ2h0OiA1dmg7XG59XG4ucDJ7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHdpZHRoOiA0MXZ3O1xuICAgIHRvcDogNTV2aDtcbiAgICBsZWZ0OiA4dnc7XG4gICAgaGVpZ2h0OiAyMnZoO1xufS5wM3tcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgd2lkdGg6IDEwdnc7XG4gICAgdG9wOiA1NXZoO1xuICAgIGxlZnQ6IDh2dztcbiAgICBoZWlnaHQ6IDV2aDtcbn1cbi52e1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDogNDF2dztcbiAgICB0b3A6IDU1dmg7XG4gICAgbGVmdDogNTR2dztcbiAgICBoZWlnaHQ6IDIydmg7XG59XG4udjJ7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHdpZHRoOiAxMHZ3O1xuICAgIHRvcDogNTV2aDtcbiAgICBsZWZ0OiA1NHZ3O1xuICAgIGhlaWdodDogNXZoO1xufVxuLmp7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHdpZHRoOiA2NXZ3O1xuICAgIHRvcDogMjV2aDtcbiAgICBsZWZ0OiAxN3Z3O1xuICAgIGhlaWdodDogMTJ2aDtcbn1cbi5wb3AtdXAye1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiA1MCU7XG4gICAgdG9wOiA0OCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gICAgd2lkdGg6IDgwJTtcbiAgICB6LWluZGV4OiAzO1xufVxuLlh7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IDgzdnc7XG4gICAgdG9wOiAxN3ZoO1xuICAgIHdpZHRoOiA1dnc7XG4gICAgaGVpZ2h0OiA1dmg7XG4gICAgei1pbmRleDogODtcbiAgfSBcbiAgLmRldGVuZXJ7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IDYzdnc7XG4gICAgdG9wOiA3M3ZoO1xuICAgIHdpZHRoOiAyM3Z3O1xuICAgIGhlaWdodDogMTN2aDtcbiAgICB6LWluZGV4OiA4O1xufSBcbi5wYXVzYXJ7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IDM4dnc7XG4gICAgdG9wOiA3M3ZoO1xuICAgIHdpZHRoOiAyM3Z3O1xuICAgIGhlaWdodDogMTN2aDtcbiAgICB6LWluZGV4OiA4O1xufSAgXG4ucmVpbmljaWFye1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiAxM3Z3O1xuICAgIHRvcDogNzN2aDtcbiAgICB3aWR0aDogMjN2dztcbiAgICBoZWlnaHQ6IDEzdmg7XG4gICAgei1pbmRleDogODtcbn0gICBcbi5te1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDogNjR2dztcbiAgICB0b3A6IDU3dmg7XG4gICAgbGVmdDogMTl2dztcbiAgICBoZWlnaHQ6IDE2dmg7XG59XG4ucHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgd2lkdGg6IDQwdnc7XG4gICAgdG9wOiAzNnZoO1xuICAgIGxlZnQ6IDEydnc7XG4gICAgaGVpZ2h0OiAyMXZoO1xufSAgIFxuLnRleHRvX2hlcnJhbWllbnRhc3tcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgd2lkdGg6IDEwMHZ3O1xuICAgIHRvcDogNzZ2aDtcbiAgICBsZWZ0OiAydnc7XG59XG4vL2ZlbGljaXRhY2lvbmVzIDFcbi50ZXh0b19mZWxpY2l0YWNpb25lc3tcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgd2lkdGg6IDk0dnc7XG4gICAgdG9wOiA3dmg7XG4gICAgbGVmdDogM3Z3O1xuICAgIGhlaWdodDogMjJ2aDtcbn1cbi50ZXh0b19mZWxpe1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDogMTAwdnc7XG4gICAgdG9wOiAzM3ZoO1xuICAgIGxlZnQ6IDB2dztcbiAgICBoZWlnaHQ6IDQ1dmg7XG59XG4uYWNlcmNhe1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDogOTJ2dztcbiAgICB0b3A6IDMydmg7XG4gICAgbGVmdDogNHZ3O1xuICAgIGhlaWdodDogNTF2aDtcbn1cbi5idG4tZGVzY2FyZ2Fye1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDogNzd2dztcbiAgICB0b3A6IDgwdmg7XG4gICAgbGVmdDogMTF2dztcbn1cbi5idG4tZmluYWxpemFye1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDogNzd2dztcbiAgICB0b3A6ODh2aDtcbiAgICBsZWZ0OiAxMXZ3O1xufVxuLmJ0bi1maW5hbGl6YXIye1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDogNTN2dztcbiAgICB0b3A6IDg4dmg7XG4gICAgbGVmdDogMzJ2dztcbn1cbi50ZXh0b19hcHJlbmRlcntcbiAgICBoZWlnaHQ6IDQwdmg7XG4gICAgbWFyZ2luLWxlZnQ6IDF2dztcbiAgICB3aWR0aDogOTB2dztcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTRlMmUzO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBmb250LWZhbWlseTogXCJEZWxpdXNcIjtcbiAgICBjb2xvcjogYmxhY2s7XG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLy8gdWx0aW1hcyBwcmVndW50YXNcbi50ZXh0X1Z7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHotaW5kZXg6IDM7XG4gICAgYm90dG9tOiA5dmg7XG4gICAgaGVpZ2h0OiAzNHZoO1xuICAgIHdpZHRoOiA4MHZ3O1xuICAgIGxlZnQ6IDEydnc7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2U0ZTJlMztcbiAgICBib3JkZXItcmFkaXVzOiAzMXB4O1xuICAgIGZvbnQtZmFtaWx5OiBcIkRlbGl1c1wiO1xuICAgIGNvbG9yOiBibGFjaztcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gICAgcGFkZGluZy1yaWdodDogMTVweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4udmlkZW97XG4gICAgd2lkdGg6IDEwMHZ3O1xufVxuaW9uLWJhY2tkcm9wIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gICAgb3BhY2l0eTogMC45O1xuICB9XG4jdXBsb2FkQnRue1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3R0b206IDEwJTtcbiAgICBsZWZ0OiAxNSU7XG4gICAgaGVpZ2h0OiAyNSU7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi8uLi8uLi8uLi8uLi9hc3NldHMvaW1ncy8yMi9UT01BUi5wbmdcIik7XG59XG4uc3ViaXJ7XG4gICAgcGFkZGluZzogNXB4IDEwcHg7XG4gICAgYmFja2dyb3VuZDogI2Y1NWQzZTAwO1xuICAgIGNvbG9yOnJnYmEoMjU1LCAyNTUsIDI1NSwgMCk7XG4gICAgYm9yZGVyOjBweCBzb2xpZCAjZmZmO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3R0b206IDE5JTtcbiAgICBsZWZ0OiAyMSU7XG4gICAgaGVpZ2h0OiAxMCU7XG4gICAgd2lkdGg6IDY4JTtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLy4uLy4uLy4uLy4uL2Fzc2V0cy9pbWdzLzIyL1RPTUFSLnBuZ1wiKTtcbn1cbiJdfQ== */");

/***/ }),

/***/ "./src/app/pages/tipo/fisico/fisico.page.ts":
/*!**************************************************!*\
  !*** ./src/app/pages/tipo/fisico/fisico.page.ts ***!
  \**************************************************/
/*! exports provided: FisicoPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FisicoPage", function() { return FisicoPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_servicio_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../services/servicio.service */ "./src/app/services/servicio.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/fire/storage */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-storage.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-firestore.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");








let FisicoPage = class FisicoPage {
    constructor(serv, router, route, storage, database) {
        this.serv = serv;
        this.router = router;
        this.route = route;
        this.storage = storage;
        this.database = database;
        this.section = "";
        this.pausado = false;
        this.min = 5;
        this.date = new Date();
        this.exit = false;
        this.textV = "";
        this.textC = "";
        this.textR = "";
        this.textP = "";
        this.OP_SELECT = {};
        this.show = false;
        this.P = false;
        this.R = false;
        this.C = false;
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
        this.isUploading = false;
        this.isUploaded = false;
        //Set collection where our documents/ images info will save
        this.imageCollection = database.collection('freakyImages');
        this.images = this.imageCollection.valueChanges();
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.sec == '00';
            this.section = "cronometro";
            this.sub;
            this.sub2;
            this.mipromesa();
        });
    }
    ngAfterViewInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.route.params.subscribe(params => {
                const _params = params.section;
                this.section = _params;
            });
        });
    }
    avanzar(section) {
        this.section = section;
    }
    openPopUP(item) {
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
            case 'cronometro':
                this.cronometro = !this.cronometro;
                break;
            default:
                break;
        }
        this.show = !this.show;
        this.pdf.V = this.textV;
        this.pdf.C = this.textC;
        this.pdf.P = this.textP;
        this.pdf.R = this.textR;
        console.log("pdf", this.pdf);
    }
    iniciador() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.mipromesa().then(() => {
                this.serv.localFirebase(this.pdf.id, this.pdf.num);
            });
        });
    }
    iniciar() {
        this.temporizador2();
    }
    pausar() {
        if (this.sub2)
            this.sub2.unsubscribe();
        this.sub.unsubscribe();
        this.pausado = true;
    }
    reproducir() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.pausado = false;
            this.sub.unsubscribe();
            let salida = false;
            let auxmin = 5 - this.min;
            let auxsec = this.sec;
            if (this.sec == '00' && this.min != 0) {
                this.temporizador2();
            }
            else {
                this.temporizadoraux(salida, auxsec);
            }
        });
    }
    temporizadoraux(salida, auxsec) {
        if (salida == false) {
            let contador = Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["interval"])(1000);
            this.sub2 = contador.subscribe((n) => {
                this.sec = auxsec - n;
                if (this.min === 0 && this.sec === 0) {
                    this.sub2.unsubscribe();
                }
                if (this.sec == '00') {
                    salida = true;
                    this.sub2.unsubscribe();
                    this.temporizador2();
                }
                if (this.sec < 10 && this.sec >= '00') {
                    let aux = auxsec - n;
                    this.sec = `0${aux}`;
                }
            });
        }
    }
    detener() {
        if (this.sub2)
            this.sub2.unsubscribe();
        this.sub.unsubscribe();
        clearInterval();
        this.min = 5;
        this.sec = '00';
        this.openPopUP('cronometro');
    }
    reiniciar() {
        this.pausado = false;
        this.sub.unsubscribe();
        if (this.sub2)
            this.sub2.unsubscribe();
        this.min = 5;
        this.sec = '00';
        this.temporizador2();
    }
    temporizador2() {
        let Mul = 0;
        this.sec = '00';
        let contador = Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["interval"])(1000);
        this.sub = contador.subscribe((n) => {
            let aux = 60 * Mul;
            if (n === aux || n === 0) {
                this.sec = '00';
                Mul += 1;
            }
            else {
                this.sec = (60 * Mul) - n;
            }
            if (this.sec == 59) {
                this.min -= 1;
            }
            if (this.sec < 10 && this.sec > '00') {
                let aux = (60 * Mul) - n;
                this.sec = `0${aux}`;
            }
            if (this.min === 0 && this.sec === '00') {
                this.sub.unsubscribe();
            }
        });
    }
    resizeBase64Img(base64, newWidth, newHeight) {
        return new Promise((resolve, reject) => {
            var canvas = document.createElement("canvas");
            canvas.style.width = newWidth.toString() + "px";
            canvas.style.height = newHeight.toString() + "px";
            let context = canvas.getContext("2d");
            let img = document.createElement("img");
            img.src = base64;
            img.onload = function () {
                context.scale(newWidth / img.width, newHeight / img.height);
                context.drawImage(img, 0, 0);
                resolve(canvas.toDataURL());
            };
        });
    }
    tomarfoto() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let img = yield this.serv.addNewToGallery();
            this.image = img;
        });
    }
    enviar() {
    }
    storageR() {
        this.serv.addItem(this.pdf);
        this.section = 'felicitaciones1';
    }
    learn() {
        this.pdf.aprendizaje = this.aprendizaje;
        this.serv.editar2(this.pdf.id, this.pdf, this.pdf.num).catch((e) => {
            console.log("Error", e);
        });
        this.serv.addItem(this.pdf);
    }
    toPdf() {
        this.router.navigateByUrl('/pdf');
    }
    alLector() {
        this.router.navigateByUrl('scanner');
    }
    videoEnd() {
        this.router.navigateByUrl('fisico/realizar');
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
    uploadFile(event) {
        // The File object
        const file = event.item(0);
        // Validation for Images Only
        if (file.type.split('/')[0] !== 'image') {
            console.error('unsupported file type :( ');
            return;
        }
        this.isUploading = true;
        this.isUploaded = false;
        this.fileName = file.name;
        // The storage path
        const path = `BangPro/${new Date().getTime()}_${file.name}`;
        // Totally optional metadata
        const customMetadata = { app: 'Freaky Image Upload Demo' };
        const fileRef = this.storage.ref(path);
        this.task = this.storage.upload(path, file, { customMetadata });
        this.percentage = this.task.percentageChanges();
        this.snapshot = this.task.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["finalize"])(() => {
            this.UploadedFileURL = fileRef.getDownloadURL();
            this.UploadedFileURL.subscribe(resp => {
                this.addImagetoDB({
                    name: file.name,
                    filepath: resp,
                    size: this.fileSize
                });
                this.isUploading = false;
                this.isUploaded = true;
            }, error => {
                console.error(error);
            });
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["tap"])(snap => {
            this.fileSize = snap.totalBytes;
        }));
        fileRef.put(Blob, { customMetadata }).then(data => {
            data.ref.getDownloadURL().then(url => {
                // do whatever you want with url
                this.pdf.img = url;
            });
        });
    }
    addImagetoDB(image) {
        //Create an ID for document
        const id = this.database.createId();
        //Set document id with value in database
        this.imageCollection.doc(id).set(image).then(resp => {
            console.log(resp);
        }).catch(error => {
            console.log("error " + error);
        });
    }
};
FisicoPage.ctorParameters = () => [
    { type: _services_servicio_service__WEBPACK_IMPORTED_MODULE_2__["ServicioService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _angular_fire_storage__WEBPACK_IMPORTED_MODULE_5__["AngularFireStorage"] },
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_6__["AngularFirestore"] }
];
FisicoPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-fisico',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./fisico.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/tipo/fisico/fisico.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./fisico.page.scss */ "./src/app/pages/tipo/fisico/fisico.page.scss")).default]
    })
], FisicoPage);



/***/ })

}]);
//# sourceMappingURL=pages-tipo-fisico-fisico-module-es2015.js.map