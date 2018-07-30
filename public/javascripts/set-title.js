(function getTitle() {
    const xhttp = new XMLHttpRequest();

    xhttp.open('GET', '/api/title');
    xhttp.send();

    xhttp.onreadystatechange = function () {
        if (xhttp.readyState === 4 && xhttp.status === 200) {
            if (this.response) {
                document.getElementById('title')
                    .innerHTML = JSON.parse(this.response).title;
            }
        }
    };
})();
