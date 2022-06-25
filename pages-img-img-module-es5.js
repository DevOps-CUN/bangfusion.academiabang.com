(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-img-img-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/img/img.page.html":
    /*!*******************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/img/img.page.html ***!
      \*******************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppPagesImgImgPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-content>\n  <img *ngIf=\"mostrar==false\" (click)=\"home()\" src=\"assets/imgs/Botones/Botón_atras.png\" id=\"atras\">\n  <img *ngIf=\"mostrar==true\" (click)=\"cambiador(0)\" src=\"assets/imgs/Botones/Botón_atras.png\" id=\"atras\">\n  <img *ngIf=\"mostrar==false\" (click)=\"cambiador(1)\" src=\"assets/imgs/Botones/Botón_atras.png\" id=\"adelante\">\n  <img src=\"{{fondo}}\" id=\"fondo\">\n</ion-content>\n";
      /***/
    },

    /***/
    "./src/app/pages/img/img-routing.module.ts":
    /*!*************************************************!*\
      !*** ./src/app/pages/img/img-routing.module.ts ***!
      \*************************************************/

    /*! exports provided: ImgPageRoutingModule */

    /***/
    function srcAppPagesImgImgRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ImgPageRoutingModule", function () {
        return ImgPageRoutingModule;
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


      var _img_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./img.page */
      "./src/app/pages/img/img.page.ts");

      var routes = [{
        path: '',
        component: _img_page__WEBPACK_IMPORTED_MODULE_3__["ImgPage"]
      }];

      var ImgPageRoutingModule = function ImgPageRoutingModule() {
        _classCallCheck(this, ImgPageRoutingModule);
      };

      ImgPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], ImgPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/pages/img/img.module.ts":
    /*!*****************************************!*\
      !*** ./src/app/pages/img/img.module.ts ***!
      \*****************************************/

    /*! exports provided: ImgPageModule */

    /***/
    function srcAppPagesImgImgModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ImgPageModule", function () {
        return ImgPageModule;
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


      var _img_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./img-routing.module */
      "./src/app/pages/img/img-routing.module.ts");
      /* harmony import */


      var _img_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./img.page */
      "./src/app/pages/img/img.page.ts");

      var ImgPageModule = function ImgPageModule() {
        _classCallCheck(this, ImgPageModule);
      };

      ImgPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _img_routing_module__WEBPACK_IMPORTED_MODULE_5__["ImgPageRoutingModule"]],
        declarations: [_img_page__WEBPACK_IMPORTED_MODULE_6__["ImgPage"]]
      })], ImgPageModule);
      /***/
    },

    /***/
    "./src/app/pages/img/img.page.scss":
    /*!*****************************************!*\
      !*** ./src/app/pages/img/img.page.scss ***!
      \*****************************************/

    /*! exports provided: default */

    /***/
    function srcAppPagesImgImgPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "#fondo {\n  position: absolute;\n  width: 100vw;\n}\n\n#atras {\n  position: absolute;\n  left: 0vh;\n  top: 1vh;\n  width: 12vw;\n  height: 6vh;\n  z-index: 3;\n}\n\n#adelante {\n  position: absolute;\n  right: 0vh;\n  top: 1vh;\n  width: 12vw;\n  height: 6vh;\n  z-index: 3;\n  transform: scaleX(-1);\n  -ms-filter: \"FlipH\";\n  filter: FlipH;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaW1nL2ltZy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtFQUNBLFlBQUE7QUFDSjs7QUFDQTtFQUNJLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7QUFFSjs7QUFBQTtFQUNJLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFFBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7RUFJQSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtBQUdKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvaW1nL2ltZy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjZm9uZG97XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHdpZHRoOiAxMDB2dztcbn1cbiNhdHJhc3tcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogMHZoO1xuICAgIHRvcDogMXZoO1xuICAgIHdpZHRoOiAxMnZ3O1xuICAgIGhlaWdodDogNnZoO1xuICAgIHotaW5kZXg6IDM7XG4gIH1cbiNhZGVsYW50ZXtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgcmlnaHQ6IDB2aDtcbiAgICB0b3A6IDF2aDtcbiAgICB3aWR0aDogMTJ2dztcbiAgICBoZWlnaHQ6IDZ2aDtcbiAgICB6LWluZGV4OiAzO1xuICAgIC1tb3otdHJhbnNmb3JtOiBzY2FsZVgoLTEpO1xuICAgIC1vLXRyYW5zZm9ybTogc2NhbGVYKC0xKTtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGVYKC0xKTtcbiAgICB0cmFuc2Zvcm06IHNjYWxlWCgtMSk7XG4gICAgLW1zLWZpbHRlcjogXCJGbGlwSFwiO1xuICAgIGZpbHRlcjogRmxpcEg7XG4gIH0iXX0= */";
      /***/
    },

    /***/
    "./src/app/pages/img/img.page.ts":
    /*!***************************************!*\
      !*** ./src/app/pages/img/img.page.ts ***!
      \***************************************/

    /*! exports provided: ImgPage */

    /***/
    function srcAppPagesImgImgPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ImgPage", function () {
        return ImgPage;
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

      var ImgPage = /*#__PURE__*/function () {
        function ImgPage(route, router) {
          _classCallCheck(this, ImgPage);

          this.route = route;
          this.router = router;
          this.mostrar = false;
          this.arrImg = ["https://firebasestorage.googleapis.com/v0/b/safeexam-473f1.appspot.com/o/bangPro%2FSOLIDO-1.png?alt=media&token=63adfbea-eb11-453e-ab07-df5709841fa1", "https://firebasestorage.googleapis.com/v0/b/safeexam-473f1.appspot.com/o/bangPro%2FSOLIDO-2.png?alt=media&token=ad788874-7d67-4bb3-ada2-8ec9aec31a94", "https://firebasestorage.googleapis.com/v0/b/safeexam-473f1.appspot.com/o/bangPro%2FGASEOSO-1.png?alt=media&token=f1217aab-6047-4316-8e15-bdec17466bb5", "https://firebasestorage.googleapis.com/v0/b/safeexam-473f1.appspot.com/o/bangPro%2FGASEOSO-2.png?alt=media&token=bea85076-594f-4d63-a7e0-f8c75bf0fc19", "https://firebasestorage.googleapis.com/v0/b/safeexam-473f1.appspot.com/o/bangPro%2FLIQUIDO-1.png?alt=media&token=0b951010-8353-48f8-861b-6565ed6919d3", "https://firebasestorage.googleapis.com/v0/b/safeexam-473f1.appspot.com/o/bangPro%2FLIQUIDO-2.png?alt=media&token=7c3ba6ca-25ef-4b0b-a232-61dfd4334385"];
        }

        _createClass(ImgPage, [{
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var _this = this;

              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      this.route.params.subscribe(function (params) {
                        var _numero = params.numero;
                        _this.numero = _numero;
                        _this.fondo = _this.arrImg[_this.numero];
                      });

                    case 1:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            this.fondo = this.arrImg[this.numero];
          }
        }, {
          key: "cambiador",
          value: function cambiador(opcion) {
            var pos = 0;

            if (opcion == 1) {
              pos = parseInt(this.numero) + 1;
            } else {
              pos = parseInt(this.numero);
            }

            this.fondo = this.arrImg[pos];
            this.mostrar = !this.mostrar;
          }
        }, {
          key: "home",
          value: function home() {
            this.router.navigateByUrl('home/explora');
          }
        }]);

        return ImgPage;
      }();

      ImgPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }];
      };

      ImgPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-img',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./img.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/img/img.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./img.page.scss */
        "./src/app/pages/img/img.page.scss"))["default"]]
      })], ImgPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-img-img-module-es5.js.map