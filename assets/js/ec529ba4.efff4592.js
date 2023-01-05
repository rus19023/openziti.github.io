"use strict";(self.webpackChunkopen_ziti=self.webpackChunkopen_ziti||[]).push([[8775],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var i=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=i.createContext({}),c=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=c(e.components);return i.createElement(l.Provider,{value:t},e.children)},h="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),h=c(n),d=o,m=h["".concat(l,".").concat(d)]||h[d]||p[d]||a;return n?i.createElement(m,r(r({ref:t},u),{},{components:n})):i.createElement(m,r({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,r=new Array(a);r[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[h]="string"==typeof e?e:o,r[1]=s;for(var c=2;c<a;c++)r[c]=n[c];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},83987:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var i=n(87462),o=(n(67294),n(3905));const a={authors:"dovholuknf"},r="Zitifying Kubectl",s={permalink:"/blog/zitification/kubernetes",source:"@site/blog/zitification/kubernetes/index.md",title:"Zitifying Kubectl",description:"The previous post showed how to use a zero trust overlay like Ziti for transferring files by zitifying scp. Next up in the list of zitifications is kubectl. Kubernetes is a container orchestration system. Its purpose is to deploy, scale, and manage the deployment containers. Containers are self-contained, pre-built images of software generally with a singular purpose. Developers often like using containers for various reasons. One major reason developers like containers is because it simplifies the deployment of the solutions they are developing. This is where Kubernetes starts to come into focus.",date:"2023-01-05T20:00:55.000Z",formattedDate:"January 5, 2023",tags:[],readingTime:12.22,hasTruncateMarker:!1,authors:[{name:"Clint Dovholuk",title:"OpenZiti Maintainer",url:"https://github.com/dovholuknf",imageURL:"https://avatars.githubusercontent.com/u/46322585?v=4",key:"dovholuknf"}],frontMatter:{authors:"dovholuknf"},prevItem:{title:"Zitification",permalink:"/blog/zitification"},nextItem:{title:"Kubernetes Cheatsheet",permalink:"/blog/zitification/kubernetes/kubernetes-oci"}},l={authorsImageUrls:[void 0]},c=[{value:"About Kubernetes",id:"about-kubernetes",level:2},{value:"Setup",id:"setup",level:2},{value:"Solution Overview",id:"solution-overview",level:3},{value:"Basic Ziti Setup",id:"basic-ziti-setup",level:3},{value:"Example Ziti CLI commands",id:"example-ziti-cli-commands",level:4},{value:"Kubernetes Config Files",id:"kubernetes-config-files",level:2},{value:"Getting the Kubernetes Config Files",id:"getting-the-kubernetes-config-files",level:3},{value:"Connecting the Pieces",id:"connecting-the-pieces",level:2},{value:"Testing the Public API",id:"testing-the-public-api",level:3},{value:"Deploying Ziti to Kubernetes",id:"deploying-ziti-to-kubernetes",level:4},{value:"Add/Enroll the Client Identity",id:"addenroll-the-client-identity",level:4},{value:"The Big Finale - Zitified kubectl",id:"the-big-finale---zitified-kubectl",level:2},{value:"Modifying KUBECONFIG",id:"modifying-kubeconfig",level:3},{value:"Conclusion",id:"conclusion",level:2}],u={toc:c};function h(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,i.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The ",(0,o.kt)("a",{parentName:"p",href:"/blog/zitification/zitifying-scp/"},"previous post")," showed how to use a zero trust overlay like Ziti for transferring files by zitifying ",(0,o.kt)("inlineCode",{parentName:"p"},"scp"),". Next up in the list of zitifications is ",(0,o.kt)("inlineCode",{parentName:"p"},"kubectl"),". ",(0,o.kt)("a",{parentName:"p",href:"https://Kubernetes.io/"},"Kubernetes")," is a container orchestration system. Its purpose is to deploy, scale, and manage the deployment containers. Containers are self-contained, pre-built images of software generally with a singular purpose. ",(0,o.kt)("a",{parentName:"p",href:"https://appfleet.com/blog/10-reasons-why-developers-love-docker/"},"Developers often like using containers for various reasons"),". One major reason developers like containers is because it simplifies the deployment of the solutions they are developing. This is where Kubernetes starts to come into focus."),(0,o.kt)("p",null,"In this article we'll use a cloud provider to create a Kubernetes cluster to use. I'm using Oracle OKE in this article but there are ",(0,o.kt)("a",{parentName:"p",href:"https://www.google.com/search?q=kubernetes+cloud+providers&oq=kubernetes+cloud+providers"},"numerous Kubernetes providers")," and any of them will work but clearly the commands I'm running here are Oracle specific. Once created we will then access the cluster three ways:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Via the public Kubernetes API secured via mTLS. This is the default, out-of-the-box mechanism provided by Kubernetes."),(0,o.kt)("li",{parentName:"ol"},"Via a tunneling app. I run Windows, so I'll use the Ziti Desktop Edge for Windows."),(0,o.kt)("li",{parentName:"ol"},"Via a zitified ",(0,o.kt)("inlineCode",{parentName:"li"},"kubectl"),". Here's where we'll get to see the power of a truly zitified application. We'll be able to access our cluster extremely securely using the Ziti overlay network without installing an additional agent. Once access to the cluster comes entirely from the ",(0,o.kt)("a",{parentName:"li",href:"/docs/introduction/"},"Ziti Network"),", we will be able to turn public access to the Kubernetes management API ",(0,o.kt)("strong",{parentName:"li"},"off")," entirely!")),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"about-kubernetes"},"About Kubernetes"),(0,o.kt)("p",null,"If you are not already familiar with Kubernetes then it's probably best for you to stop reading and learn a little about it first. Though this article only expects you to understand the most rudimentary of commands, it won't teach you enough about Kubernetes to understand the what's and why's. Lots of documentation on this topic already exist and are just a search away in your search engine of choice."),(0,o.kt)("p",null,"Kubernetes itself is not a container engine, it's an orchestrator. This means that Kubernetes knows how to interface with container engines to perform deployments and management of workloads on the behalf of operators. This provides people with a common abstraction to use when doing this management and deployment. Interacting with the Kubernetes API is made easy by using the command-line tool: ",(0,o.kt)("inlineCode",{parentName:"p"},"kubectl"),"."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://Kubernetes.io/docs/reference/kubectl/overview/"},"kubectl")," provides numerous commands and utilities to interact with your Kubernetes cluster. It does this by creating REST requests to a well-known endpoint. This endpoint is a highly-valuable target as it is the entry-point to the cluster. Plenty of blogs exist already on the internet addressing how to secure this endpoint but in this post we'll take it one step further than ever before by removing the Kubernetes control plane from the internet entirely. Following that we will even go one step further by replacing the existing ",(0,o.kt)("inlineCode",{parentName:"p"},"kubectl")," command with a zero-trust implementation leveraging the ziti golang sdk."),(0,o.kt)("p",null,"If you'd prefer to watch a video that goes over the same content contained in the rest of this article you can go ahead and click here to watch."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://youtu.be/CRoansolpR0"},(0,o.kt)("img",{parentName:"a",src:"https://img.youtube.com/vi/CRoansolpR0/0.jpg",alt:"Secure Kubernetes"}))),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"setup"},"Setup"),(0,o.kt)("p",null,"Below is an overview of the ",(0,o.kt)("a",{parentName:"p",href:"/docs/introduction/"},"Ziti Network")," I created for this article. On the left you can see that the client, my computer, runs Windows 10. Inside Windows 10 I run linux and bash using Ubuntu via ",(0,o.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/windows/wsl/install"},"Windows Subsystem For Linux (WSL)"),". If you run Windows and don't have WSL installed I would encourage you to install and learn it!  In my bash shell I have downloaded the linux version of ",(0,o.kt)("inlineCode",{parentName:"p"},"kubectl")," created by combining the Ziti Golang SDK into it. You can grab it from ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/openziti-incubator/kubectl/releases/latest/download/kubectl-linux-amd64"},"this link")," if you like or go check out ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/openziti-incubator/kubectl"},"the code on GitHub")," and build it yourself! :)"),(0,o.kt)("h3",{id:"solution-overview"},"Solution Overview"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"private-kubernetes.svg",src:n(12515).Z,width:"1087",height:"474"})),(0,o.kt)("h3",{id:"basic-ziti-setup"},"Basic Ziti Setup"),(0,o.kt)("p",null,"To accomplish our stated goals, we will need not only an existing ",(0,o.kt)("a",{parentName:"p",href:"/docs/introduction/"},"Ziti Network")," but we'll also have to configure that network accordingly. Here's a list of the components necessary to deliver Kubernetes with our zero-trust network:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"A configuration for the ",(0,o.kt)("inlineCode",{parentName:"li"},"Bind")," side of the service. This informs the identity within Kubernetes where to send traffic and how."),(0,o.kt)("li",{parentName:"ol"},"A configuration for the ",(0,o.kt)("inlineCode",{parentName:"li"},"Dial")," side of the service. This is strictly ",(0,o.kt)("strong",{parentName:"li"},"only")," necessary for tunneling apps. In this example, for the Ziti Desktop Edge for Windows and specifies what host and port will be intercepted on the machine running the stock ",(0,o.kt)("inlineCode",{parentName:"li"},"kubectl"),". for Windows."),(0,o.kt)("li",{parentName:"ol"},"The service itself which ties our polices mentioned above together."),(0,o.kt)("li",{parentName:"ol"},"A ",(0,o.kt)("inlineCode",{parentName:"li"},"Bind"),' service-policy which specifies which identities are allowed to act as a "host" for the service (meaning an identity to send traffic to which knows where and how to offload that traffic). In our example this will be the ',(0,o.kt)("inlineCode",{parentName:"li"},"ziti-edge-tunnel")," running in a Kubernetes pod."),(0,o.kt)("li",{parentName:"ol"},"A ",(0,o.kt)("inlineCode",{parentName:"li"},"Dial")," service-policy which specifies the identities allowed to access the service. This will be the identity using\n",(0,o.kt)("inlineCode",{parentName:"li"},"kubectl"),"."),(0,o.kt)("li",{parentName:"ol"},"Create two identities - one for the ",(0,o.kt)("inlineCode",{parentName:"li"},"Bind")," side of the service (deployed within the Kubernetes cluster) and one for the ",(0,o.kt)("inlineCode",{parentName:"li"},"Dial")," or client side.")),(0,o.kt)("p",null,"Here are some example commands using the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/openziti/ziti/releases/latest"},"ziti cli")," which illustrate how to create these services. Some things of note worth mentioning. I'm setting a variable to make my configuration easier. I reuse these code blocks a lot and by extracting some variables it makes it easy for me to delete/recreate services. First I set the ",(0,o.kt)("inlineCode",{parentName:"p"},"service_name"),"\nvariable. I use this variable in all the names of the Ziti objects I create just to make it more clear and obvious if I have to look back at my configuration again."),(0,o.kt)("p",null,"Since I'm going to be accessing my Kubernetes API which I've deployed using the Oracle cloud I chose to use ",(0,o.kt)("inlineCode",{parentName:"p"},"k8s.oci"),"\nas my service name. When deployed by a cloud provider, the Kubernetes API is generated or updated with numerous SANS and IP address I can choose from to represent the ",(0,o.kt)("inlineCode",{parentName:"p"},"Dial")," side which will be intercepted by the Ziti Desktop Edge for Windows. The Oracle cloud console informs me that the private IP of ",(0,o.kt)("inlineCode",{parentName:"p"},"10.0.0.6")," was assigned to my cluster when I click on the 'Access Cluster' button which is why I chose to use that value below. I could have chosen to use any of the DNS names provided by OKE. There are at least five I could choose from, all visible as SANS on the cert that the server returns: ",(0,o.kt)("inlineCode",{parentName:"p"},"kubernetes"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"kubernetes.default"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"kubernetes.default.svc"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"kubernetes.default.svc.cluster"),"\n, ",(0,o.kt)("inlineCode",{parentName:"p"},"kubernetes.default.svc.cluster.local"),". I chose the IP since it's pretty obvious that it's an internal IP, not on my local network. Also worth pointing out is that I'm mapping the port as well, changing it from the port that the server provides, 6443, to the common HTTPS port of 443 for the local intercept. With zitified ",(0,o.kt)("inlineCode",{parentName:"p"},"kubectl")," we don't even need these intercepts, but we'll keep it here so that we can use the unmodified ",(0,o.kt)("inlineCode",{parentName:"p"},"kubectl")," as well. Finally, these commands are all executed inside a bash shell since I'm using WSL."),(0,o.kt)("h4",{id:"example-ziti-cli-commands"},"Example Ziti CLI commands"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'# the name of the service\nservice_name=k8s.oci\n# the name of the identity you\'d like to see on the kubectl client\nthe_user_identity="${service_name}".client\n# the name of the identity deployed into the kubernetes cluster\nthe_kubernetes_identity="${service_name}".private\n\nziti edge create config "${service_name}"-host.v1 host.v1 \\\n    \'{"protocol":"tcp", "address":"10.0.0.6","port":6443 }\'\n    \nziti edge create config "${service_name}"-client-config intercept.v1 \\\n    \'{"protocols":["tcp"],"addresses":["10.0.0.6","kubernetes"], "portRanges":[{"low":443, "high":443}]}\'\n    \nziti edge create service \\\n    "${service_name}" \\\n    --configs "${service_name}"-client-config,"${service_name}"-host.v1\n    \nziti edge create service-policy "${service_name}"-binding Bind \\\n    --service-roles \'@\'"${service_name}" \\\n    --identity-roles \'#\'"${service_name}"\'ServerEndpoints\'\n    \nziti edge create service-policy "${service_name}"-dialing Dial \\\n    --service-roles \'@\'"${service_name}" \\\n    --identity-roles \'#\'"${service_name}"\'ClientEndpoints\'\n    \nziti edge create identity device "${the_kubernetes_identity}" \\\n    -a "${service_name}"ServerEndpoints \\\n    -o "${the_kubernetes_identity}".jwt\n    \nziti edge create identity device "${the_user_identity}" \\\n    -a "${service_name}"ClientEndpoints \\\n    -o "${the_user_identity}".jwt\n')),(0,o.kt)("h2",{id:"kubernetes-config-files"},"Kubernetes Config Files"),(0,o.kt)("p",null,"Once we have established the pieces of the ",(0,o.kt)("a",{parentName:"p",href:"/docs/introduction/"},"Ziti Network"),", we'll want to get the Kubernetes config files from OKE so that we can test access, make sure the cluster works etc. Oracle provides a CLI command which makes it pretty easy to get those config files called ",(0,o.kt)("inlineCode",{parentName:"p"},"oci"),". As of this writing - the guide from ",(0,o.kt)("a",{parentName:"p",href:"https://docs.oracle.com/en-us/iaas/Content/API/SDKDocs/cliinstall.htm"},"Oracle is here"),". Once ",(0,o.kt)("inlineCode",{parentName:"p"},"oci")," is installed and configured the Oracle cloud gives you very easy commands to run which will generate two files. One file will be for accessing the Kubernetes API through the public endpoint. The other will get you the file for private access. We're going to want both since we're on a journey here from \"public API endpoint\" to tunneling-app-based access, to the final stage of app-embedded zero-trust directly into ",(0,o.kt)("inlineCode",{parentName:"p"},"kubeztl"),"."),(0,o.kt)("h3",{id:"getting-the-kubernetes-config-files"},"Getting the Kubernetes Config Files"),(0,o.kt)("p",null,"Notice that we are changing the file location output by these commands and they are being output as two separate Kubernetes config files. If you prefer to merge them all into one big config file and change contexts - feel free. I left them as separate files here because it provides a very clear separation as to which config is being used or modified."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'# Get this value directly from Oracle\noci_cluster_id="put-your-cluster-id-here"\n\noci ce cluster create-kubeconfig \\\n    --cluster-id ${oci_cluster_id} \\\n    --file /tmp/oci/config.oci.public \\\n    --region us-ashburn-1 \\\n    --token-version 2.0.0 \\\n    --kube-endpoint PUBLIC_ENDPOINT\nchmod 600 /tmp/oci/config.oci.public\n    \noci ce cluster create-kubeconfig \\\n    --cluster-id ${oci_cluster_id} \\\n    --file /tmp/oci/config.oci.private \\\n    --region us-ashburn-1 \\\n    --token-version 2.0.0 \\\n    --kube-endpoint PRIVATE_ENDPOINT\nchmod 600 /tmp/oci/config.oci.private\n')),(0,o.kt)("h2",{id:"connecting-the-pieces"},"Connecting the Pieces"),(0,o.kt)("p",null,"At this point we should have all the pieces in place so that we can start putting them together to test the overall solution. In this section we'll access our public Kubernetes api to make sure it works. Then we'll install Ziti into the Kubernetes cluster and verify private access works. Finally we'll disable public access ",(0,o.kt)("strong",{parentName:"p"},"entirely")," and use the zitified ",(0,o.kt)("inlineCode",{parentName:"p"},"kubeztl")," command to access the cluster with true, app-embedded zero-trust binary."),(0,o.kt)("h3",{id:"testing-the-public-api"},"Testing the Public API"),(0,o.kt)("p",null,"This step is very straight-forward for anyone who's used Kubernetes before. Issue the following commands, making sure the path is correct for your public Kubernetes config file, and verify Kubernetes works as expected."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"export KUBECONFIG=/tmp/oci/config.oci.public\nkubectl get pods -v6 --request-timeout='5s'\nI1019 13:57:31.910962    3211 loader.go:372] Config loaded from file:  /tmp/oci/config.oci.public\nI1019 13:57:33.676047    3211 round_trippers.go:454] GET https://150.230.150.0:6443/api/v1/namespaces/default/pods?limit=500&timeout=5s 200 OK in 1752 milliseconds\nNAME                                        READY   STATUS    RESTARTS   AGE\n")),(0,o.kt)("p",null,"If your output looks something similar to the above (with or without the pods you expect to see) then great! That means your Kubernetes cluster is indeed up and running. Let's move on!"),(0,o.kt)("h4",{id:"deploying-ziti-to-kubernetes"},"Deploying Ziti to Kubernetes"),(0,o.kt)("p",null,"Next we'll grab a few lines from the excellent guide NetFoundry put out for integrating with Kubernetes. There's a section in that guide for ",(0,o.kt)("a",{parentName:"p",href:"https://developer.netfoundry.io/guides/kubernetes/#install-ziti-with-helm"},"installing Ziti with Helm"),". This comes down to just these steps:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"install the ",(0,o.kt)("inlineCode",{parentName:"li"},"helm")," CLI tool ",(0,o.kt)("a",{parentName:"li",href:"https://helm.sh/docs/intro/install/"},"using this guide")),(0,o.kt)("li",{parentName:"ol"},"add the NetFoundry helm repo: ",(0,o.kt)("inlineCode",{parentName:"li"},"helm repo add netfoundry https://netfoundry.github.io/charts/")),(0,o.kt)("li",{parentName:"ol"},"locate the jwt file for the Kubernetes identity. If you followed the steps above the file will be named: ",(0,o.kt)("inlineCode",{parentName:"li"},'"${the_kubernetes_identity}".jwt')," (make sure you replace the variable with the correct value)"),(0,o.kt)("li",{parentName:"ol"},"use the jwt to add Ziti: ",(0,o.kt)("inlineCode",{parentName:"li"},'helm install ziti-host netfoundry/ziti-host --set-file enrollmentToken="${the_kubernetes_identity}".jwt')," (again make sure you replace the variable name) If you need to, make sure you create a persistent volume. The ziti pod requires storage to store a secret.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'apiVersion: v1\nkind: PersistentVolume\nmetadata:\n  name: ziti-host-pv\n  labels:\n    type: local\nspec:\n  storageClassName: oci\n  capacity:\n    storage: 100Mi\n  accessModes:\n    - ReadWriteMany\n  hostPath:\n    path: "/netfoundry"\n')),(0,o.kt)("h4",{id:"addenroll-the-client-identity"},"Add/Enroll the Client Identity"),(0,o.kt)("p",null,"Now consume the one time token (the jwt file) to enroll and create a client-side identity using the Ziti Desktop Edge for Windows (or MacOS or via the ",(0,o.kt)("inlineCode",{parentName:"p"},"ziti-edge-tunnel")," if you prefer). Once you can see the identity in your tunneling app, you should be able to use the private kubernetes config file to access the same exact cluster. Remember though, we have mapped the port on the client side to use 443. That means you'll need to update your config file and change 6443 --\x3e 443. Now when you run ",(0,o.kt)("inlineCode",{parentName:"p"},"get pods")," you'll see the ziti-host pod deployed:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"export KUBECONFIG=/tmp/oci/config.oci.private\nkubectl get pods\nNAME                        READY   STATUS    RESTARTS   AGE\nziti-host-976b84c66-kr4bc   1/1     Running   0          90m\n")),(0,o.kt)("h2",{id:"the-big-finale---zitified-kubectl"},"The Big Finale - Zitified kubectl"),(0,o.kt)("p",null,"If you have made it this far, you've seen us access the Kubernetes API via the public IP. We've even accessed it via the private IP (which btw - is pretty cool in my opinion!). Now we're going to download the zitified kubectl command, turn off the public IP and even turn off the locally running tunneling app and still access the API!"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Disable the cluster's public IP address in OKE (go to the cluster in Oracle Cloud, click Edit and remove the public IP and click save)"),(0,o.kt)("li",{parentName:"ol"},"Turn off the Ziti Desktop Edge for Windows"),(0,o.kt)("li",{parentName:"ol"},"Download ",(0,o.kt)("inlineCode",{parentName:"li"},"kubeztl")," (you don't need to call the executable ",(0,o.kt)("inlineCode",{parentName:"li"},"kubeztl")," - you can keep it named ",(0,o.kt)("inlineCode",{parentName:"li"},"kubectl")," if you want)")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"curl -L -o kubeztl https://github.com/openziti-incubator/kubectl/releases/download/v0.0.4/kubectl-linux-amd64\n")),(0,o.kt)("ol",{start:4},(0,o.kt)("li",{parentName:"ol"},"Use ",(0,o.kt)("inlineCode",{parentName:"li"},"kubeztl")," to get pods!")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"./kubeztl get pods -c id.json -S k8s.oci\nNAME                        READY   STATUS    RESTARTS   AGE\nziti-host-976b84c66-kr4bc   1/1     Running   0          101m\n")),(0,o.kt)("h3",{id:"modifying-kubeconfig"},"Modifying KUBECONFIG"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"kubeztl")," command has also been modified to allow you to add the service name and config file directly into the file itself. This is convenient since you will not need to supply the ziti identity file, nor will you need to specify which service to use. Modifying the file is straight-forward. Open the config file, find the context listed under the contexts root and add two rows as shown here."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"contexts\n- context:\n    cluster: cluster-cjw4arxuolq\n    user: user-cjw4arxuolq\n    zConfig: /tmp/oci/k8s.id.json\n    service: k8s.oci\n")),(0,o.kt)("p",null,"Once done - you can now simply use the context the same way you have always - ",(0,o.kt)("inlineCode",{parentName:"p"},"kubeztl get pods"),"!!!"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"./kubeztl get pods\nNAME                        READY   STATUS    RESTARTS   AGE\nziti-host-976b84c66-kr4bc   1/1     Running   0          114m\n")),(0,o.kt)("h2",{id:"conclusion"},"Conclusion"),(0,o.kt)("p",null,"We've seen in this post how you can not only secure your Kubernetes API with the normal Kubernetes mechanisms. You can also take your Kubernetes API off the internet ",(0,o.kt)("strong",{parentName:"p"},"ENTIRELY"),". No need to deploy and maintain a special bastian node. Now by having a secure, zero-trust overlay in place you can safely and securely access your Kubernetes API without the fear of that public, high-value API getting attacked."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://i.imgur.com/JRBQMkN.jpg",alt:"But Wait, There's More"})),(0,o.kt)("p",null,"Once you've deployed Ziti into the Kubernetes cluster you're not done there. Now you can also use Ziti to span cloud networks. You can use it to easily link private data centers or other private Kubernetes clusters all into one secure, zero-trust overlay network! Use Ziti to expose workloads that are ",(0,o.kt)("strong",{parentName:"p"},"TRULY")," private!  In future articles we might explore how we can bring Ziti to bear on these topics, stay tuned!"),(0,o.kt)("hr",null))}h.isMDXComponent=!0},12515:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/private-kubernetes-046834ce3b35e4a1a28557d6f474c6a7.svg"}}]);