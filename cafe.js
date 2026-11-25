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
    msg.textContent = "Oops! Your browser doesn't support location access. Please try opening this website in another browser to explore nearby places.";
    return;
  }
  msg.textContent = "Finding your location...";

  navigator.geolocation.getCurrentPosition(
    function (pos) {
      const lat = pos.coords.latitude;
      const lng = pos.coords.longitude;
      const km = distanceKm(lat, lng, POLLACHI.lat, POLLACHI.lng);

       

      if (km <= MAX_KM) {
        cards.forEach(function (card) {
          card.href = aroundMeLink(card.dataset.search, lat, lng);
        });
        msg.textContent = "✅ Discover interesting places around your current location!";
      } else {
        msg.textContent = "You're currently away from Pollachi, but don't worry! We'll show you interesting places around Pollachi.";
      }
    },
    function (err) {
      if (err.code === 1) {
        msg.textContent = "Oops! Location access is blocked. Please click the 🔒 icon in your browser's address bar and set Location to Allow to discover nearby places.";
      } else {
        msg.textContent = "Oops! We couldn't find your location. Please turn on your device's location services and try again! ";
      }
    },
    { timeout: 10000 }
  );
});