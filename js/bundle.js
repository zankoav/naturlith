var app =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _menu = __webpack_require__(1);

/**
 * Created by alexandrzanko on 1/23/18.
 */
jQuery(document).ready(function ($) {
  (0, _menu.menu)($);
});

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.menu = menu;

function menu($) {
  /**
   *  Drop Down Menu
   */
  var scrollTopY = 300; // let lastX = 0,
  //     lastCloseX = 1000;
  //
  // let startMove = false;
  // let isCloseMenu = true;

  $(window).on('scroll', function () {
    if ($(window).scrollTop() > scrollTopY) {
      $('#header-drop-down').fadeIn();
    } else {
      $('#header-drop-down').fadeOut();
    }
  });
  $('.menu-button').click(function (event) {
    event.preventDefault();
    openMenu();
  });
  $('#mobile-menu').click(function (event) {
    if (event.target.tagName.toLowerCase() === 'menu') {
      closeMenu();
    }
  });
  $('#back-button').click(function () {
    closeMenu();
  });
  $('.mobile-menu-left .menu-item-has-children').click(function (event) {
    if (event.target.tagName.toLowerCase() !== 'a') {
      $(this).toggleClass('open');
    }
  }); // $('.mobile-menu-left').bind('touchmove', function (e) {
  //     var currentX = e.originalEvent.touches[0].clientX || e.originalEvent.changedTouches[0].clientX;
  //     touchCloseMenu(currentX);
  // });
  //
  // $('.mobile-menu-left').mousedown(function (e) {
  //     startMove = true;
  // });
  //
  // $('.mobile-menu-left').mousemove(function (e) {
  //     if (startMove) {
  //         touchCloseMenu(e.clientX);
  //     }
  // });
  //
  // $(document).mouseup(function () {
  //     startMove = false;
  //     lastX = 0;
  // });
  //
  // $(document).bind('touchend', function () {
  //     lastX = 0;
  //     lastCloseX = 1000;
  // });
  //
  // $(document).bind('touchmove', function (e) {
  //     var currentX = e.originalEvent.touches[0].clientX || e.originalEvent.changedTouches[0].clientX;
  //     if (isCloseMenu) {
  //         if (currentX > lastCloseX) {
  //             openMenu();
  //         }
  //         lastCloseX = currentX;
  //     }
  // });
  // function touchCloseMenu(currentX) {
  //     if (currentX < lastX) {
  //         closeMenu();
  //     }
  //     lastX = currentX;
  // }

  function closeMenu() {
    $("body").removeClass('open-menu');
    $('#mobile-menu').fadeOut();
    $('.mobile-menu-left').removeClass('open');
  }

  function openMenu() {
    $('body').addClass('open-menu');
    $('#mobile-menu').fadeIn();
    $('.mobile-menu-left').addClass('open');
  }
}

;

/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map