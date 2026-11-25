const box = document.querySelector(".nearby-container");
const place = box.dataset.place;

document.querySelectorAll(".nearby-card").forEach(function (card) {
  const query = card.dataset.search + " near " + place;
  card.href = "https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent(query);
});