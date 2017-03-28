function validator() {
    var vhost = location.hostname;	
    var  pathname = window.location.pathname;
    var res = pathname.replace("http://", "");
    var find = '/';
    var re = new RegExp(find, 'g');
    res = res.replace(re, '%2F');
    $("#htmlvalidator").attr("href", "https://validator.w3.org/nu/?doc=http%3A%2F%2F" + vhost + "%2F" + res);
    $("#cssvalidator").attr("href", "http://www.css-validator.org/validator?uri=http%3A%2F%2F" + vhost + "%2F" + res + "&profile=css21&usermedium=all&warning=1&lang=en");
//	alert('foo');
}

$(document).ready(function() {
    validator();
});


