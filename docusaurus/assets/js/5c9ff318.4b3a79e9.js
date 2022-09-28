"use strict";(self.webpackChunkopen_ziti=self.webpackChunkopen_ziti||[]).push([[6968],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>d});var n=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function m(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=n.createContext({}),o=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=o(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,p=m(e,["components","mdxType","originalType","parentName"]),c=o(a),d=i,h=c["".concat(s,".").concat(d)]||c[d]||u[d]||r;return a?n.createElement(h,l(l({ref:t},p),{},{components:a})):n.createElement(h,l({ref:t},p))}));function d(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,l=new Array(r);l[0]=c;var m={};for(var s in t)hasOwnProperty.call(t,s)&&(m[s]=t[s]);m.originalType=e,m.mdxType="string"==typeof e?e:i,l[1]=m;for(var o=2;o<r;o++)l[o]=a[o];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},7078:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>r,metadata:()=>m,toc:()=>o});var n=a(7462),i=(a(7294),a(3905));const r={},l="Types of Metrics Reported",m={unversionedId:"metrics/metric-types",id:"metrics/metric-types",title:"Types of Metrics Reported",description:"OpenZiti is instrumenting more code and adding additional metrics all of the time. This section will describe the different types of metrics that OpenZiti reports, not individual metric names.",source:"@site/docs/metrics/metric-types.md",sourceDirName:"metrics",slug:"/metrics/metric-types",permalink:"/docusaurus/docs/metrics/metric-types",draft:!1,editUrl:"https://github.com/openziti/ziti-doc/tree/main/docusaurus/docs/metrics/metric-types.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"On Demand",permalink:"/docusaurus/docs/metrics/inspect"},next:{title:"Ziti Metrics",permalink:"/docusaurus/docs/metrics/overview"}},s={},o=[{value:"intValue/floatValue",id:"intvaluefloatvalue",level:2},{value:"Histogram",id:"histogram",level:2},{value:"Meter",id:"meter",level:2},{value:"Timer",id:"timer",level:2},{value:"Gauge",id:"gauge",level:2}],p={toc:o};function u(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"types-of-metrics-reported"},"Types of Metrics Reported"),(0,i.kt)("p",null,"OpenZiti is instrumenting more code and adding additional metrics all of the time. This section will describe the different types of metrics that OpenZiti reports, not individual metric names."),(0,i.kt)("h2",{id:"intvaluefloatvalue"},"intValue/floatValue"),(0,i.kt)("p",null,"A gauge of a single value.  The value is the current metric value, and can go up and down over time"),(0,i.kt)("h2",{id:"histogram"},"Histogram"),(0,i.kt)("p",null,"  Histogram metrics utilize the Go metrics module, and are set to a 128 sample exponentially decaying bucket with a alpha value of .015.  This is important to understand, especially in reference to minimum and maximum values.  The bucket is sample bound, not time bound.  In practice this means one will often see a maximum or minimum value that carries on for several time samples; this is expected behavior. For example, link latency is measured every 10 seconds by default.  This means a maximum value can be in place for 21:40 minutes (128 * 10s).  When viewing the measurements, it is important to keep this in mind, as it may appear that a low or high value is more prevalent than it actually is, if you are  familiar with thinking of time bound buckets. The histogram implementation allows for extremely fast and memory efficient data collection.  As some of the metrics are multiplied by multiple levels of cardinality, it is critical to maintaining the operations of the software."),(0,i.kt)("p",null,"  An exponentially decaying histogram means that as the samples age across the 128 sample window, they are weighted less than the newer samples.  This makes functions, such as the mean, which is often used, able to respond more quickly to changes than a straight sliding window.  An alpha value of .015 means that the sample weights range from 1 (the newest sample) to approximately .93.  This means that when calculating the mean, the oldest sample in the window is weighted to 93%, reducing its contribution to the function."),(0,i.kt)("p",null,"  A simple weighting exercise:\nGiven 3 samples, 10, 5, and 5, how does the weighting and order affect the mean function? (This is not the same actual function of the histogram, but is intended to help explain the decaying function nd the impact of the age of the sample on the measurements)\n| Sample\t| Weight | Weighted Value |\n|--------|-------------|----------------|\n| 10 | 1.0 |\t10.0 |\n| 5\t| .95\t| 4.75 |\n| 5\t| .90\t| 4.5 |\n| Sum\t| 2.85 | 19.25 |\n| Mean\t| 19.25/2.85 | 6.75 |"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Sample"),(0,i.kt)("th",{parentName:"tr",align:null},"Weight"),(0,i.kt)("th",{parentName:"tr",align:null},"Weighted Value"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"5"),(0,i.kt)("td",{parentName:"tr",align:null},"1.0"),(0,i.kt)("td",{parentName:"tr",align:null},"5.0")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"5"),(0,i.kt)("td",{parentName:"tr",align:null},".95"),(0,i.kt)("td",{parentName:"tr",align:null},"4.75")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"10"),(0,i.kt)("td",{parentName:"tr",align:null},".90"),(0,i.kt)("td",{parentName:"tr",align:null},"9.0")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Sum"),(0,i.kt)("td",{parentName:"tr",align:null},"2.85"),(0,i.kt)("td",{parentName:"tr",align:null},"18.75")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Mean"),(0,i.kt)("td",{parentName:"tr",align:null},"18.75/2.85"),(0,i.kt)("td",{parentName:"tr",align:null},"6.58")))),(0,i.kt)("p",null,"Standard histograms provide:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"min"),(0,i.kt)("li",{parentName:"ul"},"max"),(0,i.kt)("li",{parentName:"ul"},"mean"),(0,i.kt)("li",{parentName:"ul"},"stdev"),(0,i.kt)("li",{parentName:"ul"},"variance"),(0,i.kt)("li",{parentName:"ul"},"percentiles",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"p50"),(0,i.kt)("li",{parentName:"ul"},"p75"),(0,i.kt)("li",{parentName:"ul"},"p95"),(0,i.kt)("li",{parentName:"ul"},"p99"),(0,i.kt)("li",{parentName:"ul"},"p999"),(0,i.kt)("li",{parentName:"ul"},"p9999")))),(0,i.kt)("p",null,"It is important to note the sample size (128) means the more specific percentiles will use the same actual values, and may be repetitive."),(0,i.kt)("h2",{id:"meter"},"Meter"),(0,i.kt)("p",null,"Meters are used for rate measurements, how much of something happened per unit time.  The samples are exponentially decayed, similar to the histogram, however the values are bound to specific time intervals, such as 1, 5, and 15 minutes.  They can also provide similar statistical values to histograms"),(0,i.kt)("p",null,"Meter metric with:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"count"),(0,i.kt)("li",{parentName:"ul"},"m1_rate"),(0,i.kt)("li",{parentName:"ul"},"m5_rate"),(0,i.kt)("li",{parentName:"ul"},"m15_rate"),(0,i.kt)("li",{parentName:"ul"},"min"),(0,i.kt)("li",{parentName:"ul"},"max"),(0,i.kt)("li",{parentName:"ul"},"mean"),(0,i.kt)("li",{parentName:"ul"},"std_dev"),(0,i.kt)("li",{parentName:"ul"},"variance"),(0,i.kt)("li",{parentName:"ul"},"percentiles",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"p50"),(0,i.kt)("li",{parentName:"ul"},"p75"),(0,i.kt)("li",{parentName:"ul"},"p95"),(0,i.kt)("li",{parentName:"ul"},"p99"),(0,i.kt)("li",{parentName:"ul"},"p999"),(0,i.kt)("li",{parentName:"ul"},"p9999")))),(0,i.kt)("h2",{id:"timer"},"Timer"),(0,i.kt)("p",null,"Timers provide statistical samples of timed events. "),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"min"),(0,i.kt)("li",{parentName:"ul"},"max"),(0,i.kt)("li",{parentName:"ul"},"mean"),(0,i.kt)("li",{parentName:"ul"},"std_dev"),(0,i.kt)("li",{parentName:"ul"},"variance"),(0,i.kt)("li",{parentName:"ul"},"percentiles",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"p50"),(0,i.kt)("li",{parentName:"ul"},"p75"),(0,i.kt)("li",{parentName:"ul"},"p95"),(0,i.kt)("li",{parentName:"ul"},"p99"),(0,i.kt)("li",{parentName:"ul"},"p999"),(0,i.kt)("li",{parentName:"ul"},"p9999")))),(0,i.kt)("h2",{id:"gauge"},"Gauge"),(0,i.kt)("p",null,"Gauges present a point in time measurement of a metric.  For example, the number of open database transactions at a given moment."))}u.isMDXComponent=!0}}]);