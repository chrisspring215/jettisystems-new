
buildAnalytics()
buildFooter()
buildFonts()

function buildFonts() {
	document.getElementById('typeface').setAttribute('href', 'https://fonts.googleapis.com/css?family=Roboto+Condensed:400,700italic,700,400italic,300italic,300|Sansita+One');
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

function openWindow() {
	window.open('restaurant-rewards-program-tour.html')
}

function closeWindow() {
	window.close()
}

function buildSlideshow () {
	var slideSource = document.getElementById('slide').getAttribute('src');
	var splitSource = slideSource.split('');
	var slideNumber = Number(splitSource[16]);

	if (slideNumber === 1) {document.getElementById('backbutton').setAttribute('class', 'button expanded disabled')};
}

function next() {

	var slideSource = document.getElementById('slide').getAttribute('src');
	var splitSource = slideSource.split('');
	var slideNumber = Number(splitSource[16]);
	var newSlideNumber = slideNumber + 1;
	splitSource[16] = newSlideNumber;
	var newSource = splitSource.join('');	
	document.getElementById('slide').setAttribute('src', newSource)

	if (newSlideNumber != 1) {document.getElementById('backbutton').setAttribute('class', 'button expanded')};

}

function back() {

	var slideSource = document.getElementById('slide').getAttribute('src');
	var splitSource = slideSource.split('');
	var slideNumber = Number(splitSource[16]);
	var newSlideNumber = slideNumber - 1;
	splitSource[16] = newSlideNumber;
	var newSource = splitSource.join('');	
	document.getElementById('slide').setAttribute('src', newSource)

	if (newSlideNumber === 1) {document.getElementById('backbutton').setAttribute('class', 'button expanded disabled')};
}










