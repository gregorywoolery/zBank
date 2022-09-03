"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_login_login_module_ts"],{

/***/ 6215:
/*!*****************************************************!*\
  !*** ./src/app/pages/login/login-routing.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPageRoutingModule": () => (/* binding */ LoginPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.page */ 9004);




const routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_0__.LoginPage
    }
];
let LoginPageRoutingModule = class LoginPageRoutingModule {
};
LoginPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], LoginPageRoutingModule);



/***/ }),

/***/ 2371:
/*!*********************************************!*\
  !*** ./src/app/pages/login/login.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPageModule": () => (/* binding */ LoginPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 8346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 8099);
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login-routing.module */ 6215);
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.page */ 9004);







let LoginPageModule = class LoginPageModule {
};
LoginPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _login_routing_module__WEBPACK_IMPORTED_MODULE_0__.LoginPageRoutingModule
        ],
        declarations: [_login_page__WEBPACK_IMPORTED_MODULE_1__.LoginPage]
    })
], LoginPageModule);



/***/ }),

/***/ 9004:
/*!*******************************************!*\
  !*** ./src/app/pages/login/login.page.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPage": () => (/* binding */ LoginPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _Users_gregorywoolery_Documents_Personal_zBank_zBank_client_node_modules_ngtools_webpack_src_loaders_direct_resource_js_login_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./login.page.html */ 7230);
/* harmony import */ var _login_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.page.scss */ 8918);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 3252);





let LoginPage = class LoginPage {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
    }
    login() {
        this.router.navigateByUrl('/cards-home');
    }
};
LoginPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router }
];
LoginPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-login',
        template: _Users_gregorywoolery_Documents_Personal_zBank_zBank_client_node_modules_ngtools_webpack_src_loaders_direct_resource_js_login_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_login_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], LoginPage);



/***/ }),

/***/ 7230:
/*!************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/login/login.page.html ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content scrollY=\"false\">\n  <div class=\"overview-container\">\n    <div class=\"main-container\">\n      <div>\n      Log in\n      </div>\n\n      <div class=\"content-container\">\n        <form>\n          <div>\n            <div>\n              <ion-item>\n                <ion-label position=\"floating\">Username or email</ion-label>\n                <ion-input></ion-input>\n              </ion-item>\n            </div>\n\n            <div>\n              <ion-item>\n                <ion-label position=\"floating\">Password</ion-label>\n                <ion-input type=\"password\"></ion-input>\n              </ion-item>\n            </div>\n\n            <div class=\"checkbox-container\">\n              <ion-item lines=\"none\">\n                <ion-label>Remember me</ion-label>\n                <ion-checkbox slot=\"start\"></ion-checkbox>\n              </ion-item>\n            </div>\n\n            <div>\n              <ion-button (click)=\"login()\" class=\"login-button\">Log in</ion-button>\n              <div class=\"forgot-link-container\"><a routerLink=\"#\">Forgot Password?</a></div>\n            </div>\n\n          </div>\n        </form>\n\n        <div class=\"signin-with-container\">\n          <div class=\"divider\">Or</div>\n\n          <ion-button>\n            <ion-icon class=\"logo-google\" name=\"logo-google\"></ion-icon>\n            Continue with Google\n          </ion-button>\n          <ion-button>\n            <ion-icon name=\"logo-twitter\"></ion-icon>\n            Continue with Twitter\n          </ion-button>\n          <ion-button>\n            <ion-icon name=\"logo-facebook\"></ion-icon>\n            Continue with Facebook\n          </ion-button>\n        </div>\n      </div>\n\n    </div>\n    <div id=\"footer\">\n      <a routerLink=\"/signup\">Don't have an account? Sign Up</a>\n    </div>\n  </div>\n</ion-content>\n");

/***/ }),

/***/ 8918:
/*!*********************************************!*\
  !*** ./src/app/pages/login/login.page.scss ***!
  \*********************************************/
/***/ ((module) => {

module.exports = "ion-content {\n  --background: var(--main-purple);\n}\n\n.overview-container {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  height: 100%;\n}\n\n#footer {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-bottom: 1rem;\n}\n\n#footer a {\n  text-decoration: underline;\n}\n\n.main-container {\n  padding: 2rem;\n  padding-top: 4rem !important;\n}\n\n.main-container > div:first-child {\n  font-size: 2rem;\n  font-family: \"Fira Sans Condensed\", sans-serif;\n}\n\n.content-container > div > div {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\nion-input, ion-item {\n  --background: none !important;\n}\n\nion-item {\n  width: 100%;\n  --padding-start: 0 !important;\n}\n\nion-input, ion-label {\n  font-size: 13px !important;\n}\n\n.checkbox-container {\n  margin-top: 0.4rem;\n  display: flex;\n  align-items: flex-start !important;\n}\n\n.checkbox-container ion-checkbox {\n  --size: 1rem;\n}\n\n.checkbox-container ion-item {\n  width: min-content;\n}\n\nion-button {\n  width: 100%;\n  height: 2.3rem;\n  --border-radius: 1.2rem;\n  --background: #D9B2E1;\n  color: #301145;\n  font-weight: bold;\n  font-size: 1.2rem;\n}\n\n.login-button {\n  --background: #9C488D;\n  margin-top: 1rem !important;\n  color: #fff;\n}\n\nion-footer {\n  background-color: none;\n}\n\nion-item-divider {\n  --background: none;\n}\n\na {\n  font-weight: 100 !important;\n  letter-spacing: 0.1px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdDQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSw4QkFBQTtFQUNBLFlBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFDRjs7QUFBRTtFQUNFLDBCQUFBO0FBRUo7O0FBRUE7RUFDRSxhQUFBO0VBQ0EsNEJBQUE7QUFDRjs7QUFDRTtFQUNFLGVBQUE7RUFDQSw4Q0FBQTtBQUNKOztBQUlBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQURGOztBQUlBO0VBQ0UsNkJBQUE7QUFERjs7QUFJQTtFQUNFLFdBQUE7RUFDQSw2QkFBQTtBQURGOztBQUlBO0VBQ0UsMEJBQUE7QUFERjs7QUFJQTtFQUNFLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLGtDQUFBO0FBREY7O0FBR0U7RUFDRSxZQUFBO0FBREo7O0FBSUU7RUFDRSxrQkFBQTtBQUZKOztBQU1BO0VBQ0UsV0FBQTtFQUNBLGNBQUE7RUFDQSx1QkFBQTtFQUNBLHFCQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7QUFIRjs7QUFNQTtFQUNFLHFCQUFBO0VBQ0EsMkJBQUE7RUFDQSxXQUFBO0FBSEY7O0FBTUE7RUFDRSxzQkFBQTtBQUhGOztBQU9BO0VBQ0Usa0JBQUE7QUFKRjs7QUFPQTtFQUNFLDJCQUFBO0VBQ0EscUJBQUE7QUFKRiIsImZpbGUiOiJsb2dpbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudHtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1tYWluLXB1cnBsZSk7XG59XG5cbi5vdmVydmlldy1jb250YWluZXJ7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4jZm9vdGVye1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbiAgYXtcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgfVxufVxuXG4ubWFpbi1jb250YWluZXJ7XG4gIHBhZGRpbmc6IDJyZW07XG4gIHBhZGRpbmctdG9wOiA0cmVtICFpbXBvcnRhbnQ7XG5cbiAgPmRpdjpmaXJzdC1jaGlsZHtcbiAgICBmb250LXNpemU6IDJyZW07XG4gICAgZm9udC1mYW1pbHk6ICdGaXJhIFNhbnMgQ29uZGVuc2VkJywgc2Fucy1zZXJpZjtcblxuICB9XG59XG5cbi5jb250ZW50LWNvbnRhaW5lciA+IGRpdiA+IGRpdntcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbmlvbi1pbnB1dCwgaW9uLWl0ZW17XG4gIC0tYmFja2dyb3VuZDogbm9uZSAhaW1wb3J0YW50O1xufVxuXG5pb24taXRlbXtcbiAgd2lkdGg6IDEwMCU7XG4gIC0tcGFkZGluZy1zdGFydDogMCAhaW1wb3J0YW50O1xufVxuXG5pb24taW5wdXQsIGlvbi1sYWJlbHtcbiAgZm9udC1zaXplOiAxM3B4ICFpbXBvcnRhbnQ7XG59XG5cbi5jaGVja2JveC1jb250YWluZXJ7XG4gIG1hcmdpbi10b3A6IC40cmVtO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydCAhaW1wb3J0YW50O1xuXG4gIGlvbi1jaGVja2JveHtcbiAgICAtLXNpemU6IDFyZW07XG4gIH1cblxuICBpb24taXRlbXtcbiAgICB3aWR0aDogbWluLWNvbnRlbnQ7XG4gIH1cbn1cblxuaW9uLWJ1dHRvbntcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMi4zcmVtO1xuICAtLWJvcmRlci1yYWRpdXM6IDEuMnJlbTtcbiAgLS1iYWNrZ3JvdW5kOiAjRDlCMkUxO1xuICBjb2xvcjogIzMwMTE0NTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xufVxuXG4ubG9naW4tYnV0dG9ue1xuICAtLWJhY2tncm91bmQ6ICM5QzQ4OEQ7XG4gIG1hcmdpbi10b3A6IDFyZW0gIWltcG9ydGFudDtcbiAgY29sb3I6ICNmZmY7XG59XG5cbmlvbi1mb290ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBub25lO1xufVxuXG5cbmlvbi1pdGVtLWRpdmlkZXJ7XG4gIC0tYmFja2dyb3VuZDogbm9uZTtcbn1cblxuYXtcbiAgZm9udC13ZWlnaHQ6IDEwMCAhaW1wb3J0YW50O1xuICBsZXR0ZXItc3BhY2luZzogLjFweDtcbn1cbiJdfQ== */";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_login_login_module_ts.js.map