// Run on page load
(function appMain() {
    const tag = document.getElementById("memusage");
    const xhttp = new XMLHttpRequest();

    xhttp.open('GET', '/api/meminfo');
    xhttp.send();

    xhttp.onreadystatechange = function() {
        const meminfo = JSON.parse(this.response);
        const percentUsed = (meminfo.MemTotal - meminfo.MemFree) / meminfo.MemTotal * 100;

        tag.style.width = percentUsed.toString() + '%';
    };
})();

// Also run on repeat
setInterval(appMain, 1000);
