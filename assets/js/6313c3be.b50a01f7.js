"use strict";(self.webpackChunkopen_ziti=self.webpackChunkopen_ziti||[]).push([[1080],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(n),f=a,m=d["".concat(s,".").concat(f)]||d[f]||u[f]||i;return n?r.createElement(m,o(o({ref:t},c),{},{components:n})):r.createElement(m,o({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},97494:(e,t,n)=>{n.d(t,{ZP:()=>s});var r=n(87462),a=(n(67294),n(3905));const i={toc:[]};function o(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},i,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"OS"),(0,a.kt)("th",{parentName:"tr",align:null},"Links"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Windows"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/docs/reference/tunnelers/windows"},"Reference")," ","|"," ",(0,a.kt)("a",{parentName:"td",href:"https://github.com/openziti/desktop-edge-win/releases/latest"},"GitHub release"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"macOS"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/docs/reference/tunnelers/macos"},"Reference"),"   ","|"," ",(0,a.kt)("a",{parentName:"td",href:"https://apps.apple.com/app/id1460484572"},"App Store"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Linux"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/docs/reference/tunnelers/linux/#install-linux-package"},"Reference"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Docker, Kubernetes"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/docs/reference/tunnelers/linux/container/"},"Reference"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"iOS"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/docs/reference/tunnelers/iOS"},"Reference"),"    ","|"," ",(0,a.kt)("a",{parentName:"td",href:"https://apps.apple.com/app/id1460484353"},"App Store"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Android"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/docs/reference/tunnelers/android"},"Reference")," ","|"," ",(0,a.kt)("a",{parentName:"td",href:"https://play.google.com/store/apps/details?id=org.openziti.mobile"},"Play Store"))))))}o.isMDXComponent=!0;const l={toc:[]};function s(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"An OpenZiti Tunneler is purpose-built software designed to connect applications which are not Ziti-aware to the OpenZiti Network."),(0,a.kt)(o,{mdxType:"TunnelerDlMd"}))}s.isMDXComponent=!0},49587:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var r=n(87462),a=(n(67294),n(3905)),i=n(97494);const o={},l="Tunnelers",s={unversionedId:"reference/tunnelers/index",id:"reference/tunnelers/index",title:"Tunnelers",description:"Each tunneller operates similarly. The goal is to have the tunneler seamlessly intercept traffic destined for Ziti",source:"@site/docs/reference/tunnelers/index.mdx",sourceDirName:"reference/tunnelers",slug:"/reference/tunnelers/",permalink:"/docs/reference/tunnelers/",draft:!1,editUrl:"https://github.com/openziti/ziti-doc/tree/main/docusaurus/docs/reference/tunnelers/index.mdx",tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"Overview",permalink:"/docs/reference/"},next:{title:"Windows",permalink:"/docs/reference/tunnelers/windows"}},p={},c=[],d={toc:c};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"tunnelers"},"Tunnelers"),(0,a.kt)(i.ZP,{mdxType:"TunnelerOverviewMd"}),(0,a.kt)("p",null,"Each tunneller operates similarly. The goal is to have the tunneler seamlessly intercept traffic destined for Ziti\nservices and forward that traffic over the Ziti overlay instead of the ",(0,a.kt)("a",{parentName:"p",href:"/docs/reference/glossary#underlay"},"underlay")," network. All processes on the host can access the Ziti services available to the tunneler's loaded identities."),(0,a.kt)("p",null,"A tunneler configures a Ziti nameserver for resolving Ziti service addresses and associated Ziti IP routes in a device's OS. These are quickly updated when a policy change alters the visible Ziti services for any loaded Ziti identity."))}u.isMDXComponent=!0}}]);