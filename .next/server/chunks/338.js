"use strict";
exports.id = 338;
exports.ids = [338];
exports.modules = {

/***/ 68046:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_helmet_async__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(29107);
// import { Helmet } from 'react-helmet';


const PageContainer = ({ title , description , children  })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_helmet_async__WEBPACK_IMPORTED_MODULE_1__/* .HelmetProvider */ .B6, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_helmet_async__WEBPACK_IMPORTED_MODULE_1__/* .Helmet */ .ql, {
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                            children: title
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                            name: "description",
                            content: description
                        })
                    ]
                }),
                children
            ]
        })
    });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PageContainer);


/***/ }),

/***/ 98247:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "J": () => (/* binding */ ValidateEmail)
/* harmony export */ });
function ValidateEmail(input) {
    var validRegex = /[a-zA-Z0-9_\-.+]+(?:@|\[at])(?!(?:sentry-|sentry\.|sentry_))[a-zA-Z0-9-]+\.(?!(?:jpg|png|gif|jpeg|svg|webp|bmp|tiff|ico|heif|avif)$)(?!.*\.(?:jpg|png|gif|jpeg|svg|webp|bmp|tiff|ico|heif|avif))[\w.]+/gi;
    if (input.match(validRegex)) {
        return true;
    } else {
        return false;
    }
}


/***/ })

};
;