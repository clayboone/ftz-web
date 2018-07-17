let counter = 0;

setInterval(() => {
    counter++;
    const tag = document.getElementById("counter");

    tag.innerHTML = "<em>" + counter.toString() + "</em>";
}, 100);

(function () {
    console.log('getting meminfo...');
    const tag = document.getElementById("meminfo");

    const xhttp = new XMLHttpRequest();
    temp = xhttp.open('GET', '/api/meminfo');
    console.log(temp);
})();
