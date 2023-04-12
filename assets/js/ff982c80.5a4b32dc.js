"use strict";(self.webpackChunkopen_ziti=self.webpackChunkopen_ziti||[]).push([[2984],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>h});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(r),g=a,h=c["".concat(s,".").concat(g)]||c[g]||d[g]||o;return r?n.createElement(h,i(i({ref:t},u),{},{components:r})):n.createElement(h,i({ref:t},u))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=g;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}g.displayName="MDXCreateElement"},43196:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var n=r(87462),a=(r(67294),r(3905));const o={sidebar_position:20,sidebar_label:"Controller",title:"Controller Config"},i="1.0 Configure the controller",l={unversionedId:"guides/Digital_Ocean/Controller",id:"guides/Digital_Ocean/Controller",title:"Controller Config",description:"1.1 Create a VM on Digital Ocean",source:"@site/docs/guides/Digital_Ocean/Controller.md",sourceDirName:"guides/Digital_Ocean",slug:"/guides/Digital_Ocean/Controller",permalink:"/docs/guides/Digital_Ocean/Controller",draft:!1,editUrl:"https://github.com/openziti/ziti-doc/tree/main/docusaurus/docs/guides/Digital_Ocean/Controller.md",tags:[],version:"current",sidebarPosition:20,frontMatter:{sidebar_position:20,sidebar_label:"Controller",title:"Controller Config"},sidebar:"docsSidebar",previous:{title:"Intro",permalink:"/docs/guides/Digital_Ocean/"},next:{title:"Router",permalink:"/docs/guides/Digital_Ocean/Router"}},s={},p=[{value:"1.1 Create a VM on Digital Ocean",id:"11-create-a-vm-on-digital-ocean",level:2},{value:"1.2 Login and Setup Controller",id:"12-login-and-setup-controller",level:2},{value:"1.3 Setup Ziti Administration Console (ZAC)",id:"13-setup-ziti-administration-console-zac",level:2},{value:"1.4 Helpers",id:"14-helpers",level:2},{value:"1.4.1 Add Environment Variables Back to the Shell",id:"141-add-environment-variables-back-to-the-shell",level:3},{value:"1.4.2 Change Ziti edge admin password",id:"142-change-ziti-edge-admin-password",level:3},{value:"1.4.3 Some useful command for the Router",id:"143-some-useful-command-for-the-router",level:3}],u={toc:p};function c(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"10-configure-the-controller"},"1.0 Configure the controller"),(0,a.kt)("h2",{id:"11-create-a-vm-on-digital-ocean"},"1.1 Create a VM on Digital Ocean"),(0,a.kt)("p",null,"Login to the Digital Ocean console, create a ",(0,a.kt)("strong",{parentName:"p"},"Droplets")," from the dropdown menu on the upper right hand side."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Diagram",src:r(24465).Z,width:"298",height:"156"})),(0,a.kt)("p",null,'On the "Create Droplets" screen, Choose "',(0,a.kt)("strong",{parentName:"p"},"Ubuntu"),'", version "',(0,a.kt)("strong",{parentName:"p"},"22.04"),'". For the Size, choose the appropriate size for your application.  For this guide, a smaller size was used.\n',(0,a.kt)("img",{alt:"Diagram",src:r(24988).Z,width:"1016",height:"893"})),(0,a.kt)("p",null,"Next, choose a ssh-key to login to the VM. (We highly discourage login to the VM using Password), then ",(0,a.kt)("strong",{parentName:"p"},"Create Droplet"),"\n",(0,a.kt)("img",{alt:"Diagram",src:r(42928).Z,width:"1090",height:"964"})),(0,a.kt)("h2",{id:"12-login-and-setup-controller"},"1.2 Login and Setup Controller"),(0,a.kt)("p",null,'Once the VM is created, we can get the IP address of the droplet from the Resources screen. Login to the VM by using user "root" and IP address:'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"ssh root@<ip>\n")),(0,a.kt)("p",null,"Then follow the ",(0,a.kt)("a",{parentName:"p",href:"/docs/learn/quickstarts/network/hosted/"},"Host OpenZiti Anywhere"),' to setup the controller. Skip the setup for the "EXTERNAL_DNS" when following the guide.'),(0,a.kt)("h2",{id:"13-setup-ziti-administration-console-zac"},"1.3 Setup Ziti Administration Console (ZAC)"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Optional")),(0,a.kt)("p",null,"ZAC provides GUI for managing the OpenZiti network. If you prefer UI over CLI to manage network, please following the ",(0,a.kt)("a",{parentName:"p",href:"/docs/learn/quickstarts/zac/"},"ZAC Setup Guide")," to setup ZAC before going to the next section."),(0,a.kt)("h2",{id:"14-helpers"},"1.4 Helpers"),(0,a.kt)("p",null,"Following helpers are needed to complete the guides for router and services."),(0,a.kt)("h3",{id:"141-add-environment-variables-back-to-the-shell"},"1.4.1 Add Environment Variables Back to the Shell"),(0,a.kt)("p",null,"Source the environment variables when you log back in the shell"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"source ~/.ziti/quickstart/$(hostname -s)/$(hostname -s).env\n")),(0,a.kt)("p",null,"If the environment variables are sourced correctly, you can do the following to check:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"echo $ZITI_HOME\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Output:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"/root/.ziti/quickstart/OMSINER\n")),(0,a.kt)("h3",{id:"142-change-ziti-edge-admin-password"},"1.4.2 Change Ziti edge admin password"),(0,a.kt)("p",null,"Find the Current admin edge login password of controller (if you forget the password):"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'grep "export ZITI_PWD" ~/.ziti/quickstart/$(hostname -s)/$(hostname -s).env\n')),(0,a.kt)("p",null,"Or if you have environment variable setup correctly:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"echo $ZITI_PWD\n")),(0,a.kt)("p",null,"To update the passwd"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"ziti edge update authenticator updb -s\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Important:"),' if you change the password, you must update the passwd (ZITI_PWD) in the "~/.ziti/quickstart/$(hostname -s)/$(hostname -s).env" file. '),(0,a.kt)("h3",{id:"143-some-useful-command-for-the-router"},"1.4.3 Some useful command for the Router"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"}," login the CLI")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"zitiLogin\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Verify ER status")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"ziti edge list edge-routers\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Delete the ER")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"ziti edge delete edge-routers $ROUTER_NAME\nziti edge delete edge-routers $ROUTER_ID\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Update the ER")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"ziti edge update edge-router $ROUTER_NAME [flags]\nziti edge update edge-router $ROUTER_ID [flags]\n")),(0,a.kt)("p",null,"example to update attributes: "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"ziti edge update edge-router $ROUTER_NAME -a private\n")))}c.isMDXComponent=!0},24465:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/Create1-75ec2fe64ab2580eb51cc81404701d35.jpg"},24988:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/Create2-4dafd219cfd0597cc3e264192d7f0d6d.jpg"},42928:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/Create3-b1c2bc10205d13c45ed7ace53485287b.jpg"}}]);