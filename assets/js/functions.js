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

	// Preload images on index page
	var server = new Server();
	server.preload(
		'//' + HOST + '/assets/images/profile.png',
		'//' + HOST + '/assets/images/profile-wide.png'
	);

});