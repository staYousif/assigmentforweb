const box = document.getElementById("styledBox");

box.addEventListener("click", function() {
    this.style.backgroundColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
});

box.addEventListener("mouseover", function() {
    this.style.borderColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
});
