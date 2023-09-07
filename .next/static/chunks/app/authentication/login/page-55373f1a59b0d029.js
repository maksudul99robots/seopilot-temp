(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[949],{9931:function(e,t,n){Promise.resolve().then(n.bind(n,7659))},873:function(e,t,n){"use strict";var o=n(9268),i=n(2315);let s=e=>{let{title:t,description:n,children:s}=e;return(0,o.jsx)(i.B6,{children:(0,o.jsxs)("div",{children:[(0,o.jsxs)(i.ql,{children:[(0,o.jsx)("title",{children:t}),(0,o.jsx)("meta",{name:"description",content:n})]}),s]})})};t.Z=s},4737:function(e,t,n){"use strict";n.d(t,{br:function(){return s}});var o=n(7539);let i=(0,o.oM)({name:"alert",initialState:{title:"",icon:"success",showCancelButton:!0,text:""},reducers:{setAlert:(e,t)=>{e.title=t.payload.title,e.icon=t.payload.icon,e.showCancelButton=t.payload.showCancelButton,e.text=t.payload.text}}}),{setAlert:s}=i.actions;t.ZP=i.reducer},7659:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return S}});var o=n(9268),i=n(5846),s=n.n(i),r=n(1771),a=n(4066),c=n(7095),l=n(4240),d=n(8417),h=n(873),u=n(6006),g=n(2171),x=n(783),f=n(9454),p=n(6163),m=n(5448);let j=e=>{let{title:t,subtitle:n,subtext:i,submit:a,setPassword:c,setEmail:h,isEmailValid:u,disable:j,loading:v}=e;return(0,o.jsxs)(o.Fragment,{children:[t?(0,o.jsx)(l.Z,{fontWeight:"700",variant:"h2",mb:1,children:t}):null,i,(0,o.jsxs)(d.Z,{children:[(0,o.jsxs)(r.Z,{children:[(0,o.jsx)(l.Z,{variant:"subtitle1",fontWeight:600,component:"label",htmlFor:"email",mb:"5px",children:"Email"}),(0,o.jsx)(g.Z,{variant:"outlined",fullWidth:!0,onChange:e=>{h(e.target.value)},error:!u})]}),(0,o.jsxs)(r.Z,{mt:"25px",children:[(0,o.jsxs)(r.Z,{display:"flex",justifyContent:"space-between",children:[(0,o.jsx)(l.Z,{variant:"subtitle1",fontWeight:600,component:"label",htmlFor:"password",mb:"5px",children:"Password"}),(0,o.jsx)(l.Z,{component:s(),href:"/authentication/forgot-password",fontWeight:"500",sx:{textDecoration:"none",color:"primary.main"},children:"Forgot Password ?"})]}),(0,o.jsx)(g.Z,{type:"password",variant:"outlined",fullWidth:!0,onChange:e=>{c(e.target.value)}})]}),(0,o.jsx)(d.Z,{justifyContent:"space-between",direction:"row",alignItems:"center",my:2,children:(0,o.jsx)(x.Z,{children:(0,o.jsx)(f.Z,{control:(0,o.jsx)(p.Z,{defaultChecked:!0}),label:"Remeber this Device"})})})]}),(0,o.jsx)(r.Z,{children:(0,o.jsx)(m.Z,{color:"primary",variant:"contained",size:"large",fullWidth:!0,type:"submit",style:{color:j?"#595959":"white"},onClick:()=>a(),disabled:j,loading:v,loadingPosition:"end",children:"Sign In"})})]})};var v=n(4737),b=n(6628),Z=n(1042),y=n(171);let w=e=>{};var k=n(6008);let C=()=>{let[e,t]=(0,u.useState)(""),[n,i]=(0,u.useState)(""),[g,x]=(0,u.useState)(!1),[f,p]=(0,u.useState)(!0),[m,C]=(0,u.useState)(!1),S=(0,b.I0)(),E=(0,k.useRouter)(),P=e=>{console.log("running sendTokenToExtension()"),chrome.runtime.sendMessage("phddnlfmlkkjomdccfjjfkhnbmmcfocb",{action:"storeToken",token:e},e=>{e&&e.success?console.log("Token stored in extension's local storage.",e):console.error("Failed to store token in extension.")})};(0,u.useEffect)(()=>{e.length>1?x((0,Z.J)(e)):x(!0)},[e]),(0,u.useEffect)(()=>{e.length>1&&g&&n.length>6?p(!1):p(!0)},[e,n]);let W=()=>{e&&e.length>1&&(n&&n.length<7?S((0,v.br)({title:"Error",icon:"error",text:"Password must be at least 6 characters long."})):(C(!0),y.o.login({email:e,password:n}).then(e=>{200==e.status&&(C(!1),P(e.data.accessToken),localStorage.setItem("seo-pilot-token",e.data.accessToken),w(e.data.accessToken),E.push("/"))}).catch(e=>{C(!1),S((0,v.br)({title:"Error",icon:"error",text:"Unable to login"}))})))};return(0,o.jsx)(h.Z,{title:"Login",description:"this is Login page",children:(0,o.jsxs)(r.Z,{sx:{position:"relative","&:before":{content:'""',background:"#FCFCFC",backgroundSize:"400% 400%",animation:"gradient 15s ease infinite",position:"absolute",height:"100%",width:"100%",opacity:"0.3"}},children:[(0,o.jsx)(r.Z,{display:"flex",alignItems:"center",justifyContent:"center",sx:{paddingTop:"20vh"}}),(0,o.jsx)(a.ZP,{container:!0,spacing:0,justifyContent:"center",sx:{height:"50vh"},children:(0,o.jsx)(a.ZP,{item:!0,xs:12,sm:12,lg:4,xl:3,display:"flex",justifyContent:"center",alignItems:"center",children:(0,o.jsx)(c.Z,{elevation:9,sx:{p:4,zIndex:1,width:"100%",maxWidth:"500px"},children:(0,o.jsx)(j,{setEmail:t,setPassword:i,submit:W,isEmailValid:g,disable:f,loading:m,subtext:(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(l.Z,{variant:"h3",textAlign:"center",color:"textSecondary",mb:2,sx:{color:"#5A5A5A",fontWeight:"bold"},children:"Sign In to SEO-Pilot"}),(0,o.jsxs)(l.Z,{variant:"h6",textAlign:"center",color:"textSecondary",mb:4,sx:{color:"#B5B5C3",fontWeight:"bold"},children:["New Here?\xa0",(0,o.jsx)(s(),{href:"/authentication/register",style:{textDecoration:"none"},children:(0,o.jsx)("span",{style:{color:"#009EF7",fontWeight:"bold"},children:"Create an Account to SEO-Pilot"})})]})]}),subtitle:(0,o.jsxs)(d.Z,{direction:"row",spacing:1,justifyContent:"center",mt:3,children:[(0,o.jsx)(l.Z,{color:"textSecondary",variant:"h6",fontWeight:"500",children:"New to Modernize?"}),(0,o.jsx)(l.Z,{component:s(),href:"/authentication/register",fontWeight:"500",sx:{textDecoration:"none",color:"primary.main"},children:"Create an account"})]})})})})})]})})};var S=C},171:function(e,t,n){"use strict";n.d(t,{o:function(){return s}});var o=n(4214);localStorage.getItem("token");let i="https://dev.seopilot.io/backend_api",s={async register(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"/create-user",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:void 0;return await o.Z.post("".concat(i).concat(t),e,n)},async login(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"/login",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:void 0;return await o.Z.post("".concat(i).concat(t),e,n)},async sendForgotPasswordEmail(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"/forgot-password",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:void 0;return await o.Z.post("".concat(i).concat(t),e,n)},async resetPassword(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"/reset-password",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:void 0;return await o.Z.post("".concat(i).concat(t),e,n)},async checkVerification(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"/check-verification",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:void 0;return await o.Z.post("".concat(i).concat(t),e,n)}}},1042:function(e,t,n){"use strict";function o(e){return!!e.match(/[a-zA-Z0-9_\-.+]+(?:@|\[at])(?!(?:sentry-|sentry\.|sentry_))[a-zA-Z0-9-]+\.(?!(?:jpg|png|gif|jpeg|svg|webp|bmp|tiff|ico|heif|avif)$)(?!.*\.(?:jpg|png|gif|jpeg|svg|webp|bmp|tiff|ico|heif|avif))[\w.]+/gi)}n.d(t,{J:function(){return o}})}},function(e){e.O(0,[295,756,311,315,375,628,675,843,518,214,846,752,667,139,744],function(){return e(e.s=9931)}),_N_E=e.O()}]);