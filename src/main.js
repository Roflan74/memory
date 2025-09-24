const cards = document.querySelectorAll(".card");
for (let card of cards) {
    card.addEventListener("click", () => {
        if (card.classList.contains("card-show")) {
            card.classList.remove("card-show");
        } else {
            card.classList.add("card-show");
        }
    })
}