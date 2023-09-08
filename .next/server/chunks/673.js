exports.id = 673;
exports.ids = [673];
exports.modules = {

/***/ 41512:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 64099))

/***/ }),

/***/ 64099:
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
// EXTERNAL MODULE: ./node_modules/@mui/material/node/index.js
var node = __webpack_require__(64085);
// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(18038);
// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(69232);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);
// EXTERNAL MODULE: ./node_modules/next/navigation.js
var navigation = __webpack_require__(59483);
;// CONCATENATED MODULE: ./src/app/(DashboardLayout)/layout/header/Profile.tsx




const Profile = ()=>{
    const router = (0,navigation.useRouter)();
    const [anchorEl2, setAnchorEl2] = (0,react_.useState)(null);
    const handleClick2 = (event)=>{
        setAnchorEl2(event.currentTarget);
    };
    const handleClose2 = ()=>{
        setAnchorEl2(null);
    };
    const logout = ()=>{
        localStorage.removeItem("seo-pilot-token");
        router.push("/authentication/login");
        chrome.runtime.sendMessage("phddnlfmlkkjomdccfjjfkhnbmmcfocb", {
            action: "removeToken"
        }, (response)=>{
            // console.log(response)
            if (response && response.success) {
                console.log("Token stored in extension's local storage.", response);
            } else {
                console.error("Failed to store token in extension.");
            }
        });
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(node.Box, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(node.IconButton, {
                size: "large",
                "aria-label": "show 11 new notifications",
                color: "inherit",
                "aria-controls": "msgs-menu",
                "aria-haspopup": "true",
                sx: {
                    ...typeof anchorEl2 === "object" && {
                        color: "primary.main"
                    }
                },
                onClick: handleClick2,
                children: /*#__PURE__*/ jsx_runtime_.jsx(node.Avatar, {
                    src: "/images/profile/user-2.jpg",
                    alt: "image",
                    sx: {
                        width: 35,
                        height: 35
                    }
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(node.Menu, {
                id: "msgs-menu",
                anchorEl: anchorEl2,
                keepMounted: true,
                open: Boolean(anchorEl2),
                onClose: handleClose2,
                anchorOrigin: {
                    horizontal: "right",
                    vertical: "bottom"
                },
                transformOrigin: {
                    horizontal: "right",
                    vertical: "top"
                },
                sx: {
                    "& .MuiMenu-paper": {
                        width: "200px"
                    }
                },
                children: /*#__PURE__*/ jsx_runtime_.jsx(node.Box, {
                    mt: 1,
                    py: 1,
                    px: 2,
                    children: /*#__PURE__*/ jsx_runtime_.jsx(node.Button, {
                        variant: "outlined",
                        color: "primary",
                        fullWidth: true,
                        onClick: logout,
                        children: "Logout"
                    })
                })
            })
        ]
    });
};
/* harmony default export */ const header_Profile = (Profile);

// EXTERNAL MODULE: ./node_modules/@tabler/icons-react/dist/cjs/tabler-icons-react.js
var tabler_icons_react = __webpack_require__(39726);
;// CONCATENATED MODULE: ./src/app/(DashboardLayout)/layout/header/Header.tsx




// components


const Header = ({ toggleMobileSidebar  })=>{
    // const lgUp = useMediaQuery((theme) => theme.breakpoints.up('lg'));
    // const lgDown = useMediaQuery((theme) => theme.breakpoints.down('lg'));
    const AppBarStyled = (0,node.styled)(node.AppBar)(({ theme  })=>({
            // boxShadow: 'rgba(255, 255, 255, 0.9) 0rem 0rem 0.0625rem 0.0625rem inset, rgba(0, 0, 0, 0.05) 0rem 1.25rem 1.6875rem 0rem',
            boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
            background: theme.palette.background.paper,
            justifyContent: "center",
            backdropFilter: "blur(4px)",
            [theme.breakpoints.up("lg")]: {
                minHeight: "70px"
            }
        }));
    const ToolbarStyled = (0,node.styled)(node.Toolbar)(({ theme  })=>({
            width: "100%",
            color: theme.palette.text.secondary
        }));
    return /*#__PURE__*/ jsx_runtime_.jsx(AppBarStyled, {
        position: "sticky",
        color: "default",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(ToolbarStyled, {
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(node.IconButton, {
                    color: "inherit",
                    "aria-label": "menu",
                    onClick: toggleMobileSidebar,
                    sx: {
                        display: {
                            lg: "none",
                            xs: "inline"
                        }
                    },
                    children: /*#__PURE__*/ jsx_runtime_.jsx(tabler_icons_react/* IconMenu */.dcc, {
                        width: "20",
                        height: "20"
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(node.IconButton, {
                    size: "large",
                    "aria-label": "show 11 new notifications",
                    color: "inherit",
                    "aria-controls": "msgs-menu",
                    "aria-haspopup": "true",
                    children: /*#__PURE__*/ jsx_runtime_.jsx(node.Badge, {
                        variant: "dot",
                        color: "primary",
                        children: /*#__PURE__*/ jsx_runtime_.jsx(tabler_icons_react/* IconBellRinging */.d2n, {
                            size: "21",
                            stroke: "1.5"
                        })
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(node.Box, {
                    flexGrow: 1
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(node.Stack, {
                    spacing: 1,
                    direction: "row",
                    alignItems: "center",
                    children: /*#__PURE__*/ jsx_runtime_.jsx(header_Profile, {})
                })
            ]
        })
    });
};
Header.propTypes = {
    sx: (prop_types_default()).object
};
/* harmony default export */ const header_Header = (Header);

;// CONCATENATED MODULE: ./src/app/(DashboardLayout)/layout.tsx
/* __next_internal_client_entry_do_not_use__ default auto */ 



const MainWrapper = (0,node.styled)("div")(()=>({
        display: "flex",
        minHeight: "100vh",
        width: "100%"
    }));
const PageWrapper = (0,node.styled)("div")(()=>({
        display: "flex",
        flexGrow: 1,
        paddingBottom: "60px",
        flexDirection: "column",
        zIndex: 1,
        backgroundColor: "#FCFCFC"
    }));
function RootLayout({ children  }) {
    const [isSidebarOpen, setSidebarOpen] = (0,react_.useState)(true);
    const [isMobileSidebarOpen, setMobileSidebarOpen] = (0,react_.useState)(false);
    return /*#__PURE__*/ jsx_runtime_.jsx(MainWrapper, {
        className: "mainwrapper",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(PageWrapper, {
            className: "page-wrapper",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(header_Header, {
                    toggleMobileSidebar: ()=>setMobileSidebarOpen(true)
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(node.Container, {
                    sx: {
                        paddingTop: "20px",
                        maxWidth: "1200px"
                    },
                    children: /*#__PURE__*/ jsx_runtime_.jsx(node.Box, {
                        sx: {
                            minHeight: "calc(100vh - 170px)"
                        },
                        children: children
                    })
                })
            ]
        })
    });
}


/***/ }),

/***/ 89301:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$$typeof": () => (/* binding */ $$typeof),
/* harmony export */   "__esModule": () => (/* binding */ __esModule),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(35985);

const proxy = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`D:\projects\tushar\99robots\seopilot-temp\src\app\(DashboardLayout)\layout.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__default__);

/***/ }),

/***/ 21333:
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
        children: "Dash Loading"
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Loading);


/***/ })

};
;