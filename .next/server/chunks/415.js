"use strict";
exports.id = 415;
exports.ids = [415];
exports.modules = {

/***/ 82415:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "o": () => (/* binding */ LoginRegistrationAPI)
/* harmony export */ });
/* unused harmony export PublicationsApi */
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(40248);

let header = null;
let accessToken = null;
if (false) {}
const API_ROOT = "https://dev.seopilot.io/backend_api";
// console.log("accessToken:", accessToken);
if (accessToken != null) {
    header = {
        headers: {
            Authorization: `Bearer ${accessToken}`,
            Accept: "application/json",
            "Content-type": "application/json"
        }
    };
}
const LoginRegistrationAPI = {
    async register (data, url = "/create-user", source = undefined) {
        return await axios__WEBPACK_IMPORTED_MODULE_0__/* ["default"].post */ .Z.post(`${API_ROOT}${url}`, data, source);
    },
    async login (data, url = "/login", source = undefined) {
        return await axios__WEBPACK_IMPORTED_MODULE_0__/* ["default"].post */ .Z.post(`${API_ROOT}${url}`, data, source);
    },
    async sendForgotPasswordEmail (data, url = "/forgot-password", source = undefined) {
        return await axios__WEBPACK_IMPORTED_MODULE_0__/* ["default"].post */ .Z.post(`${API_ROOT}${url}`, data, source);
    },
    async resetPassword (data, url = "/reset-password", source = undefined) {
        return await axios__WEBPACK_IMPORTED_MODULE_0__/* ["default"].post */ .Z.post(`${API_ROOT}${url}`, data, source);
    },
    async checkVerification (data, url = "/check-verification", source = undefined) {
        return await axios__WEBPACK_IMPORTED_MODULE_0__/* ["default"].post */ .Z.post(`${API_ROOT}${url}`, data, source);
    }
};
const PublicationsApi = {
    async getPublications (url = "/publications") {
        return axios__WEBPACK_IMPORTED_MODULE_0__/* ["default"].get */ .Z.get(`${API_ROOT}${url}`, header).then((response)=>response?.data).catch((error)=>{
            if (error.response) {
                // console.log(error.response)
                if (error.response.status === 401) {
                    localStorage.removeItem("token");
                    window.location.reload();
                } else {
                    return error.response;
                }
            }
        });
    }
};


/***/ })

};
;