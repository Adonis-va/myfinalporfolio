document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".card");
  cards.forEach((card, index) => {
    setTimeout(() => {
      card.classList.add("loaded");
    }, index * 200); // Delay each card slightly for a staggered effect
  });
});
