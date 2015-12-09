buildGlobalNav()
buildAnalytics()
buildTypeface()



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

	document.getElementById('analyticsContainer').innerHTML = '!function(e,a,t,n,c,o,s){e.GoogleAnalyticsObject=c,e[c]=e[c]||function(){(e[c].q=e[c].q||[]).push(arguments)},e[c].l=1*new Date,o=a.createElement(t),s=a.getElementsByTagName(t)[0],o.async=1,o.src=n,s.parentNode.insertBefore(o,s)}(window,document,"script","//www.google-analytics.com/analytics.js","ga"),ga("create","UA-64533681-1","auto"),ga("send","pageview");';
	
}

function buildTypeface() {
	document.getElementById('typeface').setAttribute('href', 'https://fonts.googleapis.com/css?family=Roboto+Condensed:400,300,300italic,400italic,700,700italic')
}