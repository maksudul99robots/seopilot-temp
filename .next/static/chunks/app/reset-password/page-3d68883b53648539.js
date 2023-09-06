(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[363],{5448:function(t,e,n){"use strict";n.d(e,{Z:function(){return F}});var r=n(6006),o=n(6210),i=n(2223),a=n(7562),s=n(5457),l=n(8006),c=n(7931),d=n(9791),u=n(2120),g=n(8539),h=n(3809);function p(t){return(0,h.Z)("MuiCircularProgress",t)}(0,g.Z)("MuiCircularProgress",["root","determinate","indeterminate","colorPrimary","colorSecondary","svg","circle","circleDeterminate","circleIndeterminate","circleDisableShrink"]);var f=n(9268);let v=t=>t,x,m,w,y,b=(0,u.F4)(x||(x=v`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`)),Z=(0,u.F4)(m||(m=v`
  0% {
    stroke-dasharray: 1px, 200px;
    stroke-dashoffset: 0;
  }

  50% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -15px;
  }

  100% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -125px;
  }
`)),I=t=>{let{classes:e,variant:n,color:r,disableShrink:i}=t,s={root:["root",n,`color${(0,o.Z)(r)}`],svg:["svg"],circle:["circle",`circle${(0,o.Z)(n)}`,i&&"circleDisableShrink"]};return(0,a.Z)(s,p,e)},P=(0,s.ZP)("span",{name:"MuiCircularProgress",slot:"Root",overridesResolver:(t,e)=>{let{ownerState:n}=t;return[e.root,e[n.variant],e[`color${(0,o.Z)(n.color)}`]]}})(({ownerState:t,theme:e})=>({display:"inline-block",..."determinate"===t.variant&&{transition:e.transitions.create("transform")},..."inherit"!==t.color&&{color:(e.vars||e).palette[t.color].main}}),({ownerState:t})=>"indeterminate"===t.variant&&(0,u.iv)(w||(w=v`
      animation: ${0} 1.4s linear infinite;
    `),b)),k=(0,s.ZP)("svg",{name:"MuiCircularProgress",slot:"Svg",overridesResolver:(t,e)=>e.svg})({display:"block"}),j=(0,s.ZP)("circle",{name:"MuiCircularProgress",slot:"Circle",overridesResolver:(t,e)=>{let{ownerState:n}=t;return[e.circle,e[`circle${(0,o.Z)(n.variant)}`],n.disableShrink&&e.circleDisableShrink]}})(({ownerState:t,theme:e})=>({stroke:"currentColor",..."determinate"===t.variant&&{transition:e.transitions.create("stroke-dashoffset")},..."indeterminate"===t.variant&&{strokeDasharray:"80px, 200px",strokeDashoffset:0}}),({ownerState:t})=>"indeterminate"===t.variant&&!t.disableShrink&&(0,u.iv)(y||(y=v`
      animation: ${0} 1.4s ease-in-out infinite;
    `),Z)),S=r.forwardRef(function(t,e){let n=(0,l.Z)({props:t,name:"MuiCircularProgress"}),{className:r,color:o="primary",disableShrink:i=!1,size:a=40,style:s,thickness:c=3.6,value:u=0,variant:g="indeterminate",...h}=n,p={...n,color:o,disableShrink:i,size:a,thickness:c,value:u,variant:g},v=I(p),x={},m={},w={};if("determinate"===g){let t=2*Math.PI*((44-c)/2);x.strokeDasharray=t.toFixed(3),w["aria-valuenow"]=Math.round(u),x.strokeDashoffset=`${((100-u)/100*t).toFixed(3)}px`,m.transform="rotate(-90deg)"}return(0,f.jsx)(P,{className:(0,d.Z)(v.root,r),style:{width:a,height:a,...m,...s},ownerState:p,ref:e,role:"progressbar",...w,...h,children:(0,f.jsx)(k,{className:v.svg,ownerState:p,viewBox:"22 22 44 44",children:(0,f.jsx)(j,{className:v.circle,style:x,ownerState:p,cx:44,cy:44,r:(44-c)/2,fill:"none",strokeWidth:c})})})});function C(t){return(0,h.Z)("MuiLoadingButton",t)}let L=(0,g.Z)("MuiLoadingButton",["root","loading","loadingIndicator","loadingIndicatorCenter","loadingIndicatorStart","loadingIndicatorEnd","endIconLoadingEnd","startIconLoadingStart"]),E=t=>{let{loading:e,loadingPosition:n,classes:r}=t,i={root:["root",e&&"loading"],startIcon:[e&&`startIconLoading${(0,o.Z)(n)}`],endIcon:[e&&`endIconLoading${(0,o.Z)(n)}`],loadingIndicator:["loadingIndicator",e&&`loadingIndicator${(0,o.Z)(n)}`]},s=(0,a.Z)(i,C,r);return{...r,...s}},$=t=>"ownerState"!==t&&"theme"!==t&&"sx"!==t&&"as"!==t&&"classes"!==t,M=(0,s.ZP)(c.Z,{shouldForwardProp:t=>$(t)||"classes"===t,name:"MuiLoadingButton",slot:"Root",overridesResolver:(t,e)=>[e.root,e.startIconLoadingStart&&{[`& .${L.startIconLoadingStart}`]:e.startIconLoadingStart},e.endIconLoadingEnd&&{[`& .${L.endIconLoadingEnd}`]:e.endIconLoadingEnd}]})(({ownerState:t,theme:e})=>({[`& .${L.startIconLoadingStart}, & .${L.endIconLoadingEnd}`]:{transition:e.transitions.create(["opacity"],{duration:e.transitions.duration.short}),opacity:0},..."center"===t.loadingPosition&&{transition:e.transitions.create(["background-color","box-shadow","border-color"],{duration:e.transitions.duration.short}),[`&.${L.loading}`]:{color:"transparent"}},..."start"===t.loadingPosition&&t.fullWidth&&{[`& .${L.startIconLoadingStart}, & .${L.endIconLoadingEnd}`]:{transition:e.transitions.create(["opacity"],{duration:e.transitions.duration.short}),opacity:0,marginRight:-8}},..."end"===t.loadingPosition&&t.fullWidth&&{[`& .${L.startIconLoadingStart}, & .${L.endIconLoadingEnd}`]:{transition:e.transitions.create(["opacity"],{duration:e.transitions.duration.short}),opacity:0,marginLeft:-8}}})),R=(0,s.ZP)("div",{name:"MuiLoadingButton",slot:"LoadingIndicator",overridesResolver:(t,e)=>{let{ownerState:n}=t;return[e.loadingIndicator,e[`loadingIndicator${(0,o.Z)(n.loadingPosition)}`]]}})(({theme:t,ownerState:e})=>({position:"absolute",visibility:"visible",display:"flex",..."start"===e.loadingPosition&&("outlined"===e.variant||"contained"===e.variant)&&{left:"small"===e.size?10:14},..."start"===e.loadingPosition&&"text"===e.variant&&{left:6},..."center"===e.loadingPosition&&{left:"50%",transform:"translate(-50%)",color:(t.vars||t).palette.action.disabled},..."end"===e.loadingPosition&&("outlined"===e.variant||"contained"===e.variant)&&{right:"small"===e.size?10:14},..."end"===e.loadingPosition&&"text"===e.variant&&{right:6},..."start"===e.loadingPosition&&e.fullWidth&&{position:"relative",left:-10},..."end"===e.loadingPosition&&e.fullWidth&&{position:"relative",right:-10}})),B=r.forwardRef(function(t,e){let n=(0,l.Z)({props:t,name:"MuiLoadingButton"}),{children:r,disabled:o=!1,id:a,loading:s=!1,loadingIndicator:c,loadingPosition:d="center",variant:u="text",...g}=n,h=(0,i.Z)(a),p=null!=c?c:(0,f.jsx)(S,{"aria-labelledby":h,color:"inherit",size:16}),v={...n,disabled:o,loading:s,loadingIndicator:p,loadingPosition:d,variant:u},x=E(v),m=s?(0,f.jsx)(R,{className:x.loadingIndicator,ownerState:v,children:p}):null;return(0,f.jsxs)(M,{disabled:o||s,id:h,ref:e,...g,variant:u,classes:x,ownerState:v,children:["end"===v.loadingPosition?r:m,"end"===v.loadingPosition?m:r]})});var F=B},9855:function(t,e,n){Promise.resolve().then(n.bind(n,5446))},873:function(t,e,n){"use strict";var r=n(9268),o=n(2315);let i=t=>{let{title:e,description:n,children:i}=t;return(0,r.jsx)(o.B6,{children:(0,r.jsxs)("div",{children:[(0,r.jsxs)(o.ql,{children:[(0,r.jsx)("title",{children:e}),(0,r.jsx)("meta",{name:"description",content:n})]}),i]})})};e.Z=i},4737:function(t,e,n){"use strict";n.d(e,{br:function(){return i}});var r=n(7539);let o=(0,r.oM)({name:"alert",initialState:{title:"",icon:"success",showCancelButton:!0,text:""},reducers:{setAlert:(t,e)=>{t.title=e.payload.title,t.icon=e.payload.icon,t.showCancelButton=e.payload.showCancelButton,t.text=e.payload.text}}}),{setAlert:i}=o.actions;e.ZP=o.reducer},5446:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return k}});var r=n(9268),o=n(6006),i=n(1771),a=n(4066),s=n(7095),l=n(4240),c=n(8417),d=n(2171),u=n(5448),g=n(873),h=n(6628),p=n(6008),f=n(171),v=n(4737);function x(t){this.message=t}x.prototype=Error(),x.prototype.name="InvalidCharacterError";var m="undefined"!=typeof window&&window.atob&&window.atob.bind(window)||function(t){var e=String(t).replace(/=+$/,"");if(e.length%4==1)throw new x("'atob' failed: The string to be decoded is not correctly encoded.");for(var n,r,o=0,i=0,a="";r=e.charAt(i++);~r&&(n=o%4?64*n+r:r,o++%4)&&(a+=String.fromCharCode(255&n>>(-2*o&6))))r="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(r);return a};function w(t){this.message=t}w.prototype=Error(),w.prototype.name="InvalidTokenError";var y=function(t,e){if("string"!=typeof t)throw new w("Invalid token specified");var n=!0===(e=e||{}).header?0:1;try{return JSON.parse(function(t){var e,n=t.replace(/-/g,"+").replace(/_/g,"/");switch(n.length%4){case 0:break;case 2:n+="==";break;case 3:n+="=";break;default:throw"Illegal base64url string!"}try{return e=n,decodeURIComponent(m(e).replace(/(.)/g,function(t,e){var n=e.charCodeAt(0).toString(16).toUpperCase();return n.length<2&&(n="0"+n),"%"+n}))}catch(t){return m(n)}}(t.split(".")[n]))}catch(t){throw new w("Invalid token specified: "+t.message)}},b=n(4745),Z=n.n(b),I=n(1042);let P=t=>{let e=(0,p.useSearchParams)(),[n,x]=(0,o.useState)(""),[m,w]=(0,o.useState)(e.get("token")),[b,P]=(0,o.useState)(""),[k,j]=(0,o.useState)(""),[S,C]=(0,o.useState)(!1),[L,E]=(0,o.useState)(!1),$=(0,h.I0)(),M=(0,p.useRouter)();(0,o.useEffect)(()=>{if(m)try{let t=y(m);x(t.email)}catch(t){Z().fire({title:"Error!",text:"Invalid Token",icon:"error",confirmButtonText:"Close"}).then(t=>{M.push("/")})}},[m]);let R=()=>{n&&n.length>1&&(0,I.J)(n)&&(b.length>6?b==k?(C(!0),E(!0),f.o.resetPassword({password:b,email:n}).then(t=>{202==t.status?Z().fire({title:"success!",text:"Password changed successfully",icon:"success",confirmButtonText:"Ok"}).then(t=>{M.push("/authentication/login")}):$((0,v.br)({title:"Error",icon:"error",text:"Error occured"})),C(!1),E(!1)}).catch(t=>{$((0,v.br)({title:"Error",icon:"error",text:"Error occured"})),C(!1),E(!1)})):$((0,v.br)({title:"Error",icon:"error",text:"Password should match."})):$((0,v.br)({title:"Error",icon:"error",text:"Password should be longer than 6."})))};return(0,r.jsx)(g.Z,{title:"Login",description:"this is Login page",children:(0,r.jsxs)(i.Z,{sx:{position:"relative","&:before":{content:'""',background:"#FCFCFC",backgroundSize:"400% 400%",animation:"gradient 15s ease infinite",position:"absolute",height:"100%",width:"100%",opacity:"0.3"}},children:[(0,r.jsx)(i.Z,{display:"flex",alignItems:"center",justifyContent:"center",sx:{paddingTop:"20vh"}}),(0,r.jsx)(a.ZP,{container:!0,spacing:0,justifyContent:"center",sx:{height:"50vh"},children:(0,r.jsx)(a.ZP,{item:!0,xs:12,sm:12,lg:4,xl:3,display:"flex",justifyContent:"center",alignItems:"center",children:(0,r.jsx)(s.Z,{elevation:9,sx:{p:4,zIndex:1,width:"100%",maxWidth:"500px"},children:(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(l.Z,{variant:"h3",textAlign:"center",color:"textSecondary",mb:2,sx:{color:"#5A5A5A",fontWeight:"bold"},children:"Reset Password"}),(0,r.jsxs)(c.Z,{children:[(0,r.jsxs)(i.Z,{mt:"25px",children:[(0,r.jsx)(i.Z,{display:"flex",justifyContent:"space-between",children:(0,r.jsx)(l.Z,{variant:"subtitle1",fontWeight:600,component:"label",htmlFor:"password",mb:"5px",children:"Password"})}),(0,r.jsx)(d.Z,{type:"password",variant:"outlined",fullWidth:!0,onChange:t=>{P(t.target.value)}})]}),(0,r.jsxs)(i.Z,{mt:"25px",children:[(0,r.jsx)(i.Z,{display:"flex",justifyContent:"space-between",children:(0,r.jsx)(l.Z,{variant:"subtitle1",fontWeight:600,component:"label",htmlFor:"password",mb:"5px",children:"Confirm Password"})}),(0,r.jsx)(d.Z,{type:"password",variant:"outlined",fullWidth:!0,onChange:t=>{j(t.target.value)}})]})]}),(0,r.jsx)(i.Z,{children:(0,r.jsx)(u.Z,{color:"primary",variant:"contained",size:"large",fullWidth:!0,type:"submit",style:{color:S?"#595959":"white",marginTop:"30px"},onClick:()=>R(),disabled:S,loading:L,loadingPosition:"end",children:"Save Password"})})]})})})})]})})};var k=P},171:function(t,e,n){"use strict";n.d(e,{o:function(){return i}});var r=n(4214);localStorage.getItem("token");let o="http://localhost:8500/api",i={async register(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"/create-user",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:void 0;return await r.Z.post("".concat(o).concat(e),t,n)},async login(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"/login",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:void 0;return await r.Z.post("".concat(o).concat(e),t,n)},async sendForgotPasswordEmail(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"/forgot-password",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:void 0;return await r.Z.post("".concat(o).concat(e),t,n)},async resetPassword(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"/reset-password",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:void 0;return await r.Z.post("".concat(o).concat(e),t,n)},async checkVerification(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"/check-verification",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:void 0;return await r.Z.post("".concat(o).concat(e),t,n)}}},1042:function(t,e,n){"use strict";function r(t){return!!t.match(/[a-zA-Z0-9_\-.+]+(?:@|\[at])(?!(?:sentry-|sentry\.|sentry_))[a-zA-Z0-9-]+\.(?!(?:jpg|png|gif|jpeg|svg|webp|bmp|tiff|ico|heif|avif)$)(?!.*\.(?:jpg|png|gif|jpeg|svg|webp|bmp|tiff|ico|heif|avif))[\w.]+/gi)}n.d(e,{J:function(){return r}})}},function(t){t.O(0,[295,756,311,315,375,628,675,843,518,214,745,667,139,744],function(){return t(t.s=9855)}),_N_E=t.O()}]);