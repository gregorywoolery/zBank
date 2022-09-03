"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_signup_signup_module_ts"],{

/***/ 6392:
/*!*******************************************************!*\
  !*** ./src/app/pages/signup/signup-routing.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SignupPageRoutingModule": () => (/* binding */ SignupPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _signup_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./signup.page */ 9173);




const routes = [
    {
        path: '',
        component: _signup_page__WEBPACK_IMPORTED_MODULE_0__.SignupPage
    }
];
let SignupPageRoutingModule = class SignupPageRoutingModule {
};
SignupPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], SignupPageRoutingModule);



/***/ }),

/***/ 5783:
/*!***********************************************!*\
  !*** ./src/app/pages/signup/signup.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SignupPageModule": () => (/* binding */ SignupPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 8346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 8099);
/* harmony import */ var _signup_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./signup-routing.module */ 6392);
/* harmony import */ var _signup_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./signup.page */ 9173);







let SignupPageModule = class SignupPageModule {
};
SignupPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _signup_routing_module__WEBPACK_IMPORTED_MODULE_0__.SignupPageRoutingModule
        ],
        declarations: [_signup_page__WEBPACK_IMPORTED_MODULE_1__.SignupPage]
    })
], SignupPageModule);



/***/ }),

/***/ 9173:
/*!*********************************************!*\
  !*** ./src/app/pages/signup/signup.page.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SignupPage": () => (/* binding */ SignupPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _Users_gregorywoolery_Documents_Personal_zBank_zBank_client_node_modules_ngtools_webpack_src_loaders_direct_resource_js_signup_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./signup.page.html */ 5896);
/* harmony import */ var _signup_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./signup.page.scss */ 9339);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 3252);





let SignupPage = class SignupPage {
    constructor(router) {
        this.router = router;
        this.showRegSignUp = false;
    }
    ngOnInit() {
    }
    showFormRegSignup() {
        this.showRegSignUp = !this.showRegSignUp;
    }
    submitForm() {
        this.router.navigateByUrl('/cards-home');
    }
};
SignupPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router }
];
SignupPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-signup',
        template: _Users_gregorywoolery_Documents_Personal_zBank_zBank_client_node_modules_ngtools_webpack_src_loaders_direct_resource_js_signup_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_signup_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], SignupPage);



/***/ }),

/***/ 5896:
/*!**************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/signup/signup.page.html ***!
  \**************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content scrollY=\"false\">\n  <div class=\"overview-container\">\n    <div class=\"main-container\">\n      <div>\n        <div>Sign up</div>\n        <ion-button class=\"social-signup-button\">\n          <ion-icon slot=\"icon-only\" name=\"share-social-outline\"></ion-icon>\n        </ion-button>\n      </div>\n      <div>\n        <div class=\"signup-photo-1\"></div>\n      </div>\n\n      <div class=\"content-container\">\n        <div>\n\n          <form >\n            <div *ngIf=\"!showRegSignUp\">\n              <div>\n                <ion-item>\n                  <ion-label position=\"floating\">Fistname</ion-label>\n                  <ion-input></ion-input>\n                </ion-item>\n                <div>\n                  <ng-container ></ng-container>\n                </div>\n              </div>\n\n              <div>\n                <ion-item>\n                  <ion-label position=\"floating\">Lastname</ion-label>\n                  <ion-input></ion-input>\n                </ion-item>\n                <div>\n                  <ng-container ></ng-container>\n                </div>\n              </div>\n            </div>\n\n\n            <div *ngIf=\"showRegSignUp\">\n              <div>\n                <ion-item>\n                  <ion-label position=\"floating\">Email</ion-label>\n                  <ion-input></ion-input>\n                </ion-item>\n                <div>\n                  <ng-container ></ng-container>\n                </div>\n              </div>\n\n              <div>\n                <ion-item>\n                  <ion-label position=\"floating\">Phone number</ion-label>\n                  <ion-input></ion-input>\n                </ion-item>\n\n                <div>\n\n                </div>\n              </div>\n\n              <div>\n                <ion-item>\n                  <ion-label position=\"floating\">Password</ion-label>\n                  <ion-input type=\"password\"></ion-input>\n                </ion-item>\n                <div>\n\n                </div>\n              </div>\n\n              <div>\n                <ion-item>\n                  <ion-label position=\"floating\">Re-enter Password</ion-label>\n                  <ion-input type=\"password\"></ion-input>\n                </ion-item>\n              </div>\n            </div>\n\n            <div *ngIf=\"!showRegSignUp\">\n              <ion-button (click)=\"showFormRegSignup()\" class=\"login-button\">Continue</ion-button>\n            </div>\n\n            <div *ngIf=\"showRegSignUp\">\n              <div class=\"forgot-link-container\">\n                By continuing your agree to our\n                <a routerLink=\"#\">Terms of Service</a>\n                and <a routerLink=\"#\">Privacy Policy</a>\n              </div>\n\n              <ion-button class=\"login-button\" (click)=\"submitForm()\">Sign up</ion-button>\n              <ion-button class=\"back-home-button\" (click)=\"showFormRegSignup()\">\n                <ion-icon slot=\"icon-only\" name=\"arrow-back-outline\"></ion-icon>\n              </ion-button>\n            </div>\n          </form>\n        </div>\n\n        <div class=\"signin-with-container\" *ngIf=\"!showRegSignUp\">\n          <div class=\"divider\">Or</div>\n\n          <ion-button>\n            <ion-icon class=\"logo-google\" name=\"logo-google\"></ion-icon>\n            Continue with Google\n          </ion-button>\n          <ion-button>\n            <ion-icon name=\"logo-twitter\"></ion-icon>\n            Continue with Twitter\n          </ion-button>\n          <ion-button>\n            <ion-icon name=\"logo-facebook\"></ion-icon>\n            Continue with Facebook\n          </ion-button>\n        </div>\n      </div>\n\n    </div>\n    <div id=\"footer\">\n      <a routerLink=\"/login\">Already have an account? Sign in</a>\n    </div>\n  </div>\n</ion-content>\n");

/***/ }),

/***/ 9339:
/*!***********************************************!*\
  !*** ./src/app/pages/signup/signup.page.scss ***!
  \***********************************************/
/***/ ((module) => {

module.exports = "ion-content {\n  --background: var(--main-purple);\n}\n\n.overview-container {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  height: 100%;\n}\n\n#footer {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-bottom: 1rem;\n}\n\n#footer a {\n  text-decoration: underline;\n}\n\n.main-container {\n  padding: 2rem;\n  padding-top: 4rem !important;\n}\n\n.main-container > div:first-child {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.main-container > div:first-child > div:first-child {\n  font-size: 2rem;\n  font-family: \"Fira Sans Condensed\", sans-serif;\n}\n\n.main-container > div:first-child > .social-signup-button {\n  width: 3rem !important;\n  --border-radius: 1.4rem !important;\n}\n\n.main-container > div:first-child > .social-signup-button ion-icon {\n  font-size: 30px !important;\n}\n\n.content-container > div > div {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\nion-input, ion-item {\n  --background: none !important;\n}\n\nion-item {\n  width: 100%;\n  --padding-start: 0 !important;\n}\n\nion-input, ion-label {\n  font-size: 13px !important;\n}\n\nion-button {\n  width: 100%;\n  height: 2.3rem;\n  --border-radius: 1.2rem;\n  --background: #D9B2E1;\n  color: #301145;\n  font-weight: bold;\n  font-size: 1.2rem;\n}\n\n.login-button {\n  --background: #9C488D;\n  margin-top: 1rem !important;\n  color: #fff;\n}\n\nion-footer {\n  background-color: none;\n}\n\nion-item-divider {\n  --background: none;\n}\n\na {\n  font-weight: 100 !important;\n  letter-spacing: 0.1px;\n}\n\n.forgot-link-container {\n  margin-top: 1rem;\n  text-align: center;\n  font-size: 1.2rem;\n}\n\n.signup-photo-1 {\n  background-image: url('handshake-signup.PNG');\n  background-repeat: no-repeat;\n  background-attachment: fixed;\n  background-position: top;\n  background-size: contain;\n  height: 12rem;\n  width: 100%;\n}\n\n.back-home-button {\n  width: 3rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpZ251cC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQ0FBQTtBQUNGOztBQUVBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsOEJBQUE7RUFDQSxZQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBQ0Y7O0FBQUU7RUFDRSwwQkFBQTtBQUVKOztBQUVBO0VBQ0UsYUFBQTtFQUNBLDRCQUFBO0FBQ0Y7O0FBRUU7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtBQUFKOztBQUNJO0VBQ0UsZUFBQTtFQUNBLDhDQUFBO0FBQ047O0FBQ0k7RUFDRSxzQkFBQTtFQUdBLGtDQUFBO0FBRE47O0FBT007RUFDRSwwQkFBQTtBQUxSOztBQVdBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQVJGOztBQVdBO0VBQ0UsNkJBQUE7QUFSRjs7QUFXQTtFQUNFLFdBQUE7RUFDQSw2QkFBQTtBQVJGOztBQVdBO0VBQ0UsMEJBQUE7QUFSRjs7QUFXQTtFQUNFLFdBQUE7RUFDQSxjQUFBO0VBQ0EsdUJBQUE7RUFDQSxxQkFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0FBUkY7O0FBV0E7RUFDRSxxQkFBQTtFQUNBLDJCQUFBO0VBQ0EsV0FBQTtBQVJGOztBQVdBO0VBQ0Usc0JBQUE7QUFSRjs7QUFZQTtFQUNFLGtCQUFBO0FBVEY7O0FBWUE7RUFDRSwyQkFBQTtFQUNBLHFCQUFBO0FBVEY7O0FBWUE7RUFDRSxnQkFBQTtFQUVBLGtCQUFBO0VBQ0EsaUJBQUE7QUFWRjs7QUFnQkE7RUFDRSw2Q0FBQTtFQUNBLDRCQUFBO0VBQ0EsNEJBQUE7RUFDQSx3QkFBQTtFQUNBLHdCQUFBO0VBRUEsYUFBQTtFQUNBLFdBQUE7QUFkRjs7QUFpQkE7RUFDRSxXQUFBO0FBZEYiLCJmaWxlIjoic2lnbnVwLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50e1xuICAtLWJhY2tncm91bmQ6IHZhcigtLW1haW4tcHVycGxlKTtcbn1cblxuLm92ZXJ2aWV3LWNvbnRhaW5lcntcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbiNmb290ZXJ7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xuICBhe1xuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICB9XG59XG5cbi5tYWluLWNvbnRhaW5lcntcbiAgcGFkZGluZzogMnJlbTtcbiAgcGFkZGluZy10b3A6IDRyZW0gIWltcG9ydGFudDtcblxuICAvL1RpdGxlXG4gID5kaXY6Zmlyc3QtY2hpbGR7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICA+ZGl2OmZpcnN0LWNoaWxke1xuICAgICAgZm9udC1zaXplOiAycmVtO1xuICAgICAgZm9udC1mYW1pbHk6ICdGaXJhIFNhbnMgQ29uZGVuc2VkJywgc2Fucy1zZXJpZjtcbiAgICB9XG4gICAgPi5zb2NpYWwtc2lnbnVwLWJ1dHRvbntcbiAgICAgIHdpZHRoOiAzcmVtICFpbXBvcnRhbnQ7XG4gICAgICAvLyB3aWR0aDogMTAwJTtcbiAgICAgIC8vIGhlaWdodDogMi4zcmVtO1xuICAgICAgLS1ib3JkZXItcmFkaXVzOiAxLjRyZW0gIWltcG9ydGFudDtcbiAgICAgIC8vIC0tYmFja2dyb3VuZDogI0Q5QjJFMTtcbiAgICAgIC8vIGNvbG9yOiAjMzAxMTQ1O1xuICAgICAgLy8gZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAvLyBmb250LXNpemU6IDEuMnJlbTtcblxuICAgICAgaW9uLWljb257XG4gICAgICAgIGZvbnQtc2l6ZTogMzBweCAhaW1wb3J0YW50O1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4uY29udGVudC1jb250YWluZXIgPiBkaXYgPiBkaXZ7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG5pb24taW5wdXQsIGlvbi1pdGVte1xuICAtLWJhY2tncm91bmQ6IG5vbmUgIWltcG9ydGFudDtcbn1cblxuaW9uLWl0ZW17XG4gIHdpZHRoOiAxMDAlO1xuICAtLXBhZGRpbmctc3RhcnQ6IDAgIWltcG9ydGFudDtcbn1cblxuaW9uLWlucHV0LCBpb24tbGFiZWx7XG4gIGZvbnQtc2l6ZTogMTNweCAhaW1wb3J0YW50O1xufVxuXG5pb24tYnV0dG9ue1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAyLjNyZW07XG4gIC0tYm9yZGVyLXJhZGl1czogMS4ycmVtO1xuICAtLWJhY2tncm91bmQ6ICNEOUIyRTE7XG4gIGNvbG9yOiAjMzAxMTQ1O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAxLjJyZW07XG59XG5cbi5sb2dpbi1idXR0b257XG4gIC0tYmFja2dyb3VuZDogIzlDNDg4RDtcbiAgbWFyZ2luLXRvcDogMXJlbSAhaW1wb3J0YW50O1xuICBjb2xvcjogI2ZmZjtcbn1cblxuaW9uLWZvb3RlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IG5vbmU7XG59XG5cblxuaW9uLWl0ZW0tZGl2aWRlcntcbiAgLS1iYWNrZ3JvdW5kOiBub25lO1xufVxuXG5he1xuICBmb250LXdlaWdodDogMTAwICFpbXBvcnRhbnQ7XG4gIGxldHRlci1zcGFjaW5nOiAuMXB4O1xufVxuXG4uZm9yZ290LWxpbmstY29udGFpbmVye1xuICBtYXJnaW4tdG9wOiAxcmVtO1xuICAvLyBkaXNwbGF5OiBmbGV4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xuICAvLyBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgLy8gYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuXG4uc2lnbnVwLXBob3RvLTF7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvaGFuZHNoYWtlLXNpZ251cC5QTkdcIik7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IHRvcDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xuXG4gIGhlaWdodDogMTJyZW07XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uYmFjay1ob21lLWJ1dHRvbntcbiAgd2lkdGg6IDNyZW07XG59XG4iXX0= */";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_signup_signup_module_ts.js.map