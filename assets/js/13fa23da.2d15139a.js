"use strict";(self.webpackChunkopen_ziti=self.webpackChunkopen_ziti||[]).push([[7995],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var i=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=i.createContext({}),l=function(e){var t=i.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=l(e.components);return i.createElement(o.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},f=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,o=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=l(n),f=a,m=u["".concat(o,".").concat(f)]||u[f]||d[f]||r;return n?i.createElement(m,s(s({ref:t},p),{},{components:n})):i.createElement(m,s({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,s=new Array(r);s[0]=f;var c={};for(var o in t)hasOwnProperty.call(t,o)&&(c[o]=t[o]);c.originalType=e,c[u]="string"==typeof e?e:a,s[1]=c;for(var l=2;l<r;l++)s[l]=n[l];return i.createElement.apply(null,s)}return i.createElement.apply(null,n)}f.displayName="MDXCreateElement"},53679:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>s,default:()=>u,frontMatter:()=>r,metadata:()=>c,toc:()=>l});var i=n(87462),a=(n(67294),n(3905));const r={},s="API Session Certificates",c={unversionedId:"learn/core-concepts/security/authentication/api-session-certificates",id:"learn/core-concepts/security/authentication/api-session-certificates",title:"API Session Certificates",description:"API Session Certificates are ephemeral short-lived x509 certificates that can be created through a CSR process after",source:"@site/docs/learn/core-concepts/security/authentication/20-api-session-certificates.md",sourceDirName:"learn/core-concepts/security/authentication",slug:"/learn/core-concepts/security/authentication/api-session-certificates",permalink:"/docs/learn/core-concepts/security/authentication/api-session-certificates",draft:!1,editUrl:"https://github.com/openziti/ziti-doc/tree/main/docusaurus/docs/learn/core-concepts/security/authentication/20-api-session-certificates.md",tags:[],version:"current",sidebarPosition:20,frontMatter:{},sidebar:"docsSidebar",previous:{title:"3rd Party CAs",permalink:"/docs/learn/core-concepts/security/authentication/third-party-cas"},next:{title:"Authentication Policies",permalink:"/docs/learn/core-concepts/security/authentication/authentication-policies"}},o={},l=[{value:"Lifecycle &amp; Scope",id:"lifecycle--scope",level:2},{value:"Use",id:"use",level:2},{value:"Creation",id:"creation",level:2},{value:"Request Payload",id:"request-payload",level:3},{value:"Response Payload",id:"response-payload",level:3},{value:"List &amp; Detail",id:"list--detail",level:2},{value:"Delete",id:"delete",level:2}],p={toc:l};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,i.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"api-session-certificates"},"API Session Certificates"),(0,a.kt)("p",null,"API Session Certificates are ephemeral short-lived x509 certificates that can be created through a CSR process after\nan API Session is ",(0,a.kt)("a",{parentName:"p",href:"./auth#full-vs-partial-authentication"},"fully authenticated"),". "),(0,a.kt)("h2",{id:"lifecycle--scope"},"Lifecycle & Scope"),(0,a.kt)("p",null,'The certificates are scoped by the "valid before" and "valid after" dates in addition to the API Session. If an ',(0,a.kt)("a",{parentName:"p",href:"/docs/learn/core-concepts/security/sessions#api-session"},"API Session")," is\nremoved (expiration, logout, etc.) the API Session Certificates created by that API Session are no longer valid."),(0,a.kt)("p",null,"API Session Certificates may only be used by the ",(0,a.kt)("a",{parentName:"p",href:"/docs/learn/core-concepts/security/sessions#api-session"},"API Session")," that created them. Attempting to use an ",(0,a.kt)("a",{parentName:"p",href:"/docs/learn/core-concepts/security/sessions#api-session"},"API Session"),"\nCertificate to connect to and Edge Router without the matching ",(0,a.kt)("a",{parentName:"p",href:"/docs/learn/core-concepts/security/sessions#api-session"},"API Session")," security token will be rejected."),(0,a.kt)("h2",{id:"use"},"Use"),(0,a.kt)("p",null,"API Session Certificates are useful for identities that do not use x509 certificates as a primary authentication mechanism.\nAPI Sessions that use x509 certificates during primary authentication can use that  certificate for connections to\nEdge Routers. For non-x509 primary authentication mechanisms (JWT, UPDB, etc.) API Session Certificates must be used\nas no certificates will be available for use to connect to Edge Routers."),(0,a.kt)("h2",{id:"creation"},"Creation"),(0,a.kt)("p",null,"API Session Certificates can be created by ",(0,a.kt)("inlineCode",{parentName:"p"},"POST /edge/client/v1/current-api-session/certificates"),". The payload\nneeds to be a valid PEM-encoded CSR in the ",(0,a.kt)("inlineCode",{parentName:"p"},"csr")," field. The CSR should contain at minimum subject information.\nSensitive fields such as key usage will be ignored. Additional Ziti-specific SANs\nmay be added."),(0,a.kt)("h3",{id:"request-payload"},"Request Payload"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "csr": "-----BEGIN CERTIFICATE REQUEST-----\\nMIICij...\\n-----END CERTIFICATE REQUEST-----"\n}\n')),(0,a.kt)("h3",{id:"response-payload"},"Response Payload"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "data": {\n        "_links": {\n            "self": {\n                "href": "./current-api-session/certificates/URjzX9U1U"\n            }\n        },\n        "id": "URjzX9U1U",\n        "cas": "\\n-----BEGIN CERTIFICATE-----\\nMII...\\n-----END CERTIFICATE-----\\n",\n        "certificate": "-----BEGIN CERTIFICATE-----\\nMII...\\n-----END CERTIFICATE-----\\n"\n    },\n    "meta": {}\n}\n')),(0,a.kt)("h2",{id:"list--detail"},"List & Detail"),(0,a.kt)("p",null,"API Session Certificates for the current ",(0,a.kt)("a",{parentName:"p",href:"/docs/learn/core-concepts/security/sessions#api-session"},"API Session")," may be: "),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"listed: ",(0,a.kt)("inlineCode",{parentName:"li"},"GET /edge/client/v1/current-api-session/certificates")),(0,a.kt)("li",{parentName:"ul"},"detailed: ",(0,a.kt)("inlineCode",{parentName:"li"},"GET /edge/client/v1/current-api-session/certificates/<id>"))),(0,a.kt)("h2",{id:"delete"},"Delete"),(0,a.kt)("p",null,"API Session Certificates may be removed via ",(0,a.kt)("inlineCode",{parentName:"p"},"DELETE /edge/client/v1/current-api-session/certificates/<id>")))}u.isMDXComponent=!0}}]);