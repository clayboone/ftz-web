(function appMain() {
    if (isShowing('mem-slide'))
        displayMemUsage();
    if (isShowing('cpu-slide'))
        displayCpuUsage();
    
    function isShowing(id) {
        return document
            .getElementById(id)
            .style['display'] !== 'none';
    }

    setTimeout(appMain, 2000);

    /******
     ***** FIXME a few problems here..
     *****  1) it does'nt work.. ish.. it does, but is displaying the wrong thing or nothing
     *****  2) it's running anyways
     *****  3) even if those two are resolved, the function needs to wait for setTimeout()
     *****     to call it again before data shows up..
     *****/
})();

// set up event handler when nav is put in.
function showMemSlide() {
    document.getElementById('mem-slide').style['display'] = 'block'
}

function displayCpuUsage() {
    const xhttp = new XMLHttpRequest();

    xhttp.open('GET', '/api/stat');
    xhttp.send();

    xhttp.onreadystatechange = function () {
        if (xhttp.readyState === 4 && xhttp.status === 200) {
            if (this.response) {
                const stat = this.response;

                // console.log(stat);
            }
        }
    }
}

function displayMemUsage() {
    const memUsedTag = document.getElementById("memusage-used");
    const memActiveTag = document.getElementById("memusage-active");
    const swapUsedTag = document.getElementById("swapusage-used");
    const xhttp = new XMLHttpRequest();

    xhttp.open('GET', '/api/meminfo');
    xhttp.send();

    xhttp.onreadystatechange = function() {
        if (xhttp.readyState === 4 && xhttp.status === 200) {
            if (this.response) {
                const meminfo = JSON.parse(this.response);

                memUsedTag.style.width = meminfo.memUsedPercent + '%';
                memActiveTag.style.width = meminfo.memActivePercent + '%';
                swapUsedTag.style.width = meminfo.swapUsedPercent + '%';
            }
        }
    };
}
