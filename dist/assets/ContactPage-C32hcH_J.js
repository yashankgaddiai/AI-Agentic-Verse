import{j as a}from"./index-DS-rQZGW.js";import{b as l,e as X}from"./react-WMxr6jr8.js";import{c as F,a as B,N as Z,B as U,F as ee}from"./Footer-BEWagT2D.js";import{g as ne,i as te,a as ae,c as oe,s as le}from"./firebase-DKT7rWjK.js";import{S as re}from"./SEO-C1AT2iMR.js";import"./motion-CVe-SCYx.js";const ie=[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335",key:"yps3ct"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]],se=F("circle-check-big",ie);const ce=[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",key:"1ffxy3"}],["path",{d:"m21.854 2.147-10.94 10.939",key:"12cjpa"}]],de=F("send",ce);var v=function(e,n){return v=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(o,t){o.__proto__=t}||function(o,t){for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(o[r]=t[r])},v(e,n)};function h(e,n){if(typeof n!="function"&&n!==null)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");v(e,n);function o(){this.constructor=e}e.prototype=n===null?Object.create(n):(o.prototype=n.prototype,new o)}var u=function(){return u=Object.assign||function(n){for(var o,t=1,r=arguments.length;t<r;t++){o=arguments[t];for(var d in o)Object.prototype.hasOwnProperty.call(o,d)&&(n[d]=o[d])}return n},u.apply(this,arguments)};function me(e,n){n===void 0&&(n={});var o=n.insertAt;if(!(typeof document>"u")){var t=document.head||document.getElementsByTagName("head")[0],r=document.createElement("style");r.type="text/css",o==="top"&&t.firstChild?t.insertBefore(r,t.firstChild):t.appendChild(r),r.styleSheet?r.styleSheet.cssText=e:r.appendChild(document.createTextNode(e))}}var pe=`/*
  code is extracted from Calendly's embed stylesheet: https://assets.calendly.com/assets/external/widget.css
*/

.calendly-inline-widget,
.calendly-inline-widget *,
.calendly-badge-widget,
.calendly-badge-widget *,
.calendly-overlay,
.calendly-overlay * {
  font-size: 16px;
  line-height: 1.2em;
}

.calendly-inline-widget {
  min-width: 320px;
  height: 630px;
}

.calendly-inline-widget iframe,
.calendly-badge-widget iframe,
.calendly-overlay iframe {
  display: inline;
  width: 100%;
  height: 100%;
}

.calendly-popup-content {
  position: relative;
}

.calendly-popup-content.calendly-mobile {
  -webkit-overflow-scrolling: touch;
  overflow-y: auto;
}

.calendly-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;
  z-index: 9999;
  background-color: #a5a5a5;
  background-color: rgba(31, 31, 31, 0.4);
}

.calendly-overlay .calendly-close-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}

.calendly-overlay .calendly-popup {
  box-sizing: border-box;
  position: absolute;
  top: 50%;
  left: 50%;
  -webkit-transform: translateY(-50%) translateX(-50%);
  transform: translateY(-50%) translateX(-50%);
  width: 80%;
  min-width: 900px;
  max-width: 1000px;
  height: 90%;
  max-height: 680px;
}

@media (max-width: 975px) {
  .calendly-overlay .calendly-popup {
    position: fixed;
    top: 50px;
    left: 0;
    right: 0;
    bottom: 0;
    -webkit-transform: none;
    transform: none;
    width: 100%;
    height: auto;
    min-width: 0;
    max-height: none;
  }
}

.calendly-overlay .calendly-popup .calendly-popup-content {
  height: 100%;
}

.calendly-overlay .calendly-popup-close {
  position: absolute;
  top: 25px;
  right: 25px;
  color: #fff;
  width: 19px;
  height: 19px;
  cursor: pointer;
  background: url(https://assets.calendly.com/assets/external/close-icon.svg)
    no-repeat;
  background-size: contain;
}

@media (max-width: 975px) {
  .calendly-overlay .calendly-popup-close {
    top: 15px;
    right: 15px;
  }
}

.calendly-badge-widget {
  position: fixed;
  right: 20px;
  bottom: 15px;
  z-index: 9998;
}

.calendly-badge-widget .calendly-badge-content {
  display: table-cell;
  width: auto;
  height: 45px;
  padding: 0 30px;
  border-radius: 25px;
  box-shadow: rgba(0, 0, 0, 0.25) 0 2px 5px;
  font-family: sans-serif;
  text-align: center;
  vertical-align: middle;
  font-weight: bold;
  font-size: 14px;
  color: #fff;
  cursor: pointer;
}

.calendly-badge-widget .calendly-badge-content.calendly-white {
  color: #666a73;
}

.calendly-badge-widget .calendly-badge-content span {
  display: block;
  font-size: 12px;
}

.calendly-spinner {
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  -webkit-transform: translateY(-50%);
  transform: translateY(-50%);
  text-align: center;
  z-index: -1;
}

.calendly-spinner > div {
  display: inline-block;
  width: 18px;
  height: 18px;
  background-color: #e1e1e1;
  border-radius: 50%;
  vertical-align: middle;
  -webkit-animation: calendly-bouncedelay 1.4s infinite ease-in-out;
  animation: calendly-bouncedelay 1.4s infinite ease-in-out;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
}

.calendly-spinner .calendly-bounce1 {
  -webkit-animation-delay: -0.32s;
  animation-delay: -0.32s;
}

.calendly-spinner .calendly-bounce2 {
  -webkit-animation-delay: -0.16s;
  animation-delay: -0.16s;
}

@-webkit-keyframes calendly-bouncedelay {
  0%,
  80%,
  100% {
    -webkit-transform: scale(0);
    transform: scale(0);
  }

  40% {
    -webkit-transform: scale(1);
    transform: scale(1);
  }
}

@keyframes calendly-bouncedelay {
  0%,
  80%,
  100% {
    -webkit-transform: scale(0);
    transform: scale(0);
  }

  40% {
    -webkit-transform: scale(1);
    transform: scale(1);
  }
}
`;me(pe);function b(e){return e.charAt(0)==="#"?e.slice(1):e}function ue(e){return e!=null&&e.primaryColor&&(e.primaryColor=b(e.primaryColor)),e!=null&&e.textColor&&(e.textColor=b(e.textColor)),e!=null&&e.backgroundColor&&(e.backgroundColor=b(e.backgroundColor)),e}var M;(function(e){e.PROFILE_PAGE_VIEWED="calendly.profile_page_viewed",e.EVENT_TYPE_VIEWED="calendly.event_type_viewed",e.DATE_AND_TIME_SELECTED="calendly.date_and_time_selected",e.EVENT_SCHEDULED="calendly.event_scheduled",e.PAGE_HEIGHT="calendly.page_height"})(M||(M={}));var W=function(e){var n=e.url,o=e.prefill,t=o===void 0?{}:o,r=e.pageSettings,d=r===void 0?{}:r,s=e.utm,i=s===void 0?{}:s,m=e.embedType,c=ue(d),p=c.backgroundColor,f=c.hideEventTypeDetails,w=c.hideLandingPageDetails,C=c.primaryColor,k=c.textColor,V=c.hideGdprBanner,N=t.customAnswers,x=t.date,j=t.email,E=t.firstName,_=t.guests,S=t.lastName,I=t.location,L=t.name,z=i.utmCampaign,T=i.utmContent,D=i.utmMedium,P=i.utmSource,A=i.utmTerm,O=i.salesforce_uuid,y=n.indexOf("?"),R=y>-1,H=n.slice(y+1),J=R?n.slice(0,y):n,Q=[R?H:null,p?"background_color=".concat(p):null,f?"hide_event_type_details=1":null,w?"hide_landing_page_details=1":null,C?"primary_color=".concat(C):null,k?"text_color=".concat(k):null,V?"hide_gdpr_banner=1":null,L?"name=".concat(encodeURIComponent(L)):null,I?"location=".concat(encodeURIComponent(I)):null,E?"first_name=".concat(encodeURIComponent(E)):null,S?"last_name=".concat(encodeURIComponent(S)):null,_?"guests=".concat(_.map(encodeURIComponent).join(",")):null,j?"email=".concat(encodeURIComponent(j)):null,x&&x instanceof Date?"date=".concat(he(x)):null,z?"utm_campaign=".concat(encodeURIComponent(z)):null,T?"utm_content=".concat(encodeURIComponent(T)):null,D?"utm_medium=".concat(encodeURIComponent(D)):null,P?"utm_source=".concat(encodeURIComponent(P)):null,A?"utm_term=".concat(encodeURIComponent(A)):null,O?"salesforce_uuid=".concat(encodeURIComponent(O)):null,m?"embed_type=".concat(m):null,"embed_domain=1"].concat(N?fe(N):[]).filter(function(K){return K!==null}).join("&");return"".concat(J,"?").concat(Q)},he=function(e){var n=e.getMonth()+1,o=e.getDate(),t=e.getFullYear();return[t,n<10?"0".concat(n):n,o<10?"0".concat(o):o].join("-")},ge=/^a\d{1,2}$/,fe=function(e){var n=Object.keys(e).filter(function(o){return o.match(ge)});return n.length?n.map(function(o){return"".concat(o,"=").concat(encodeURIComponent(e[o]))}):[]},q=(function(e){h(n,e);function n(){return e!==null&&e.apply(this,arguments)||this}return n.prototype.render=function(){return l.createElement("div",{className:"calendly-spinner"},l.createElement("div",{className:"calendly-bounce1"}),l.createElement("div",{className:"calendly-bounce2"}),l.createElement("div",{className:"calendly-bounce3"}))},n})(l.Component),xe="calendly-inline-widget",ye=(function(e){h(n,e);function n(o){var t=e.call(this,o)||this;return t.state={isLoading:!0},t.onLoad=t.onLoad.bind(t),t}return n.prototype.onLoad=function(){this.setState({isLoading:!1})},n.prototype.render=function(){var o=W({url:this.props.url,pageSettings:this.props.pageSettings,prefill:this.props.prefill,utm:this.props.utm,embedType:"Inline"}),t=this.props.LoadingSpinner||q;return l.createElement("div",{className:this.props.className||xe,style:this.props.styles||{}},this.state.isLoading&&l.createElement(t,null),l.createElement("iframe",{width:"100%",height:"100%",frameBorder:"0",title:this.props.iframeTitle||"Calendly Scheduling Page",onLoad:this.onLoad,src:o}))},n})(l.Component),be=(function(e){h(n,e);function n(o){var t=e.call(this,o)||this;return t.state={isLoading:!0},t.onLoad=t.onLoad.bind(t),t}return n.prototype.onLoad=function(){this.setState({isLoading:!1})},n.prototype.render=function(){var o=W({url:this.props.url,pageSettings:this.props.pageSettings,prefill:this.props.prefill,utm:this.props.utm,embedType:"Inline"}),t=this.props.LoadingSpinner||q;return l.createElement(l.Fragment,null,this.state.isLoading&&l.createElement(t,null),l.createElement("iframe",{width:"100%",height:"100%",frameBorder:"0",title:this.props.iframeTitle||"Calendly Scheduling Page",onLoad:this.onLoad,src:o}))},n})(l.Component),G=(function(e){if(!e.open)return null;if(!e.rootElement)throw new Error("[react-calendly]: PopupModal rootElement property cannot be undefined");return X.createPortal(l.createElement("div",{className:"calendly-overlay"},l.createElement("div",{onClick:e.onModalClose,className:"calendly-close-overlay"}),l.createElement("div",{className:"calendly-popup"},l.createElement("div",{className:"calendly-popup-content"},l.createElement(be,u({},e)))),l.createElement("button",{className:"calendly-popup-close",onClick:e.onModalClose,"aria-label":"Close modal",style:{display:"block",border:"none",padding:0}})),e.rootElement)});(function(e){h(n,e);function n(o){var t=e.call(this,o)||this;return t.state={isOpen:!1},t.onClick=t.onClick.bind(t),t.onClose=t.onClose.bind(t),t}return n.prototype.onClick=function(o){o.preventDefault(),this.setState({isOpen:!0})},n.prototype.onClose=function(o){o.stopPropagation(),this.setState({isOpen:!1})},n.prototype.render=function(){return l.createElement(l.Fragment,null,l.createElement("button",{onClick:this.onClick,style:this.props.styles||{},className:this.props.className||""},this.props.text),l.createElement(G,u({},this.props,{open:this.state.isOpen,onModalClose:this.onClose,rootElement:this.props.rootElement})))},n})(l.Component);(function(e){h(n,e);function n(o){var t=e.call(this,o)||this;return t.state={isOpen:!1},t.onClick=t.onClick.bind(t),t.onClose=t.onClose.bind(t),t}return n.prototype.onClick=function(){this.setState({isOpen:!0})},n.prototype.onClose=function(o){o.stopPropagation(),this.setState({isOpen:!1})},n.prototype.render=function(){return l.createElement("div",{className:"calendly-badge-widget",onClick:this.onClick},l.createElement("div",{className:"calendly-badge-content",style:{background:this.props.color||"#00a2ff",color:this.props.textColor||"#ffffff"}},this.props.text||"Schedule time with me",this.props.branding&&l.createElement("span",null,"powered by Calendly")),l.createElement(G,u({},this.props,{open:this.state.isOpen,onModalClose:this.onClose,rootElement:this.props.rootElement})))},n})(l.Component);const g=l.forwardRef(({label:e,error:n,className:o,id:t,...r},d)=>{const s=l.useId(),i=t||s,m=n?`${i}-error`:void 0;return a.jsxs("div",{className:"space-y-2 w-full group",children:[e&&a.jsx("label",{htmlFor:i,className:"font-bold text-xs uppercase tracking-widest text-zinc-400 group-focus-within:text-zinc-900 transition-colors",children:e}),a.jsx("input",{id:i,ref:d,"aria-invalid":!!n,"aria-describedby":m,className:B("w-full bg-transparent border-0 border-b border-zinc-200 px-0 py-3 focus:ring-0 focus:border-zinc-900 text-lg transition-all placeholder:text-zinc-300",n&&"border-red-500 focus:border-red-500",o),...r}),n&&a.jsx("p",{id:m,className:"text-xs font-bold text-red-500 mt-1",children:n})]})});g.displayName="Input";const Y=l.forwardRef(({label:e,error:n,className:o,id:t,...r},d)=>{const s=l.useId(),i=t||s,m=n?`${i}-error`:void 0;return a.jsxs("div",{className:"space-y-2 w-full group",children:[e&&a.jsx("label",{htmlFor:i,className:"font-bold text-xs uppercase tracking-widest text-zinc-400 group-focus-within:text-zinc-900 transition-colors",children:e}),a.jsx("textarea",{id:i,ref:d,"aria-invalid":!!n,"aria-describedby":m,className:B("w-full bg-transparent border-0 border-b border-zinc-200 px-0 py-3 focus:ring-0 focus:border-zinc-900 text-lg transition-all placeholder:text-zinc-300 min-h-[120px] resize-none",n&&"border-red-500 focus:border-red-500",o),...r}),n&&a.jsx("p",{id:m,className:"text-xs font-bold text-red-500 mt-1",children:n})]})});Y.displayName="Textarea";const ve="ai-agentic-verse",we="1:493360306313:web:29b935f519286390e78e58",Ce="AIzaSyAqPKG1z4IW9B7gpztJkgxnoFNFJkbRUiQ",ke="ai-agentic-verse.firebaseapp.com",Ne="ai-studio-338c0e00-1636-4747-8847-adfe8f510a4f",je="ai-agentic-verse.firebasestorage.app",Ee="493360306313",_e="",$={projectId:ve,appId:we,apiKey:Ce,authDomain:ke,firestoreDatabaseId:Ne,storageBucket:je,messagingSenderId:Ee,measurementId:_e},Se=te($),Ie=ne(Se,$.firestoreDatabaseId);function Oe(){const[e,n]=l.useState(!1),[o,t]=l.useState(!1),[r,d]=l.useState(""),[s,i]=l.useState({fullName:"",email:"",company:"",message:""}),m=async c=>{c.preventDefault(),d("");const p={fullName:s.fullName.trim(),email:s.email.trim(),company:s.company.trim(),message:s.message.trim()};if(!p.fullName||!p.email||!p.message)return;n(!0);const f="contacts";try{await ae(oe(Ie,f),{...p,createdAt:le()}),t(!0),i({fullName:"",email:"",company:"",message:""})}catch{d("We could not send your message right now. Please email hello@aiagenticverse.com or book a strategy call.")}finally{n(!1)}};return a.jsxs("div",{className:"bg-surface text-on-surface font-general selection:bg-on-surface selection:text-surface",children:[a.jsx(re,{title:"Contact Us",description:"Get in touch with AI Agentic Verse. Schedule a strategy call or send us a message to discuss your AI integration roadmap."}),a.jsx(Z,{}),a.jsxs("main",{className:"pt-28 sm:pt-40 pb-16 sm:pb-24 px-5 sm:px-8 max-w-7xl mx-auto",children:[a.jsx("header",{className:"mb-12 sm:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-6 sm:gap-8 mt-6 sm:mt-12",children:a.jsx("div",{className:"max-w-2xl",children:a.jsxs("h1",{className:"font-bold text-3xl sm:text-6xl md:text-8xl tracking-tight leading-[0.95] text-on-surface uppercase mb-4 sm:mb-6",children:["Connect with ",a.jsx("span",{className:"opacity-40",children:"intelligence"})]})})}),a.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-start",children:[a.jsxs("div",{className:"lg:col-span-7 bg-black/[0.02] dark:bg-white/[0.02] rounded-2xl sm:rounded-[3rem] p-3 md:p-8 border border-black/5 dark:border-white/5 overflow-hidden",children:[a.jsx("h2",{className:"font-bold text-2xl sm:text-3xl uppercase tracking-tight mb-6 sm:mb-8 px-2 sm:px-4",children:"Schedule a Call"}),a.jsx("div",{className:"rounded-xl sm:rounded-[2rem] overflow-hidden bg-white",children:a.jsx(ye,{url:"https://calendly.com/aiagenticverse/ai-agentic-verse",styles:{height:"700px",width:"100%"}})})]}),a.jsxs("div",{className:"lg:col-span-5 space-y-8",children:[a.jsxs("div",{className:"bg-black/[0.02] dark:bg-white/[0.02] rounded-2xl sm:rounded-[3rem] p-6 sm:p-12 border border-black/5 dark:border-white/5",children:[a.jsx("h3",{className:"font-bold text-xl sm:text-2xl uppercase tracking-tight mb-8 sm:mb-10",children:"Direct Message"}),o?a.jsxs("div",{className:"py-12 text-center space-y-6",children:[a.jsx("div",{className:"w-20 h-20 bg-green-50 text-green-500 rounded-full flex items-center justify-center mx-auto",children:a.jsx(se,{size:40})}),a.jsx("h4",{className:"text-2xl font-bold",children:"Message Received!"}),a.jsx("p",{className:"text-zinc-600",children:"Thank you for reaching out. Our team will get back to you within 24 hours."}),a.jsx(U,{variant:"outline",onClick:()=>t(!1),children:"Send Another Message"})]}):a.jsxs("form",{className:"space-y-8",onSubmit:m,children:[r&&a.jsx("p",{className:"rounded-xl bg-red-50 px-4 py-3 text-sm font-medium text-red-700",role:"alert",children:r}),a.jsxs("div",{className:"space-y-6",children:[a.jsx(g,{label:"Full Name",placeholder:"John Doe",type:"text",required:!0,autoComplete:"name",maxLength:100,value:s.fullName,onChange:c=>i({...s,fullName:c.target.value})}),a.jsx(g,{label:"Email Address",placeholder:"john@company.com",type:"email",required:!0,autoComplete:"email",maxLength:254,value:s.email,onChange:c=>i({...s,email:c.target.value})}),a.jsx(g,{label:"Company",placeholder:"Company Name",type:"text",autoComplete:"organization",maxLength:100,value:s.company,onChange:c=>i({...s,company:c.target.value})}),a.jsx(Y,{label:"Message",placeholder:"Tell us about your project...",required:!0,maxLength:5e3,value:s.message,onChange:c=>i({...s,message:c.target.value})})]}),a.jsxs(U,{type:"submit",className:"w-full py-6 shadow-xl",isLoading:e,children:["Submit Inquiry",a.jsx(de,{size:20})]})]})]}),a.jsxs("div",{className:"p-12 space-y-8",children:[a.jsxs("div",{children:[a.jsx("h4",{className:"font-bold text-xs uppercase tracking-widest text-black/40 dark:text-white/40 mb-4",children:"Email Us"}),a.jsx("p",{className:"font-bold text-2xl",children:"hello@aiagenticverse.com"})]}),a.jsxs("div",{children:[a.jsx("h4",{className:"font-bold text-xs uppercase tracking-widest text-black/40 dark:text-white/40 mb-4",children:"Follow Us"}),a.jsxs("div",{className:"flex gap-6",children:[a.jsx("a",{href:"https://twitter.com/aiagenticverse",target:"_blank",rel:"noopener noreferrer",className:"font-bold text-sm uppercase tracking-widest text-black/60 dark:text-white/60 hover:text-on-surface transition-colors",children:"Twitter"}),a.jsx("a",{href:"https://www.linkedin.com/company/aiagenticverse",target:"_blank",rel:"noopener noreferrer",className:"font-bold text-sm uppercase tracking-widest text-black/60 dark:text-white/60 hover:text-on-surface transition-colors",children:"LinkedIn"}),a.jsx("a",{href:"https://www.instagram.com/aiagenticverse",target:"_blank",rel:"noopener noreferrer",className:"font-bold text-sm uppercase tracking-widest text-black/60 dark:text-white/60 hover:text-on-surface transition-colors",children:"Instagram"})]})]})]})]})]})]}),a.jsx(ee,{})]})}export{Oe as default};
