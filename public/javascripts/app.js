setTimeout(() => {
    this.counter++;
    const tag = document.getElementById("counter");

    tag.innerHTML = "<em>" + this.counter.toString() + "</em>";
}, 500);
