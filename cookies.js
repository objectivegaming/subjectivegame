// Keep in mind that cookies don't work in chrome. Use firefox to launch the page because of this.
function changeCookie(){
    newname = prompt("Enter your name");
    setCookie("username",newname,"");
    document.cookie = cname + "=" + cvalue + ";";

}
function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i=0; i<ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1);
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function checkCookie() {//call this when load every page
    var user = getCookie("username");
    if (user != "") {
        return user;//this is the output, it returns the cookie value they put in. you can also set dynamic html with this value
    } else {
        user = prompt("Please enter your name:", "");
        if (user != "" && user != null) {
            setCookie("username", user);
        }
    }
}
