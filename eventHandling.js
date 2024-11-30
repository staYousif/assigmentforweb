document.getElementById("clickMe").addEventListener("click", function() {
    alert("Button clicked!");
    this.style.transition = "background-color 0.5s ease";
    this.style.backgroundColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
});
