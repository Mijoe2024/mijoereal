document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll(".filter-btn");
    const cards = document.querySelectorAll(".property-card");

    buttons.forEach(button => {
        button.addEventListener("click", () => {
            const category = button.getAttribute("data-category");

            cards.forEach(card => {
                if (category === "all" || card.getAttribute("data-category") === category) {
                    card.style.display = "block";
                } else {
                    card.style.display = "none";
                }
            });
        });
    });
});
