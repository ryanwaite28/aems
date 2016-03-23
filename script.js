// New Script //

// Main Angular Application
var App = angular.module("myApp", []);

// Master Angular Controller
App.controller('masterCtrl', function($scope) {



});

$(document).ready(function(){

	var menuIcon = $('#menu-icon');
	var topBar = $('#top-bar');
	var pageLinks = $('#page-links');
	var socialLinks = $('#social-links');

	var hidden = true;

	menuIcon.click(function(){

		if(hidden == true){
			//topBar.css('height', '65vh');
			pageLinks.show('fast');
			socialLinks.show('fast');
			hidden = false;
		}
		else {
			pageLinks.hide('fast');
			socialLinks.hide('fast');
			//topBar.css('height', '56px');
			hidden = true;
		}

	});

	$(window).resize(function(){

      var cWidth = $(window).width();

      if(cWidth >= 925) {
				pageLinks.show('fast');
				socialLinks.show('fast');
      }
      else if(cWidth < 925) {
				pageLinks.hide('fast');
				socialLinks.hide('fast');
      }

	})


})
