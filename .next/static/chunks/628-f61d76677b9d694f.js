"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[628],{6628:function(e,t,n){n.d(t,{zt:function(){return g},I0:function(){return C},v9:function(){return m}});var r=n(3276),u=n(7737),o=n(8431);let c=function(e){e()},i=()=>c;var l=n(6006);let f=Symbol.for(`react-redux-context-${l.version}`),a=globalThis,s=new Proxy({},new Proxy({},{get(e,t){let n;let r=((n=a[f])||(n=(0,l.createContext)(null),a[f]=n),n);return(e,...n)=>Reflect[t](r,...n)}}));function S(e=s){return function(){let t=(0,l.useContext)(e);return t}}let b=S(),d=()=>{throw Error("uSES not initialized!")},v=d,y=(e,t)=>e===t,m=function(e=s){let t=e===s?b:S(e);return function(e,n={}){let{equalityFn:r=y,stabilityCheck:u,noopCheck:o}="function"==typeof n?{equalityFn:n}:n,{store:c,subscription:i,getServerState:f,stabilityCheck:a,noopCheck:s}=t();(0,l.useRef)(!0);let S=(0,l.useCallback)({[e.name](t){let n=e(t);return n}}[e.name],[e,a,u]),b=v(i.addNestedSub,c.getState,f||c.getState,S,r);return(0,l.useDebugValue)(b),b}}();n(6979),n(4360);let p={notify(){},get:()=>[]},x=!!("undefined"!=typeof window&&void 0!==window.document&&void 0!==window.document.createElement),h=x?l.useLayoutEffect:l.useEffect;var g=function({store:e,context:t,children:n,serverState:r,stabilityCheck:u="once",noopCheck:o="once"}){let c=(0,l.useMemo)(()=>{let t=function(e,t){let n;let r=p;function u(){c.onStateChange&&c.onStateChange()}function o(){n||(n=t?t.addNestedSub(u):e.subscribe(u),r=function(){let e=i(),t=null,n=null;return{clear(){t=null,n=null},notify(){e(()=>{let e=t;for(;e;)e.callback(),e=e.next})},get(){let e=[],n=t;for(;n;)e.push(n),n=n.next;return e},subscribe(e){let r=!0,u=n={callback:e,next:null,prev:n};return u.prev?u.prev.next=u:t=u,function(){r&&null!==t&&(r=!1,u.next?u.next.prev=u.prev:n=u.prev,u.prev?u.prev.next=u.next:t=u.next)}}}}())}let c={addNestedSub:function(e){return o(),r.subscribe(e)},notifyNestedSubs:function(){r.notify()},handleChangeWrapper:u,isSubscribed:function(){return!!n},trySubscribe:o,tryUnsubscribe:function(){n&&(n(),n=void 0,r.clear(),r=p)},getListeners:()=>r};return c}(e);return{store:e,subscription:t,getServerState:r?()=>r:void 0,stabilityCheck:u,noopCheck:o}},[e,r,u,o]),f=(0,l.useMemo)(()=>e.getState(),[e]);return h(()=>{let{subscription:t}=c;return t.onStateChange=t.notifyNestedSubs,t.trySubscribe(),f!==e.getState()&&t.notifyNestedSubs(),()=>{t.tryUnsubscribe(),t.onStateChange=void 0}},[c,f]),l.createElement((t||s).Provider,{value:c},n)};function E(e=s){let t=e===s?b:S(e);return function(){let{store:e}=t();return e}}let w=E(),C=function(e=s){let t=e===s?w:E(e);return function(){let e=t();return e.dispatch}}();v=u.useSyncExternalStoreWithSelector,r.useSyncExternalStore,c=o.unstable_batchedUpdates},4123:function(e,t){Symbol.for("react.element"),Symbol.for("react.portal"),Symbol.for("react.fragment"),Symbol.for("react.strict_mode"),Symbol.for("react.profiler"),Symbol.for("react.provider"),Symbol.for("react.context"),Symbol.for("react.server_context"),Symbol.for("react.forward_ref"),Symbol.for("react.suspense"),Symbol.for("react.suspense_list"),Symbol.for("react.memo"),Symbol.for("react.lazy"),Symbol.for("react.offscreen"),Symbol.for("react.module.reference")},4360:function(e,t,n){n(4123)},8727:function(e,t,n){/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var r=n(6006),u="function"==typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e==1/t)||e!=e&&t!=t},o=r.useState,c=r.useEffect,i=r.useLayoutEffect,l=r.useDebugValue;function f(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!u(e,n)}catch(e){return!0}}var a="undefined"==typeof window||void 0===window.document||void 0===window.document.createElement?function(e,t){return t()}:function(e,t){var n=t(),r=o({inst:{value:n,getSnapshot:t}}),u=r[0].inst,a=r[1];return i(function(){u.value=n,u.getSnapshot=t,f(u)&&a({inst:u})},[e,n,t]),c(function(){return f(u)&&a({inst:u}),e(function(){f(u)&&a({inst:u})})},[e]),l(n),n};t.useSyncExternalStore=void 0!==r.useSyncExternalStore?r.useSyncExternalStore:a},4464:function(e,t,n){/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var r=n(6006),u=n(3276),o="function"==typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e==1/t)||e!=e&&t!=t},c=u.useSyncExternalStore,i=r.useRef,l=r.useEffect,f=r.useMemo,a=r.useDebugValue;t.useSyncExternalStoreWithSelector=function(e,t,n,r,u){var s=i(null);if(null===s.current){var S={hasValue:!1,value:null};s.current=S}else S=s.current;s=f(function(){function e(e){if(!l){if(l=!0,c=e,e=r(e),void 0!==u&&S.hasValue){var t=S.value;if(u(t,e))return i=t}return i=e}if(t=i,o(c,e))return t;var n=r(e);return void 0!==u&&u(t,n)?t:(c=e,i=n)}var c,i,l=!1,f=void 0===n?null:n;return[function(){return e(t())},null===f?void 0:function(){return e(f())}]},[t,n,r,u]);var b=c(e,s[0],s[1]);return l(function(){S.hasValue=!0,S.value=b},[b]),a(b),b}},3276:function(e,t,n){e.exports=n(8727)},7737:function(e,t,n){e.exports=n(4464)}}]);