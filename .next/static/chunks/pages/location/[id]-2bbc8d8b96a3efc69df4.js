(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[980],{2167:function(e,n,t){"use strict";var r=t(3038);n.default=void 0;var o,a=(o=t(7294))&&o.__esModule?o:{default:o},i=t(1063),c=t(4651),l=t(7426);var s={};function u(e,n,t,r){if(e&&i.isLocalURL(n)){e.prefetch(n,t,r).catch((function(e){0}));var o=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;s[n+"%"+t+(o?"%"+o:"")]=!0}}var f=function(e){var n,t=!1!==e.prefetch,o=c.useRouter(),f=a.default.useMemo((function(){var n=i.resolveHref(o,e.href,!0),t=r(n,2),a=t[0],c=t[1];return{href:a,as:e.as?i.resolveHref(o,e.as):c||a}}),[o,e.href,e.as]),d=f.href,p=f.as,v=e.children,h=e.replace,_=e.shallow,m=e.scroll,y=e.locale;"string"===typeof v&&(v=a.default.createElement("a",null,v));var b=(n=a.default.Children.only(v))&&"object"===typeof n&&n.ref,j=l.useIntersection({rootMargin:"200px"}),x=r(j,2),g=x[0],E=x[1],w=a.default.useCallback((function(e){g(e),b&&("function"===typeof b?b(e):"object"===typeof b&&(b.current=e))}),[b,g]);a.default.useEffect((function(){var e=E&&t&&i.isLocalURL(d),n="undefined"!==typeof y?y:o&&o.locale,r=s[d+"%"+p+(n?"%"+n:"")];e&&!r&&u(o,d,p,{locale:n})}),[p,d,E,y,t,o]);var C={ref:w,onClick:function(e){n.props&&"function"===typeof n.props.onClick&&n.props.onClick(e),e.defaultPrevented||function(e,n,t,r,o,a,c,l){("A"!==e.currentTarget.nodeName||!function(e){var n=e.currentTarget.target;return n&&"_self"!==n||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&i.isLocalURL(t))&&(e.preventDefault(),null==c&&r.indexOf("#")>=0&&(c=!1),n[o?"replace":"push"](t,r,{shallow:a,locale:l,scroll:c}))}(e,o,d,p,h,_,m,y)},onMouseEnter:function(e){i.isLocalURL(d)&&(n.props&&"function"===typeof n.props.onMouseEnter&&n.props.onMouseEnter(e),u(o,d,p,{priority:!0}))}};if(e.passHref||"a"===n.type&&!("href"in n.props)){var L="undefined"!==typeof y?y:o&&o.locale,k=o&&o.isLocaleDomain&&i.getDomainLocale(p,L,o&&o.locales,o&&o.domainLocales);C.href=k||i.addBasePath(i.addLocale(p,L,o&&o.defaultLocale))}return a.default.cloneElement(n,C)};n.default=f},7426:function(e,n,t){"use strict";var r=t(3038);Object.defineProperty(n,"__esModule",{value:!0}),n.useIntersection=function(e){var n=e.rootMargin,t=e.disabled||!i,l=o.useRef(),s=o.useState(!1),u=r(s,2),f=u[0],d=u[1],p=o.useCallback((function(e){l.current&&(l.current(),l.current=void 0),t||f||e&&e.tagName&&(l.current=function(e,n,t){var r=function(e){var n=e.rootMargin||"",t=c.get(n);if(t)return t;var r=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var n=r.get(e.target),t=e.isIntersecting||e.intersectionRatio>0;n&&t&&n(t)}))}),e);return c.set(n,t={id:n,observer:o,elements:r}),t}(t),o=r.id,a=r.observer,i=r.elements;return i.set(e,n),a.observe(e),function(){i.delete(e),a.unobserve(e),0===i.size&&(a.disconnect(),c.delete(o))}}(e,(function(e){return e&&d(e)}),{rootMargin:n}))}),[t,n,f]);return o.useEffect((function(){if(!i&&!f){var e=a.requestIdleCallback((function(){return d(!0)}));return function(){return a.cancelIdleCallback(e)}}}),[f]),[p,f]};var o=t(7294),a=t(3447),i="undefined"!==typeof IntersectionObserver;var c=new Map},2046:function(e,n,t){"use strict";t.r(n),t.d(n,{__N_SSG:function(){return c},Location:function(){return l}});var r=t(1664),o=t(7859),a=t.n(o),i=t(5893),c=!0;function l(e){var n=e.locationInfo,t=e.characters;return(0,i.jsxs)("main",{className:a().localisation,children:[(0,i.jsx)(r.default,{href:"/",children:(0,i.jsx)("a",{className:a().btnReturn,onClick:function(){return window.history.back()},children:"Retour"})}),(0,i.jsx)("h1",{children:n.name}),(0,i.jsxs)("ul",{children:[(0,i.jsxs)("li",{children:["Type : ",n.type]}),(0,i.jsxs)("li",{children:["dimension : ",n.dimension]})]}),(0,i.jsx)("h3",{children:"R\xe9sidents :"}),(0,i.jsx)("div",{className:a().listOfChara,children:null===t||void 0===t?void 0:t.map((function(e){var n=e.name,t=e.id,o=e.image;return(0,i.jsx)(r.default,{href:"/character/".concat(t),children:(0,i.jsxs)("a",{children:[(0,i.jsx)("div",{}),(0,i.jsx)("span",{children:n}),(0,i.jsx)("img",{src:o})]},t)})}))})]})}n.default=l},6028:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/location/[id]",function(){return t(2046)}])},7859:function(e){e.exports={localisation:"location_localisation__1AY7h",btnReturn:"location_btnReturn__lYmK7",listOfChara:"location_listOfChara__1Rj2p"}},1664:function(e,n,t){e.exports=t(2167)}},function(e){e.O(0,[774,888,179],(function(){return n=6028,e(e.s=n);var n}));var n=e.O();_N_E=n}]);