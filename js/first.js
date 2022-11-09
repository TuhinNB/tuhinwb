 var tryCount = 0;
 var minimalUserResponseInMiliseconds = 200;
 function check() {
before = new Date().getTime();
debugger;
after = new Date().getTime();
if (after - before > minimalUserResponseInMiliseconds) {
document.write(" Alert!! Close Developer Tools Now... ");
self.location.replace(window.location.protocol + window.location.href.substring(window.location.protocol.length));
}else{
before = null;
after = null;
delete before;
delete after;
}
setTimeout(check, 100);
 }
 check();
 window.onload = function() {
document.addEventListener("contextmenu", function(e){
e.preventDefault();
}, false);
document.addEventListener("keydown", function(e) {
//document.onkeydown = function(e) {
// "I" key
if (e.ctrlKey && e.shiftKey && e.keyCode == 73) {
disabledEvent(e);
}
// "J" key
if (e.ctrlKey && e.shiftKey && e.keyCode == 74) {
disabledEvent(e);
}
// "S" key + macOS
if (e.keyCode == 83 && (navigator.platform.match("Mac") ? e.metaKey : e.ctrlKey)) {
disabledEvent(e);
}
// "U" key
if (e.ctrlKey && e.keyCode == 85) {
disabledEvent(e);
}
// "F12" key
if (event.keyCode == 123) {
disabledEvent(e);
}
}, false);
function disabledEvent(e){
if (e.stopPropagation){
e.stopPropagation();
} else if (window.event){
window.event.cancelBubble = true;
}
e.preventDefault();
return false;
}
 };
