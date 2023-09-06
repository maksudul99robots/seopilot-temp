"use strict";
exports.id = 62;
exports.ids = [62];
exports.modules = {

/***/ 35119:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var _interopRequireDefault = __webpack_require__(27574);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var React = _interopRequireWildcard(__webpack_require__(18038));
var _propTypes = _interopRequireDefault(__webpack_require__(69232));
var _utils = __webpack_require__(90480);
var _utils2 = __webpack_require__(86760);
var _base = __webpack_require__(29923);
var _styles = __webpack_require__(22166);
var _Button = _interopRequireDefault(__webpack_require__(98511));
var _CircularProgress = _interopRequireDefault(__webpack_require__(20286));
var _loadingButtonClasses = _interopRequireWildcard(__webpack_require__(1303));
var _jsxRuntime = __webpack_require__(56786);
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
const useUtilityClasses = ownerState => {
  const {
    loading,
    loadingPosition,
    classes
  } = ownerState;
  const slots = {
    root: ['root', loading && 'loading'],
    startIcon: [loading && `startIconLoading${(0, _utils2.capitalize)(loadingPosition)}`],
    endIcon: [loading && `endIconLoading${(0, _utils2.capitalize)(loadingPosition)}`],
    loadingIndicator: ['loadingIndicator', loading && `loadingIndicator${(0, _utils2.capitalize)(loadingPosition)}`]
  };
  const composedClasses = (0, _base.unstable_composeClasses)(slots, _loadingButtonClasses.getLoadingButtonUtilityClass, classes);
  return {
    ...classes,
    // forward the outlined, color, etc. classes to Button
    ...composedClasses
  };
};

// TODO use `import { rootShouldForwardProp } from '../styles/styled';` once move to core
const rootShouldForwardProp = prop => prop !== 'ownerState' && prop !== 'theme' && prop !== 'sx' && prop !== 'as' && prop !== 'classes';
const LoadingButtonRoot = (0, _styles.styled)(_Button.default, {
  shouldForwardProp: prop => rootShouldForwardProp(prop) || prop === 'classes',
  name: 'MuiLoadingButton',
  slot: 'Root',
  overridesResolver: (props, styles) => {
    return [styles.root, styles.startIconLoadingStart && {
      [`& .${_loadingButtonClasses.default.startIconLoadingStart}`]: styles.startIconLoadingStart
    }, styles.endIconLoadingEnd && {
      [`& .${_loadingButtonClasses.default.endIconLoadingEnd}`]: styles.endIconLoadingEnd
    }];
  }
})(({
  ownerState,
  theme
}) => ({
  [`& .${_loadingButtonClasses.default.startIconLoadingStart}, & .${_loadingButtonClasses.default.endIconLoadingEnd}`]: {
    transition: theme.transitions.create(['opacity'], {
      duration: theme.transitions.duration.short
    }),
    opacity: 0
  },
  ...(ownerState.loadingPosition === 'center' && {
    transition: theme.transitions.create(['background-color', 'box-shadow', 'border-color'], {
      duration: theme.transitions.duration.short
    }),
    [`&.${_loadingButtonClasses.default.loading}`]: {
      color: 'transparent'
    }
  }),
  ...(ownerState.loadingPosition === 'start' && ownerState.fullWidth && {
    [`& .${_loadingButtonClasses.default.startIconLoadingStart}, & .${_loadingButtonClasses.default.endIconLoadingEnd}`]: {
      transition: theme.transitions.create(['opacity'], {
        duration: theme.transitions.duration.short
      }),
      opacity: 0,
      marginRight: -8
    }
  }),
  ...(ownerState.loadingPosition === 'end' && ownerState.fullWidth && {
    [`& .${_loadingButtonClasses.default.startIconLoadingStart}, & .${_loadingButtonClasses.default.endIconLoadingEnd}`]: {
      transition: theme.transitions.create(['opacity'], {
        duration: theme.transitions.duration.short
      }),
      opacity: 0,
      marginLeft: -8
    }
  })
}));
const LoadingButtonLoadingIndicator = (0, _styles.styled)('div', {
  name: 'MuiLoadingButton',
  slot: 'LoadingIndicator',
  overridesResolver: (props, styles) => {
    const {
      ownerState
    } = props;
    return [styles.loadingIndicator, styles[`loadingIndicator${(0, _utils2.capitalize)(ownerState.loadingPosition)}`]];
  }
})(({
  theme,
  ownerState
}) => ({
  position: 'absolute',
  visibility: 'visible',
  display: 'flex',
  ...(ownerState.loadingPosition === 'start' && (ownerState.variant === 'outlined' || ownerState.variant === 'contained') && {
    left: ownerState.size === 'small' ? 10 : 14
  }),
  ...(ownerState.loadingPosition === 'start' && ownerState.variant === 'text' && {
    left: 6
  }),
  ...(ownerState.loadingPosition === 'center' && {
    left: '50%',
    transform: 'translate(-50%)',
    color: (theme.vars || theme).palette.action.disabled
  }),
  ...(ownerState.loadingPosition === 'end' && (ownerState.variant === 'outlined' || ownerState.variant === 'contained') && {
    right: ownerState.size === 'small' ? 10 : 14
  }),
  ...(ownerState.loadingPosition === 'end' && ownerState.variant === 'text' && {
    right: 6
  }),
  ...(ownerState.loadingPosition === 'start' && ownerState.fullWidth && {
    position: 'relative',
    left: -10
  }),
  ...(ownerState.loadingPosition === 'end' && ownerState.fullWidth && {
    position: 'relative',
    right: -10
  })
}));
const LoadingButton = /*#__PURE__*/React.forwardRef(function LoadingButton(inProps, ref) {
  const props = (0, _styles.useThemeProps)({
    props: inProps,
    name: 'MuiLoadingButton'
  });
  const {
    children,
    disabled = false,
    id: idProp,
    loading = false,
    loadingIndicator: loadingIndicatorProp,
    loadingPosition = 'center',
    variant = 'text',
    ...other
  } = props;
  const id = (0, _utils2.unstable_useId)(idProp);
  const loadingIndicator = loadingIndicatorProp != null ? loadingIndicatorProp : /*#__PURE__*/(0, _jsxRuntime.jsx)(_CircularProgress.default, {
    "aria-labelledby": id,
    color: "inherit",
    size: 16
  });
  const ownerState = {
    ...props,
    disabled,
    loading,
    loadingIndicator,
    loadingPosition,
    variant
  };
  const classes = useUtilityClasses(ownerState);
  const loadingButtonLoadingIndicator = loading ? /*#__PURE__*/(0, _jsxRuntime.jsx)(LoadingButtonLoadingIndicator, {
    className: classes.loadingIndicator,
    ownerState: ownerState,
    children: loadingIndicator
  }) : null;
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(LoadingButtonRoot, {
    disabled: disabled || loading,
    id: id,
    ref: ref,
    ...other,
    variant: variant,
    classes: classes,
    ownerState: ownerState,
    children: [ownerState.loadingPosition === 'end' ? children : loadingButtonLoadingIndicator, ownerState.loadingPosition === 'end' ? loadingButtonLoadingIndicator : children]
  });
});
 false ? 0 : void 0;
var _default = LoadingButton;
exports["default"] = _default;

/***/ }),

/***/ 78062:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var _interopRequireDefault = __webpack_require__(27574);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
var _exportNames = {
  loadingButtonClasses: true
};
Object.defineProperty(exports, "default", ({
  enumerable: true,
  get: function () {
    return _LoadingButton.default;
  }
}));
Object.defineProperty(exports, "loadingButtonClasses", ({
  enumerable: true,
  get: function () {
    return _loadingButtonClasses.default;
  }
}));
var _LoadingButton = _interopRequireDefault(__webpack_require__(35119));
var _loadingButtonClasses = _interopRequireWildcard(__webpack_require__(1303));
Object.keys(_loadingButtonClasses).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _loadingButtonClasses[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _loadingButtonClasses[key];
    }
  });
});
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/***/ }),

/***/ 1303:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var _interopRequireDefault = __webpack_require__(27574);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
exports.getLoadingButtonUtilityClass = getLoadingButtonUtilityClass;
var _generateUtilityClass = _interopRequireDefault(__webpack_require__(62736));
var _generateUtilityClasses = _interopRequireDefault(__webpack_require__(32434));
function getLoadingButtonUtilityClass(slot) {
  return (0, _generateUtilityClass.default)('MuiLoadingButton', slot);
}
const loadingButtonClasses = (0, _generateUtilityClasses.default)('MuiLoadingButton', ['root', 'loading', 'loadingIndicator', 'loadingIndicatorCenter', 'loadingIndicatorStart', 'loadingIndicatorEnd', 'endIconLoadingEnd', 'startIconLoadingStart']);
var _default = loadingButtonClasses;
exports["default"] = _default;

/***/ })

};
;