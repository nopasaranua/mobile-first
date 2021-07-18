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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/assets/js/app.js":
/*!******************************!*\
  !*** ./src/assets/js/app.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("$(function() {\r\nconst nav = $('#nav')\r\nconst toggleBtn = $('#toggleBtn')\r\nconst header = $('#header')\r\nconst intro = $('#intro')\r\nconst body = $('body')\r\n\r\n    /* Nav Toggle */\r\n    toggleBtn.on('click', function() {\r\n        nav.toggleClass('show')\r\n        $(this).toggleClass('show')\r\n        body.toggleClass('no-scroll')\r\n    })\r\n\r\n    /* Header fixed */\r\n    $(window).on('scroll resize load', function() {\r\n        let scrollPos = $(window).scrollTop()\r\n        let introH = intro.innerHeight()\r\n        if( scrollPos > introH ) {\r\n            header.addClass('fixed')\r\n        } else {\r\n             header.removeClass('fixed')\r\n        }\r\n    })\r\n\r\n    /* Smooth scroll */\r\n    $('[data-scroll]').on('click', function(event) {\r\n        event.preventDefault()\r\n\r\n        let elementId = $(this).data('scroll');\r\n        let elementOffset = $(elementId).offset().top;\r\n\r\n        nav.removeClass('show')\r\n        toggleBtn.removeClass('show')\r\n        body.removeClass('no-scroll')\r\n\r\n        $('html, body').animate({\r\n            scrollTop: elementOffset -80\r\n        }, 700);\r\n    });\r\n\r\n    $('.servic__item').click(function(event) {\r\n        $(this).toggleClass('active')\r\n    })\r\n\r\n\r\n})\r\n\r\nconst modalBtn = document.querySelectorAll('[data-modal]')\r\nconst modalClose = document.querySelectorAll('.modal__close')\r\nconst modal = document.querySelectorAll('.modal')\r\nconst body = document.body\r\n\r\n\r\nmodalBtn.forEach(item => {\r\n    item.addEventListener('click', event => {\r\n        let $this = event.currentTarget;\r\n        let modalId = $this.getAttribute('data-modal')\r\n        let modal = document.getElementById(modalId)\r\n        let modalContent = modal.querySelector('.modal__content');\r\n\r\n        modalContent.addEventListener('click', event => {\r\n            event.stopPropagation();\r\n        })\r\n\r\n        modal.classList.add('show')\r\n        body.classList.add('no-scroll')\r\n    });\r\n});\r\n\r\nmodalClose.forEach( item => {\r\n    item.addEventListener('click', event => {\r\n        let currentModal = event.currentTarget.closest('.modal')\r\n\r\n        closeModal(currentModal)\r\n    });\r\n});\r\n\r\nmodal.forEach( item => {\r\n    item.addEventListener('click', event => {\r\n        let currentModal = event.currentTarget\r\n\r\n        closeModal(currentModal)\r\n    });\r\n});\r\n\r\nfunction closeModal(currentModal) {\r\n    let modalContent = currentModal.querySelector('.modal__content')\r\n    modalContent.removeAttribute('style')\r\n\r\n    setTimeout(() => {\r\n        currentModal.classList.remove('show')\r\n        body.classList.remove('no-scroll')\r\n    }, 200);\r\n}\n\n//# sourceURL=webpack:///./src/assets/js/app.js?");

/***/ }),

/***/ "./src/assets/js/slick.js":
/*!********************************!*\
  !*** ./src/assets/js/slick.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("$(function() {\r\nconst introSlider = $('.intro__slider')\r\nconst slider = $('.slider__inner')\r\n\r\nintroSlider.slick({\r\n    arrows: false,\r\n    dots: true,\r\n    slidesToShow: 1,\r\n    slidesToScroll: 1,\r\n\tmobileFirst: true,\r\n    responsive: [\r\n      {\r\n        breakpoint: 575,\r\n        settings: {\r\n          arrows: true,\r\n        }\r\n      }\r\n    ]\r\n  });\r\n\r\n  slider.slick({\r\n    arrows: false,\r\n    dots: true,\r\n    slidesToShow: 1,\r\n    slidesToScroll: 1,\r\n\t  mobileFirst: true,\r\n  });\r\n\r\n})\r\n\r\n\n\n//# sourceURL=webpack:///./src/assets/js/slick.js?");

/***/ }),

/***/ 0:
/*!*************************************************************!*\
  !*** multi ./src/assets/js/app.js ./src/assets/js/slick.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! C:\\My_files\\Project\\mobile-First\\src\\assets\\js\\app.js */\"./src/assets/js/app.js\");\nmodule.exports = __webpack_require__(/*! C:\\My_files\\Project\\mobile-First\\src\\assets\\js\\slick.js */\"./src/assets/js/slick.js\");\n\n\n//# sourceURL=webpack:///multi_./src/assets/js/app.js_./src/assets/js/slick.js?");

/***/ })

/******/ });