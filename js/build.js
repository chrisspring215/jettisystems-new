
buildWebfonts()
buildGlobalNav()
buildAnalytics()
buildFooter()

// Builds out the Web fonts
function buildWebfonts() {
	document.getElementById('typeface').setAttribute('href', 'https://fonts.googleapis.com/css?family=Roboto+Condensed:400,300,300italic,400italic,700,700italic|Sansita+One')
}

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
	if (benefitsSubNav1 != null) document.getElementById('benefitsSubNav1').innerHTML = '<button class="button expanded">1. GATHER EMAILS</button>';
	if (benefitsSubNav1 != null) document.getElementById('benefitsSubNav1').setAttribute('href', 'restaurant-rewards-benefits-customer-emails.html');

	// Sets Second Link Button 2.2 Text
	document.getElementById('globalNavsecond2-2Dropdown').innerHTML = 'DRIVE UPSELLING';
	document.getElementById('globalNavsecond2-2Dropdown').setAttribute('href', 'restaurant-rewards-benefits-customer-upselling.html');
	var benefitsSubNav2 = document.getElementById('benefitsSubNav2');
	if (benefitsSubNav2 != null) document.getElementById('benefitsSubNav2').innerHTML = '<button class="button expanded">2. DRIVE UPSELLING</button>';
	if (benefitsSubNav2 != null) document.getElementById('benefitsSubNav2').setAttribute('href', 'restaurant-rewards-benefits-customer-upselling.html');

	// Sets Second Link Button 2.2 Text
	document.getElementById('globalNavsecond2-3Dropdown').innerHTML = 'BUILD LOYALTY';
	document.getElementById('globalNavsecond2-3Dropdown').setAttribute('href', 'restaurant-rewards-benefits-build-brand-loyalty.html');
	var benefitsSubNav3 = document.getElementById('benefitsSubNav3');
	if (benefitsSubNav3 != null) document.getElementById('benefitsSubNav3').innerHTML = '<button class="button expanded">3. BUILD LOYALTY</button>';
	if (benefitsSubNav3 != null) document.getElementById('benefitsSubNav3').setAttribute('href', 'restaurant-rewards-benefits-build-brand-loyalty.html');


	// Sets Third Link Button
	document.getElementById('globalNavthirdButton').innerHTML = 'PRICING';
	document.getElementById('globalNavthirdButton').setAttribute('href', 'restaurant-rewards-pricing.html');

	// Sets Fourth Link Button
	document.getElementById('globalNavfourthButton').innerHTML = 'CONTACT US';
	document.getElementById('globalNavfourthButton').setAttribute('href', 'restaurant-rewards-contact-us.html');

	// Sets Sixth Link Button
	document.getElementById('globalNavsixthButton').innerHTML = 'INSIGHTS';
	document.getElementById('globalNavsixthButton').setAttribute('href', 'restaurant-rewards-insights-index.html');

	// Sets Seventh Link Button Text
	document.getElementById('globalNavseventhButton').innerHTML = 'MEMBERS';
	//document.getElementById('globalNavsecondButton').setAttribute('href', '');

	// Sets Seventh Link Button 2.1 Text
	document.getElementById('globalNavseventh2-1Dropdown').innerHTML = 'LOG IN TO ADMIN';
	document.getElementById('globalNavseventh2-1Dropdown').setAttribute('href', 'https://www.jettiup.com/admin');

	// Sets Seventh Link Button 2.2 Text
	document.getElementById('globalNavseventh2-2Dropdown').innerHTML = 'BILLING';
	document.getElementById('globalNavseventh2-2Dropdown').setAttribute('href', 'https://jetti.rerunapp.com/myaccount');
}


// Builds out the script tag for analytics
function buildAnalytics() {

	document.getElementById('analyticsContainer').innerHTML = '!function(e,a,t,n,c,o,s){e.GoogleAnalyticsObject=c,e[c]=e[c]||function(){(e[c].q=e[c].q||[]).push(arguments)},e[c].l=1*new Date,o=a.createElement(t),s=a.getElementsByTagName(t)[0],o.async=1,o.src=n,s.parentNode.insertBefore(o,s)}(window,document,"script","//www.google-analytics.com/analytics.js","ga"),ga("create","UA-64533681-1","auto"),ga("send","pageview");';
	
}

// Builds footer links
function buildFooter() {
	// Sets first footer link
	document.getElementById('footerNav1').innerHTML = document.getElementById('globalNavfirstButton').innerHTML;
	document.getElementById('footerNav1').setAttribute('href', document.getElementById('globalNavfirstButton').getAttribute('href'));

	// Sets second footer link
	document.getElementById('footerNav2').innerHTML = document.getElementById('globalNavsecond2-1Dropdown').innerHTML;
	document.getElementById('footerNav2').setAttribute('href', document.getElementById('globalNavsecond2-1Dropdown').getAttribute('href'));

	// Sets thrid footer link
	document.getElementById('footerNav3').innerHTML = document.getElementById('globalNavsecond2-2Dropdown').innerHTML;
	document.getElementById('footerNav3').setAttribute('href', document.getElementById('globalNavsecond2-2Dropdown').getAttribute('href'));

	// Sets forth footer link
	document.getElementById('footerNav4').innerHTML = document.getElementById('globalNavsecond2-3Dropdown').innerHTML;
	document.getElementById('footerNav4').setAttribute('href', document.getElementById('globalNavsecond2-3Dropdown').getAttribute('href'));

	// Sets fith footer link
	document.getElementById('footerNav5').innerHTML = document.getElementById('globalNavthirdButton').innerHTML;
	document.getElementById('footerNav5').setAttribute('href', document.getElementById('globalNavthirdButton').getAttribute('href'));

	// Sets sixth footer link
	document.getElementById('footerNav6').innerHTML = document.getElementById('globalNavfourthButton').innerHTML;
	document.getElementById('footerNav6').setAttribute('href', document.getElementById('globalNavfourthButton').getAttribute('href'));

	// Sets seventh footer link
	document.getElementById('footerNav7').innerHTML = document.getElementById('globalNavsixthButton').innerHTML;
	document.getElementById('footerNav7').setAttribute('href', document.getElementById('globalNavsixthButton').getAttribute('href'));

	// Sets eighth footer link
	document.getElementById('footerNav8').innerHTML = 'TERMS OF SERVICE';
	document.getElementById('footerNav8').setAttribute('href', 'terms-of-service.html');

	// Sets ninth footer link
	document.getElementById('footerNav9').innerHTML = 'BILLING';
	document.getElementById('footerNav9').setAttribute('href', 'https://jetti.rerunapp.com/myaccount');

	// Sets tenth footer link
	document.getElementById('footerNav10').innerHTML = 'FACEBOOK';
	document.getElementById('footerNav10').setAttribute('href', 'https://www.facebook.com/jettirewards/');

	// Sets eleventh footer link
	document.getElementById('footerNav11').innerHTML = 'TWITTER';
	document.getElementById('footerNav11').setAttribute('href', 'https://twitter.com/jettisystems');

	// Sets 12th footer link
	document.getElementById('footerNav12').innerHTML = 'GOOGLE +';
	document.getElementById('footerNav12').setAttribute('href', 'https://plus.google.com/+Jettisystems1/about');
}

