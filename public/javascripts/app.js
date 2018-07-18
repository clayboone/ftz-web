(function appMain() {
    const tag = document.getElementById("memusage");

    const xhttp = new XMLHttpRequest();
    xhttp.open('GET', '/api/meminfo');
    xhttp.send();

    xhttp.onreadystatechange = function() {
        meminfo = JSON.parse(this.response);

        tag.setAttribute("max", meminfo["MemTotal"]);
        tag.setAttribute("value", meminfo.MemTotal - meminfo.MemFree)
    };
})();
