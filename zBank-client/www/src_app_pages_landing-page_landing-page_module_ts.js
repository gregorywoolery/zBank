"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_landing-page_landing-page_module_ts"],{

/***/ 4989:
/*!*******************************************************************!*\
  !*** ./src/app/pages/landing-page/landing-page-routing.module.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LandingPagePageRoutingModule": () => (/* binding */ LandingPagePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _landing_page_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./landing-page.page */ 454);




const routes = [
    {
        path: '',
        component: _landing_page_page__WEBPACK_IMPORTED_MODULE_0__.LandingPagePage
    }
];
let LandingPagePageRoutingModule = class LandingPagePageRoutingModule {
};
LandingPagePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], LandingPagePageRoutingModule);



/***/ }),

/***/ 2492:
/*!***********************************************************!*\
  !*** ./src/app/pages/landing-page/landing-page.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LandingPagePageModule": () => (/* binding */ LandingPagePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 8346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 8099);
/* harmony import */ var _landing_page_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./landing-page-routing.module */ 4989);
/* harmony import */ var _landing_page_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./landing-page.page */ 454);







let LandingPagePageModule = class LandingPagePageModule {
};
LandingPagePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _landing_page_routing_module__WEBPACK_IMPORTED_MODULE_0__.LandingPagePageRoutingModule
        ],
        declarations: [_landing_page_page__WEBPACK_IMPORTED_MODULE_1__.LandingPagePage]
    })
], LandingPagePageModule);



/***/ }),

/***/ 454:
/*!*********************************************************!*\
  !*** ./src/app/pages/landing-page/landing-page.page.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LandingPagePage": () => (/* binding */ LandingPagePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _Users_gregorywoolery_Documents_Personal_zBank_zBank_client_node_modules_ngtools_webpack_src_loaders_direct_resource_js_landing_page_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./landing-page.page.html */ 9251);
/* harmony import */ var _landing_page_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./landing-page.page.scss */ 9991);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 4001);




let LandingPagePage = class LandingPagePage {
    constructor() { }
    ngOnInit() {
    }
};
LandingPagePage.ctorParameters = () => [];
LandingPagePage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-landing-page',
        template: _Users_gregorywoolery_Documents_Personal_zBank_zBank_client_node_modules_ngtools_webpack_src_loaders_direct_resource_js_landing_page_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_landing_page_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], LandingPagePage);



/***/ }),

/***/ 9251:
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/landing-page/landing-page.page.html ***!
  \**************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content scrollY=\"false\">\n  <div class=\"splash-container\">\n    <div class=\"splash-title\">zBank-mobile</div>\n    <div class=\"splash-photo\"></div>\n    <div>\n      Let's stack your money in an orderly way.\n    </div>\n  </div>\n  <div class=\"content-container\">\n    <div>\n      <ion-button routerLink=\"/signup\">GET STARTED</ion-button>\n    </div>\n    <div>\n      Already have an account?\n      <a routerLink=\"/login\">LOGIN</a>\n    </div>\n  </div>\n</ion-content>\n");

/***/ }),

/***/ 9991:
/*!***********************************************************!*\
  !*** ./src/app/pages/landing-page/landing-page.page.scss ***!
  \***********************************************************/
/***/ ((module) => {

module.exports = "ion-content {\n  --background: var(--main-purple);\n}\n\n.content-container {\n  align-items: center;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n\n.content-container > div:last-child, .content-container a {\n  margin-top: 2rem;\n  font-family: \"Fira Sans Condensed\", sans-serif !important;\n}\n\nion-button {\n  width: 16rem;\n  height: 3rem;\n  font-weight: lighter;\n  font-size: 21px !important;\n}\n\n.splash-container {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 2rem 0;\n}\n\n.splash-container > div {\n  font-family: \"Fira Sans Condensed\", sans-serif;\n}\n\n.splash-container > .splash-title {\n  font-size: 30px;\n}\n\n.splash-photo {\n  background-image: url('man-coins.PNG');\n  background-repeat: no-repeat;\n  background-attachment: local;\n  background-position: center;\n  background-size: contain;\n  height: 20rem;\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxhbmRpbmctcGFnZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQ0FBQTtBQUNGOztBQUdBO0VBQ0UsbUJBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtBQUFGOztBQUVFO0VBQ0UsZ0JBQUE7RUFDQSx5REFBQTtBQUFKOztBQUtBO0VBQ0UsWUFBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtFQUNBLDBCQUFBO0FBRkY7O0FBS0E7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7QUFGRjs7QUFHRTtFQUNFLDhDQUFBO0FBREo7O0FBR0U7RUFDSSxlQUFBO0FBRE47O0FBS0E7RUFDRSxzQ0FBQTtFQUNBLDRCQUFBO0VBQ0EsNEJBQUE7RUFDQSwyQkFBQTtFQUNBLHdCQUFBO0VBRUEsYUFBQTtFQUNBLFdBQUE7QUFIRiIsImZpbGUiOiJsYW5kaW5nLXBhZ2UucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnR7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0tbWFpbi1wdXJwbGUpO1xuXG59XG5cbi5jb250ZW50LWNvbnRhaW5lcntcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cbiAgPmRpdjpsYXN0LWNoaWxkLCBhe1xuICAgIG1hcmdpbi10b3A6IDJyZW07XG4gICAgZm9udC1mYW1pbHk6ICdGaXJhIFNhbnMgQ29uZGVuc2VkJywgc2Fucy1zZXJpZiAhaW1wb3J0YW50O1xuICB9XG59XG5cblxuaW9uLWJ1dHRvbntcbiAgd2lkdGg6IDE2cmVtO1xuICBoZWlnaHQ6IDNyZW07XG4gIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xuICBmb250LXNpemU6IDIxcHggIWltcG9ydGFudDtcbn1cblxuLnNwbGFzaC1jb250YWluZXJ7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDJyZW0gMDtcbiAgPmRpdntcbiAgICBmb250LWZhbWlseTogJ0ZpcmEgU2FucyBDb25kZW5zZWQnLCBzYW5zLXNlcmlmO1xuICB9XG4gID4uc3BsYXNoLXRpdGxle1xuICAgICAgZm9udC1zaXplOiAzMHB4O1xuICB9XG59XG5cbi5zcGxhc2gtcGhvdG97XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvbWFuLWNvaW5zLlBOR1wiKTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBsb2NhbDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XG5cbiAgaGVpZ2h0OiAyMHJlbTtcbiAgd2lkdGg6IDEwMCU7XG59XG4iXX0= */";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_landing-page_landing-page_module_ts.js.map