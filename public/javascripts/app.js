(function () {
    console.log('getting meminfo...');
    const tag = document.getElementById("memusage");

    const xhttp = new XMLHttpRequest();
    xhttp.open('GET', '/api/meminfo');
    xhttp.send();

    xhttp.onreadystatechange = function() {
        // should be a stringified JSON object
        meminfo = JSON.parse(this.response);

        tag.setAttribute("max", meminfo["MemTotal"]);
        tag.setAttribute("value", meminfo.MemTotal - meminfo.MemFree)
    };

    // console.log(temp);
})();
