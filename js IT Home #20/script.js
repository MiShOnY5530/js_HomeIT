window.onload = () => document.getElementById("txt").value = getCookie("text");

function save() {
    setCookie("text", document.getElementById("txt").value, 30);
}

function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    document.cookie = cname + "=" + cvalue + ";expires="+ d.toUTCString() + ";path=/";
}

function getCookie(cname) {
    const name = cname + "=";
    const ca = decodeURIComponent(document.cookie).split(';');
    for(let i = 0; i <ca.length; i++) {
        let c = ca[i].trim();
        if (c.indexOf(name) == 0) return c.substring(name.length, c.length);
    }
    return "";
}