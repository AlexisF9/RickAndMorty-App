(() => {
var exports = {};
exports.id = 980;
exports.ids = [980];
exports.modules = {

/***/ 2046:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Location": () => (/* binding */ Location),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps),
/* harmony export */   "getStaticPaths": () => (/* binding */ getStaticPaths),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1664);
/* harmony import */ var _index_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8902);
/* harmony import */ var _index_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_index_module_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);




function Location({
  locationInfo,
  characters
}) {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("main", {
    className: (_index_module_scss__WEBPACK_IMPORTED_MODULE_2___default().localisation),
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx(next_link__WEBPACK_IMPORTED_MODULE_0__.default, {
      href: `/`,
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("a", {
        className: (_index_module_scss__WEBPACK_IMPORTED_MODULE_2___default().btnReturn),
        onClick: () => window.history.back(),
        children: "Retour"
      })
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("h1", {
      children: locationInfo.name
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("ul", {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("li", {
        children: ["Type : ", locationInfo.type]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("li", {
        children: ["dimension : ", locationInfo.dimension]
      })]
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("h3", {
      children: "R\xE9sidents :"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("div", {
      className: (_index_module_scss__WEBPACK_IMPORTED_MODULE_2___default().listOfChara),
      children: characters === null || characters === void 0 ? void 0 : characters.map(({
        name,
        id,
        image
      }) =>
      /*#__PURE__*/
      // map retourne une valeur
      react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx(next_link__WEBPACK_IMPORTED_MODULE_0__.default, {
        href: `/character/${id}`,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("a", {
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("div", {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("span", {
            children: name
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("img", {
            src: image
          })]
        }, id)
      }))
    })]
  });
}
async function getStaticProps({
  params
}) {
  var _locationInfo$residen;

  //const response = await fetch(`https://rickandmortyapi.com/api/location/${params.id}`)
  //const locationInfo = await response.json()
  const getContentFromAPI = __webpack_require__(2657)/* .default */ .Z;

  const locationInfo = await getContentFromAPI(`api/location/${params.id}`);

  const getContFromAPI = __webpack_require__(2657)/* .default */ .Z;

  const characters = await Promise.all(locationInfo === null || locationInfo === void 0 ? void 0 : (_locationInfo$residen = locationInfo.residents) === null || _locationInfo$residen === void 0 ? void 0 : _locationInfo$residen.map(async p => {
    //parcours les perso
    const id = p.match(/[0-9]{1,}$/)[0];
    const personnage = await getContFromAPI(`api/character/${id}`);
    return personnage;
  }));
  return {
    props: {
      locationInfo,
      characters
    }
  };
}
async function getStaticPaths() {
  // liste les (routes) pages à l'avance
  return {
    paths: [],
    fallback: 'blocking' // met la page 404

  }; // genere les pages à la volé 
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Location);

/***/ }),

/***/ 8902:
/***/ ((module) => {

// Exports
module.exports = {
	"localisation": "location_localisation__1AY7h",
	"btnReturn": "location_btnReturn__lYmK7",
	"listOfChara": "location_listOfChara__1Rj2p"
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
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [664,94], () => (__webpack_exec__(2046)));
module.exports = __webpack_exports__;

})();