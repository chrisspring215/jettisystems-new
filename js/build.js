buildGlobalNav()
buildAnalytics()



// Builds out the global Navigation
function buildGlobalNav() {

	// Sets Home Button
	document.getElementById('globalNavHomeButton').innerHTML = 'Home';
	document.getElementById('globalNavHomeButton').setAttribute('href', 'index.html');

	// Sets First Link Button
	document.getElementById('globalNavfirstButton').innerHTML = 'TOUR';
	document.getElementById('globalNavfirstButton').setAttribute('href', 'restaurant-rewards-program.html');

	// Sets Second Link Button Text
	document.getElementById('globalNavsecondButton').innerHTML = 'BENEFITS';
	//document.getElementById('globalNavsecondButton').setAttribute('href', '');

	// Sets Second Link Button 2.1 Text
	document.getElementById('globalNavsecond2-1Dropdown').innerHTML = 'CUSTOMER EMAILS';
	document.getElementById('globalNavsecond2-1Dropdown').setAttribute('href', 'restaurant-rewards-benefits-customer-emails.html');
	var benefitsSubNav1 = document.getElementById('benefitsSubNav1');
	if (benefitsSubNav1 != null) document.getElementById('benefitsSubNav1').innerHTML = '<button class="button expanded active">1. GATHER EMAILS</button>';
	if (benefitsSubNav1 != null) document.getElementById('benefitsSubNav1').setAttribute('href', 'restaurant-rewards-benefits-customer-emails.html');

	// Sets Second Link Button 2.2 Text
	document.getElementById('globalNavsecond2-2Dropdown').innerHTML = 'DRIVE UPSELLING';
	document.getElementById('globalNavsecond2-2Dropdown').setAttribute('href', 'restaurant-rewards-benefits-customer-upselling.html');
	var benefitsSubNav2 = document.getElementById('benefitsSubNav2');
	if (benefitsSubNav2 != null) document.getElementById('benefitsSubNav2').innerHTML = '<button class="button expanded active">2. DRIVE UPSELLING</button>';
	if (benefitsSubNav2 != null) document.getElementById('benefitsSubNav2').setAttribute('href', 'restaurant-rewards-benefits-customer-upselling.html');

	// Sets Second Link Button 2.2 Text
	document.getElementById('globalNavsecond2-3Dropdown').innerHTML = 'BUILD LOYALTY';
	document.getElementById('globalNavsecond2-3Dropdown').setAttribute('href', 'restaurant-rewards-benefits-build-brand-loyalty.html');
	var benefitsSubNav3 = document.getElementById('benefitsSubNav3');
	if (benefitsSubNav3 != null) document.getElementById('benefitsSubNav3').innerHTML = '<button class="button expanded active">2. BUILD LOYALTY</button>';
	if (benefitsSubNav3 != null) document.getElementById('benefitsSubNav3').setAttribute('href', 'restaurant-rewards-benefits-build-brand-loyalty.html');


	// Sets Third Link Button
	document.getElementById('globalNavthirdButton').innerHTML = 'PRICING';
	document.getElementById('globalNavthirdButton').setAttribute('href', 'restaurant-rewards-pricing.html');

	// Sets Fourth Link Button
	document.getElementById('globalNavfourthButton').innerHTML = 'CONTACT US';
	document.getElementById('globalNavfourthButton').setAttribute('href', 'restaurant-rewards-contact-us.html');

	// Sets Fith Link Button
	document.getElementById('globalNavfithButton').innerHTML = 'LOG IN';
	document.getElementById('globalNavfithButton').setAttribute('href', 'cats.html');

	// Sets Sixth Link Button
	document.getElementById('globalNavsixthButton').innerHTML = 'INSIGHTS';
	document.getElementById('globalNavsixthButton').setAttribute('href', 'restaurant-rewards-insights-index.html');
}


// Builds out the script tag for analytics
function buildAnalytics() {

	document.getElementById('analyticsContainer').innerHTML = '!function(e,a,t,n,c,o,s){e.GoogleAnalyticsObject=c,e[c]=e[c]||function(){(e[c].q=e[c].q||[]).push(arguments)},e[c].l=1*new Date,o=a.createElement(t),s=a.getElementsByTagName(t)[0],o.async=1,o.src=n,s.parentNode.insertBefore(o,s)}(window,document,"script","//www.google-analytics.com/analytics.js","ga"),ga("create","UA-64533681-1","auto"),ga("send","pageview");';
	
}
