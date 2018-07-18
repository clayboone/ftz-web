(function appMain() {
    const tag = document.getElementById("memusage");
    const xhttp = new XMLHttpRequest();

    xhttp.open('GET', '/api/meminfo');
    xhttp.send();

    xhttp.onreadystatechange = function() {
        meminfo = JSON.parse(this.response);

        // <progress> attributes
        // tag.setAttribute("max", meminfo["MemTotal"]);
        // tag.setAttribute("value", meminfo.MemTotal - meminfo.MemFree)

        let percentUsed = (meminfo.MemTotal - meminfo.MemFree) / meminfo.MemTotal * 100;
        tag.style.width = percentUsed.toString() + '%';
    };
})();
