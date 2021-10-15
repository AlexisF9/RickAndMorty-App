(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 1565:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Pagination)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);
/* harmony import */ var _index_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6650);
/* harmony import */ var _index_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_index_module_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);





function Pagination({
  index,
  max
}) {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
    className: (_index_module_scss__WEBPACK_IMPORTED_MODULE_3___default().btnPagination),
    children: [index > 1 && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(next_link__WEBPACK_IMPORTED_MODULE_1__.default, {
      href: index === 2 ? '/' : `/page/${index - 1}`,
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("a", {
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("button", {
          children: "Prev"
        })
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("p", {
      children: ["(", index, "/", max, ")"]
    }), index < max && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(next_link__WEBPACK_IMPORTED_MODULE_1__.default, {
      href: `/page/${index + 1}`,
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("a", {
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("button", {
          children: "Next"
        })
      })
    })]
  });
}

/***/ }),

/***/ 9537:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Home),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: ./src/pages/index.module.scss
var index_module = __webpack_require__(359);
var index_module_default = /*#__PURE__*/__webpack_require__.n(index_module);
// EXTERNAL MODULE: ./src/components/pagination/index.js
var pagination = __webpack_require__(1565);
// EXTERNAL MODULE: ./src/components/header/index.module.scss
var header_index_module = __webpack_require__(4270);
var header_index_module_default = /*#__PURE__*/__webpack_require__.n(header_index_module);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
;// CONCATENATED MODULE: ./src/components/header/index.js




function Header() {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: (header_index_module_default()).header,
    children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
      className: (header_index_module_default()).logo,
      children: /*#__PURE__*/jsx_runtime_.jsx("img", {
        src: "https://upload.wikimedia.org/wikipedia/fr/c/c8/Rick_and_Morty_logo.png"
      })
    }), /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
      href: `../../search`,
      children: /*#__PURE__*/jsx_runtime_.jsx("a", {
        children: "Rick and Morty Search"
      })
    })]
  });
}
;// CONCATENATED MODULE: ./src/pages/index.js







function Home({
  personnage
}) {
  const status = status => {
    if (status === 'Alive') return 'green';else if (status === 'Dead') return 'red';else return 'black';
  };

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("main", {
    className: (index_module_default()).component,
    children: [/*#__PURE__*/jsx_runtime_.jsx(Header, {}), /*#__PURE__*/jsx_runtime_.jsx("h1", {
      children: "Liste des personnages"
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: (index_module_default()).personnage,
      children: personnage.results.map(nomPerso => /*#__PURE__*/jsx_runtime_.jsx("div", {
        children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
          href: `/character/${nomPerso.id}`,
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
            style: {
              color: status(nomPerso.status)
            },
            children: [/*#__PURE__*/jsx_runtime_.jsx("h2", {
              children: nomPerso.name
            }), /*#__PURE__*/jsx_runtime_.jsx("br", {}), /*#__PURE__*/jsx_runtime_.jsx("img", {
              src: nomPerso.image
            }), /*#__PURE__*/jsx_runtime_.jsx("br", {}), /*#__PURE__*/jsx_runtime_.jsx("br", {})]
          })
        })
      }, nomPerso.id))
    }), /*#__PURE__*/jsx_runtime_.jsx(pagination/* default */.Z, {
      index: 1,
      max: personnage.info.pages
    })]
  });
}
async function getStaticProps() {
  //const rep = await fetch('https://rickandmortyapi.com/api/character')
  //const personnage = await rep.json()
  const getContentFromAPI = __webpack_require__(2657)/* .default */ .Z;

  const personnage = await getContentFromAPI('api/character');
  return {
    props: {
      personnage
    }
  };
}

/***/ }),

/***/ 4270:
/***/ ((module) => {

// Exports
module.exports = {
	"header": "header_header__3V385",
	"logo": "header_logo__2HChU"
};


/***/ }),

/***/ 6650:
/***/ ((module) => {

// Exports
module.exports = {
	"btnPagination": "pagination_btnPagination__3owTv"
};


/***/ }),

/***/ 359:
/***/ ((module) => {

// Exports
module.exports = {
	"component": "index_component__nJSL0",
	"personnage": "index_personnage__V7XjP",
	"green": "index_green__2y-L1",
	"red": "index_red__1IhJl"
};


/***/ }),

/***/ 4298:
/***/ ((module) => {

"use strict";
module.exports = require("fs-extra");

/***/ }),

/***/ 9325:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 5378:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 7162:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 8773:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 2248:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 9372:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 665:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 2747:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 333:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 3456:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 7620:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 5622:
/***/ ((module) => {

"use strict";
module.exports = require("path");

/***/ }),

/***/ 9297:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 5282:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [664,94], () => (__webpack_exec__(9537)));
module.exports = __webpack_exports__;

})();