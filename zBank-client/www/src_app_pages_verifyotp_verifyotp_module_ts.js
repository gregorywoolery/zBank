"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_verifyotp_verifyotp_module_ts"],{

/***/ 4629:
/*!*************************************************************!*\
  !*** ./src/app/pages/verifyotp/verifyotp-routing.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VerifyotpPageRoutingModule": () => (/* binding */ VerifyotpPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _verifyotp_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./verifyotp.page */ 7846);




const routes = [
    {
        path: '',
        component: _verifyotp_page__WEBPACK_IMPORTED_MODULE_0__.VerifyotpPage
    }
];
let VerifyotpPageRoutingModule = class VerifyotpPageRoutingModule {
};
VerifyotpPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], VerifyotpPageRoutingModule);



/***/ }),

/***/ 829:
/*!*****************************************************!*\
  !*** ./src/app/pages/verifyotp/verifyotp.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VerifyotpPageModule": () => (/* binding */ VerifyotpPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 8346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 8099);
/* harmony import */ var _verifyotp_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./verifyotp-routing.module */ 4629);
/* harmony import */ var _verifyotp_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./verifyotp.page */ 7846);







let VerifyotpPageModule = class VerifyotpPageModule {
};
VerifyotpPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _verifyotp_routing_module__WEBPACK_IMPORTED_MODULE_0__.VerifyotpPageRoutingModule
        ],
        declarations: [_verifyotp_page__WEBPACK_IMPORTED_MODULE_1__.VerifyotpPage]
    })
], VerifyotpPageModule);



/***/ }),

/***/ 7846:
/*!***************************************************!*\
  !*** ./src/app/pages/verifyotp/verifyotp.page.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VerifyotpPage": () => (/* binding */ VerifyotpPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _Users_gregorywoolery_Documents_Personal_zBank_zBank_client_node_modules_ngtools_webpack_src_loaders_direct_resource_js_verifyotp_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./verifyotp.page.html */ 911);
/* harmony import */ var _verifyotp_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./verifyotp.page.scss */ 236);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 4001);




let VerifyotpPage = class VerifyotpPage {
    constructor() { }
    ngOnInit() {
    }
};
VerifyotpPage.ctorParameters = () => [];
VerifyotpPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-verifyotp',
        template: _Users_gregorywoolery_Documents_Personal_zBank_zBank_client_node_modules_ngtools_webpack_src_loaders_direct_resource_js_verifyotp_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_verifyotp_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], VerifyotpPage);



/***/ }),

/***/ 911:
/*!********************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/verifyotp/verifyotp.page.html ***!
  \********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>verifyotp</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n");

/***/ }),

/***/ 236:
/*!*****************************************************!*\
  !*** ./src/app/pages/verifyotp/verifyotp.page.scss ***!
  \*****************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ2ZXJpZnlvdHAucGFnZS5zY3NzIn0= */";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_verifyotp_verifyotp_module_ts.js.map