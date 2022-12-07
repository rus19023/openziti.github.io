"use strict";(self.webpackChunkopen_ziti=self.webpackChunkopen_ziti||[]).push([[4099],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>g});var i=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=i.createContext({}),c=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=c(e.components);return i.createElement(l.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},h=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=c(n),h=r,g=u["".concat(l,".").concat(h)]||u[h]||p[h]||o;return n?i.createElement(g,a(a({ref:t},d),{},{components:n})):i.createElement(g,a({ref:t},d))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:r,a[1]=s;for(var c=2;c<o;c++)a[c]=n[c];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}h.displayName="MDXCreateElement"},54047:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var i=n(87462),r=(n(67294),n(3905));const o={},a="Windows",s={unversionedId:"core-concepts/clients/tunnelers/windows",id:"core-concepts/clients/tunnelers/windows",title:"Windows",description:"Installation",source:"@site/docs/core-concepts/clients/tunnelers/02-windows.md",sourceDirName:"core-concepts/clients/tunnelers",slug:"/core-concepts/clients/tunnelers/windows",permalink:"/docs/core-concepts/clients/tunnelers/windows",draft:!1,editUrl:"https://github.com/openziti/ziti-doc/tree/main/docusaurus/docs/core-concepts/clients/tunnelers/02-windows.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{},sidebar:"rootSidebar",previous:{title:"Tunnelers",permalink:"/docs/core-concepts/clients/tunnelers/"},next:{title:"Android",permalink:"/docs/core-concepts/clients/tunnelers/android"}},l={},c=[{value:"Installation",id:"installation",level:2},{value:"Enrolling",id:"enrolling",level:2},{value:"Architecture",id:"architecture",level:2},{value:"The Data Service",id:"the-data-service",level:3},{value:"DNS",id:"dns",level:4},{value:"The Monitor Service",id:"the-monitor-service",level:3},{value:"Automatic Upgrades",id:"automatic-upgrades",level:4},{value:"Diagnostic Information",id:"diagnostic-information",level:4},{value:"The UI",id:"the-ui",level:3},{value:"Logging",id:"logging",level:2},{value:"Source",id:"source",level:2}],d={toc:c};function u(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,i.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"windows"},"Windows"),(0,r.kt)("h2",{id:"installation"},"Installation"),(0,r.kt)("p",null,"The ZDEW has an installer which is available for download from GitHub.\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/openziti/desktop-edge-win/releases/latest"},"Download the latest release here"),"."),(0,r.kt)("p",null,"Please download ",(0,r.kt)("strong",{parentName:"p"},"Ziti.Desktop.Edge.Client-*.exe")," and follow the on screen instruction for installation."),(0,r.kt)("p",null,"Click ",(0,r.kt)("strong",{parentName:"p"},"Run Ziti Desktop Edge")," when installation completes."),(0,r.kt)("h2",{id:"enrolling"},"Enrolling"),(0,r.kt)("p",null,"Following this ",(0,r.kt)("a",{parentName:"p",href:"/docs/core-concepts/identities/creating"},"guide")," to create an identity and transfer the jwt file to your PC."),(0,r.kt)("p",null,"Go back to the ",(0,r.kt)("strong",{parentName:"p"},"Windows Desktop Edge")," widget and click ",(0,r.kt)("strong",{parentName:"p"},"ADD IDENTITY"),"."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"image",src:n(14393).Z,width:"399",height:"518"})),(0,r.kt)("p",null,"You will be brought to your file manager and should navigate to the directory where you saved the .jwt file in the previous steps. Click ",(0,r.kt)("strong",{parentName:"p"},"Open")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"image",src:n(49194).Z,width:"353",height:"204"})),(0,r.kt)("p",null,"Once the identity has been enrolled and registered you will see any services you have been granted. Status = Active and the IP/Hostname/Port of rendered services."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"image",src:n(28492).Z,width:"399",height:"518"})),(0,r.kt)("h2",{id:"architecture"},"Architecture"),(0,r.kt)("p",null,"The ZDEW is composed of three main components: the data service, the monitor service, the UI. Communication among\nthese processes is handled through IPC and requires the process to have been started by an interactive login."),(0,r.kt)("h3",{id:"the-data-service"},"The Data Service"),(0,r.kt)("p",null,"The data service is the main workhorse of the ZDEW. It is built around the ",(0,r.kt)("inlineCode",{parentName:"p"},"ziti-tunneler-sdk-c")," (and subsequently the\n",(0,r.kt)("inlineCode",{parentName:"p"},"ziti-sdk-c"),'). It is responsible for creating the "TUN" (virtual network interface) as well as for configuring any\nroutes necessary for IP-based intercepts.'),(0,r.kt)("h4",{id:"dns"},"DNS"),(0,r.kt)("p",null,"The data service also has a DNS server listening at $TUN_IP + 1. For example, if the data service is configured to use\nthe default IP 100.64.0.1, there will be a DNS server listening on 100.64.0.2."),(0,r.kt)("h3",{id:"the-monitor-service"},"The Monitor Service"),(0,r.kt)("p",null,"This component is delivered as a Windows service and is set to automatic, delayed startup. It has two main functions:\nautomatic upgrades and diagnostic information."),(0,r.kt)("h4",{id:"automatic-upgrades"},"Automatic Upgrades"),(0,r.kt)("p",null,"This service will monitor the GitHub releases for new updates. It does this every ten minutes by default but could be\nconfigured if the user wants to change this to be longer. Shorter is not recommended."),(0,r.kt)("h4",{id:"diagnostic-information"},"Diagnostic Information"),(0,r.kt)("p",null,"When the ZDEW runs into problems. The UI has a 'feedback' option in the main menu to generate diagnostic information,\ncollect logs etc. This service performs that work resulting in a zip file saved into the ",(0,r.kt)("inlineCode",{parentName:"p"},"logs")," folder."),(0,r.kt)("h3",{id:"the-ui"},"The UI"),(0,r.kt)("p",null,"The UI is currently a .NET UWP application. It is not necessary for this program to run for the ZDEW to function. It\nis exclusively for users to interact with the data and monitor services."),(0,r.kt)("h2",{id:"logging"},"Logging"),(0,r.kt)("p",null,"Logs for ZDEW are saved relative to the location of the installation. Normally this path will end up being:\n",(0,r.kt)("inlineCode",{parentName:"p"},"C:\\Program Files (x86)\\NetFoundry, Inc\\Ziti Desktop Edge"),". In that directory should be a logs directory."),(0,r.kt)("p",null,"The logs directory has three subdirectories for each of the main components:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"service - the logs for the data service"),(0,r.kt)("li",{parentName:"ul"},"ZitiMonitorService - the logs for the monitor service"),(0,r.kt)("li",{parentName:"ul"},"UI - the logs from the UI")),(0,r.kt)("h2",{id:"source"},"Source"),(0,r.kt)("p",null,"The source for ZDEW is found on GitHub at ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/openziti/desktop-edge-win"},"https://github.com/openziti/desktop-edge-win")))}u.isMDXComponent=!0},14393:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/windows-install6-f3b723e290dbad7d6b3b222d91f2452c.jpg"},49194:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/windows-install7-4426728410cfd874e5c95f5653c6e0b3.jpg"},28492:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/windows-install8-d69b1badba9d61289ba4febe5538717c.jpg"}}]);