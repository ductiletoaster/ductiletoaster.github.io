/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.l = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };

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

/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};

/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/build/";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

/**
 * Define Server Class
 * Containts general system functions for access server resources
 */
Server = function() { /* No Initialization */ }

/**
 * Allows the preloading of images
 * @param: (string) email
 */
Server.prototype.preload = function() {

	// Create image array
	var images = new Array();

	for (i = 0; i < this.preload.arguments.length; i++) {
		images[i] = new Image();
		images[i].src = this.preload.arguments[i];
	}
	return images; 
}

/**
 * Execute after document has loaded
 */
$(document).ready(function() {

	// Site constants
	var HOST = window.location.hostname;

	// Hide fade-in class and show on window load
	$('.fade-in').hide();

	// Preload images on index page
	var server = new Server();
/*
	var img = server.preload(
//		'//' + HOST + '/assets/images/profile.jpg',
//		'//' + HOST + '/assets/images/profile-wide.jpg'
//		'//' + HOST + '/assets/images/paperstack.png'
	);
*/
});

/**
 * Execute after window is done loading
 */
$(window).load(function() {
	
	// Wait 1/2 second after load to complete
	setTimeout(function(){

		// Hide fade-in class and show on window load
		$('.fade-in').fadeIn();

	}, 500);

});

/***/ }
/******/ ]);