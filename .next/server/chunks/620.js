exports.id = 620;
exports.ids = [620];
exports.modules = {

/***/ 7911:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 89222, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 78301, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 83751, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 54765, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 5192, 23))

/***/ }),

/***/ 40460:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 43304))

/***/ }),

/***/ 34914:
/***/ (() => {



/***/ }),

/***/ 68205:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "br": () => (/* binding */ setAlert)
/* harmony export */ });
/* unused harmony export alertSlice */
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(10668);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);
/* __next_internal_client_entry_do_not_use__ alertSlice,default auto */ 
const initialState = {
    title: "",
    icon: "success",
    showCancelButton: true,
    text: ""
};
const alertSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
    name: "alert",
    initialState: initialState,
    reducers: {
        setAlert: (state, action)=>{
            state.title = action.payload.title, state.icon = action.payload.icon, state.showCancelButton = action.payload.showCancelButton, state.text = action.payload.text;
        }
    }
});
const { setAlert  } = alertSlice.actions;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (alertSlice.reducer);


/***/ }),

/***/ 43304:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ RootLayout)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(56786);
// EXTERNAL MODULE: ./node_modules/next/font/google/target.css?{"path":"src\\utils\\theme\\DefaultColors.tsx","import":"Plus_Jakarta_Sans","arguments":[{"weight":["300","400","500","600","700"],"subsets":["latin"],"display":"swap","fallback":["Helvetica","Arial","sans-serif"]}],"variableName":"plus"}
var target_path_src_utils_theme_DefaultColors_tsx_import_Plus_Jakarta_Sans_arguments_weight_300_400_500_600_700_subsets_latin_display_swap_fallback_Helvetica_Arial_sans_serif_variableName_plus_ = __webpack_require__(84698);
var target_path_src_utils_theme_DefaultColors_tsx_import_Plus_Jakarta_Sans_arguments_weight_300_400_500_600_700_subsets_latin_display_swap_fallback_Helvetica_Arial_sans_serif_variableName_plus_default = /*#__PURE__*/__webpack_require__.n(target_path_src_utils_theme_DefaultColors_tsx_import_Plus_Jakarta_Sans_arguments_weight_300_400_500_600_700_subsets_latin_display_swap_fallback_Helvetica_Arial_sans_serif_variableName_plus_);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/styles/index.js
var styles = __webpack_require__(22166);
;// CONCATENATED MODULE: ./src/utils/theme/DefaultColors.tsx


const baselightTheme = (0,styles.createTheme)({
    direction: "ltr",
    palette: {
        primary: {
            main: "#3E97FF",
            light: "#fff",
            dark: "#0095E8"
        },
        secondary: {
            main: "#F9F9F9",
            light: "#E8F7FF",
            dark: "#F1F1F2"
        },
        success: {
            main: "#13DEB9",
            light: "#E6FFFA",
            dark: "#02b3a9",
            contrastText: "#ffffff"
        },
        info: {
            main: "#539BFF",
            light: "#EBF3FE",
            dark: "#1682d4",
            contrastText: "#ffffff"
        },
        error: {
            main: "#FA896B",
            light: "#FDEDE8",
            dark: "#f3704d",
            contrastText: "#ffffff"
        },
        warning: {
            main: "#FFAE1F",
            light: "#FEF5E5",
            dark: "#ae8e59",
            contrastText: "#ffffff"
        },
        grey: {
            100: "#F2F6FA",
            200: "#EAEFF4",
            300: "#DFE5EF",
            400: "#7C8FAC",
            500: "#5A6A85",
            600: "#2A3547"
        },
        text: {
            primary: "#2A3547",
            secondary: "#5A6A85"
        },
        action: {
            disabledBackground: "rgba(73,82,88,0.12)",
            hoverOpacity: 0.02,
            hover: "#f6f9fc"
        },
        divider: "#e5eaef"
    },
    typography: {
        fontFamily: (target_path_src_utils_theme_DefaultColors_tsx_import_Plus_Jakarta_Sans_arguments_weight_300_400_500_600_700_subsets_latin_display_swap_fallback_Helvetica_Arial_sans_serif_variableName_plus_default()).style.fontFamily,
        h1: {
            fontWeight: 600,
            fontSize: "2.25rem",
            lineHeight: "2.75rem",
            fontFamily: (target_path_src_utils_theme_DefaultColors_tsx_import_Plus_Jakarta_Sans_arguments_weight_300_400_500_600_700_subsets_latin_display_swap_fallback_Helvetica_Arial_sans_serif_variableName_plus_default()).style.fontFamily
        },
        h2: {
            fontWeight: 600,
            fontSize: "1.875rem",
            lineHeight: "2.25rem",
            fontFamily: (target_path_src_utils_theme_DefaultColors_tsx_import_Plus_Jakarta_Sans_arguments_weight_300_400_500_600_700_subsets_latin_display_swap_fallback_Helvetica_Arial_sans_serif_variableName_plus_default()).style.fontFamily
        },
        h3: {
            fontWeight: 600,
            fontSize: "1.5rem",
            lineHeight: "1.75rem",
            fontFamily: (target_path_src_utils_theme_DefaultColors_tsx_import_Plus_Jakarta_Sans_arguments_weight_300_400_500_600_700_subsets_latin_display_swap_fallback_Helvetica_Arial_sans_serif_variableName_plus_default()).style.fontFamily
        },
        h4: {
            fontWeight: 600,
            fontSize: "1.3125rem",
            lineHeight: "1.6rem"
        },
        h5: {
            fontWeight: 600,
            fontSize: "1.125rem",
            lineHeight: "1.6rem"
        },
        h6: {
            fontWeight: 600,
            fontSize: "1rem",
            lineHeight: "1.2rem"
        },
        button: {
            textTransform: "capitalize",
            fontWeight: 400
        },
        body1: {
            fontSize: "0.875rem",
            fontWeight: 400,
            lineHeight: "1.334rem"
        },
        body2: {
            fontSize: "0.75rem",
            letterSpacing: "0rem",
            fontWeight: 400,
            lineHeight: "1rem"
        },
        subtitle1: {
            fontSize: "0.875rem",
            fontWeight: 400
        },
        subtitle2: {
            fontSize: "0.875rem",
            fontWeight: 400
        }
    },
    components: {
        MuiCssBaseline: {
            styleOverrides: {
                ".MuiPaper-elevation9, .MuiPopover-root .MuiPaper-elevation": {
                    boxShadow: "rgb(145 158 171 / 30%) 0px 0px 2px 0px, rgb(145 158 171 / 12%) 0px 12px 24px -4px !important"
                }
            }
        },
        MuiCard: {
            styleOverrides: {
                root: {
                    borderRadius: "7px"
                }
            }
        }
    }
});



// EXTERNAL MODULE: ./node_modules/@mui/material/node/CssBaseline/index.js
var CssBaseline = __webpack_require__(57981);
// EXTERNAL MODULE: ./node_modules/react-redux/lib/index.js
var lib = __webpack_require__(1560);
// EXTERNAL MODULE: ./node_modules/@reduxjs/toolkit/dist/redux-toolkit.cjs.production.min.js
var redux_toolkit_cjs_production_min = __webpack_require__(10668);
;// CONCATENATED MODULE: ./src/app/GlobalRedux/Features/Counter/counterSlice.ts
/* __next_internal_client_entry_do_not_use__ counterSlice,default auto */ 
const initialState = {
    value: 0
};
const counterSlice = (0,redux_toolkit_cjs_production_min.createSlice)({
    name: "counter",
    initialState: initialState,
    reducers: {
        increment: (state)=>{
            state.value += 1;
        },
        decrement: (state)=>{
            state.value += 1;
        },
        incrementByAmount: (state, action)=>{
            state.value += action.payload;
        }
    }
});
const { increment , decrement , incrementByAmount  } = counterSlice.actions;
/* harmony default export */ const Counter_counterSlice = (counterSlice.reducer);

;// CONCATENATED MODULE: ./src/app/GlobalRedux/Features/Login/loginSlice.ts
/* __next_internal_client_entry_do_not_use__ loginSlice,default auto */ 
const loginSlice_initialState = {
    value: false
};
const loginSlice = (0,redux_toolkit_cjs_production_min.createSlice)({
    name: "counter",
    initialState: loginSlice_initialState,
    reducers: {
        setIsLoggedIn: (state, action)=>{
            state.value = action.payload;
        }
    }
});
const { setIsLoggedIn  } = loginSlice.actions;
/* harmony default export */ const Login_loginSlice = (loginSlice.reducer);

// EXTERNAL MODULE: ./src/app/GlobalRedux/Features/Alert/alertSlice.ts
var alertSlice = __webpack_require__(68205);
;// CONCATENATED MODULE: ./src/app/GlobalRedux/store.ts
/* __next_internal_client_entry_do_not_use__ store auto */ 



const store = (0,redux_toolkit_cjs_production_min.configureStore)({
    reducer: {
        counter: Counter_counterSlice,
        isLoggedIn: Login_loginSlice,
        alert: alertSlice/* default */.ZP
    }
});

;// CONCATENATED MODULE: ./src/app/GlobalRedux/provider.tsx
/* __next_internal_client_entry_do_not_use__ Providers auto */ 


function Providers({ children  }) {
    return /*#__PURE__*/ jsx_runtime_.jsx(lib.Provider, {
        store: store,
        children: children
    });
}

// EXTERNAL MODULE: ./node_modules/next/navigation.js
var navigation = __webpack_require__(59483);
// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(18038);
// EXTERNAL MODULE: ./node_modules/sweetalert2/dist/sweetalert2.all.js
var sweetalert2_all = __webpack_require__(113);
var sweetalert2_all_default = /*#__PURE__*/__webpack_require__.n(sweetalert2_all);
;// CONCATENATED MODULE: ./src/app/(DashboardLayout)/components/alert/SweetAlert.tsx





const SweetAlert = ({ children  })=>{
    const alert = (0,lib.useSelector)((state)=>state.alert);
    const dispatch = (0,lib.useDispatch)();
    (0,react_.useEffect)(()=>{
        if (alert.text.length > 1 && alert.title.length > 1) sweetalert2_all_default().fire({
            icon: alert.icon,
            title: alert.title,
            text: alert.text,
            showCancelButton: alert.showCancelButton
        }).then((result)=>{
            dispatch((0,alertSlice/* setAlert */.br)({
                title: "Success",
                icon: "",
                text: ""
            }));
        });
    }, [
        alert
    ]);
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: children
    });
};
/* harmony default export */ const alert_SweetAlert = (SweetAlert);

;// CONCATENATED MODULE: ./src/app/layout.tsx
/* __next_internal_client_entry_do_not_use__ default auto */ 







function RootLayout({ children  }) {
    const router = (0,navigation.useRouter)();
    const publicRoutes = [
        "/authentication/login",
        "/authentication/register",
        "/authentication/forgot-password",
        "/token",
        "/reset-password",
        "/verify-email"
    ];
    const isPublicRoute = publicRoutes.includes((0,navigation.usePathname)());
    (0,react_.useEffect)(()=>{
        // Check if it's a public route and user is authenticated
        if (isPublicRoute && isAuthenticated()) {
            router.push("/"); // Redirect to home if already authenticated
        } else if (!isPublicRoute && !isAuthenticated()) {
            router.push("/authentication/login"); // Redirect to login if not authenticated
        }
    }, [
        (0,navigation.usePathname)()
    ]);
    const isAuthenticated = ()=>{
        if (localStorage?.getItem("seo-pilot-token")) {
            if (localStorage?.getItem("seo-pilot-token") != "") return true;
            return false;
        }
        // Replace this with your actual authentication logic
        return false;
    };
    return /*#__PURE__*/ jsx_runtime_.jsx("html", {
        lang: "en",
        children: /*#__PURE__*/ jsx_runtime_.jsx("body", {
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(styles.ThemeProvider, {
                theme: baselightTheme,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(CssBaseline["default"], {}),
                    /*#__PURE__*/ jsx_runtime_.jsx(Providers, {
                        children: /*#__PURE__*/ jsx_runtime_.jsx(alert_SweetAlert, {
                            children: children
                        })
                    })
                ]
            })
        })
    });
}


/***/ }),

/***/ 64180:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$$typeof": () => (/* binding */ $$typeof),
/* harmony export */   "__esModule": () => (/* binding */ __esModule),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(35985);

const proxy = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`D:\projects\tushar\99robots\seopilot-temp\src\app\layout.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__default__);

/***/ }),

/***/ 46624:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

const Loading = ()=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        children: "Loading"
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Loading);


/***/ }),

/***/ 41764:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(12548);
/* harmony import */ var next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__);
  

  /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((props) => {
    const imageData = {"type":"image/x-icon","sizes":"any"}
    const imageUrl = (0,next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__.fillMetadataSegment)(".", props.params, "favicon.ico")

    return [{
      ...imageData,
      url: imageUrl + "",
    }]
  });

/***/ })

};
;