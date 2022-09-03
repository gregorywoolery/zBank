"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_bank-cards_bank-cards_module_ts"],{

/***/ 2507:
/*!***************************************************************!*\
  !*** ./src/app/pages/bank-cards/bank-cards-routing.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BankCardsPageRoutingModule": () => (/* binding */ BankCardsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _bank_cards_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bank-cards.page */ 5784);




const routes = [
    {
        path: '',
        component: _bank_cards_page__WEBPACK_IMPORTED_MODULE_0__.BankCardsPage
    }
];
let BankCardsPageRoutingModule = class BankCardsPageRoutingModule {
};
BankCardsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], BankCardsPageRoutingModule);



/***/ }),

/***/ 4367:
/*!*******************************************************!*\
  !*** ./src/app/pages/bank-cards/bank-cards.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BankCardsPageModule": () => (/* binding */ BankCardsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 8267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 8346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 8099);
/* harmony import */ var _bank_cards_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bank-cards-routing.module */ 2507);
/* harmony import */ var _bank_cards_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bank-cards.page */ 5784);
/* harmony import */ var src_app_components_transaction_transaction_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/components/transaction/transaction.module */ 3648);
/* harmony import */ var src_app_components_bank_card_bank_card_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/components/bank-card/bank-card.module */ 1505);









let BankCardsPageModule = class BankCardsPageModule {
};
BankCardsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonicModule,
            _bank_cards_routing_module__WEBPACK_IMPORTED_MODULE_0__.BankCardsPageRoutingModule,
            src_app_components_transaction_transaction_module__WEBPACK_IMPORTED_MODULE_2__.TransactionComponentModule,
            src_app_components_bank_card_bank_card_module__WEBPACK_IMPORTED_MODULE_3__.BankCardComponentModule
        ],
        declarations: [_bank_cards_page__WEBPACK_IMPORTED_MODULE_1__.BankCardsPage]
    })
], BankCardsPageModule);



/***/ }),

/***/ 5784:
/*!*****************************************************!*\
  !*** ./src/app/pages/bank-cards/bank-cards.page.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BankCardsPage": () => (/* binding */ BankCardsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _Users_gregorywoolery_Documents_Personal_zBank_zBank_client_node_modules_ngtools_webpack_src_loaders_direct_resource_js_bank_cards_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./bank-cards.page.html */ 2220);
/* harmony import */ var _bank_cards_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bank-cards.page.scss */ 9172);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 3252);





let BankCardsPage = class BankCardsPage {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
    }
    goHome() {
        this.router.navigate(['cards-home']);
    }
};
BankCardsPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router }
];
BankCardsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-bank-cards',
        template: _Users_gregorywoolery_Documents_Personal_zBank_zBank_client_node_modules_ngtools_webpack_src_loaders_direct_resource_js_bank_cards_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_bank_cards_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], BankCardsPage);



/***/ }),

/***/ 2220:
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/bank-cards/bank-cards.page.html ***!
  \**********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-button (click)=\"goHome()\">\n    <ion-icon name=\"chevron-back-outline\"></ion-icon>\n  </ion-button>\n\n  <ion-text>Cards</ion-text>\n\n</ion-header>\n\n<ion-content >\n  <app-bank-card></app-bank-card>\n\n  <ion-content scrollY=\"false\" class=\"content-list-container\">\n    <ion-item-group class=\"list-header\">\n      <ion-text>Transactions</ion-text>\n      <ion-button>See more</ion-button>\n    </ion-item-group>\n    <ion-list>\n\n      <app-transaction></app-transaction>\n      <app-transaction></app-transaction>\n      <app-transaction></app-transaction>\n      <app-transaction></app-transaction>\n      <app-transaction></app-transaction>\n      <app-transaction></app-transaction>\n      <app-transaction></app-transaction>\n      <app-transaction></app-transaction>\n      <app-transaction></app-transaction>\n\n    </ion-list>\n  </ion-content>\n</ion-content>\n");

/***/ }),

/***/ 9172:
/*!*******************************************************!*\
  !*** ./src/app/pages/bank-cards/bank-cards.page.scss ***!
  \*******************************************************/
/***/ ((module) => {

module.exports = "ion-header {\n  padding: 1rem;\n  background-color: #fff;\n  display: flex;\n  align-items: center;\n}\nion-header ion-text {\n  color: #000;\n  font-size: 1.5rem;\n  margin-top: 0.2rem;\n}\nion-content {\n  --padding-start: 1rem;\n  --padding-end: 1rem ;\n}\nion-button {\n  --background: #fff;\n  --color: #000;\n}\n.list-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.list-header ion-text {\n  font-size: 2.2rem;\n}\n.list-header ion-button {\n  --padding-end: 0;\n  color: #9b9b9b;\n  font-size: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJhbmstY2FyZHMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FBQUY7QUFFRTtFQUNFLFdBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FBQUo7QUFJQTtFQUNFLHFCQUFBO0VBQ0Esb0JBQUE7QUFERjtBQUlBO0VBQ0Usa0JBQUE7RUFDQSxhQUFBO0FBREY7QUFJQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0FBREY7QUFHRTtFQUNFLGlCQUFBO0FBREo7QUFHRTtFQUNFLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7QUFESiIsImZpbGUiOiJiYW5rLWNhcmRzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW9uLWhlYWRlcntcbiAgcGFkZGluZzogMXJlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICBpb24tdGV4dHtcbiAgICBjb2xvcjogIzAwMDtcbiAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgICBtYXJnaW4tdG9wOiAuMnJlbTtcbiAgfVxufVxuXG5pb24tY29udGVudHtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAxcmVtO1xuICAtLXBhZGRpbmctZW5kOiAxcmVtXG59XG5cbmlvbi1idXR0b257XG4gIC0tYmFja2dyb3VuZDogI2ZmZjtcbiAgLS1jb2xvcjogIzAwMDtcbn1cblxuLmxpc3QtaGVhZGVye1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG5cbiAgaW9uLXRleHR7XG4gICAgZm9udC1zaXplOiAyLjJyZW07XG4gIH1cbiAgaW9uLWJ1dHRvbntcbiAgICAtLXBhZGRpbmctZW5kOiAwO1xuICAgIGNvbG9yOiAjOWI5YjliO1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgfVxufVxuXG5cbiJdfQ== */";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_bank-cards_bank-cards_module_ts.js.map