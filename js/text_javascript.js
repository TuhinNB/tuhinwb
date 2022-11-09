var _Hasync= _Hasync|| [];
_Hasync.push(['Histats.start', '1,4692240,4,511,95,18,00000000']);
_Hasync.push(['Histats.fasi', '1']);
_Hasync.push(['Histats.track_hits', '']);
(function() {
var hs = document.createElement('script'); hs.type = 'text/javascript'; hs.async = true;
hs.src = ('//s10.histats.com/js15_as.js');
(document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(hs);
})();



//<![CDATA[

var uri = window.location.toString();

if (uri.indexOf("%3D","%3D") > 0) {

var clean_uri = uri.substring(0, uri.indexOf("%3D"));

window.history.replaceState({}, document.title, clean_uri);

}

var uri = window.location.toString();

if (uri.indexOf("%3D%3D","%3D%3D") > 0) {

var clean_uri = uri.substring(0, uri.indexOf("%3D%3D"));

window.history.replaceState({}, document.title, clean_uri);

}

var uri = window.location.toString();

if (uri.indexOf("&m=1","&m=1") > 0) {

var clean_uri = uri.substring(0, uri.indexOf("&m=1"));

window.history.replaceState({}, document.title, clean_uri);

}

var uri = window.location.toString();

if (uri.indexOf("?m=1","?m=1") > 0) {

var clean_uri = uri.substring(0, uri.indexOf("?m=1"));

window.history.replaceState({}, document.title, clean_uri);

}

//]]>
