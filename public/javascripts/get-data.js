(function appMain() {
    displayMemUsage();
    setTimeout(appMain, 2000);
})();

function displayMemUsage() {
    const memUsedTag = document.getElementById("memusage-used");
    const memActiveTag = document.getElementById("memusage-active");
    const swapUsedTag = document.getElementById("swapusage-used");
    const xhttp = new XMLHttpRequest();

    xhttp.open('GET', '/api/meminfo');
    xhttp.send();

    xhttp.onreadystatechange = function() {
        if (this.response) {
            const meminfo = JSON.parse(this.response);

            memUsedTag.style.width = meminfo.memUsedPercent + '%';
            memActiveTag.style.width = meminfo.memActivePercent + '%';
            swapUsedTag.style.width = meminfo.swapUsedPercent + '%';
        }
    };
}
