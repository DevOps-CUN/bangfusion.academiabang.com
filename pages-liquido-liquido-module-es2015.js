(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-liquido-liquido-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/liquido/liquido.page.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/liquido/liquido.page.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content class=\"ion-no-padding\">\n    <!-- ideas -->\n    <div *ngIf=\"section == 'ideas'\" >\n      <img src=\"assets/imgs/Ultimos recursos/fondo.png\" alt=\"\" class=\"fondo-comenzar\" />\n  <!-- No de ideas -->\n      <div class=\"Cont-ideas\">\n        <!-- ideas prototipo -->\n          <div\n          *ngIf=\"idea!=''\"\n          class=\"ideas\"\n          autofocus=\"false\"\n          placeholder=\"IDEA 1\"\n          autoGrow=\"true\"\n          wrap=\"hard\"\n          rows=\"2\"> \n          <p class=\"text_ideas\">\n            {{idea}}\n          </p>\n          <img  class=\"desarrolla\" (click)=\"section = 'tipoMaqueta';savedIdea(idea);\" src=\"assets/imgs/17/IDEA_2.png\" >\n        </div>\n         <!-- // -->\n         <div\n         *ngIf=\"idea2!=''\"\n         class=\"ideas\"\n         autofocus=\"false\"\n         placeholder=\"IDEA 2\"\n         autoGrow=\"true\"\n         wrap=\"hard\"\n         rows=\"2\"> \n         <p class=\"text_ideas\">\n           {{idea2}}\n         </p>\n         <img  class=\"desarrolla1\"  (click)=\"section = 'tipoMaqueta';savedIdea(idea2);\" src=\"assets/imgs/17/IDEA_2.png\" >\n       </div>\n        <!-- // -->\n        <div *ngIf=\"idea3!=''\"\n        class=\"ideas\"\n        autofocus=\"false\"\n        placeholder=\"IDEA 3\"\n        autoGrow=\"true\"\n        wrap=\"hard\"\n        rows=\"2\"> \n        <p class=\"text_ideas\">\n          {{idea3}}\n        </p>\n        <img  class=\"desarrolla2\" (click)=\"section = 'tipoMaqueta';savedIdea(idea3);\" src=\"assets/imgs/17/IDEA_2.png\" >\n      </div>\n       <!-- // -->\n       <div *ngIf=\"idea4!=''\"\n       class=\"ideas\"\n       autofocus=\"false\"\n       placeholder=\"IDEA 4\"\n       autoGrow=\"true\"\n       wrap=\"hard\"\n       rows=\"2\"> \n       <p class=\"text_ideas\">\n         {{idea4}}\n       </p>\n       <img  (click)=\"section = 'tipoMaqueta';savedIdea(idea4);\"\n       class=\"desarrolla3\"src=\"assets/imgs/17/IDEA_2.png\" >\n     </div>\n      <!-- // -->\n\n\n      </div>\n    </div>\n    <div *ngIf=\"section == 'tipoMaqueta'\">\n      <img src=\"assets/imgs/18/FONDO.png\" alt=\"\" class=\"fondo-comenzar\">\n      <img (click)=\"avanzar('ideas')\"src=\"assets/imgs/Botones/Botón_atras.png\" class=\"atras\">\n      <div class=\" Con-tipo\">\n        <img  (click)=\"savedData();avanzar('f');\"\n        class=\"tipoma\" src=\"assets/imgs/Ultimos recursos/fisico2.png\" >\n        <img       \n        (click)=\"savedData()\"\n        class=\"tipoma\"\n         src=\"assets/imgs/Ultimos recursos/virtual2.png\" >\n      </div>\n    </div>\n    <!-- fisico -->\n    <div *ngIf=\"section == 'f'\">\n      <img src=\"assets/imgs/PASO_3/FONDO-3.png\" class=\"fondo-comenzar\" />\n      <img src=\"assets/imgs/Ultimos recursos/fisico.png\" class=\"Pg\"/>\n      <img (click)=\"avanzar('tipoMaqueta')\"src=\"assets/imgs/Botones/Botón_atras.png\" class=\"atras\">\n      <img (click)=\"alLector();\" src=\"assets/imgs/Botones/Botón_oprimeaqui.png\" class=\"BA\">\n    </div>\n    <!-- fisico -->\n    <div *ngIf=\"section == 'v'\">\n      <img src=\"assets/imgs/PASO_3/FONDO-3.png\" class=\"fondo-comenzar\" />\n      <img src=\"assets/imgs/Ultimos recursos/virtual.png\" class=\"Pg\"/>\n      <img (click)=\"avanzar('tipoMaqueta')\"src=\"assets/imgs/Botones/Botón_atras.png\" class=\"atras\">\n      <img (click)=\"alLector();\" src=\"assets/imgs/Botones/Botón_oprimeaqui.png\" class=\"BA\">\n    </div>\n</ion-content>");

/***/ }),

/***/ "./src/app/pages/liquido/liquido-routing.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/liquido/liquido-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: LiquidoPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LiquidoPageRoutingModule", function() { return LiquidoPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _liquido_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./liquido.page */ "./src/app/pages/liquido/liquido.page.ts");




const routes = [
    {
        path: '',
        component: _liquido_page__WEBPACK_IMPORTED_MODULE_3__["LiquidoPage"]
    }
];
let LiquidoPageRoutingModule = class LiquidoPageRoutingModule {
};
LiquidoPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], LiquidoPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/liquido/liquido.module.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/liquido/liquido.module.ts ***!
  \*************************************************/
/*! exports provided: LiquidoPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LiquidoPageModule", function() { return LiquidoPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _liquido_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./liquido-routing.module */ "./src/app/pages/liquido/liquido-routing.module.ts");
/* harmony import */ var _liquido_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./liquido.page */ "./src/app/pages/liquido/liquido.page.ts");







let LiquidoPageModule = class LiquidoPageModule {
};
LiquidoPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _liquido_routing_module__WEBPACK_IMPORTED_MODULE_5__["LiquidoPageRoutingModule"]
        ],
        declarations: [_liquido_page__WEBPACK_IMPORTED_MODULE_6__["LiquidoPage"]]
    })
], LiquidoPageModule);



/***/ }),

/***/ "./src/app/pages/liquido/liquido.page.scss":
/*!*************************************************!*\
  !*** ./src/app/pages/liquido/liquido.page.scss ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".fondo-comenzar {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  z-index: -2;\n}\n\n.nombre-personaje {\n  position: absolute;\n  width: 80vw;\n  top: 4vh;\n  left: 8vw;\n}\n\n.personaje {\n  position: absolute;\n  width: 86vw;\n  top: 20vh;\n  left: 4vw;\n}\n\n.play-video {\n  position: absolute;\n  bottom: 20vh;\n  left: 40vw;\n}\n\n.btn-avanzar {\n  position: absolute;\n  width: 55vw;\n  bottom: 10vh;\n  right: -6vw;\n}\n\n.Cont-ideas {\n  position: absolute;\n  top: 25vh;\n}\n\n.ideas {\n  height: 10vh;\n  margin-left: 6vw;\n  margin-top: 6vh;\n  width: 90vw;\n  background-color: #e4e2e3;\n}\n\n.atras {\n  position: absolute;\n  left: 6vh;\n  top: 84vh;\n  width: 18vw;\n  height: 10vh;\n  z-index: 8;\n}\n\n.text_ideas {\n  border-radius: 5px;\n  font-family: \"Delius\";\n  color: black;\n  padding-left: 10px;\n  padding-right: 10px;\n  text-align: center;\n}\n\n.desarrolla {\n  position: absolute;\n  top: 12vh;\n  width: 85vw;\n  left: 8vw;\n}\n\n.desarrolla1 {\n  position: absolute;\n  top: 28vh;\n  width: 85vw;\n  left: 8vw;\n}\n\n.desarrolla2 {\n  position: absolute;\n  top: 44vh;\n  width: 85vw;\n  left: 8vw;\n}\n\n.desarrolla3 {\n  position: absolute;\n  top: 60vh;\n  width: 85vw;\n  left: 8vw;\n}\n\n.Con-tipo {\n  position: absolute;\n  top: 22vh;\n  width: 80vw;\n  height: 64vh;\n  left: 11vw;\n}\n\n.tipoma {\n  position: relative;\n  margin-left: 1vw;\n  height: 30vh;\n  width: 100vw;\n  z-index: 5;\n}\n\n.Pg {\n  position: absolute;\n  width: 75vw;\n  top: 20vh;\n  left: 12vw;\n}\n\n.BA {\n  position: absolute;\n  width: 50vw;\n  top: 67vh;\n  left: 24vw;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbGlxdWlkby9saXF1aWRvLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUFDSjs7QUFDQTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0FBRUo7O0FBQUE7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0VBQ0EsU0FBQTtBQUdKOztBQURBO0VBQ0ksa0JBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtBQUlKOztBQUZBO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUFLSjs7QUFGQTtFQUNJLGtCQUFBO0VBQ0EsU0FBQTtBQUtKOztBQUhBO0VBQ0ksWUFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtBQU1KOztBQUpBO0VBQ0ksa0JBQUE7RUFDQSxTQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtBQU9KOztBQUxBO0VBQ0ksa0JBQUE7RUFDQSxxQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUFRSjs7QUFOQTtFQUNJLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0FBU0o7O0FBUEE7RUFDSSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtBQVVKOztBQVJBO0VBQ0ksa0JBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7QUFXSjs7QUFUQTtFQUNJLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0FBWUo7O0FBVkE7RUFDSSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7QUFhSjs7QUFYQTtFQUNJLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7QUFjSjs7QUFaQTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0FBZUo7O0FBYkE7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtBQWdCSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2xpcXVpZG8vbGlxdWlkby5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9uZG8tY29tZW56YXIge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgei1pbmRleDogLTI7XG4gIH1cbi5ub21icmUtcGVyc29uYWple1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDogODB2dztcbiAgICB0b3A6IDR2aDtcbiAgICBsZWZ0OiA4dnc7XG59XG4ucGVyc29uYWple1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDogODZ2dztcbiAgICB0b3A6IDIwdmg7XG4gICAgbGVmdDogNHZ3O1xufVxuLnBsYXktdmlkZW97XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJvdHRvbTogMjB2aDtcbiAgICBsZWZ0OiA0MHZ3O1xufVxuLmJ0bi1hdmFuemFye1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDogNTV2dztcbiAgICBib3R0b206IDEwdmg7XG4gICAgcmlnaHQ6IC02dnc7XG59XG4vL2lkZWFzXG4uQ29udC1pZGVhc3tcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOjI1dmg7XG59XG4uaWRlYXN7XG4gICAgaGVpZ2h0OiAxMHZoO1xuICAgIG1hcmdpbi1sZWZ0OiA2dnc7XG4gICAgbWFyZ2luLXRvcDogNnZoO1xuICAgIHdpZHRoOiA5MHZ3O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNlNGUyZTM7XG59XG4uYXRyYXN7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IDZ2aDtcbiAgICB0b3A6IDg0dmg7XG4gICAgd2lkdGg6IDE4dnc7XG4gICAgaGVpZ2h0OiAxMHZoO1xuICAgIHotaW5kZXg6IDg7XG4gIH1cbi50ZXh0X2lkZWFze1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBmb250LWZhbWlseTogXCJEZWxpdXNcIjtcbiAgICBjb2xvcjogYmxhY2s7XG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmRlc2Fycm9sbGF7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMTJ2aDtcbiAgICB3aWR0aDogODV2dztcbiAgICBsZWZ0OiA4dnc7XG59XG4uZGVzYXJyb2xsYTF7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMjh2aDtcbiAgICB3aWR0aDogODV2dztcbiAgICBsZWZ0OiA4dnc7XG59XG4uZGVzYXJyb2xsYTJ7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogNDR2aDtcbiAgICB3aWR0aDogODV2dztcbiAgICBsZWZ0OiA4dnc7XG59XG4uZGVzYXJyb2xsYTN7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogNjB2aDtcbiAgICB3aWR0aDogODV2dztcbiAgICBsZWZ0OiA4dnc7XG59XG4uQ29uLXRpcG97XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMjJ2aDtcbiAgICB3aWR0aDogODB2dztcbiAgICBoZWlnaHQ6IDY0dmg7XG4gICAgbGVmdDogMTF2dztcbn1cbi50aXBvbWF7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIG1hcmdpbi1sZWZ0OiAxdnc7XG4gICAgaGVpZ2h0OiAzMHZoO1xuICAgIHdpZHRoOiAxMDB2dztcbiAgICB6LWluZGV4OiA1O1xufVxuLlBne1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDogNzV2dztcbiAgICB0b3A6IDIwdmg7XG4gICAgbGVmdDogMTJ2dztcbiAgfVxuLkJBe1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDogNTB2dztcbiAgICB0b3A6IDY3dmg7XG4gICAgbGVmdDogMjR2dztcbiAgfSJdfQ== */");

/***/ }),

/***/ "./src/app/pages/liquido/liquido.page.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/liquido/liquido.page.ts ***!
  \***********************************************/
/*! exports provided: LiquidoPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LiquidoPage", function() { return LiquidoPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _services_servicio_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../services/servicio.service */ "./src/app/services/servicio.service.ts");




let LiquidoPage = class LiquidoPage {
    constructor(serv, router) {
        this.serv = serv;
        this.router = router;
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
    avanzar(section) {
        this.section = section;
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.section = "ideas";
            this.objaux = yield JSON.parse(this.serv.getItem('_cap_pdf2'));
            this.idea = yield this.objaux.idea1;
            this.idea2 = yield this.objaux.idea2;
            this.idea3 = yield this.objaux.idea3;
            this.idea4 = yield this.objaux.idea4;
            this.objaux.liquido = "Iniciado";
        });
    }
    savedData() {
        this.pdf.liquido = "Terminado";
        this.serv.AddItem(this.pdf);
        this.serv.editar2(this.pdf.id, this.pdf, this.pdf.num);
    }
    savedIdea(idea) {
        this.pdf = this.objaux;
        this.pdf.ideaselecionada = idea;
    }
    alLector() {
        this.router.navigateByUrl('scanner');
    }
};
LiquidoPage.ctorParameters = () => [
    { type: _services_servicio_service__WEBPACK_IMPORTED_MODULE_3__["ServicioService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
LiquidoPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-liquido',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./liquido.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/liquido/liquido.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./liquido.page.scss */ "./src/app/pages/liquido/liquido.page.scss")).default]
    })
], LiquidoPage);



/***/ })

}]);
//# sourceMappingURL=pages-liquido-liquido-module-es2015.js.map