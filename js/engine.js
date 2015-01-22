//get the time
var mytime= new Date();
var thehour=mytime.getHours();
var theminute=mytime.getMinutes();
if (theminute < 10) {
theminute = "0" + theminute;
}
if (thehour < 10) {
thehour = "0" + thehour;
}
var now=thehour+""+theminute;
var filetype = '.jpg';
var img_url = 'images/';

//refresh the page on the minute
function startTimer() {
	var now = mytime;
	var minutes = now.getMinutes();
	var seconds = now.getSeconds();
	setTimeout('refresh()',(60 - seconds) * 1000);
}

function refresh() {
	window.location.href = 'http://clockograph.com';
}

startTimer();


(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-19132466-6', 'auto');
ga('send', 'pageview');