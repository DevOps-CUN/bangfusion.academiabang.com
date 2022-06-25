(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-solido-solido-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/solido/solido.page.html":
    /*!*************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/solido/solido.page.html ***!
      \*************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppPagesSolidoSolidoPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-content class=\"ion-no-padding\">\n  <!-- comenzar -->\n  <div *ngIf=\"section == 'comenzar'\">\n    <img src=\"assets/imgs/5/FONDO.png\" class=\"fondo-comenzar\" />\n    <img src=\"assets/imgs/Ultimos recursos/Texto.png\" class=\"apunto_empezar-texto\" />\n    <img (click)=\"atras();\"src=\"assets/imgs/Botones/Botón_atras.png\" class=\"atras2\">\n      <img (click)=\"section = 'seleccionarP'\"\n      class=\"btn-comenzars ion-text-center\"\n       src=\"assets/imgs/5/COMENZAR.png\"/>\n  </div>\n\n  <!-- seleccionar personaje -->\n  <div *ngIf=\"section == 'seleccionarP'\">\n    <img src=\"assets/imgs/6/FONDO.png\"  class=\"fondo-comenzar\" />\n    <img src=\"assets/imgs/6/TEXTO.png\" class=\"apunto_empezar-texto\" />\n    <img (click)=\"avanzar('comenzar')\"src=\"assets/imgs/Botones/Botón_atras.png\" class=\"atras2\">\n      <img src=\"assets/imgs/6/ELEGIR.png\"\n      (click)=\"iniciador();personajesModeR = 'FONDO-FIJO';section = 'acerca'\"\n      class=\"btn-elegir ion-text-center\"/>\n    <img\n    (click)=\"iniciador();personajesModeR = 'FONDO-ALEATORIO';section = 'acerca'\"\n    class=\"btn-escoger ion-text-center\" \n    src=\"assets/imgs/6/ESCOGER.png\" />\n\n  </div>\n\n  <!-- acerca tu celular -->\n  <div *ngIf=\"section == 'acerca'\">\n    <img src=\"assets/imgs/5/FONDO.png\" alt=\"\" class=\"fondo-comenzar\" />\n    <img (click)=\"avanzar('comenzar')\"src=\"assets/imgs/Botones/Botón_atras.png\" class=\"atras2\">\n    <img src=\"assets/imgs/Ultimos recursos/Pop-up-acercar-telefono.png\" class=\"Pg\">\n    <img src=\"assets/imgs/Botones/Botón_oprimeaqui.png\" (click)=\"avanzar('personajeTablero')\" class=\"btn-avanzar-gaseoso\"\n  />\n  </div>\n  <!-- Personaje tablero -->\n  <div *ngIf=\"section == 'personajeTablero'\">\n    <img\n      src=\"assets/imgs/7/FONDO-FIJO.png\"\n      alt=\"\"\n      class=\"fondo-comenzar\"\n    />\n    <img (click)=\"avanzar('seleccionarP')\"src=\"assets/imgs/Botones/Botón_atras.png\" class=\"atras3\">\n    <div class=\"flechas\" *ngIf=\"personajesModeR != 'FONDO-ALEATORIO'\">\n      <img\n        *ngFor=\"let flecha of [1,2,3,4,5]; let i=index;\"\n        (click)=\"selecionador(i); avanzar('p')\"\n        src=\"assets/imgs/7/FLECHA OFF.png\"\n        />\n    </div>\n      <img       \n      (click)=\"avanzar('p'); personajeRandom()\"\n      *ngIf=\"personajesModeR == 'FONDO-ALEATORIO'\"\n      class=\"img-aleatorio\"\n      src=\"assets/imgs/7/ALEATORIO.png\" />\n  </div>\n  <!-- presentacion personaje -->\n  <div *ngIf=\"section == 'p';\">\n    <img src=\"assets/imgs/8/FONDO.png\" alt=\"\" class=\"fondo-comenzar\" />\n    <img\n      src=\"assets/imgs/8/{{personajeSeleccionadoaux}}-T.png\"\n      class=\"nombre-personaje\"\n    />\n    <img\n      src=\"assets/imgs/8/SVG/{{personajeSeleccionadoaux}}.svg\"\n      class=\"personaje\"\n    />\n    <img (click)=\"avanzar('personajeTablero');\"src=\"assets/imgs/Botones/Botón_atras.png\" class=\"atras\">\n      <img\n      class=\"btn-avanzar\"\n        src=\"assets/imgs/8/AVANZAR.png\"\n   \n        (click)=\"selectorfactores();avanzar('factores');guardarpersonaje();\">\n\n    <div class=\"play-video\">\n      <video controls class=\"video\" playsinline>\n        <source\n          src=\"assets/videos/{{personajeSeleccionadoaux}}-1.mp4\"\n          type=\"video/mp4\"\n        />\n      </video>\n    </div>\n  </div>\n  <!-- factores -->\n  <div *ngIf=\"section == 'factores'\">\n    <img src=\"assets/imgs/9/FONDO.png\" alt=\"\" class=\"fondo-comenzar\" />\n    <p class=\"factores_texto\">\n      Escoge el factor con el que deseas crear tu pregunta problema:\n    </p>\n    <img (click)=\"avanzar('p');\"src=\"assets/imgs/Botones/Botón_atras.png\" class=\"atras\">\n    <div class=\"btn_contenedor\">\n        <img (click)=\"pasoSelecionado = 'T'; factores();section = 'paso1'\" src=\"assets/imgs/Factor-boton/{{aux[0]}}.png\" />\n\n        <img  (click)=\"pasoSelecionado = 'I';factores(); section = 'paso1'\" src=\"assets/imgs/Factor-boton/{{aux[1]}}.png\" alt=\"\" />\n\n        <img   (click)=\"pasoSelecionado ='RN'; factores(); section = 'paso1'\" src=\"assets/imgs/Factor-boton/{{aux[2]}}.png\" alt=\"\" />\n\n        <img  (click)=\"pasoSelecionado ='CB'; factores(); section = 'paso1'\" src=\"assets/imgs/Factor-boton/{{aux[3]}}.png\" alt=\"\" />\n    </div>\n  </div>\n  <!-- Paso 1 -->\n  <div *ngIf=\"section == 'paso1'\">\n    <img src=\"assets/imgs/PASO_1/FONDO.png\" class=\"fondo-comenzar\" />\n    <img (click)=\"avanzar('factores');\"src=\"assets/imgs/Botones/Botón_atras.png\" class=\"atras\">\n    <img\n      src=\"assets/imgs/Factor-títulos/{{pdf.factor}}.png\"\n      class=\"ion-text-center titulo_paso1\"\n      *ngIf=\"!show_input_paso1\"\n    />\n    <ion-text color=\"light\" >\n      <h1>¡Muy bien!</h1>\n      <p>Ahora vas a crear tu pregunta problema en 3 pasos:</p>\n    </ion-text>\n    <div class=\"pasos_group\" >\n      <img (click)=\"avanzar('p_1');\" src=\"assets/imgs/PASO_1/PASO 1.png\" class=\"p1\" />\n      <img src=\"assets/imgs/PASO_1/PASO 2.png\" class=\"p2\" />\n      <img src=\"assets/imgs/PASO_1/PASO 3.png\" class=\"p3\" />\n    </div>\n      <img class=\"btn-avanzar\" (click)=\"avanzar('p_1')\" src=\"assets/imgs/8/AVANZAR.png\" alt=\"\" />\n  </div>\n  <div *ngIf=\"section=='p_1'\">\n    <img src=\"assets/imgs/PASO_1/FONDO.png\" class=\"fondo-comenzar\" />\n    <img (click)=\"avanzar('paso1');\"src=\"assets/imgs/Botones/Botón_atras.png\" class=\"atras\">\n    <img src=\"assets/imgs/Ultimos recursos/Paso_1.png\" class=\"Pg\"/>\n    <img (click)=\"alLector();\" src=\"assets/imgs/Botones/Botón_oprimeaqui.png\" class=\"BA\">\n  </div>\n  <!-- Paso 1 show -->\n  <div *ngIf=\"section=='s1'\">\n    <img src=\"assets/imgs/PASO_1/FONDO.png\" class=\"fondo-comenzar\" />\n    <div *ngIf=\"p1==true\">\n      <img\n      src=\"assets/imgs/PASO_1/PASOA.png\"\n      class=\"acerca\"\n    />\n      <img\n      class=\"btn-avanzar_paso1\"\n        src=\"assets/imgs/8/AVANZAR.png\"\n        alt=\"\"\n        (click)=\"openPopUP2('p1')\"\n      />\n\n    </div>\n    <div *ngIf=\"p1==false\">\n      <img src=\"assets/imgs/Factorpaso 1/P-{{pasoSelecionado}}.png\" class=\"texto_paso1\" alt=\"\" />\n      <ion-textarea\n        class=\"input_paso1\"\n        [(ngModel)]=\"Paso1\"\n        autofocus=\"true\"\n        placeholder=\" Escribe aqui...\"\n        autoGrow=\"false\"\n        wrap=\"hard\"\n        rows=\"8\"\n      ></ion-textarea>\n        <img (click)=\"saveInputPaso1(); redireccionador('paso2')\"\n        class=\"btn-avanzar\"\n         src=\"assets/imgs/PASO_1/LISTO.png\" />\n    </div>\n  </div>\n  <!-- paso 2 -->\n  <div *ngIf=\"section == 'paso2' \">\n    <img src=\"assets/imgs/PASO_2/FONDO.png\" class=\"fondo-comenzar\" />\n    <img\n      src=\"assets/imgs/Factor-títulos/{{pasoSelecionado}}.png\"\n      class=\"ion-text-center titulo_paso1\"\n    />\n    <ion-text color=\"light\" >\n      <h1>¡Muy bien!</h1>\n      <p>Ahora vas a crear tu pregunta problema en 3 pasos:</p>\n    </ion-text>\n    <div class=\"pasos_group\">\n      <img src=\"assets/imgs/PASO_1/PASO1_TERMINADO.png\"  class=\"p1\" />\n      <img (click)=\"avanzar('p_2');\" src=\"assets/imgs/PASO_1/PASO 2.png\" class=\"p2\" />\n      <img src=\"assets/imgs/PASO_1/PASO 3.png\"  class=\"p3\" />\n    </div>\n      <img (click)=\"avanzar('p_2');\" class=\"btn-avanzar\" src=\"assets/imgs/8/AVANZAR.png\" alt=\"\" />\n  </div>\n  <div *ngIf=\"section=='p_2'\">\n    <img src=\"assets/imgs/PASO_1/FONDO.png\" class=\"fondo-comenzar\" />\n    <img src=\"assets/imgs/Ultimos recursos/Paso_2.png\" class=\"Pg\"/>\n    <img (click)=\"alLector();\" src=\"assets/imgs/Botones/Botón_oprimeaqui.png\" class=\"BA\">\n  </div>\n  <!--paso 2 show  -->\n  <div *ngIf=\"section=='s2'\">\n    <img src=\"assets/imgs/PASO_2/FONDO.png\" class=\"fondo-comenzar\" />\n    <div *ngIf=\"p2==true\">\n      <img\n      src=\"assets/imgs/PASO_2/PASO_2A.png\"\n      class=\"acerca\"\n    />\n      <img\n      class=\"btn-avanzar_paso1\"\n        src=\"assets/imgs/8/AVANZAR.png\"\n        alt=\"\"\n        (click)=\"openPopUP2('p2')\"\n      />\n    <!-- //// -->\n    \n    </div>\n    <div *ngIf=\"p2==false\">\n      <img src=\"assets/imgs/PASO_2/TEXTO.png\" class=\"texto_paso2\" />\n\n      <img\n        (click)=\"openPopUP('lista')\"\n        src=\"assets/imgs/Ultimos recursos/BOTON_TU_LISTA.png\"\n        class=\"lista\"\n      />\n        <img\n        (click)=\"openPopUP('ejemplo')\"\n        class=\"ejemplo\"\n         src=\"assets/imgs/PASO_2/EJEMPLO 2.png\" />\n      <ion-textarea\n        class=\"input_paso2\"\n        autofocus=\"true\"\n        placeholder=\" Escribe aqui...\"\n        [(ngModel)]=\"Paso2\"\n        autoGrow=\"false\"\n        wrap=\"hard\"\n        rows=\"11\"\n      ></ion-textarea>\n      <!-- Popup Lista -->\n      <div (click)=\"openPopUP('lista')\" *ngIf=\"lista\" class=\"pop-up-lista\">\n        <img (click)=\"openPopUP('lista')\" src=\"assets/imgs/Botones/Botón_cancelar.png\" class=\"X\">\n        <img src=\"assets/imgs/15/CARTA REVES.png\" class=\"pop-up\" />\n        <p class=\"pop-up\">{{this.pdf.P1}}</p>\n      </div>\n      <!-- Popup ejemplo -->\n      <div (click)=\"openPopUP('ejemplo')\" *ngIf=\"ejemplo\" class=\"pop-up-lista\">\n        <img (click)=\"openPopUP('ejemplo')\" src=\"assets/imgs/Botones/Botón_cancelar.png\" class=\"X\">\n        <img src=\"assets/imgs/15/CARTA REVES.png\" class=\"pop-up\" />\n        <p class=\"pop-up\"> ¿Qué estrategia implementar para estructurar un esquema de capacitación adecuado?<br>\n          ¿Cuál herramienta o metodología usar para el óptimo desarrollo del proceso?<br>\n          ¿Cómo capacitarse en herramientas digitales modernas?<br><br>\n          Evita formular preguntas muy generales, como: <br>\n          ¿Cómo aumento mi bienestar? <br>\n          ¿Cómo aumento mi reconocimiento? ¿Cómo mejoro mi entorno?\n\n          </p>\n      </div>\n        <img (click)=\"redireccionador('paso3');saveInputPaso2();\"\n        class=\"btn-avanzar\"\n        src=\"assets/imgs/PASO_2/LISTO.png\" />\n    </div>\n  </div>\n  <!-- Paso 3 -->\n  <div *ngIf=\"section == 'paso3'\">\n    <img src=\"assets/imgs/PASO_3/FONDO-2.png\" alt=\"\" class=\"fondo-comenzar\" />\n    <img\n      src=\"assets/imgs/Factor-títulos/{{pasoSelecionado}}.png\"\n      class=\"ion-text-center titulo_paso1\"\n    />\n    <ion-text color=\"light\" >\n      <h1>¡Muy bien!</h1>\n      <p>Ahora vas a crear tu pregunta problema en 3 pasos:</p>\n    </ion-text>\n    <div class=\"pasos_group\">\n      <img src=\"assets/imgs/PASO_1/PASO1_TERMINADO.png\" alt=\"\" class=\"p1\" />\n      <img src=\"assets/imgs/PASO_2/PASO 2 TERMINADO.png\" alt=\"\" class=\"p2\" />\n      <img (click)=\"avanzar('p_3');\" src=\"assets/imgs/PASO_1/PASO 3.png\" alt=\"\" class=\"p3\" />\n    </div>\n      <img class=\"btn-avanzar\"\n      (click)=\"avanzar('p_3')\"\n      src=\"assets/imgs/8/AVANZAR.png\" alt=\"\" />\n  </div>\n  <div *ngIf=\"section=='p_3'\">\n    <img src=\"assets/imgs/PASO_1/FONDO.png\" alt=\"\" class=\"fondo-comenzar\" />\n    <img src=\"assets/imgs/Ultimos recursos/Paso_3.png\" class=\"Pg\"/>\n    <img (click)=\"alLector();\" src=\"assets/imgs/Botones/Botón_oprimeaqui.png\" class=\"BA\">\n  </div>\n  <!-- Paso 3 Show-->\n  <div *ngIf=\"section=='s3'\">\n  <img src=\"assets/imgs/PASO_3/FONDO-2.png\" alt=\"\" class=\"fondo-comenzar\" />\n    <div *ngIf=\"p3==true\">\n      <img\n      src=\"assets/imgs/PASO_3/PASO_3.png\"\n      class=\"acerca\"\n    />\n      <img\n      class=\"btn-avanzar_paso1\"\n      (click)=\"openPopUP2('p3')\"\n        src=\"assets/imgs/8/AVANZAR.png\"\n      />\n    </div>\n    <div *ngIf=\"p3==false\">\n        <img src=\"assets/imgs/PASO_3/TEXTO.png\" class=\"texto_paso3\" />\n        <div class=\"Cont_text\">\n          <ion-textarea\n            class=\"input_paso3\"\n            autofocus=\"true\"\n            placeholder=\"¿Qué consecuencias ha traído la problemática?\"\n            autoGrow=\"false\"\n            wrap=\"hard\"\n            rows=\"3\"\n            [(ngModel)]=\"Paso3_1\"\n          ></ion-textarea>\n          <ion-textarea\n            class=\"input_paso3\"\n            autofocus=\"true\"\n            placeholder=\"¿Qué busca mejorar la pregunta problema?\"\n            autoGrow=\"false\"\n            wrap=\"hard\"\n            rows=\"3\"\n            [(ngModel)]=\"Paso3_2\"\n          >\n          </ion-textarea>\n          <ion-textarea\n            class=\"input_paso3\"\n            autofocus=\"true\"\n            placeholder=\"¿A quién impacta directa o indirectamente la pregunta problema?\"\n            autoGrow=\"false\"\n            wrap=\"hard\"\n            rows=\"3\"\n            [(ngModel)]=\"Paso3_3\"\n          ></ion-textarea>\n          <ion-textarea\n            class=\"input_paso3\"\n            autofocus=\"true\"\n            placeholder=\"¿Qué efectos positivos o negativos traería si se soluciona?\"\n            autoGrow=\"false\"\n            wrap=\"hard\"\n            rows=\"3\"\n            [(ngModel)]=\"Paso3_4\"\n          ></ion-textarea>\n        </div>\n          <img\n          (click)=\"redireccionador('paso4');saveInputPaso3();\"\n          class=\"btn-avanzar\"\n            src=\"assets/imgs/PASO_3/LISTO.png\"\n          />\n    </div>\n  </div>\n  <!-- Paso al siguiente estado -->\n  <div *ngIf=\"section =='paso4'\">\n    <img src=\"assets/imgs/PASO_3/FONDO-3.png\" class=\"fondo-comenzar\" />\n    <img src=\"assets/imgs/PASO_3/FASES COMPLETADAS.png\" alt=\"\" class=\"fases\" />\n    <img src=\"assets/imgs/PASO_3/TEXTO_2.png\" class=\"Congratulation\" />\n      <img\n        src=\"assets/imgs/PASO_3/AVANZAR_G.png\"\n        (click)=\"avanzar('pasoG')\"\n        class=\"btn-avanzar-gaseoso\"\n      />\n  </div>\n  <div *ngIf=\"section =='pasoG'\">\n    <img src=\"assets/imgs/PASO_3/FONDO-3.png\" class=\"fondo-comenzar\" />\n    <img src=\"assets/imgs/Ultimos recursos/pop-up-gaseoso.png\" class=\"Pg\"/>\n    <img (click)=\"alLector();\" src=\"assets/imgs/Botones/Botón_oprimeaqui.png\" class=\"BA\">\n     \n  </div>\n  <ion-backdrop *ngIf=\"show\" [visible]=\"false\" tappable=\"false\"></ion-backdrop>\n</ion-content>\n";
      /***/
    },

    /***/
    "./src/app/pages/solido/solido-routing.module.ts":
    /*!*******************************************************!*\
      !*** ./src/app/pages/solido/solido-routing.module.ts ***!
      \*******************************************************/

    /*! exports provided: SolidoPageRoutingModule */

    /***/
    function srcAppPagesSolidoSolidoRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SolidoPageRoutingModule", function () {
        return SolidoPageRoutingModule;
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


      var _solido_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./solido.page */
      "./src/app/pages/solido/solido.page.ts");

      var routes = [{
        path: '',
        component: _solido_page__WEBPACK_IMPORTED_MODULE_3__["SolidoPage"]
      }];

      var SolidoPageRoutingModule = function SolidoPageRoutingModule() {
        _classCallCheck(this, SolidoPageRoutingModule);
      };

      SolidoPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], SolidoPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/pages/solido/solido.module.ts":
    /*!***********************************************!*\
      !*** ./src/app/pages/solido/solido.module.ts ***!
      \***********************************************/

    /*! exports provided: SolidoPageModule */

    /***/
    function srcAppPagesSolidoSolidoModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SolidoPageModule", function () {
        return SolidoPageModule;
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


      var _solido_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./solido-routing.module */
      "./src/app/pages/solido/solido-routing.module.ts");
      /* harmony import */


      var _solido_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./solido.page */
      "./src/app/pages/solido/solido.page.ts");

      var SolidoPageModule = function SolidoPageModule() {
        _classCallCheck(this, SolidoPageModule);
      };

      SolidoPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _solido_routing_module__WEBPACK_IMPORTED_MODULE_5__["SolidoPageRoutingModule"]],
        declarations: [_solido_page__WEBPACK_IMPORTED_MODULE_6__["SolidoPage"]]
      })], SolidoPageModule);
      /***/
    },

    /***/
    "./src/app/pages/solido/solido.page.scss":
    /*!***********************************************!*\
      !*** ./src/app/pages/solido/solido.page.scss ***!
      \***********************************************/

    /*! exports provided: default */

    /***/
    function srcAppPagesSolidoSolidoPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".fondo-comenzar {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  z-index: -2;\n}\n\n.X {\n  position: absolute;\n  left: 75vw;\n  top: -37vh;\n  transform: translate(-50%, -50%);\n  width: 5vw;\n  height: 5vh;\n  z-index: 5;\n}\n\n.atras {\n  position: absolute;\n  left: 2vh;\n  top: 79vh;\n  width: 18vw;\n  height: 10vh;\n}\n\n.atras2 {\n  position: absolute;\n  left: 6vh;\n  top: 5vh;\n  width: 18vw;\n  height: 10vh;\n}\n\n.atras3 {\n  position: absolute;\n  left: 0vh;\n  bottom: 1vh;\n  width: 18vw;\n  height: 10vh;\n}\n\n.apunto_empezar-texto {\n  position: absolute;\n  left: 50%;\n  top: 40%;\n  transform: translate(-50%, -50%);\n  width: 80vw;\n  height: 48vh;\n}\n\n.btn-comenzar {\n  position: absolute;\n  bottom: 10vh;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  height: -webkit-fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n  left: 7vw;\n}\n\n.btn-comenzar img {\n  width: 70vw;\n}\n\n.btn-comenzars {\n  position: absolute;\n  bottom: 10vh;\n  width: 70vw;\n  height: 7vh;\n  left: 14vw;\n}\n\n.btn-elegir {\n  position: absolute;\n  bottom: 18vh;\n  width: 70vw;\n  height: 6vh;\n  left: 14vw;\n}\n\n.btn-escoger {\n  position: absolute;\n  bottom: 10vh;\n  width: 70vw;\n  height: 6vh;\n  left: 14vw;\n}\n\n.img-aleatorio {\n  position: absolute;\n  bottom: 3vh;\n  left: 56vw;\n  width: 25vw;\n  height: 14vh;\n  border-radius: 100px;\n  border: 0px solid #c71b85;\n  -webkit-animation-name: resplandor;\n  animation-name: resplandor;\n  -webkit-animation-timing-function: linear;\n  animation-timing-function: linear;\n  -webkit-animation-duration: 2s;\n  animation-duration: 2s;\n  -webkit-animation-iteration-count: infinite;\n  animation-iteration-count: infinite;\n}\n\n@-webkit-keyframes resplandor {\n  0% {\n    box-shadow: 0px 0px 0px #c71b85;\n  }\n  50% {\n    box-shadow: 0px 0px 30px #c71b85;\n  }\n  100% {\n    box-shadow: 0px 0px 0px #c71b85;\n  }\n}\n\n@keyframes resplandor {\n  0% {\n    box-shadow: 0px 0px 0px #c71b85;\n  }\n  50% {\n    box-shadow: 0px 0px 30px #c71b85;\n  }\n  100% {\n    box-shadow: 0px 0px 0px #c71b85;\n  }\n}\n\n.flechas {\n  position: absolute;\n  display: grid;\n  right: 18vw;\n  top: 9vh;\n}\n\n.flechas img {\n  width: 20vw;\n  margin-bottom: 10vh;\n  height: 8vh;\n  -webkit-animation-name: resplandor;\n          animation-name: resplandor;\n  -webkit-animation-timing-function: linear;\n          animation-timing-function: linear;\n  -webkit-animation-duration: 2s;\n          animation-duration: 2s;\n  -webkit-animation-iteration-count: infinite;\n          animation-iteration-count: infinite;\n}\n\n.nombre-personaje {\n  position: absolute;\n  width: 80vw;\n  top: 3vh;\n  left: 11vw;\n  height: 18vh;\n}\n\n.personaje {\n  position: absolute;\n  width: 70vw;\n  bottom: 0vh;\n  left: 15vw;\n  height: 79vh;\n}\n\n.btn-avanzar {\n  position: absolute;\n  width: 45vw;\n  bottom: 1vh;\n  right: 3vw;\n  height: 9vh;\n}\n\n.btn-avanzar_paso3 {\n  position: absolute;\n}\n\n.btn-avanzar-gaseoso {\n  position: absolute;\n  width: 60vw;\n  height: auto;\n  bottom: 8vh;\n  right: 19vw;\n}\n\n.video {\n  width: 79vw;\n  height: auto;\n}\n\n.play-video {\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  width: 80vw;\n  height: 25vh;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-color: rgba(var(--ion-color-primary-rgb), 0.8);\n  border: 1px solid white;\n  border-radius: 10px;\n  cursor: pointer;\n  z-index: 3;\n}\n\n.factores_texto {\n  position: absolute;\n  left: 50%;\n  top: 20%;\n  transform: translate(-50%, -50%);\n  color: white;\n  width: 80vw;\n  text-align: center;\n  font-family: \"Delius\";\n}\n\n.btn_contenedor {\n  bottom: 20vh;\n  left: 5vw;\n  z-index: 2;\n  position: fixed;\n  width: 90vw;\n}\n\n.titulo_paso1 {\n  width: 80vw;\n  margin: 5vh 5vw 5vh 9vw;\n}\n\nion-text {\n  position: absolute;\n  left: 50vw;\n  top: 34vh;\n  transform: translate(-50%, -50%);\n}\n\nion-text h1 {\n  text-align: center;\n  font-family: \"Delius\";\n  color: white;\n  font-size: 0.8rem;\n  width: 100%;\n}\n\nion-text p {\n  text-align: center;\n  font-family: \"Delius\";\n  font-size: small;\n  color: white;\n  font-size: 0.8rem;\n  width: 100%;\n}\n\n.pasos_group .p1 {\n  width: 35vw;\n  position: fixed;\n  left: 8vw;\n  top: 44vh;\n  height: 29vh;\n}\n\n.pasos_group .p2 {\n  width: 32vw;\n  position: fixed;\n  right: 10vw;\n  bottom: 22vh;\n  height: 25vh;\n}\n\n.pasos_group .p3 {\n  position: fixed;\n  width: 29vw;\n  bottom: 3vh;\n  left: 23vw;\n  height: 23vh;\n}\n\n.acerca {\n  position: absolute;\n  width: 90vw;\n  left: 50%;\n  bottom: 5%;\n  transform: translate(-50%, 0%);\n  height: 74vh;\n}\n\n.btn-avanzar_paso1 {\n  width: 55vw;\n  position: fixed;\n  bottom: 16vh;\n  left: 20vw;\n}\n\n.texto_paso1 {\n  position: absolute;\n  left: 50%;\n  top: 15%;\n  transform: translate(-50%, -50%);\n  width: 100vw;\n  height: 27vh;\n}\n\n.texto_paso2 {\n  position: absolute;\n  left: 10vh;\n  top: 1vh;\n  width: 61vw;\n}\n\n.texto_paso3 {\n  position: absolute;\n  left: 50%;\n  top: 15vh;\n  transform: translate(-50%, -50%);\n  width: 80vw;\n  height: 19vh;\n}\n\n.input_paso1 {\n  position: absolute;\n  bottom: 16vh;\n  height: 48vh;\n  width: 87vw;\n  left: 6vw;\n  background-color: #e4e2e3;\n  border-radius: 5px;\n  font-family: \"Delius\";\n  color: black;\n  padding-left: 10px;\n  padding-right: 10px;\n}\n\n.input_paso2 {\n  position: absolute;\n  bottom: 15vh;\n  height: 45vh;\n  width: 87vw;\n  left: 6vw;\n  background-color: #e4e2e3;\n  border-radius: 5px;\n  font-family: \"Delius\";\n  color: black;\n  padding-left: 10px;\n  padding-right: 10px;\n}\n\n.input_paso3 {\n  height: 10vh;\n  margin-top: 4vh;\n  width: 87vw;\n  background-color: #e4e2e3;\n  border-radius: 5px;\n  font-family: \"Delius\";\n  color: black;\n  padding-left: 10px;\n  padding-right: 10px;\n  text-align: center;\n  font-size: 0.8rem;\n}\n\n.Cont_text {\n  position: absolute;\n  top: 24vh;\n  left: 6vw;\n}\n\n.lista {\n  position: absolute;\n  top: 28vh;\n  height: 6vh;\n  left: 12vw;\n}\n\n.ejemplo {\n  position: absolute;\n  top: 28vh;\n  height: 6vh;\n  left: 54vw;\n}\n\n.ejemplito {\n  position: absolute;\n  z-index: 3;\n  width: 47%;\n  top: 34.5vh;\n  left: 45vw;\n  text-align: center;\n  font-family: \"Delius\";\n  font-size: 0.6rem;\n  color: white;\n}\n\n.ejemplo_desplegado {\n  position: fixed;\n  z-index: 3;\n  top: 34vh;\n  height: 9vh;\n  left: 48vw;\n}\n\n.pop-up {\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  width: 77vw;\n  z-index: 3;\n  height: 80vh;\n}\n\n.pop-up-lista {\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  width: 80%;\n  z-index: 3;\n}\n\n.pop-up-lista p {\n  width: 65vw;\n  font-size: 1rem;\n  color: white;\n  text-align: center;\n  font-family: \"Delius\";\n  height: 75vh;\n}\n\n.fases {\n  position: absolute;\n  width: 75vw;\n  top: 4vh;\n  left: 13vw;\n}\n\n.Pg {\n  position: absolute;\n  width: 75vw;\n  top: 20vh;\n  left: 12vw;\n}\n\n.BA {\n  position: absolute;\n  width: 50vw;\n  top: 67vh;\n  left: 24vw;\n}\n\n.Congratulation {\n  position: absolute;\n  width: 93vw;\n  top: 28vh;\n  left: 3vw;\n  height: 63vh;\n}\n\nion-backdrop {\n  background-color: var(--ion-color-primary);\n  opacity: 0.9;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvc29saWRvL3NvbGlkby5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxVQUFBO0VBQ0EsZ0NBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7QUFFRjs7QUFBQTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQUdGOztBQURBO0VBQ0Usa0JBQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FBSUY7O0FBRkE7RUFDRSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUFLRjs7QUFIQTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7RUFDQSxnQ0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FBTUY7O0FBSkE7RUFDRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSwwQkFBQTtFQUFBLHVCQUFBO0VBQUEsa0JBQUE7RUFDQSwyQkFBQTtFQUFBLHdCQUFBO0VBQUEsbUJBQUE7RUFDQSxTQUFBO0FBT0Y7O0FBTkU7RUFDRSxXQUFBO0FBUUo7O0FBTEE7RUFDRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7QUFRRjs7QUFMQTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtBQVFGOztBQU5BO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0FBU0Y7O0FBTEE7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtFQUNBLHlCQUFBO0VBQ0Es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QTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFFBQUE7RUFDQSxVQUFBO0FBbUJGOztBQWpCQTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0FBb0JGOztBQWxCQTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0FBcUJGOztBQW5CQTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSxTQUFBO0VBQ0EsWUFBQTtBQXNCRjs7QUFwQkE7RUFDRSwwQ0FBQTtFQUNBLFlBQUE7QUF1QkYiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9zb2xpZG8vc29saWRvLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb25kby1jb21lbnphciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICB6LWluZGV4OiAtMjtcbn1cbi5Ye1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDc1dnc7XG4gIHRvcDogLTM3dmg7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICB3aWR0aDogNXZ3O1xuICBoZWlnaHQ6IDV2aDtcbiAgei1pbmRleDogNTtcbn1cbi5hdHJhc3tcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAydmg7XG4gIHRvcDogNzl2aDtcbiAgd2lkdGg6IDE4dnc7XG4gIGhlaWdodDogMTB2aDtcbn1cbi5hdHJhczJ7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogNnZoO1xuICB0b3A6IDV2aDtcbiAgd2lkdGg6IDE4dnc7XG4gIGhlaWdodDogMTB2aDtcbn1cbi5hdHJhczN7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMHZoO1xuICBib3R0b206IDF2aDtcbiAgd2lkdGg6IDE4dnc7XG4gIGhlaWdodDogMTB2aDtcbn1cbi5hcHVudG9fZW1wZXphci10ZXh0byB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogNTAlO1xuICB0b3A6IDQwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIHdpZHRoOiA4MHZ3O1xuICBoZWlnaHQ6IDQ4dmg7XG59XG4uYnRuLWNvbWVuemFyIHtcbiAgcG9zaXRpb246YWJzb2x1dGU7XG4gIGJvdHRvbTogMTB2aDtcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xuICBoZWlnaHQ6IGZpdC1jb250ZW50O1xuICBsZWZ0OiA3dnc7XG4gIGltZyB7XG4gICAgd2lkdGg6IDcwdnc7XG4gIH1cbn1cbi5idG4tY29tZW56YXJze1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMTB2aDtcbiAgd2lkdGg6IDcwdnc7XG4gIGhlaWdodDogN3ZoO1xuICBsZWZ0OiAxNHZ3O1xufVxuLy8gIEVsZWdpciBwZXJzb25hamVcbi5idG4tZWxlZ2lyIHtcbiAgcG9zaXRpb246YWJzb2x1dGU7XG4gIGJvdHRvbTogMTh2aDtcbiAgd2lkdGg6IDcwdnc7XG4gIGhlaWdodDogNnZoO1xuICBsZWZ0OiAxNHZ3O1xufVxuLmJ0bi1lc2NvZ2VyIHtcbiAgcG9zaXRpb246YWJzb2x1dGU7XG4gIGJvdHRvbTogMTB2aDtcbiAgd2lkdGg6IDcwdnc7XG4gIGhlaWdodDogNnZoO1xuICBsZWZ0OiAxNHZ3O1xufVxuLy8gUGVyc29uYWplcyB0YWJsZXJvXG5cbi5pbWctYWxlYXRvcmlvIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDN2aDtcbiAgbGVmdDogNTZ2dztcbiAgd2lkdGg6IDI1dnc7XG4gIGhlaWdodDogMTR2aDtcbiAgYm9yZGVyLXJhZGl1czogMTAwcHg7XG4gIGJvcmRlcjogMHB4IHNvbGlkICNjNzFiODU7XG4gIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IHJlc3BsYW5kb3I7XG4gIGFuaW1hdGlvbi1uYW1lOiByZXNwbGFuZG9yO1xuICAtd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGxpbmVhcjtcbiAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogbGluZWFyO1xuICAtd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjogMnM7XG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMnM7XG4gIC13ZWJraXQtYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7XG4gIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGluZmluaXRlO1xufVxuQGtleWZyYW1lcyByZXNwbGFuZG9ye1xuICAwJXtcbiAgICAtbW96LWJveC1zaGFkb3c6IDBweCAwcHggMHB4ICNjNzFiODU7XG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwcHggMHB4IDBweCAjYzcxYjg1O1xuICAgIGJveC1zaGFkb3c6IDBweCAwcHggMHB4ICNjNzFiODU7XG4gIH1cbiAgNTAle1xuICAgIC1tb3otYm94LXNoYWRvdzogMHB4IDBweCAzMHB4ICNjNzFiODU7XG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwcHggMHB4IDMwcHggI2M3MWI4NTtcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDMwcHggI2M3MWI4NTtcbiAgfVxuICAxMDAleyAgXG4gICAgLW1vei1ib3gtc2hhZG93OiAwcHggMHB4IDBweCAjYzcxYjg1O1xuICAgIC13ZWJraXQtYm94LXNoYWRvdzogMHB4IDBweCAwcHggI2M3MWI4NTtcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDBweCAjYzcxYjg1O1xuICB9XG4gIFxufVxuXG4uZmxlY2hhcyB7XG4gIHBvc2l0aW9uOmFic29sdXRlO1xuICBkaXNwbGF5OiBncmlkO1xuICByaWdodDogMTh2dztcbiAgdG9wOiA5dmg7XG4gIGltZyB7XG4gICAgd2lkdGg6IDIwdnc7XG4gICAgbWFyZ2luLWJvdHRvbTogMTB2aDtcbiAgICBoZWlnaHQ6IDh2aDtcbiAgICBhbmltYXRpb24tbmFtZTogcmVzcGxhbmRvcjtcbiAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBsaW5lYXI7XG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAycztcbiAgICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTtcbiAgfSBcbn1cblxuLy8gcHJlc2VudGFjaW9uIHBlcnNvbmFqZVxuXG4ubm9tYnJlLXBlcnNvbmFqZSB7XG4gIHBvc2l0aW9uOmFic29sdXRlO1xuICB3aWR0aDogODB2dztcbiAgdG9wOiAzdmg7XG4gIGxlZnQ6IDExdnc7XG4gIGhlaWdodDogMTh2aDtcbn1cbi5wZXJzb25hamUge1xuICBwb3NpdGlvbjphYnNvbHV0ZTtcbiAgd2lkdGg6IDcwdnc7XG4gIGJvdHRvbTogMHZoO1xuICBsZWZ0OiAxNXZ3O1xuICBoZWlnaHQ6IDc5dmg7XG59XG5cbi5idG4tYXZhbnphciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDQ1dnc7XG4gIGJvdHRvbTogMXZoO1xuICByaWdodDogM3Z3O1xuICBoZWlnaHQ6IDl2aDtcbn1cbi5idG4tYXZhbnphcl9wYXNvMyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbn1cbi5idG4tYXZhbnphci1nYXNlb3Nve1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiA2MHZ3O1xuICBoZWlnaHQ6IGF1dG87XG4gIGJvdHRvbTogOHZoO1xuICByaWdodDogMTl2dztcbn1cbi52aWRlb3tcbiAgd2lkdGg6IDc5dnc7XG4gIGhlaWdodDogYXV0bztcbn1cbi5wbGF5LXZpZGVvIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiA1MCU7XG4gIHRvcDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgd2lkdGg6IDgwdnc7XG4gIGhlaWdodDogMjV2aDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEodmFyKC0taW9uLWNvbG9yLXByaW1hcnktcmdiKSwgMC44KTtcbiAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgei1pbmRleDogMztcbn1cblxuLy8gZmFjdG9yZXNcblxuLmZhY3RvcmVzX3RleHRvIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiA1MCU7XG4gIHRvcDogMjAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgY29sb3I6IHdoaXRlO1xuICB3aWR0aDogODB2dztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LWZhbWlseTogXCJEZWxpdXNcIjtcbn1cblxuLmJ0bl9jb250ZW5lZG9yIHtcbiAgYm90dG9tOiAyMHZoO1xuICBsZWZ0OiA1dnc7XG4gIHotaW5kZXg6IDI7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgd2lkdGg6IDkwdnc7XG59XG5cbi8vIFBhc28gMVxuLnRpdHVsb19wYXNvMSB7XG4gIHdpZHRoOiA4MHZ3O1xuICBtYXJnaW46IDV2aCA1dncgNXZoIDl2dztcbn1cbmlvbi10ZXh0IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiA1MHZ3O1xuICB0b3A6IDM0dmg7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICBoMSB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtZmFtaWx5OiBcIkRlbGl1c1wiO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBmb250LXNpemU6IDAuOHJlbTtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuICBwIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC1mYW1pbHk6IFwiRGVsaXVzXCI7XG4gICAgZm9udC1zaXplOiBzbWFsbDtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZm9udC1zaXplOiAwLjhyZW07XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbn1cbi5wYXNvc19ncm91cCB7XG4gIC5wMSB7XG4gICAgd2lkdGg6IDM1dnc7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIGxlZnQ6IDh2dztcbiAgICB0b3A6IDQ0dmg7XG4gICAgaGVpZ2h0OiAyOXZoO1xuICB9XG4gIC5wMiB7XG4gICAgd2lkdGg6IDMydnc7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHJpZ2h0OiAxMHZ3O1xuICAgIGJvdHRvbTogMjJ2aDtcbiAgICBoZWlnaHQ6IDI1dmg7XG4gIH1cbiAgLnAzIHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgd2lkdGg6IDI5dnc7XG4gICAgYm90dG9tOiAzdmg7XG4gICAgbGVmdDogMjN2dztcbiAgICBoZWlnaHQ6IDIzdmg7XG4gIH1cbn1cblxuLmFjZXJjYSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDkwdnc7XG4gIGxlZnQ6IDUwJTtcbiAgYm90dG9tOiA1JTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgMCUpO1xuICBoZWlnaHQ6IDc0dmg7XG59XG4uYnRuLWF2YW56YXJfcGFzbzEge1xuICB3aWR0aDogNTV2dztcbiAgcG9zaXRpb246IGZpeGVkO1xuICBib3R0b206IDE2dmg7XG4gIGxlZnQ6IDIwdnc7XG59XG4udGV4dG9fcGFzbzEge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDUwJTtcbiAgdG9wOiAxNSU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICB3aWR0aDogMTAwdnc7XG4gIGhlaWdodDogMjd2aDtcbn1cbi50ZXh0b19wYXNvMiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMTB2aDtcbiAgdG9wOiAxdmg7XG4gIHdpZHRoOiA2MXZ3O1xufVxuLnRleHRvX3Bhc28zIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiA1MCU7XG4gIHRvcDogMTV2aDtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIHdpZHRoOiA4MHZ3O1xuICBoZWlnaHQ6IDE5dmg7XG59XG5cbi5pbnB1dF9wYXNvMSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAxNnZoO1xuICBoZWlnaHQ6IDQ4dmg7XG4gIHdpZHRoOiA4N3Z3O1xuICBsZWZ0OiA2dnc7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlNGUyZTM7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgZm9udC1mYW1pbHk6IFwiRGVsaXVzXCI7XG4gIGNvbG9yOiBibGFjaztcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xufVxuLmlucHV0X3Bhc28yIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDE1dmg7XG4gIGhlaWdodDogNDV2aDtcbiAgd2lkdGg6IDg3dnc7XG4gIGxlZnQ6IDZ2dztcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U0ZTJlMztcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBmb250LWZhbWlseTogXCJEZWxpdXNcIjtcbiAgY29sb3I6IGJsYWNrO1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gIHBhZGRpbmctcmlnaHQ6IDEwcHg7XG59XG4uaW5wdXRfcGFzbzMge1xuICBoZWlnaHQ6IDEwdmg7XG4gIG1hcmdpbi10b3A6IDR2aDtcbiAgd2lkdGg6IDg3dnc7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlNGUyZTM7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgZm9udC1mYW1pbHk6IFwiRGVsaXVzXCI7XG4gIGNvbG9yOiBibGFjaztcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMC44cmVtO1xufVxuLkNvbnRfdGV4dHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDI0dmg7XG4gIGxlZnQ6IDZ2dztcbn1cbi5saXN0YXtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDI4dmg7XG4gIGhlaWdodDogNnZoO1xuICBsZWZ0OiAxMnZ3O1xufVxuLmVqZW1wbG97XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAyOHZoO1xuICBoZWlnaHQ6IDZ2aDtcbiAgbGVmdDogNTR2dztcbn1cbi5lamVtcGxpdG97XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogMztcbiAgd2lkdGg6IDQ3JTtcbiAgdG9wOiAzNC41dmg7XG4gIGxlZnQ6IDQ1dnc7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1mYW1pbHk6IFwiRGVsaXVzXCI7XG4gIGZvbnQtc2l6ZTogMC42cmVtO1xuICBjb2xvcjogd2hpdGU7XG59XG4uZWplbXBsb19kZXNwbGVnYWRve1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHotaW5kZXg6IDM7XG4gIHRvcDogMzR2aDtcbiAgaGVpZ2h0OiA5dmg7XG4gIGxlZnQ6IDQ4dnc7XG59XG4ucG9wLXVwIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiA1MCU7XG4gIHRvcDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgd2lkdGg6IDc3dnc7XG4gIHotaW5kZXg6IDM7XG4gIGhlaWdodDogODB2aDtcbn1cbi5wb3AtdXAtbGlzdGEge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDUwJTtcbiAgdG9wOiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICB3aWR0aDogODAlO1xuICB6LWluZGV4OiAzO1xuICBwe1xuICAgIHdpZHRoOiA2NXZ3O1xuICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtZmFtaWx5OiBcIkRlbGl1c1wiO1xuICAgIGhlaWdodDogNzV2aDtcbiAgfVxufVxuXG4vLyBGYXNlcyBjb21wbGV0YWRhc1xuLmZhc2Vze1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiA3NXZ3O1xuICB0b3A6IDR2aDtcbiAgbGVmdDogMTN2dztcbn1cbi5QZ3tcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogNzV2dztcbiAgdG9wOiAyMHZoO1xuICBsZWZ0OiAxMnZ3O1xufVxuLkJBe1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiA1MHZ3O1xuICB0b3A6IDY3dmg7XG4gIGxlZnQ6IDI0dnc7XG59XG4uQ29uZ3JhdHVsYXRpb257XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDkzdnc7XG4gIHRvcDogMjh2aDtcbiAgbGVmdDogM3Z3O1xuICBoZWlnaHQ6IDYzdmg7XG59XG5pb24tYmFja2Ryb3Age1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gIG9wYWNpdHk6IDAuOTtcbn0iXX0= */";
      /***/
    },

    /***/
    "./src/app/pages/solido/solido.page.ts":
    /*!*********************************************!*\
      !*** ./src/app/pages/solido/solido.page.ts ***!
      \*********************************************/

    /*! exports provided: SolidoPage */

    /***/
    function srcAppPagesSolidoSolidoPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SolidoPage", function () {
        return SolidoPage;
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


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _assets_json_factores_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./../../../assets/json/factores.json */
      "./src/assets/json/factores.json");

      var _assets_json_factores_json__WEBPACK_IMPORTED_MODULE_4___namespace = /*#__PURE__*/__webpack_require__.t(
      /*! ./../../../assets/json/factores.json */
      "./src/assets/json/factores.json", 1);

      var SolidoPage = /*#__PURE__*/function () {
        function SolidoPage(serv, router, route) {
          _classCallCheck(this, SolidoPage);

          this.serv = serv;
          this.router = router;
          this.route = route;
          this.section = '';
          this.aux = ["", "", "", ""];
          this.p1 = true;
          this.p2 = true;
          this.p3 = true;
          this.show = false;
          this.gaseoso = false;
          this.personajesModeR = 'FONDO-ALEATORIO';
          this.personajesArr = ['crispi', 'cori', 'cesia', 'carmel', 'cristal'];
          this.personajeSeleccionado = '';
          this.personajeSeleccionadoaux = '';
          this.pasoSelecionado = '';
          this.acercaElCelular = false;
          this.show_text_paso1 = false;
          this.show_text_paso2 = false;
          this.show_text_paso3 = false;
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

        _createClass(SolidoPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      this.section = 'comenzar';
                      this.FactoresPersonaje = _assets_json_factores_json__WEBPACK_IMPORTED_MODULE_4__;
                      this.selecionador(this.personajeSeleccionado);

                    case 3:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "iniciador",
          value: function iniciador() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      this.mipromesa();

                    case 1:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }, {
          key: "selectorfactores",
          value: function selectorfactores() {
            var a = this.personajeSeleccionadoaux.toLowerCase();

            switch (a) {
              case 'crispi':
                this.numeroPersonaje = 0;
                break;

              case 'cesia':
                this.numeroPersonaje = 1;
                break;

              case 'cori':
                this.numeroPersonaje = 2;
                break;

              case 'carmel':
                this.numeroPersonaje = 3;
                break;

              case 'cristal':
                this.numeroPersonaje = 4;
                break;

              default:
                break;
            }

            for (var i = 0; i < this.aux.length; i++) {
              this.aux[i] = this.FactoresPersonaje.fac[this.numeroPersonaje].tarjetas[i + 1];
            }
          }
        }, {
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              var _this = this;

              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      this.route.params.subscribe(function (params) {
                        var _params = params.section;
                        var _personaje = params.personajeSeleccionado;
                        _this.personajeSeleccionado = _personaje;
                        _this.section = _params;
                      });
                      this.selecionador(this.personajeSeleccionadoaux);

                      if (this.section == 'paso1' || this.section == 's1' || this.section == 'paso2' || this.section == 'paso3') {
                        this.promesafactor();
                      }

                    case 3:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));
          }
        }, {
          key: "avanzar",
          value: function avanzar(section) {
            this.section = section;
          }
        }, {
          key: "personajesMode",
          value: function personajesMode(forma) {
            this.personajesModeR = "FONDO-".concat(forma);
          }
        }, {
          key: "personajeRandom",
          value: function personajeRandom() {
            var random = Math.floor(Math.random() * 5);
            this.personajeSeleccionadoaux = this.personajesArr[random].toUpperCase();
            this.pdf.personaje = this.personajeSeleccionadoaux;
          }
        }, {
          key: "selecionador",
          value: function selecionador(item) {
            var _this2 = this;

            this.mipromesa()["finally"](function () {
              var DEFAULT_SELECT = '';
              var NUM_SELECT = {
                0: _this2.personajesArr[0],
                1: _this2.personajesArr[2],
                2: _this2.personajesArr[1],
                3: _this2.personajesArr[3],
                4: _this2.personajesArr[4]
              };
              var number = NUM_SELECT[item] || DEFAULT_SELECT;
              _this2.personajeSeleccionadoaux = number.toUpperCase();
              _this2.pdf.personaje = _this2.personajeSeleccionadoaux;
            });
          }
        }, {
          key: "guardarpersonaje",
          value: function guardarpersonaje() {
            this.pdf.personaje = this.personajeSeleccionadoaux;
          }
        }, {
          key: "factores",
          value: function factores() {
            var _this3 = this;

            var DEFAULT_SELECT = '';
            var OP_SELECT = {
              'T': this.pdf.factor = this.aux[0],
              'I': this.pdf.factor = this.aux[1],
              'RN': this.pdf.factor = this.aux[2],
              'CB': this.pdf.factor = this.aux[3]
            };
            var number = OP_SELECT[this.pasoSelecionado] || DEFAULT_SELECT;
            this.pasoSelecionado = number;
            this.mipromesa()["finally"](function () {
              _this3.pdf.factor = number;
              _this3.pdf.solido = 'Iniciado';
              _this3.pdf.personaje = _this3.personajeSeleccionadoaux;

              _this3.serv.AddItem(_this3.pdf);
            });
          }
        }, {
          key: "saveInputPaso1",
          value: function saveInputPaso1() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
              var _this4 = this;

              return regeneratorRuntime.wrap(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      _context4.next = 2;
                      return this.mipromesa().then(function () {
                        _this4.pdf.P1 = _this4.Paso1;

                        _this4.serv.AddItem(_this4.pdf);
                      });

                    case 2:
                    case "end":
                      return _context4.stop();
                  }
                }
              }, _callee4, this);
            }));
          }
        }, {
          key: "saveInputPaso2",
          value: function saveInputPaso2() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
              var _this5 = this;

              return regeneratorRuntime.wrap(function _callee5$(_context5) {
                while (1) {
                  switch (_context5.prev = _context5.next) {
                    case 0:
                      _context5.next = 2;
                      return this.mipromesa().then(function () {
                        _this5.pdf.P2 = _this5.Paso2;

                        _this5.serv.AddItem(_this5.pdf);
                      });

                    case 2:
                    case "end":
                      return _context5.stop();
                  }
                }
              }, _callee5, this);
            }));
          }
        }, {
          key: "saveInputPaso3",
          value: function saveInputPaso3() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
              var _this6 = this;

              return regeneratorRuntime.wrap(function _callee6$(_context6) {
                while (1) {
                  switch (_context6.prev = _context6.next) {
                    case 0:
                      _context6.next = 2;
                      return this.mipromesa().then(function () {
                        _this6.pdf.P3_1 = _this6.Paso3_1;
                        _this6.pdf.P3_2 = _this6.Paso3_2;
                        _this6.pdf.P3_3 = _this6.Paso3_3;
                        _this6.pdf.P3_4 = _this6.Paso3_4;

                        _this6.serv.AddItem(_this6.pdf);

                        _this6.serv.subir2(_this6.pdf);
                      });

                    case 2:
                    case "end":
                      return _context6.stop();
                  }
                }
              }, _callee6, this);
            }));
          }
        }, {
          key: "openPopUP",
          value: function openPopUP(item) {
            switch (item) {
              case 'lista':
                this.lista = !this.lista;
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
          value: function openPopUP2(item) {
            switch (item) {
              case 'p1':
                this.p1 = !this.p1;
                break;

              case 'p2':
                this.p2 = !this.p2;
                break;

              case 'p3':
                this.p3 = !this.p3;
                break;

              default:
                break;
            }
          }
        }, {
          key: "alLector",
          value: function alLector() {
            this.router.navigateByUrl('scanner');
          }
        }, {
          key: "redireccionador",
          value: function redireccionador(item) {
            this.router.navigateByUrl("solido/" + item + "/" + this.personajeSeleccionado);
          }
        }, {
          key: "atras",
          value: function atras() {
            this.router.navigateByUrl("home/ambiente");
          }
        }, {
          key: "eliminar",
          value: function eliminar() {
            this.serv.deleteItem();
          }
        }, {
          key: "mipromesa",
          value: function mipromesa() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
              var _this7 = this;

              return regeneratorRuntime.wrap(function _callee7$(_context7) {
                while (1) {
                  switch (_context7.prev = _context7.next) {
                    case 0:
                      new Promise(function (resolve) {
                        _this7.objaux = JSON.parse(_this7.serv.getItem('_cap_pdf2'));

                        if (_this7.objaux.num != "") {
                          _this7.pdf = _this7.objaux;
                          return resolve(_this7.pdf);
                        }
                      });

                    case 1:
                    case "end":
                      return _context7.stop();
                  }
                }
              }, _callee7);
            }));
          }
        }, {
          key: "promesafactor",
          value: function promesafactor() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee8() {
              var _this8 = this;

              return regeneratorRuntime.wrap(function _callee8$(_context8) {
                while (1) {
                  switch (_context8.prev = _context8.next) {
                    case 0:
                      new Promise(function (resolve) {
                        if (_this8.objaux.num != "") {
                          _this8.pdf = _this8.objaux;
                          _this8.pasoSelecionado = _this8.pdf.factor;
                          return resolve(_this8.pdf);
                        }
                      });

                    case 1:
                    case "end":
                      return _context8.stop();
                  }
                }
              }, _callee8);
            }));
          }
        }]);

        return SolidoPage;
      }();

      SolidoPage.ctorParameters = function () {
        return [{
          type: _services_servicio_service__WEBPACK_IMPORTED_MODULE_2__["ServicioService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
        }];
      };

      SolidoPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-solido',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./solido.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/solido/solido.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./solido.page.scss */
        "./src/app/pages/solido/solido.page.scss"))["default"]]
      })], SolidoPage);
      /***/
    },

    /***/
    "./src/assets/json/factores.json":
    /*!***************************************!*\
      !*** ./src/assets/json/factores.json ***!
      \***************************************/

    /*! exports provided: fac, default */

    /***/
    function srcAssetsJsonFactoresJson(module) {
      module.exports = JSON.parse("{\"fac\":[{\"Personaje\":\"crispi\",\"tarjetas\":{\"1\":\"Transporte\",\"2\":\"Infraestructura\",\"3\":\"Conocimientos Basicos\",\"4\":\"Recursos Necesarios\"}},{\"Personaje\":\"cesia\",\"tarjetas\":{\"1\":\"Reglamentacion\",\"2\":\"Retribucion\",\"3\":\"Agentes Externos\",\"4\":\"Entorno\"}},{\"Personaje\":\"cori\",\"tarjetas\":{\"1\":\"Comunicacion\",\"2\":\"Cultura\",\"3\":\"Relaciones\",\"4\":\"Jerarquia\"}},{\"Personaje\":\"carmel\",\"tarjetas\":{\"1\":\"Crecimiento\",\"2\":\"Valor\",\"3\":\"Bienestar\",\"4\":\"Reconocimiento\"}},{\"Personaje\":\"cristal\",\"tarjetas\":{\"1\":\"Posicionamiento\",\"2\":\"Independencia\",\"3\":\"Vocacion\",\"4\":\"Logros\"}}]}");
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-solido-solido-module-es5.js.map