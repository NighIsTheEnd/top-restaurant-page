"use strict";
(self["webpackChunktop_restaurant_page"] = self["webpackChunktop_restaurant_page"] || []).push([["clickevents"],{

/***/ "./src/clickevents.js":
/*!****************************!*\
  !*** ./src/clickevents.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const navEvents = (() => {
    const loadNavClickListener = () => {
        const navLinks = document.getElementById("main-nav");
        navLinks.addEventListener('click', (e) => {
            checkEventClass(e.target);
        })
    }

    return {
        loadNavClickListener,
    }

})();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (navEvents);

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/clickevents.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xpY2tldmVudHMuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxDQUFDOztBQUVELGlFQUFlLFNBQVMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b3AtcmVzdGF1cmFudC1wYWdlLy4vc3JjL2NsaWNrZXZlbnRzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IG5hdkV2ZW50cyA9ICgoKSA9PiB7XG4gICAgY29uc3QgbG9hZE5hdkNsaWNrTGlzdGVuZXIgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IG5hdkxpbmtzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYWluLW5hdlwiKTtcbiAgICAgICAgbmF2TGlua3MuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICAgICAgY2hlY2tFdmVudENsYXNzKGUudGFyZ2V0KTtcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBsb2FkTmF2Q2xpY2tMaXN0ZW5lcixcbiAgICB9XG5cbn0pKCk7XG5cbmV4cG9ydCBkZWZhdWx0IG5hdkV2ZW50czsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=