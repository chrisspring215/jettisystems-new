buildGlobalNav()

// Builds out the global Navigation
function buildGlobalNav() {

	document.getElementById('globalNavContainer').innerHTML = '\
	<div class="title-bar" data-responsive-toggle="global-navigation" data-hide-for="medium">\
	  <button class="menu-icon" type="button" data-toggle></button>\
	  <div class="title-bar-title">Menu</div>\
	</div>\
	<div class="top-bar" id="global-navigation">\
	  <div class="top-bar-left">\
	    <ul class="dropdown menu vertical medium-horizontal" data-dropdown-menu>\
	      <li><a href="#" id="globalNavHomeButton" onclick="indexPush()">Site Title</a></li>\
	    </ul>\
	  </div>\
	  <div class="top-bar-right">\
	    <ul class="dropdown menu vertical medium-horizontal" data-dropdown-menu>\
	      <li><a href="#" id="globalNavfirstButton" onclick="globalNavfirstPush()">Two</a></li>\
	      <li><a href="#" id="globalNavsecondButton"  onclick="globalNavsecondPush()">Three</a></li>\
	    </ul>\
	  </div>\
	</div>';

	// Sets Home Button
	document.getElementById('globalNavHomeButton').innerHTML = 'Jetti';
	document.getElementById('globalNavHomeButton').setAttribute('href', 'index.html');

	// Sets First Link Button
	document.getElementById('globalNavfirstButton').innerHTML = 'First';
	document.getElementById('globalNavfirstButton').setAttribute('href', 'dogs.html');

	// Sets Second Link Button
	document.getElementById('globalNavsecondButton').innerHTML = 'Second';
	document.getElementById('globalNavsecondButton').setAttribute('href', 'cats.html');
}

function indexPush() {
	document.getElementById('globalNavHomeButton').setAttribute('class', 'active');
}