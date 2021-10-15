(() => {
var exports = {};
exports.id = 129;
exports.ids = [129];
exports.modules = {

/***/ 6536:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Episode": () => (/* binding */ Episode),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps),
/* harmony export */   "getStaticPaths": () => (/* binding */ getStaticPaths),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1664);
/* harmony import */ var _index_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4914);
/* harmony import */ var _index_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_index_module_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);




function Episode({
  episodeInfo,
  characters
}) {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("main", {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx(next_link__WEBPACK_IMPORTED_MODULE_0__.default, {
      href: `/`,
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("a", {
        className: (_index_module_scss__WEBPACK_IMPORTED_MODULE_2___default().btnRetour),
        onClick: () => window.history.back(),
        children: "Retour"
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
      className: (_index_module_scss__WEBPACK_IMPORTED_MODULE_2___default().epHeader),
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("h1", {
        children: episodeInfo.name
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("p", {
        children: ["Date de diffusion : ", episodeInfo.air_date]
      })]
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("div", {
      className: (_index_module_scss__WEBPACK_IMPORTED_MODULE_2___default().listOfPerso),
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
  var _episodeInfo$characte;

  const response = await fetch(`https://rickandmortyapi.com/api/episode/${params.id}`);
  const episodeInfo = await response.json();

  const getContentFromAPI = __webpack_require__(2657)/* .default */ .Z; // promise.all retourne dans un tableau dans l'ordre, une promesse qui attend que tout soit fini


  const characters = await Promise.all(episodeInfo === null || episodeInfo === void 0 ? void 0 : (_episodeInfo$characte = episodeInfo.characters) === null || _episodeInfo$characte === void 0 ? void 0 : _episodeInfo$characte.map(async chara => {
    //parcours les perso
    const id = chara.match(/[0-9]{1,}$/)[0];
    const personnage = await getContentFromAPI(`api/character/${id}`);
    return personnage;
  }));
  return {
    props: {
      episodeInfo,
      characters
    }
  };
}
async function getStaticPaths() {
  // liste les (routes) pages à l'avance
  return {
    paths: [],
    fallback: 'blocking' // met la page 404

  };
}
/*export async function getStaticPaths() { // liste les (routes) pages à l'avance
    // const perso = await (await fetch('https://rickandmortyapi.com/api/character')).json()

    return {
        // paths: perso.results.map(p => ({
        //     params: {id: p.id.toString()}
        // })),
        paths: [], // on telecharge les pages a la demande 
        fallback: 'blocking', // met la page 404
    }
    
}*/

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Episode);

/***/ }),

/***/ 4914:
/***/ ((module) => {

// Exports
module.exports = {
	"btnRetour": "episode_btnRetour__2lyU1",
	"epHeader": "episode_epHeader__2a0QP",
	"listOfPerso": "episode_listOfPerso__3OPqT"
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
var __webpack_exports__ = __webpack_require__.X(0, [664,94], () => (__webpack_exec__(6536)));
module.exports = __webpack_exports__;

})();