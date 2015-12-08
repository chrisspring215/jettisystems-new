buildGlobalNav()
buildAnalytics()



// Builds out the global Navigation
function buildGlobalNav() {

	// Sets Home Button
	document.getElementById('globalNavHomeButton').innerHTML = 'Home';
	document.getElementById('globalNavHomeButton').setAttribute('href', 'index.html');

	// Sets First Link Button
	document.getElementById('globalNavfirstButton').innerHTML = 'First';
	document.getElementById('globalNavfirstButton').setAttribute('href', 'dogs.html');

	// Sets Second Link Button
	document.getElementById('globalNavsecondButton').innerHTML = 'Second';
	document.getElementById('globalNavsecondButton').setAttribute('href', 'cats.html');
}


// Builds out the script tag for analytics
function buildAnalytics() {

	document.getElementById('analyticsContainer').innerHTML = "\
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){\
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),\
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)\
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');\
\
ga('create', 'UA-64533681-1', 'auto');\
ga('send', 'pageview');";
	
}

function buildTypeface() {
	getElementsByName('typeface').setAttribute('href', "<link href='https://fonts.googleapis.com/css?family=Roboto+Condensed:400,300,300italic,400italic,700,700italic' rel='stylesheet' type='text/css'>")
}