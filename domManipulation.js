window.onload = function() {
    const ul = document.getElementById("itemList");
    const newItem = document.createElement("li");
    newItem.textContent = "Fourth item";
    ul.appendChild(newItem);

    ul.addEventListener("click", function(event) {
        if (event.target.tagName === "LI") {
            event.target.textContent = Math.random().toString(12).substring(2, 8);
        }
    });
};
