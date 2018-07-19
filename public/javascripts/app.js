// Run on page load
(function appMain() {
    const tag = document.getElementById("memusage-all");
    const xhttp = new XMLHttpRequest();

    xhttp.open('GET', '/api/meminfo');
    xhttp.send();

    xhttp.onreadystatechange = function() {
        const meminfo = JSON.parse(this.response);

        tag.style.width = meminfo.memUsedPercent.toString() + '%';
    };

    // Repeat
    setTimeout(appMain, 2000);
})();
