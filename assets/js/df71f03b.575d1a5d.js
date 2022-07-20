"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2255],{3905:function(e,n,t){t.r(n),t.d(n,{MDXContext:function(){return p},MDXProvider:function(){return w},mdx:function(){return f},useMDXComponents:function(){return u},withMDXComponents:function(){return d}});var o=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(){return r=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},r.apply(this,arguments)}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,o,i=function(e,n){if(null==e)return{};var t,o,i={},r=Object.keys(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var p=o.createContext({}),d=function(e){return function(n){var t=u(n.components);return o.createElement(e,r({},n,{components:t}))}},u=function(e){var n=o.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},w=function(e){var n=u(e.components);return o.createElement(p.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},m=o.forwardRef((function(e,n){var t=e.components,i=e.mdxType,r=e.originalType,a=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=u(t),w=i,m=d["".concat(a,".").concat(w)]||d[w]||c[w]||r;return t?o.createElement(m,s(s({ref:n},p),{},{components:t})):o.createElement(m,s({ref:n},p))}));function f(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=t.length,a=new Array(r);a[0]=m;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var p=2;p<r;p++)a[p]=t[p];return o.createElement.apply(null,a)}return o.createElement.apply(null,t)}m.displayName="MDXCreateElement"},19777:function(e,n,t){t.r(n),t.d(n,{assets:function(){return d},contentTitle:function(){return l},default:function(){return c},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return u}});var o=t(87462),i=t(63366),r=(t(67294),t(3905)),a=["components"],s={id:"windows-tips",title:"General tips for using windows",sidebar_label:"General Tips"},l=void 0,p={unversionedId:"topics/using-windows-api/windows-tips",id:"topics/using-windows-api/windows-tips",title:"General tips for using windows",description:"In this segment we'll share some best practices and tips born of experience on using Overwolf windows:",source:"@site/pages/docs/topics/using-windows-api/windows-tips.mdx",sourceDirName:"topics/using-windows-api",slug:"/topics/using-windows-api/windows-tips",permalink:"/topics/using-windows-api/windows-tips",draft:!1,editUrl:"https://github.com/overwolf/overwolf.github.io/tree/source/website/pages/docs/topics/using-windows-api/windows-tips.mdx",tags:[],version:"current",lastUpdatedBy:"OdedItkinOW",lastUpdatedAt:1658312710,formattedLastUpdatedAt:"7/20/2022",frontMatter:{id:"windows-tips",title:"General tips for using windows",sidebar_label:"General Tips"},sidebar:"topics",previous:{title:"Resolution Size and Position",permalink:"/topics/using-windows-api/windows-resolution-size-position"},next:{title:"Windows Types",permalink:"/topics/using-windows-api/windows-types"}},d={},u=[{value:"Call getCurrentWindow() once",id:"call-getcurrentwindow-once",level:2},{value:"Avoid full-screen transparent windows",id:"avoid-full-screen-transparent-windows",level:2},{value:"Your app is not a website!",id:"your-app-is-not-a-website",level:2},{value:"Keep your windows small",id:"keep-your-windows-small",level:2},{value:"Use block_top_window_navigation",id:"use-block_top_window_navigation",level:2},{value:"Use a background controller",id:"use-a-background-controller",level:2},{value:"Use native desktop windows",id:"use-native-desktop-windows",level:2},{value:"The webkit app region drag property",id:"the-webkit-app-region-drag-property",level:2}],w={toc:u};function c(e){var n=e.components,t=(0,i.Z)(e,a);return(0,r.mdx)("wrapper",(0,o.Z)({},w,t,{components:n,mdxType:"MDXLayout"}),(0,r.mdx)("p",null,"In this segment we'll share some best practices and tips born of experience on using Overwolf windows:"),(0,r.mdx)("h2",{id:"call-getcurrentwindow-once"},"Call getCurrentWindow() once"),(0,r.mdx)("p",null,"A window should call ",(0,r.mdx)("a",{parentName:"p",href:"/api/windows#getcurrentwindowcallback"},"overwolf.windows.getCurrentWindow()")," once during startup and then store the results in a variable for later use. Also makes your code more elegant:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-js"},'overwolf.windows.getCurrentWindow(function(result) {\n    if(result.status === "success") {\n        overwolf.windows.dragMove(result.window.id);\n    }\n});\n')),(0,r.mdx)("h2",{id:"avoid-full-screen-transparent-windows"},"Avoid full-screen transparent windows"),(0,r.mdx)("p",null,"Overwolf apps are supposed to act like native desktop applications and not as websites \u2013 therefore, don\u2019t be tempted to create full-screen transparent windows with draggable HTML elements (e.g. ",(0,r.mdx)("inlineCode",{parentName:"p"},"<div>"),") as windows.\nDoing so will:"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("p",{parentName:"li"},"Create a low-performance, laggy experience.")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("p",{parentName:"li"},"Use a lot more CPU than required for your features.")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("p",{parentName:"li"},"Will not support dual screens or companion laptop screens, including dragging an element to the second screen.")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("p",{parentName:"li"},"Cause a risk of a broken HTML page covering the entire game screen.")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("p",{parentName:"li"},"Cause a risk of grabbing focus without the gamer wanting it or understanding why."))),(0,r.mdx)("h2",{id:"your-app-is-not-a-website"},"Your app is not a website!"),(0,r.mdx)("p",null,"Overwolf apps are supposed to act like native desktop applications, not websites. Avoid enabling mousewheel scrolls or ",(0,r.mdx)("a",{parentName:"p",href:"https://stackoverflow.com/questions/826782/how-to-disable-text-selection-highlighting"},"text selection")," in your app's windows, these are website features which would look and feel weird in an application setting. Whenever in doubt in terms of design or user experience, compare your app to desktop applications and not to websites. "),(0,r.mdx)("h2",{id:"keep-your-windows-small"},"Keep your windows small"),(0,r.mdx)("p",null,"App windows should provide their value in the leanest, most accurate fashion possible. When Overwolf renders transparent windows it does it\u2019s best to do it efficiently, however, large windows do have performance costs. Therefore, avoid using large windows and try to get your app's design to be focused, to the point and as small as you can effectively make it."),(0,r.mdx)("h2",{id:"use-block_top_window_navigation"},"Use block_top_window_navigation"),(0,r.mdx)("p",null,"Unless you have good reasons to do otherwise, always set the ",(0,r.mdx)("a",{parentName:"p",href:"/api/manifest#windows-block_top_window_navigation"},"block_top_window_navigation")," flag to true in your manifest.json file."),(0,r.mdx)("p",null,"This will ensure that no bugs or accidental calls like window.top.href take control of your entire app.\nThe only reason this isn\u2019t set to true by default is for backwards compatibility for apps that are hosted on remote servers."),(0,r.mdx)("h2",{id:"use-a-background-controller"},"Use a background controller"),(0,r.mdx)("p",null,"Consider using your main window as a hidden controller window that the user doesn\u2019t see \u2013 it can act as a service that runs in the background and communicates with other visible windows of the app. For apps that auto-launch when the game starts or wish to implement pop-up notifications, this is a must-have."),(0,r.mdx)("p",null,'This "hidden" window should have the ',(0,r.mdx)("a",{parentName:"p",href:"/api/manifest#is_background_page"},"is_background_page")," flag set to true in the app\u2019s manifest.json file:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-json"},'"index" : {\n  ...\n  "is_background_page": true,\n  ...\n}\n')),(0,r.mdx)("h2",{id:"use-native-desktop-windows"},"Use native desktop windows"),(0,r.mdx)("p",null,'If your app includes a window that will only be visible on desktop but not while playing, you should set your window as "native".',(0,r.mdx)("br",{parentName:"p"}),"\n","It will dramatically improve your app performance and help design an efficient, elegant product."),(0,r.mdx)("p",null," ",(0,r.mdx)("a",{parentName:"p",href:"windows-types#native-window"},"Read more"),"."),(0,r.mdx)("h2",{id:"the-webkit-app-region-drag-property"},"The webkit app region drag property"),(0,r.mdx)("p",null," It is possible to add the ",(0,r.mdx)("inlineCode",{parentName:"p"},"-webkit-app-region: drag")," css property to elements, making them drag the entire window with them."),(0,r.mdx)("p",null," :::note\nDo note that this behavior takes priority over button presses. If you wish to have working buttons inside an area with this property, you must manually exclude them from it in the css.\n:::"))}c.isMDXComponent=!0}}]);