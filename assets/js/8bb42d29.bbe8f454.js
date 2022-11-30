"use strict";(self.webpackChunkopen_ziti=self.webpackChunkopen_ziti||[]).push([[8649],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),u=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=u(e.components);return o.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=u(n),h=r,m=d["".concat(l,".").concat(h)]||d[h]||p[h]||i;return n?o.createElement(m,a(a({ref:t},c),{},{components:n})):o.createElement(m,a({ref:t},c))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,a[1]=s;for(var u=2;u<i;u++)a[u]=n[u];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9122:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>u});var o=n(7462),r=(n(7294),n(3905));const i={sidebar_position:10},a="Host OpenZiti Anywhere",s={unversionedId:"quickstarts/network/hosted",id:"quickstarts/network/hosted",title:"Host OpenZiti Anywhere",description:"You can absolutely choose to host your OpenZiti Network anywhere you like.",source:"@site/docs/quickstarts/network/hosted.md",sourceDirName:"quickstarts/network",slug:"/quickstarts/network/hosted",permalink:"/docs/quickstarts/network/hosted",draft:!1,editUrl:"https://github.com/openziti/ziti-doc/tree/main/docusaurus/docs/quickstarts/network/hosted.md",tags:[],version:"current",sidebarPosition:10,frontMatter:{sidebar_position:10},sidebar:"rootSidebar",previous:{title:"Local - Docker Compose",permalink:"/docs/quickstarts/network/local-docker-compose"},next:{title:"Installation",permalink:"/docs/quickstarts/zac/installation"}},l={},u=[{value:"Installation",id:"installation",level:2},{value:"Firewall",id:"firewall",level:3},{value:"Express Install",id:"express-install",level:2},{value:"Systemd",id:"systemd",level:3},{value:"Adding Environment Variables Back to the Shell",id:"adding-environment-variables-back-to-the-shell",level:2},{value:"Install Ziti Admin Console (ZAC) Optional",id:"install-ziti-admin-console-zac-optional",level:2},{value:"Using the Overlay",id:"using-the-overlay",level:2}],c={toc:u};function p(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"host-openziti-anywhere"},"Host OpenZiti Anywhere"),(0,r.kt)("p",null,"You can absolutely choose to host your ",(0,r.kt)("a",{parentName:"p",href:"/docs/introduction/intro#overview-of-a-ziti-network"},"OpenZiti Network")," anywhere you like.\nIt is not necessary for the server to be on the open internet. If it works better for you to deploy OpenZiti on your\nown network, great, do that.  The only requirement to be aware of is that every piece of the a network will need to be able to communicate to the controller at least one edge router."),(0,r.kt)("p",null,"If you have a server available on the open internet, or you will provision one for use with OpenZiti, that's the\nideal scenario. With a zero trust overlay network provided by OpenZiti, you can rest assured that your traffic is safe even when using commodity internet. Furthermore, you do not need to worry about being on a network you trust, as all networks are considered untrustworthy, even your work/home network!"),(0,r.kt)("h2",{id:"installation"},"Installation"),(0,r.kt)("p",null,"When starting out deploying a ",(0,r.kt)("a",{parentName:"p",href:"/docs/introduction/intro#overview-of-a-ziti-network"},"OpenZiti Network"),", we recommend you follow\nand use the ",(0,r.kt)("inlineCode",{parentName:"p"},"expressInstall")," function provided by the OpenZiti project. Once you're familiar with the network and\nthe configuration options available you'll be better equipped to make changes."),(0,r.kt)("h3",{id:"firewall"},"Firewall"),(0,r.kt)("p",null,"The first issue you will need to deal with is opening some ports. A network will consist of at least one controller and\nat least one edge router. Both of these components will require ports to be open. For the controller you will need to\nopen two ports through your firewall, one port for the REST API, and one the control plane. Edge routers will also\nrequire two ports open. One for the links created between routers to form the mesh network, and one port for incoming\nclient connections."),(0,r.kt)("p",null,"The ports you choose are not important but unless you change them these ports will default to the following:"),(0,r.kt)("p",null,"Controller"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"REST API: 1280 (port 8441 used below)"),(0,r.kt)("li",{parentName:"ul"},"Management API: 6262")),(0,r.kt)("p",null,"Edge Router"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Edge connections: 3022 (port 8442 used below)"),(0,r.kt)("li",{parentName:"ul"},"Fabric links: 10080")),(0,r.kt)("p",null,"It would be reasonable to change all these ports to use ports 443 and 80 since those ports are almost ",(0,r.kt)("strong",{parentName:"p"},"always")," open\noutbound from all but the most strict networks. If you're going to be making connections from one of those networks, also\nverify that outbound access to these ports is available."),(0,r.kt)("h2",{id:"express-install"},"Express Install"),(0,r.kt)("p",null,"With the firewall ports open you will now be able to source the script which provides the expressInstall function and\nexecute it. You probably should consider DNS names before actually running the script. By default, the script will use\nthe bash ",(0,r.kt)("inlineCode",{parentName:"p"},"hostname")," function to determine a reasonable default for the PKI that will be generated as well as the\nconfiguration files that are output.  The script allows you to configure these values and if you are deploying to a cloud\nprovider (AWS, Azure, OCI, IBM, Digital Ocean, GCP, etc.) you will almost certainly want to use the ",(0,r.kt)("strong",{parentName:"p"},"public")," DNS name\nof your instance. You possibly  want to override the IP address to use as well, but using DNS names is superior to using\nIP addresses in case your IP changes."),(0,r.kt)("p",null,"The quickest and easiest thing to do, is simply find your external DNS name and set it into the EXTERNAL_DNS environment\nvariable. For example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'export EXTERNAL_DNS="ec2-18-100-100-100.us-east-2.compute.amazonaws.com"\n')),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Make sure you have ",(0,r.kt)("inlineCode",{parentName:"p"},"jq")," installed on your machine. From ubuntu that would look like:"),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo apt update && sudo apt install jq -y\n"))),(0,r.kt)("p",null,"Once you do that, you'll be able to\nexecute these commands just as\nshown to have your\ncontroller and\nfirst edge router\nconfigured and ready to turn on:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'export EXTERNAL_IP="$(curl -s eth0.me)"       \nexport ZITI_EDGE_CONTROLLER_IP_OVERRIDE="${EXTERNAL_IP}"\nexport ZITI_EDGE_ROUTER_IP_OVERRIDE="${EXTERNAL_IP}"\nexport ZITI_EDGE_CONTROLLER_HOSTNAME="${EXTERNAL_DNS}"\nexport ZITI_EDGE_ROUTER_HOSTNAME="${EXTERNAL_DNS}"\nexport ZITI_EDGE_CONTROLLER_PORT=8441\nexport ZITI_EDGE_ROUTER_PORT=8442\n\n# now download, source, and execute the expressInstall function\nsource /dev/stdin <<< "$(wget -qO- https://raw.githubusercontent.com/openziti/ziti/release-next/quickstart/docker/image/ziti-cli-functions.sh)"; expressInstall\n')),(0,r.kt)("h3",{id:"systemd"},"Systemd"),(0,r.kt)("p",null,"If the operating system you are deploying on supports it, after the commands above are run there will two other useful\nfunctions defined in your shell which will allow you to generate a systemd file for the controller and the edge router. This\nis useful to make sure the controller can restart automatically should you shutdown/restart the server. To generate these\nfiles run:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'createControllerSystemdFile\ncreateRouterSystemdFile "${ZITI_EDGE_ROUTER_RAWNAME}"\n\n# example:\nubuntu@ip-172-31-23-18:~$ createControllerSystemdFile\nController systemd file written to: /home/ubuntu/.ziti/quickstart/ip-172-31-23-18/ip-172-31-23-18-edge-controller.service\nubuntu@ip-172-31-23-18:~$ createRouterSystemdFile "${ZITI_EDGE_ROUTER_RAWNAME}"\nRouter systemd file written to: /home/ubuntu/.ziti/quickstart/ip-172-31-23-18/ip-172-31-23-18-edge-router.service\nubuntu@ip-172-31-23-18:~$\n')),(0,r.kt)("p",null,"After the files are generated, you can then install them for use by systemd by running:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'sudo cp "${ZITI_HOME}/${ZITI_EDGE_CONTROLLER_RAWNAME}.service" /etc/systemd/system/ziti-controller.service\nsudo cp "${ZITI_HOME}/${ZITI_EDGE_ROUTER_RAWNAME}.service" /etc/systemd/system/ziti-router.service\nsudo systemctl daemon-reload\nsudo systemctl start ziti-controller\nsudo systemctl start ziti-router\n')),(0,r.kt)("p",null,"Now, both the controller and the edge router will restart automatically!  After a few seconds you can then run these\ncommands and verify systemd has started the processes and see the status:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo systemctl -q status ziti-controller --lines=0 --no-pager\nsudo systemctl -q status ziti-router --lines=0 --no-pager\n\n\u25cf ziti-controller.service - Ziti-Controller\n     Loaded: loaded (/etc/systemd/system/ziti-controller.service; disabled; vendor preset: enabled)\n     Active: active (running) since Thu 2021-11-11 19:05:46 UTC; 8s ago\n   Main PID: 2375 (ziti-controller)\n      Tasks: 7 (limit: 1154)\n     Memory: 43.7M\n     CGroup: /system.slice/ziti-controller.service\n             \u2514\u25002375 /home/ubuntu/.ziti/quickstart/ip-10-0-0-1/ziti-bin/ziti-v0.22.11/ziti-controller run /home/ubuntu/.ziti/quickstart/ip-10-0-0-1/co\u2026\nubuntu@ip-10-0-0-1:~$ sudo systemctl -q status ziti-router --lines=0 --no-pager\n\u25cf ziti-router.service - Ziti-Router for ip-10-0-0-1-edge-router\n     Loaded: loaded (/etc/systemd/system/ziti-router.service; disabled; vendor preset: enabled)\n     Active: active (running) since Thu 2021-11-11 19:05:47 UTC; 8s ago\n   Main PID: 2385 (ziti-router)\n      Tasks: 6 (limit: 1154)\n     Memory: 231.4M\n     CGroup: /system.slice/ziti-router.service\n             \u2514\u25002385 /home/ubuntu/.ziti/quickstart/ip-10-0-0-1/ziti-bin/ziti-v0.22.11/ziti-router run /home/ubuntu/.ziti/quickstart/ip-10-0-0-1/ip-10\u2026\n")),(0,r.kt)("h2",{id:"adding-environment-variables-back-to-the-shell"},"Adding Environment Variables Back to the Shell"),(0,r.kt)("p",null,"If you log out and log back in again you can source the '.env' file located at:\n",(0,r.kt)("inlineCode",{parentName:"p"},". ~/.ziti/quickstart/$(hostname)/$(hostname).env"),". Below is an example of logging in, not having ZITI_HOME set, sourcing the\n.env file and then showing ZITI_HOME set:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"Last login: Thu May 20 11:36:25 2021 from 67.246.244.61\nubuntu@ip-10-0-0-1:~$ echo $ZITI_HOME\n\nubuntu@ip-10-0-0-1:~$ . ~/.ziti/quickstart/$(hostname)/$(hostname).env\n\nadding /home/ubuntu/.ziti/quickstart/ip-10-0-0-1/ziti-bin/ziti-v0.20.2 to the path\nubuntu@ip-10-0-0-1:~$ echo $ZITI_HOME\n/home/ubuntu/.ziti/quickstart/ip-10-0-0-1\n")),(0,r.kt)("h2",{id:"install-ziti-admin-console-zac-optional"},"Install Ziti Admin Console (ZAC) ","[Optional]"),(0,r.kt)("p",null,"Once you have the network up and running, if you want to install the UI management console, the ZAC, ",(0,r.kt)("a",{parentName:"p",href:"/docs/quickstarts/zac/installation"},"follow along with\nthe installation guide")),(0,r.kt)("h2",{id:"using-the-overlay"},"Using the Overlay"),(0,r.kt)("p",null,"Now you have your zero trust overlay network in place, you probably want to try it out. Head on over to\n",(0,r.kt)("a",{parentName:"p",href:"/docs/quickstarts/services/"},"the services quickstart")," and start the journey to understanding how to use OpenZiti."))}p.isMDXComponent=!0}}]);