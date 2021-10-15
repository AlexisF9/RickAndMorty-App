(() => {
var exports = {};
exports.id = 569;
exports.ids = [569];
exports.modules = {

/***/ 7300:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Perso": () => (/* binding */ Perso),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps),
/* harmony export */   "getStaticPaths": () => (/* binding */ getStaticPaths),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1664);
/* harmony import */ var _index_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1608);
/* harmony import */ var _index_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_index_module_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);





function Perso({
  persoInfo = {},
  episodeName
}) {
  var _persoInfo$origin, _persoInfo$origin2;

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("main", {
    className: (_index_module_scss__WEBPACK_IMPORTED_MODULE_2___default().component),
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx(next_link__WEBPACK_IMPORTED_MODULE_0__.default, {
      href: `/`,
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("a", {
        className: (_index_module_scss__WEBPACK_IMPORTED_MODULE_2___default().retour),
        children: "Retour"
      })
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("h1", {
      children: persoInfo.name
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
      className: (_index_module_scss__WEBPACK_IMPORTED_MODULE_2___default().content),
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("div", {
        className: (_index_module_scss__WEBPACK_IMPORTED_MODULE_2___default().presentationContent),
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
          className: (_index_module_scss__WEBPACK_IMPORTED_MODULE_2___default().presentation),
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("div", {
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("img", {
              src: persoInfo.image
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("p", {
              children: ["ID : ", persoInfo.id]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("p", {
              children: ["Race : ", persoInfo.species]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("p", {
              children: ["Gender : ", persoInfo.gender]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("p", {
              children: ["Status : ", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("span", {
                style: {
                  color: persoInfo.status === 'Alive' ? 'green' : persoInfo.status === 'Dead' ? 'red' : 'black'
                },
                children: persoInfo.status
              })]
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("p", {
              children: (persoInfo === null || persoInfo === void 0 ? void 0 : (_persoInfo$origin = persoInfo.origin) === null || _persoInfo$origin === void 0 ? void 0 : _persoInfo$origin.url) &&
              /*#__PURE__*/
              // Si l'url existe j'execute le code
              (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
                children: ["Localisation : ", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx(next_link__WEBPACK_IMPORTED_MODULE_0__.default, {
                  href: `/location/${persoInfo.location.url.match(/[0-9]{1,}$/)[0]}`,
                  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("a", {
                    className: (_index_module_scss__WEBPACK_IMPORTED_MODULE_2___default().lien),
                    children: persoInfo.location.name
                  })
                })]
              })
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("p", {
              children: (persoInfo === null || persoInfo === void 0 ? void 0 : (_persoInfo$origin2 = persoInfo.origin) === null || _persoInfo$origin2 === void 0 ? void 0 : _persoInfo$origin2.url) &&
              /*#__PURE__*/
              // Si l'url existe j'execute le code
              (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
                children: ["Origine : ", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx(next_link__WEBPACK_IMPORTED_MODULE_0__.default, {
                  href: `/location/${persoInfo.origin.url.match(/[0-9]{1,}$/)[0]}`,
                  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("a", {
                    className: (_index_module_scss__WEBPACK_IMPORTED_MODULE_2___default().lien),
                    children: persoInfo.origin.name
                  })
                })]
              })
            })]
          })]
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
        className: (_index_module_scss__WEBPACK_IMPORTED_MODULE_2___default().info),
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("p", {
          children: "Episodes d'apparition :"
        }), episodeName === null || episodeName === void 0 ? void 0 : episodeName.results.map(ep => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("ul", {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("li", {
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx(next_link__WEBPACK_IMPORTED_MODULE_0__.default, {
              href: `/episode/${ep.id}`,
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("a", {
                className: (_index_module_scss__WEBPACK_IMPORTED_MODULE_2___default().lienEp),
                children: [ep.name, " (", ep.episode, ")", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("br", {})]
              })
            }), "Date de diffusion : ", ep.air_date]
          })
        }, ep.id))]
      })]
    })]
  });
}
async function getStaticProps({
  params
}) {
  // export async function getServerSideProps({params}) { 
  //const response2 = await fetch(`https://rickandmortyapi.com/api/character/${params.id}`)
  //const persoInfo = await response2.json()
  const getContentFromAPI = __webpack_require__(2657)/* .default */ .Z;

  const persoInfo = await getContentFromAPI(`api/character/${params.id}`);
  const response = await fetch(`https://rickandmortyapi.com/api/episode/`);
  const episodeName = await response.json();
  return {
    props: {
      persoInfo,
      episodeName
    },
    revalidate: 60
  };
}
async function getStaticPaths() {
  // liste les (routes) pages à l'avance
  // const perso = await (await fetch('https://rickandmortyapi.com/api/character')).json()
  return {
    // paths: perso.results.map(p => ({
    //     params: {id: p.id.toString()}
    // })),
    paths: [],
    // on telecharge les pages a la demande 
    fallback: 'blocking' // met la page 404

  };
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Perso);

/***/ }),

/***/ 1608:
/***/ ((module) => {

// Exports
module.exports = {
	"component": "character_component__3K8Kf",
	"content": "character_content__YOsOY",
	"presentationContent": "character_presentationContent__3TQwh",
	"presentation": "character_presentation__NgsPv",
	"lien": "character_lien__zkWMj",
	"lienEp": "character_lienEp__2ZdnB",
	"retour": "character_retour__2ESsb"
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
var __webpack_exports__ = __webpack_require__.X(0, [664,94], () => (__webpack_exec__(7300)));
module.exports = __webpack_exports__;

})();