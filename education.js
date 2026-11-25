const POLLACHI = { lat: 10.6609, lng: 77.0048 };
const MAX_KM = 20;

function distanceKm(lat1, lng1, lat2, lng2) {
  const R = 6371;
  const toRad = function (d) { return d * Math.PI / 180; };
  const dLat = toRad(lat2 - lat1);
  const dLng = toRad(lng2 - lng1);
  const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
            Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) *
            Math.sin(dLng / 2) * Math.sin(dLng / 2);
  return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
}

function aroundMeLink(search, lat, lng) {
  return "https://www.google.com/maps/search/" + encodeURIComponent(search) +
         "/@" + lat + "," + lng + ",16z";
}

function aroundPollachiLink(search) {
  return "https://www.google.com/maps/search/" + encodeURIComponent(search + " in Pollachi") +
         "/@" + POLLACHI.lat + "," + POLLACHI.lng + ",14z";
}

const cards = document.querySelectorAll(".nearby-card");
const btn = document.getElementById("locBtn");
const msg = document.getElementById("locMsg");

// Mudhalil ellaa cards-kum Pollachi link
cards.forEach(function (card) {
  card.href = aroundPollachiLink(card.dataset.search);
});

btn.addEventListener("click", function () {
  if (!navigator.geolocation) {
    msg.textContent = "Indha browser la location support illa.";
    return;
  }
  msg.textContent = "Location edukkuren...";

  navigator.geolocation.getCurrentPosition(
    function (pos) {
      const lat = pos.coords.latitude;
      const lng = pos.coords.longitude;
      const km = distanceKm(lat, lng, POLLACHI.lat, POLLACHI.lng);

        console.log("Lat:", lat, "Lng:", lng, "Distance:", km.toFixed(1), "km", "Accuracy:", Math.round(pos.coords.accuracy), "m");


      if (km <= MAX_KM) {
        cards.forEach(function (card) {
          card.href = aroundMeLink(card.dataset.search, lat, lng);
        });
        msg.textContent = "✅ Ungal location suththi irukkura places kaattum.";
      } else {
        msg.textContent = "Neenga Pollachi la illa, so Pollachi suththi irukkura places kaattum.";
      }
    },
    function (err) {
      if (err.code === 1) {
        msg.textContent = "Location block aayirukku. Address bar la 🔒 click panni Location ah Allow pannunga.";
      } else {
        msg.textContent = "Location edukka mudiyala. Device location on-a irukkaa paarunga.";
      }
    },
    { timeout: 10000 }
  );
});