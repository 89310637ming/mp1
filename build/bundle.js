/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "../node_modules/css-loader/dist/runtime/api.js"
/*!******************************************************!*\
  !*** ../node_modules/css-loader/dist/runtime/api.js ***!
  \******************************************************/
(module) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ },

/***/ "../node_modules/css-loader/dist/runtime/getUrl.js"
/*!*********************************************************!*\
  !*** ../node_modules/css-loader/dist/runtime/getUrl.js ***!
  \*********************************************************/
(module) {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ },

/***/ "../node_modules/css-loader/dist/runtime/sourceMaps.js"
/*!*************************************************************!*\
  !*** ../node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \*************************************************************/
(module) {

"use strict";


module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ },

/***/ "../node_modules/html-loader/dist/runtime/getUrl.js"
/*!**********************************************************!*\
  !*** ../node_modules/html-loader/dist/runtime/getUrl.js ***!
  \**********************************************************/
(module) {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    // eslint-disable-next-line no-param-reassign
    options = {};
  }
  if (!url) {
    return url;
  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign

  url = String(url.__esModule ? url.default : url);
  if (options.hash) {
    // eslint-disable-next-line no-param-reassign
    url += options.hash;
  }
  if (options.maybeNeedQuotes && /[\t\n\f\r "'=<>`]/.test(url)) {
    return "\"".concat(url, "\"");
  }
  return url;
};

/***/ },

/***/ "./js/main.js"
/*!********************!*\
  !*** ./js/main.js ***!
  \********************/
() {

// Adapted from the Portfolio Assignment Guide for the Webpack starter.
var navbar = document.getElementById("navbar");
var navLinks = document.querySelectorAll(".nav-link");
var sections = document.querySelectorAll(".section");
var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
function updateNavigation() {
  navbar.classList.toggle("scrolled", window.scrollY > 50);
  var currentSection = sections[0].id;
  var navBottom = navbar.getBoundingClientRect().bottom;
  sections.forEach(function (section) {
    if (section.getBoundingClientRect().top <= navBottom + 10) {
      currentSection = section.id;
    }
  });

  // The last section may be too short to reach the top of the viewport.
  if (window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 2) {
    currentSection = sections[sections.length - 1].id;
  }
  navLinks.forEach(function (link) {
    var active = link.getAttribute("href") === "#" + currentSection;
    link.classList.toggle("active", active);
    if (active) link.setAttribute("aria-current", "location");else link.removeAttribute("aria-current");
  });
}
navLinks.forEach(function (link) {
  link.addEventListener("click", function (event) {
    event.preventDefault();
    var target = document.querySelector(link.getAttribute("href"));
    target.scrollIntoView({
      behavior: reduceMotion.matches ? "auto" : "smooth"
    });
  });
});
window.addEventListener("scroll", updateNavigation, {
  passive: true
});
window.addEventListener("resize", updateNavigation);
window.addEventListener("load", updateNavigation);
navbar.addEventListener("transitionend", updateNavigation);
updateNavigation();

// The guide supplied the carousel markup; these handlers make its arrows work.
var slides = document.querySelectorAll(".slide");
var currentSlide = 0;
function showSlide(index) {
  currentSlide = (index + slides.length) % slides.length;
  slides.forEach(function (slide, i) {
    slide.hidden = i !== currentSlide;
    slide.classList.toggle("active-slide", i === currentSlide);
    slide.setAttribute("aria-label", "Project " + (i + 1) + " of " + slides.length);
  });
}
document.getElementById("prevButton").addEventListener("click", function () {
  showSlide(currentSlide - 1);
});
document.getElementById("nextButton").addEventListener("click", function () {
  showSlide(currentSlide + 1);
});
showSlide(0);
var modal = document.getElementById("contactModal");
var openModal = document.getElementById("openModal");
openModal.addEventListener("click", function () {
  modal.showModal();
  document.body.classList.add("modal-open");
});
document.getElementById("closeModal").addEventListener("click", function () {
  modal.close();
});
modal.addEventListener("click", function (event) {
  var bounds = modal.getBoundingClientRect();
  if (event.target === modal && (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom)) modal.close();
});
modal.addEventListener("close", function () {
  document.body.classList.remove("modal-open");
  openModal.focus();
});

/***/ },

/***/ "../node_modules/css-loader/dist/cjs.js!../node_modules/postcss-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./css/main.scss"
/*!*************************************************************************************************************************************************!*\
  !*** ../node_modules/css-loader/dist/cjs.js!../node_modules/postcss-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./css/main.scss ***!
  \*************************************************************************************************************************************************/
(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "../node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "../node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "../node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/image.jpg */ "./assets/image.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `* {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  font-family: Arial, sans-serif;
  color: #333;
}

.section {
  width: 100%;
  padding: 100px 20px;
}

.section-content {
  max-width: 1100px;
  margin: 0 auto;
  padding-left: 20px;
  padding-right: 20px;
  text-align: center;
}

#navbar {
  position: sticky;
  top: 0;
  width: 100%;
  z-index: 1000;
  background-color: #222;
  padding: 25px 0;
  transition: padding 0.3s ease;
}

.nav-content {
  max-width: 1100px;
  margin: 0 auto;
  padding-left: 20px;
  padding-right: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  color: white;
  font-size: 28px;
  transition: font-size 0.3s ease;
}

.nav-links {
  display: flex;
  gap: 30px;
}

.nav-link {
  color: white;
  text-decoration: none;
  font-size: 18px;
  transition: font-size 0.3s ease, color 0.3s ease;
}

.nav-link:hover,
.nav-link.active {
  color: #4a7cff;
}

#navbar.scrolled {
  padding: 10px 0;
}
#navbar.scrolled .logo {
  font-size: 20px;
}
#navbar.scrolled .nav-link {
  font-size: 14px;
}

.hero {
  height: 100vh;
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: white;
}

.skill-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  margin-top: 50px;
}

.skill-card {
  padding: 30px;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
}

/* Complete the guide's structural styles for the starter project. */
body {
  line-height: 1.6;
}

button {
  font: inherit;
  cursor: pointer;
}

button:focus-visible,
a:focus-visible {
  outline: 3px solid #4a7cff;
  outline-offset: 5px;
}

.section {
  scroll-margin-top: 110px;
}

h1 {
  font-size: clamp(2.5rem, 6vw, 4.5rem);
  margin: 0 0 12px;
}

h2 {
  font-size: 2rem;
  margin: 0 0 32px;
}

.hero {
  min-height: 480px;
  background-color: #222;
}

.hero-content {
  padding: 32px;
  background: rgba(0, 0, 0, 0.7);
  border-radius: 12px;
  animation: fade-in 0.7s ease both;
}

.about-content {
  display: flex;
  align-items: center;
  gap: 40px;
}

.about-content img {
  width: 240px;
  max-width: 100%;
  border-radius: 12px;
}

.about-content p {
  max-width: 640px;
  margin: auto;
}

.projects,
.skills,
.contact {
  background: #f5f5f5;
}

.carousel {
  display: flex;
  align-items: center;
  gap: 20px;
}

.slides {
  flex: 1;
  min-width: 0;
}

.slide {
  animation: fade-in 0.35s ease;
}

.slide[hidden] {
  display: none;
}

.slide img {
  width: 100%;
  max-width: 640px;
  height: 280px;
  -o-object-fit: cover;
     object-fit: cover;
  border-radius: 10px;
}

.carousel-button,
#openModal {
  border: 0;
  border-radius: 6px;
  padding: 12px 18px;
  background: #222;
  color: white;
}

.carousel-button:hover,
#openModal:hover {
  background: #315fc7;
}

video {
  display: block;
  width: 100%;
  max-width: 800px;
  min-height: 240px;
  margin: 24px auto 0;
  background: #222;
}

.modal {
  width: min(500px, calc(100% - 40px));
  padding: 32px;
  border: 0;
  border-radius: 12px;
  color: #333;
}

.modal::backdrop {
  background: rgba(0, 0, 0, 0.65);
}

.modal-content {
  position: relative;
  text-align: center;
  overflow-wrap: anywhere;
}

.close-button {
  position: absolute;
  top: -20px;
  right: -15px;
  background: none;
  border: 0;
  font-size: 2rem;
}

body.modal-open {
  overflow: hidden;
}

footer {
  padding: 32px 20px;
  text-align: center;
  background: #222;
  color: white;
}

.social-links {
  display: flex;
  justify-content: center;
  gap: 24px;
}

.social-links a {
  color: white;
}

@keyframes fade-in {
  from {
    opacity: 0;
    transform: translateY(8px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
@media (max-width: 900px) {
  .nav-content {
    flex-wrap: wrap;
    justify-content: center;
    gap: 12px;
  }

  .nav-links {
    flex-wrap: wrap;
    justify-content: center;
    gap: 16px;
  }

  .section {
    scroll-margin-top: 140px;
  }
}
@media (max-width: 768px) {
  .skill-grid {
    grid-template-columns: 1fr;
  }

  .nav-links {
    gap: 10px;
  }

  .nav-link {
    font-size: 14px;
  }

  .about-content {
    flex-direction: column;
  }
}
@media (max-width: 480px) {
  .section {
    padding: 64px 16px;
  }

  .hero {
    min-height: 520px;
  }

  .carousel {
    gap: 8px;
  }

  .carousel-button {
    padding: 10px;
  }

  .slide img {
    height: 180px;
  }
}
@media (prefers-reduced-motion: reduce) {
  html {
    scroll-behavior: auto;
  }

  *,
*::before,
*::after {
    animation: none !important;
    transition: none !important;
  }
}`, "",{"version":3,"sources":["webpack://./css/main.scss"],"names":[],"mappings":"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","sourcesContent":["$primary-color: #222;\n$secondary-color: #f5f5f5;\n$accent-color: #4a7cff;\n$text-color: #333;\n\n$section-padding: 100px 20px;\n\n@mixin centered-content {\n  max-width: 1100px;\n  margin: 0 auto;\n  padding-left: 20px;\n  padding-right: 20px;\n}\n\n* {\n  box-sizing: border-box;\n}\n\nhtml {\n  scroll-behavior: smooth;\n}\n\nbody {\n  margin: 0;\n  font-family: Arial, sans-serif;\n  color: $text-color;\n}\n\n.section {\n  width: 100%;\n  padding: $section-padding;\n}\n\n.section-content {\n  @include centered-content;\n  text-align: center;\n}\n\n#navbar {\n  position: sticky;\n  top: 0;\n  width: 100%;\n  z-index: 1000;\n\n  background-color: $primary-color;\n\n  padding: 25px 0;\n\n  transition: padding 0.3s ease;\n}\n\n.nav-content {\n  @include centered-content;\n\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.logo {\n  color: white;\n  font-size: 28px;\n\n  transition: font-size 0.3s ease;\n}\n\n.nav-links {\n  display: flex;\n  gap: 30px;\n}\n\n.nav-link {\n  color: white;\n  text-decoration: none;\n\n  font-size: 18px;\n\n  transition: font-size 0.3s ease, color 0.3s ease;\n}\n\n.nav-link:hover,\n.nav-link.active {\n  color: $accent-color;\n}\n\n#navbar.scrolled {\n  padding: 10px 0;\n\n  .logo {\n    font-size: 20px;\n  }\n\n  .nav-link {\n    font-size: 14px;\n  }\n}\n\n.hero {\n  height: 100vh;\n\n  background-image: url(\"../assets/image.jpg\");\n\n  background-size: cover;\n  background-position: center;\n  background-attachment: fixed;\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  text-align: center;\n  color: white;\n}\n\n.skill-grid {\n  display: grid;\n\n  grid-template-columns: repeat(3, 1fr);\n\n  gap: 30px;\n\n  margin-top: 50px;\n}\n\n.skill-card {\n  padding: 30px;\n\n  background-color: white;\n\n  border-radius: 10px;\n\n  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);\n}\n\n/* Complete the guide's structural styles for the starter project. */\nbody {\n  line-height: 1.6;\n}\nbutton {\n  font: inherit;\n  cursor: pointer;\n}\nbutton:focus-visible,\na:focus-visible {\n  outline: 3px solid $accent-color;\n  outline-offset: 5px;\n}\n.section {\n  scroll-margin-top: 110px;\n}\nh1 {\n  font-size: clamp(2.5rem, 6vw, 4.5rem);\n  margin: 0 0 12px;\n}\nh2 {\n  font-size: 2rem;\n  margin: 0 0 32px;\n}\n.hero {\n  min-height: 480px;\n  background-color: $primary-color;\n}\n.hero-content {\n  padding: 32px;\n  background: rgba(0, 0, 0, 0.7);\n  border-radius: 12px;\n  animation: fade-in 0.7s ease both;\n}\n.about-content {\n  display: flex;\n  align-items: center;\n  gap: 40px;\n}\n.about-content img {\n  width: 240px;\n  max-width: 100%;\n  border-radius: 12px;\n}\n.about-content p {\n  max-width: 640px;\n  margin: auto;\n}\n.projects,\n.skills,\n.contact {\n  background: $secondary-color;\n}\n.carousel {\n  display: flex;\n  align-items: center;\n  gap: 20px;\n}\n.slides {\n  flex: 1;\n  min-width: 0;\n}\n.slide {\n  animation: fade-in 0.35s ease;\n}\n.slide[hidden] {\n  display: none;\n}\n.slide img {\n  width: 100%;\n  max-width: 640px;\n  height: 280px;\n  object-fit: cover;\n  border-radius: 10px;\n}\n.carousel-button,\n#openModal {\n  border: 0;\n  border-radius: 6px;\n  padding: 12px 18px;\n  background: $primary-color;\n  color: white;\n}\n.carousel-button:hover,\n#openModal:hover {\n  background: #315fc7;\n}\nvideo {\n  display: block;\n  width: 100%;\n  max-width: 800px;\n  min-height: 240px;\n  margin: 24px auto 0;\n  background: #222;\n}\n.modal {\n  width: min(500px, calc(100% - 40px));\n  padding: 32px;\n  border: 0;\n  border-radius: 12px;\n  color: $text-color;\n}\n.modal::backdrop {\n  background: rgba(0, 0, 0, 0.65);\n}\n.modal-content {\n  position: relative;\n  text-align: center;\n  overflow-wrap: anywhere;\n}\n.close-button {\n  position: absolute;\n  top: -20px;\n  right: -15px;\n  background: none;\n  border: 0;\n  font-size: 2rem;\n}\nbody.modal-open {\n  overflow: hidden;\n}\nfooter {\n  padding: 32px 20px;\n  text-align: center;\n  background: $primary-color;\n  color: white;\n}\n.social-links {\n  display: flex;\n  justify-content: center;\n  gap: 24px;\n}\n.social-links a {\n  color: white;\n}\n@keyframes fade-in {\n  from {\n    opacity: 0;\n    transform: translateY(8px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n\n@media (max-width: 900px) {\n  .nav-content {\n    flex-wrap: wrap;\n    justify-content: center;\n    gap: 12px;\n  }\n  .nav-links {\n    flex-wrap: wrap;\n    justify-content: center;\n    gap: 16px;\n  }\n  .section {\n    scroll-margin-top: 140px;\n  }\n}\n@media (max-width: 768px) {\n  .skill-grid {\n    grid-template-columns: 1fr;\n  }\n\n  .nav-links {\n    gap: 10px;\n  }\n\n  .nav-link {\n    font-size: 14px;\n  }\n\n  .about-content {\n    flex-direction: column;\n  }\n}\n\n@media (max-width: 480px) {\n  .section {\n    padding: 64px 16px;\n  }\n  .hero {\n    min-height: 520px;\n  }\n  .carousel {\n    gap: 8px;\n  }\n  .carousel-button {\n    padding: 10px;\n  }\n  .slide img {\n    height: 180px;\n  }\n}\n@media (prefers-reduced-motion: reduce) {\n  html {\n    scroll-behavior: auto;\n  }\n  *,\n  *::before,\n  *::after {\n    animation: none !important;\n    transition: none !important;\n  }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ },

/***/ "./index.html"
/*!********************!*\
  !*** ./index.html ***!
  \********************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/html-loader/dist/runtime/getUrl.js */ "../node_modules/html-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___HTML_LOADER_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/image.jpg */ "./assets/image.jpg"), __webpack_require__.b);
// Module
var ___HTML_LOADER_REPLACEMENT_0___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_0___);
var code = "<!DOCTYPE html>\n<html lang=\"en\">\n  <head>\n    <meta charset=\"UTF-8\" />\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n\n    <title>Ming's Portfolio</title>\n\n    <!-- Webpack loads main.scss and main.js through src/index.js. -->\n  </head>\n\n  <body>\n    <!-- Navigation -->\n    <header id=\"navbar\">\n      <nav aria-label=\"Main navigation\">\n        <div class=\"nav-content\">\n          <div class=\"logo\">Michael</div>\n\n          <div class=\"nav-links\">\n            <a href=\"#home\" class=\"nav-link active\">Home</a>\n            <a href=\"#about\" class=\"nav-link\">About</a>\n            <a href=\"#projects\" class=\"nav-link\">Projects</a>\n            <a href=\"#skills\" class=\"nav-link\">Skills</a>\n            <a href=\"#video\" class=\"nav-link\">Video</a>\n            <a href=\"#contact\" class=\"nav-link\">Contact</a>\n          </div>\n        </div>\n      </nav>\n    </header>\n\n    <main>\n      <!-- Home -->\n      <section id=\"home\" class=\"section hero\">\n        <div class=\"hero-content\">\n          <h1>Hi, I'm Michael</h1>\n          <p>Computer Engineering Student at UIUC</p>\n        </div>\n      </section>\n\n      <!-- About -->\n      <section id=\"about\" class=\"section about\">\n        <div class=\"section-content\">\n          <h2>About Me</h2>\n\n          <div class=\"about-content\">\n            <img\n              src=\"" + ___HTML_LOADER_REPLACEMENT_0___ + "\"\n              alt=\"Starter image placeholder — replace with your profile photo\"\n            />\n\n            <div>\n              <p>\n                I'm a Computer Engineering student at the University of Illinois\n                Urbana-Champaign interested in software engineering, artificial\n                intelligence, and web development.\n              </p>\n            </div>\n          </div>\n        </div>\n      </section>\n\n      <!-- Projects -->\n      <section id=\"projects\" class=\"section projects\">\n        <div class=\"section-content\">\n          <h2>Projects</h2>\n\n          <div class=\"carousel\" role=\"region\" aria-label=\"Projects carousel\">\n            <button\n              id=\"prevButton\"\n              class=\"carousel-button\"\n              type=\"button\"\n              aria-label=\"Previous project\"\n            >\n              &#10094;\n            </button>\n\n            <div class=\"slides\" aria-live=\"polite\">\n              <div class=\"slide active-slide\">\n                <img\n                  src=\"" + ___HTML_LOADER_REPLACEMENT_0___ + "\"\n                  alt=\"Placeholder image for project 1\"\n                />\n\n                <h3>Project One</h3>\n\n                <p>Description of my first project.</p>\n              </div>\n\n              <div class=\"slide\" hidden>\n                <img\n                  src=\"" + ___HTML_LOADER_REPLACEMENT_0___ + "\"\n                  alt=\"Placeholder image for project 2\"\n                />\n\n                <h3>Project Two</h3>\n\n                <p>Description of my second project.</p>\n              </div>\n\n              <div class=\"slide\" hidden>\n                <img\n                  src=\"" + ___HTML_LOADER_REPLACEMENT_0___ + "\"\n                  alt=\"Placeholder image for project 3\"\n                />\n\n                <h3>Project Three</h3>\n\n                <p>Description of my third project.</p>\n              </div>\n            </div>\n\n            <button\n              id=\"nextButton\"\n              class=\"carousel-button\"\n              type=\"button\"\n              aria-label=\"Next project\"\n            >\n              &#10095;\n            </button>\n          </div>\n        </div>\n      </section>\n\n      <!-- Skills -->\n      <section id=\"skills\" class=\"section skills\">\n        <div class=\"section-content\">\n          <h2>Skills & Interests</h2>\n\n          <div class=\"skill-grid\">\n            <div class=\"skill-card\">\n              <h3>Software Engineering</h3>\n              <p>Java, Python, C++, Git, Android Development</p>\n            </div>\n\n            <div class=\"skill-card\">\n              <h3>Artificial Intelligence</h3>\n              <p>Machine Learning, NLP, LLMs</p>\n            </div>\n\n            <div class=\"skill-card\">\n              <h3>Web Development</h3>\n              <p>HTML, CSS, SCSS, JavaScript</p>\n            </div>\n          </div>\n        </div>\n      </section>\n\n      <!-- Video -->\n      <section id=\"video\" class=\"section video-section\">\n        <div class=\"section-content\">\n          <h2>Video</h2>\n\n          <p>\n            Add your own video to <code>src/assets/video.mp4</code>, then\n            uncomment the source below.\n          </p>\n          <video controls preload=\"metadata\" aria-label=\"Portfolio video\">\n            <!-- <source src=\"assets/video.mp4\" type=\"video/mp4\"> -->\n\n            Your browser does not support video.\n          </video>\n        </div>\n      </section>\n\n      <!-- Contact -->\n      <section id=\"contact\" class=\"section contact\">\n        <div class=\"section-content\">\n          <h2>Contact Me</h2>\n\n          <p>Want to learn more about me?</p>\n\n          <button id=\"openModal\" type=\"button\">Contact Information</button>\n        </div>\n      </section>\n    </main>\n\n    <!-- Native dialog provides focus trapping and Escape-key dismissal. -->\n    <dialog id=\"contactModal\" class=\"modal\" aria-labelledby=\"contactTitle\">\n      <div class=\"modal-content\">\n        <button\n          id=\"closeModal\"\n          class=\"close-button\"\n          type=\"button\"\n          aria-label=\"Close contact information\"\n        >\n          &times;\n        </button>\n\n        <h2 id=\"contactTitle\">Contact</h2>\n\n        <p>Email: your-email@example.com</p>\n\n        <p>LinkedIn</p>\n\n        <p>GitHub</p>\n      </div>\n    </dialog>\n\n    <!-- Footer -->\n    <footer>\n      <div class=\"social-links\">\n        <a href=\"#\">GitHub</a>\n\n        <a href=\"#\">LinkedIn</a>\n      </div>\n\n      <p>© 2026 Michael</p>\n    </footer>\n  </body>\n</html>\n";
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);

/***/ },

/***/ "./css/main.scss"
/*!***********************!*\
  !*** ./css/main.scss ***!
  \***********************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "../node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "../node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "../node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "../node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/postcss-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./main.scss */ "../node_modules/css-loader/dist/cjs.js!../node_modules/postcss-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./css/main.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ },

/***/ "../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"
/*!*****************************************************************************!*\
  !*** ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \*****************************************************************************/
(module) {

"use strict";


var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ },

/***/ "../node_modules/style-loader/dist/runtime/insertBySelector.js"
/*!*********************************************************************!*\
  !*** ../node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \*********************************************************************/
(module) {

"use strict";


var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ },

/***/ "../node_modules/style-loader/dist/runtime/insertStyleElement.js"
/*!***********************************************************************!*\
  !*** ../node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \***********************************************************************/
(module) {

"use strict";


/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ },

/***/ "../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"
/*!***********************************************************************************!*\
  !*** ../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \***********************************************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ },

/***/ "../node_modules/style-loader/dist/runtime/styleDomAPI.js"
/*!****************************************************************!*\
  !*** ../node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \****************************************************************/
(module) {

"use strict";


/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ },

/***/ "../node_modules/style-loader/dist/runtime/styleTagTransform.js"
/*!**********************************************************************!*\
  !*** ../node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \**********************************************************************/
(module) {

"use strict";


/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ },

/***/ "./assets/image.jpg"
/*!**************************!*\
  !*** ./assets/image.jpg ***!
  \**************************/
(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "f7c3d1bc154868c1bcc8.jpg";

/***/ }

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	const __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		const cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		const module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		if (!(moduleId in __webpack_modules__)) {
/******/ 			delete __webpack_module_cache__[moduleId];
/******/ 			const e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
/******/ 		}
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = (module) => {
/******/ 		const getter = module && module.__esModule ?
/******/ 			() => (module['default']) :
/******/ 			() => (module);
/******/ 		__webpack_require__.d(getter, { a: getter });
/******/ 		return getter;
/******/ 	};
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	// define getter/value functions for harmony exports
/******/ 	__webpack_require__.d = (exports, definition) => {
/******/ 		for(var key in definition) {
/******/ 			if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 				Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 			}
/******/ 		}
/******/ 	};
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	__webpack_require__.g = (function() {
/******/ 		if (typeof globalThis === 'object') return globalThis;
/******/ 		try {
/******/ 			return this || new Function('return this')();
/******/ 		} catch (e) {
/******/ 			if (typeof window === 'object') return window;
/******/ 		}
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop));
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = (exports) => {
/******/ 		Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		let scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		const document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript?.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				const scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					let i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^https?:/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/^blob:|[?#].*$/g, "").replace(/\/[^/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = (typeof document !== 'undefined' && document.baseURI) || self.location.href;
/******/ 		
/******/ 		// no installed chunks
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	__webpack_require__.nc = undefined;
/******/ 	
/************************************************************************/
let __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be in strict mode.
(() => {
"use strict";
/*!******************!*\
  !*** ./index.js ***!
  \******************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.html */ "./index.html");
/* harmony import */ var _css_main_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./css/main.scss */ "./css/main.scss");
/* harmony import */ var _js_main_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/main.js */ "./js/main.js");
/* harmony import */ var _js_main_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_js_main_js__WEBPACK_IMPORTED_MODULE_2__);
/*
 * This is the main entry point for Webpack, the compiler & dependency loader.
 * All files that are necessary for your web page and need to be 'watched' for changes should be included here!
 */

// HTML Files


// Stylesheets


// Scripts

})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map