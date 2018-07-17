let counter = 0;

setInterval(() => {
    counter++;
    const tag = document.getElementById("counter");

    console.log(counter);
    tag.innerHTML = "<em>" + counter.toString() + "</em>";
}, 100);
