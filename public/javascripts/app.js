let counter = 0;

setTimeout(() => {
    counter++;
    const tag = document.getElementById("counter");

    console.log(counter);
    tag.innerHTML = "<em>" + counter.toString() + "</em>";
}, 1000);
