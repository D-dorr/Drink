//适配
function fontSize(){
var _html = document.getElementsByTagName("html")[0];
var w = w>750? 750:document.documentElement.clientWidth;
_html.style.fontSize = w/3.75+"px";
}
fontSize();
window.onresize = fontSize;