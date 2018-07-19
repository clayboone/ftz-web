// Run on page load
(function appMain() {
    const memUsedTag = document.getElementById("memusage-used");
    const memActiveTag = document.getElementById("memusage-active");
    const xhttp = new XMLHttpRequest();

    xhttp.open('GET', '/api/meminfo');
    xhttp.send();

    xhttp.onreadystatechange = function() {
        const meminfo = JSON.parse(this.response);

        memUsedTag.style.width = meminfo.memUsedPercent.toString() + '%';
        memActiveTag.style.width = meminfo.memActivePercent.toString() + '%';
    };

    // Repeat
    setTimeout(appMain, 2000);
})();
