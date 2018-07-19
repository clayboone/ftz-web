// Run on page load
(function appMain() {
    const tag = document.getElementById("memusage-all");
    const xhttp = new XMLHttpRequest();

    xhttp.open('GET', '/api/meminfo');
    xhttp.send();

    xhttp.onreadystatechange = function() {
        const meminfo = JSON.parse(this.response);
        const percentUsed = (meminfo.MemTotal - meminfo.MemFree) / meminfo.MemTotal * 100;

        tag.style.width = percentUsed.toString() + '%';
    };

    // Repeat
    setTimeout(appMain, 1000);
})();
