exports.id = 94;
exports.ids = [94];
exports.modules = {

/***/ 2657:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ getContentFromAPI)
/* harmony export */ });
/* harmony import */ var fs_extra__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4298);
/* harmony import */ var fs_extra__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fs_extra__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5622);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_1__);


async function getContentFromAPI(url) {
  const cachePath = path__WEBPACK_IMPORTED_MODULE_1___default().join(process.cwd(), 'cache-url', url + '.json'); // contient la route du fichier du cache
  // process.cwd() = racine du projet / ur.json

  if (fs_extra__WEBPACK_IMPORTED_MODULE_0___default().existsSync(cachePath)) {
    // si le cache existe
    const data = fs_extra__WEBPACK_IMPORTED_MODULE_0___default().readFileSync(cachePath); // lie le contenu du fichier

    return JSON.parse(data) // retourne le contenu en le sérialisant
    ;
  } else {
    const response = await fetch(`https://rickandmortyapi.com/${url}`); //telechargement

    const json = await response.json(); //serialise 

    fs_extra__WEBPACK_IMPORTED_MODULE_0___default().ensureFileSync(cachePath); // créé les dossier ou sera stocker le cache

    fs_extra__WEBPACK_IMPORTED_MODULE_0___default().writeJsonSync(cachePath, json); // text est injecté dans un fichier (enregistrer le cache)

    return json;
  }
}

/***/ }),

/***/ 2431:
/***/ (() => {

/* (ignored) */

/***/ })

};
;