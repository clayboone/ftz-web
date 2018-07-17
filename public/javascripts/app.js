let counter = 0;

setTimeout(() => {
    counter++;
    const tag = document.getElementById("counter");

    tag.innerHTML = "<em>" + counter.toString() + "</em>";
}, 500);
