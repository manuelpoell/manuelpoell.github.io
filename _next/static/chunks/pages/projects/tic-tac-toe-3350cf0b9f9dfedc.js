(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[841],{4651:function(e,n,t){"use strict";t.d(n,{Ee:function(){return h}});var r=t(6052),i=t(5031),c=t(7294),s=t(8698);function a(){return a=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},a.apply(this,arguments)}function l(e,n){if(null==e)return{};var t,r,i={},c=Object.keys(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}var o=["htmlWidth","htmlHeight","alt"],u=["fallbackSrc","fallback","src","srcSet","align","fit","loading","ignoreFallback","crossOrigin"],d=c.forwardRef((function(e,n){var t=e.htmlWidth,r=e.htmlHeight,i=e.alt,s=l(e,o);return c.createElement("img",a({width:t,height:r,ref:n,alt:i},s))})),h=(0,r.Gp)((function(e,n){var t=e.fallbackSrc,o=e.fallback,h=e.src,f=e.srcSet,x=e.align,g=e.fit,j=e.loading,m=e.ignoreFallback,p=e.crossOrigin,b=l(e,u),v=null!=j||m||void 0===t&&void 0===o,k=function(e){var n=e.loading,t=e.src,r=e.srcSet,i=e.onLoad,a=e.onError,l=e.crossOrigin,o=e.sizes,u=e.ignoreFallback,d=(0,c.useState)("pending"),h=d[0],f=d[1];(0,c.useEffect)((function(){f(t?"loading":"pending")}),[t]);var x=(0,c.useRef)(),g=(0,c.useCallback)((function(){if(t){j();var e=new Image;e.src=t,l&&(e.crossOrigin=l),r&&(e.srcset=r),o&&(e.sizes=o),n&&(e.loading=n),e.onload=function(e){j(),f("loaded"),null==i||i(e)},e.onerror=function(e){j(),f("failed"),null==a||a(e)},x.current=e}}),[t,l,r,o,i,a,n]),j=function(){x.current&&(x.current.onload=null,x.current.onerror=null,x.current=null)};return(0,s.a)((function(){if(!u)return"loading"===h&&g(),function(){j()}}),[h,g,u]),u?"loaded":h}(a({},e,{ignoreFallback:v})),_=a({ref:n,objectFit:g,objectPosition:x},v?b:(0,i.CE)(b,["onError","onLoad"]));return"loaded"!==k?o||c.createElement(r.m$.img,a({as:d,className:"chakra-image__placeholder",src:t},_)):c.createElement(r.m$.img,a({as:d,src:h,srcSet:f,crossOrigin:p,loading:j,className:"chakra-image"},_))}));i.Ts&&(h.displayName="Image")},8146:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/projects/tic-tac-toe",function(){return t(6276)}])},603:function(e,n,t){"use strict";t.d(n,{i:function(){return l},Pg:function(){return o}});var r=t(5893),i=t(1664),c=t(5675),s=t(8527),a=t(917),l=function(e){var n=e.children,t=e.id,a=e.title,l=e.thumbnail;return(0,r.jsx)(s.xu,{w:"100%",align:"center",children:(0,r.jsx)(i.default,{href:"/projects/".concat(t),passHref:!0,children:(0,r.jsxs)(s.fG,{cursor:"pointer",children:[(0,r.jsx)(c.default,{src:l,alt:a,className:"grid-item-thumbnail",placeholder:"blur"}),(0,r.jsx)(s.AB,{href:"/projects/".concat(t),children:(0,r.jsx)(s.xv,{mt:2,fontSize:20,children:a})}),(0,r.jsx)(s.xv,{fontSize:14,children:n})]})})})},o=function(){return(0,r.jsx)(a.xB,{styles:"\n      .grid-item-thumbnail {\n        border-radius: 12px;\n      }\n    "})}},2857:function(e,n,t){"use strict";var r=t(5893),i=t(8816),c=t(9008),s=t(603),a={hidden:{opacity:0,x:0,y:20},enter:{opacity:1,x:0,y:0},exit:{opacity:0,x:0,y:20}};n.Z=function(e){var n=e.children,t=e.title;return(0,r.jsx)(i.E.article,{initial:"hidden",animate:"enter",exit:"exit",variants:a,transition:{duration:.4,type:"easeInOut"},style:{position:"relative"},children:(0,r.jsxs)(r.Fragment,{children:[t&&(0,r.jsx)(c.default,{children:(0,r.jsxs)("title",{children:[t," - Manuel P\xf6ll"]})}),n,(0,r.jsx)(s.Pg,{})]})})}},3562:function(e,n,t){"use strict";function r(){var e,n,t=(e=["\n  text-align: justify;\n  text-indent: 1em;\n"],n||(n=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}})));return r=function(){return t},t}var i=t(5934).Z.p(r());n.Z=i},34:function(e,n,t){"use strict";t.d(n,{Dx:function(){return l},KZ:function(){return o},h_:function(){return u}});var r=t(5893),i=t(1664),c=t(8527),s=t(4651),a=t(9876),l=function(e){var n=e.children;return(0,r.jsxs)(c.xu,{mt:10,children:[(0,r.jsx)(i.default,{href:"/projects",passHref:!0,children:(0,r.jsx)(c.rU,{children:"Projekte"})}),(0,r.jsxs)("span",{children:["\xa0",(0,r.jsx)(a.XC,{}),"\xa0"]}),(0,r.jsx)(c.X6,{display:"inline-block",as:"h3",fontSize:20,mb:4,children:n})]})},o=function(e){var n=e.src,t=e.alt;return(0,r.jsx)(s.Ee,{borderRadius:"lg",w:"full",src:n,alt:t,mb:4})},u=function(e){var n=e.children;return(0,r.jsx)(c.Ct,{colorScheme:"green",mr:2,children:n})}},6276:function(e,n,t){"use strict";t.r(n);var r=t(5893),i=t(8527),c=t(9876),s=t(34),a=t(3562),l=t(2857);n.default=function(){return(0,r.jsx)(l.Z,{title:"Tic Tac Toe",children:(0,r.jsxs)(i.W2,{children:[(0,r.jsxs)(s.Dx,{children:["Tic Tac Toe ",(0,r.jsx)(i.Ct,{children:"2022"})]}),(0,r.jsxs)(a.Z,{children:["Meine L\xf6sung zur Tic Tac Toe Challenge von"," ",(0,r.jsx)(i.rU,{href:"https://www.frontendmentor.io/",target:"_blank",children:"Frontend Mentor"}),". Ziel der Challenge: Ein funktionsf\xe4higes Tic Tac Toe - Spiel m\xf6glichst genau nach dem bereitgestellten Responsive Design f\xfcr Desktop, Tablets und Smartphones umzusetzen."]}),(0,r.jsxs)(i.aV,{ml:4,my:4,children:[(0,r.jsxs)(i.HC,{children:[(0,r.jsx)(s.h_,{children:"Website"}),(0,r.jsxs)(i.rU,{href:"https://manuelpoell.github.io/tic-tac-toe/",target:"_blank",children:["https://manuelpoell.github.io/tic-tac-toe/"," ",(0,r.jsx)(c.h0,{mx:"2px"})]})]}),(0,r.jsxs)(i.HC,{children:[(0,r.jsx)(s.h_,{children:"Code"}),(0,r.jsxs)(i.rU,{href:"https://github.com/manuelpoell/tic-tac-toe",target:"_blank",children:["https://github.com/manuelpoell/tic-tac-toe"," ",(0,r.jsx)(c.h0,{mx:"2px"})]})]}),(0,r.jsxs)(i.HC,{children:[(0,r.jsx)(s.h_,{children:"Frontend Mentor"}),(0,r.jsxs)(i.rU,{href:"https://www.frontendmentor.io/solutions/tic-tac-toe-using-reactnextjs-Hy4aacES5",target:"_blank",children:["https://www.frontendmentor.io/solutions/tic-tac-toe-using-reactnextjs-Hy4aacES5"," ",(0,r.jsx)(c.h0,{mx:"2px"})]})]}),(0,r.jsxs)(i.HC,{children:[(0,r.jsx)(s.h_,{children:"Stack"}),(0,r.jsx)("span",{children:"React/NextJS, Styled Components, Github Pages"})]})]}),(0,r.jsx)(s.KZ,{src:"/images/projects/tic-tac-toe-menu.png",alt:"Advice Generator"}),(0,r.jsx)(s.KZ,{src:"/images/projects/tic-tac-toe-game.png",alt:"Advice Generator"}),(0,r.jsx)(s.KZ,{src:"/images/projects/tic-tac-toe-endscreen.png",alt:"Advice Generator"})]})})}}},function(e){e.O(0,[675,774,888,179],(function(){return n=8146,e(e.s=n);var n}));var n=e.O();_N_E=n}]);