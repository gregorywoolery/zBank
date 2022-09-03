"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_components_bottom-sheet_bottom-sheet_module_ts"],{

/***/ 5881:
/*!************************************************************************!*\
  !*** ./src/app/components/bottom-sheet/bottom-sheet-routing.module.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BottomSheetPageRoutingModule": () => (/* binding */ BottomSheetPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _bottom_sheet_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bottom-sheet.page */ 4687);




const routes = [
    {
        path: '',
        component: _bottom_sheet_page__WEBPACK_IMPORTED_MODULE_0__.BottomSheetPage
    }
];
let BottomSheetPageRoutingModule = class BottomSheetPageRoutingModule {
};
BottomSheetPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], BottomSheetPageRoutingModule);



/***/ }),

/***/ 8488:
/*!****************************************************************!*\
  !*** ./src/app/components/bottom-sheet/bottom-sheet.module.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BottomSheetPageModule": () => (/* binding */ BottomSheetPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 8267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 8346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 8099);
/* harmony import */ var _bottom_sheet_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bottom-sheet-routing.module */ 5881);
/* harmony import */ var _bottom_sheet_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bottom-sheet.page */ 4687);
/* harmony import */ var _transaction_transaction_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../transaction/transaction.module */ 3648);








let BottomSheetPageModule = class BottomSheetPageModule {
};
BottomSheetPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _bottom_sheet_routing_module__WEBPACK_IMPORTED_MODULE_0__.BottomSheetPageRoutingModule,
            _transaction_transaction_module__WEBPACK_IMPORTED_MODULE_2__.TransactionComponentModule
        ],
        declarations: [_bottom_sheet_page__WEBPACK_IMPORTED_MODULE_1__.BottomSheetPage]
    })
], BottomSheetPageModule);



/***/ })

}]);
//# sourceMappingURL=src_app_components_bottom-sheet_bottom-sheet_module_ts.js.map