(function(e){function t(t){for(var r,o,u=t[0],i=t[1],s=t[2],l=0,f=[];l<u.length;l++)o=u[l],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&f.push(a[o][0]),a[o]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);p&&p(t);while(f.length)f.shift()();return c.push.apply(c,s||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],r=!0,o=1;o<n.length;o++){var u=n[o];0!==a[u]&&(r=!1)}r&&(c.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},o={app:0},a={app:0},c=[];function u(e){return i.p+"js/"+({about:"about"}[e]||e)+"."+{about:"6369a7c7"}[e]+".js"}function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n={about:1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=new Promise((function(t,n){for(var r="css/"+({about:"about"}[e]||e)+"."+{about:"1a43a40c"}[e]+".css",a=i.p+r,c=document.getElementsByTagName("link"),u=0;u<c.length;u++){var s=c[u],l=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(l===r||l===a))return t()}var f=document.getElementsByTagName("style");for(u=0;u<f.length;u++){s=f[u],l=s.getAttribute("data-href");if(l===r||l===a)return t()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=t,p.onerror=function(t){var r=t&&t.target&&t.target.src||a,c=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=r,delete o[e],p.parentNode.removeChild(p),n(c)},p.href=a;var d=document.getElementsByTagName("head")[0];d.appendChild(p)})).then((function(){o[e]=0})));var r=a[e];if(0!==r)if(r)t.push(r[2]);else{var c=new Promise((function(t,n){r=a[e]=[t,n]}));t.push(r[2]=c);var s,l=document.createElement("script");l.charset="utf-8",l.timeout=120,i.nc&&l.setAttribute("nonce",i.nc),l.src=u(e);var f=new Error;s=function(t){l.onerror=l.onload=null,clearTimeout(p);var n=a[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;f.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",f.name="ChunkLoadError",f.type=r,f.request=o,n[1](f)}a[e]=void 0}};var p=setTimeout((function(){s({type:"timeout",target:l})}),12e4);l.onerror=l.onload=s,document.head.appendChild(l)}return Promise.all(t)},i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/",i.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var f=0;f<s.length;f++)t(s[f]);var p=l;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("cd49")},2395:function(e,t,n){},6006:function(e,t,n){},"7c55":function(e,t,n){"use strict";var r=n("2395"),o=n.n(r);o.a},"87dd":function(e,t,n){"use strict";var r=n("cd31"),o=n.n(r);o.a},cd31:function(e,t,n){},cd49:function(e,t,n){"use strict";n.r(t);var r=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("link",{attrs:{rel:"stylesheet",href:"@/assets/projects/projects.css",type:"text/css"}}),n("Header"),n("div",{staticClass:"main"},[n("transition",{attrs:{name:"fade",mode:"out-in"}},[n("router-view")],1)],1),n("Footer")],1)},a=[],c=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"header"},[n("div",{staticClass:"nav-bar"},[n("router-link",{attrs:{to:"/"}},[e._v("About me")]),n("router-link",{attrs:{to:"/game-projects"}},[e._v("Games")]),n("router-link",{attrs:{to:"/contact"}},[e._v("Contact")])],1)])},u=[],i=r["a"].extend({name:"Header"}),s=i,l=(n("f23a"),n("2877")),f=Object(l["a"])(s,c,u,!1,null,"369eaf70",null),p=f.exports,d=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"footer"},[e._m(0),n("div",{staticClass:"right"},[e._v("Reach me at "),n("a",{attrs:{href:"",target:"_blank",onclick:"window.open('https://mail.google.com/mail/?view=cm&fs=1&to=rleez1288@gmail.com');"}},[e._v("rleez1288@gmail.com")]),e._v(" or "),n("router-link",{attrs:{to:"/contact"}},[e._v("through here")])],1)])},m=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"left"},[n("a",{attrs:{href:"https://github.com/schouffy/gamedev-portfolio",target:"blank"}},[e._v("Portfolio Template")]),e._v(" by schouffy")])}],h=r["a"].extend({name:"Footer"}),v=h,g=(n("87dd"),Object(l["a"])(v,d,m,!1,null,"6c12da38",null)),b=g.exports,y=function(){function e(){}return e.preloadImages=function(t){t.forEach((function(t){e.preloadImage(t)}))},e.preloadImage=function(e){var t=new Image;t.src=e},e}(),_=y,j=r["a"].extend({name:"App",components:{Header:p,Footer:b}});_.preloadImages(["img/projects/project-1-icon.png","img/projects/project-2-icon.png","img/projects/project-3-icon.png"]);var w=j,k=(n("7c55"),Object(l["a"])(w,o,a,!1,null,null,null)),O=k.exports,C=n("8c4f");r["a"].use(C["a"]);var x=[{path:"/",name:"Root",component:function(){return n.e("about").then(n.bind(null,"f820"))}},{path:"/resume",name:"Resume",component:function(){return n.e("about").then(n.bind(null,"1ba2"))}},{path:"/game-projects",name:"Game Projects",component:function(){return n.e("about").then(n.bind(null,"4d97"))}},{path:"/other-projects",name:"Other Projects",component:function(){return n.e("about").then(n.bind(null,"7c58"))}},{path:"/contact",name:"Contact",component:function(){return n.e("about").then(n.bind(null,"b8fa"))}},{path:"/404",name:"NotFound",component:function(){return n.e("about").then(n.bind(null,"8cdb"))}},{path:"*",redirect:"/404"}],E=new C["a"]({routes:x}),P=E;r["a"].config.productionTip=!1,new r["a"]({router:P,render:function(e){return e(O)}}).$mount("#app")},f23a:function(e,t,n){"use strict";var r=n("6006"),o=n.n(r);o.a}});
//# sourceMappingURL=app.65c7aa4a.js.map