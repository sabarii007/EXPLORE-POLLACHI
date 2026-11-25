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

const healthCards = document.querySelectorAll(".near-healthcare a.healthcare");
const healthBtn = document.getElementById("healthBtn");
const healthMsg = document.getElementById("healthMsg");

function healthAroundMe(search, lat, lng) {
  return "https://www.google.com/maps/search/" + encodeURIComponent(search) +
         "/@" + lat + "," + lng + ",16z";
}

function healthAroundPollachi(search) {
  return "https://www.google.com/maps/search/" + encodeURIComponent(search + " in Pollachi") +
         "/@" + POLLACHI.lat + "," + POLLACHI.lng + ",14z";
}

// First: places around Pollachi
healthCards.forEach(function (card) {
  card.href = healthAroundPollachi(card.dataset.search);
});

healthBtn.addEventListener("click", function () {
  if (!navigator.geolocation) {
    healthMsg.textContent = "Oops! Your browser doesn't support location access. Please try another browser.";
    return;
  }
  healthMsg.textContent = "Finding your location...";

  navigator.geolocation.getCurrentPosition(
    function (pos) {
      const lat = pos.coords.latitude;
      const lng = pos.coords.longitude;

      if (pos.coords.accuracy > 10000) {
        healthMsg.textContent = "Oops! We couldn't pinpoint your location. Please turn on your phone's GPS and try again. Until then, we'll show places around Pollachi. 📍";
        return;
      }

      const km = distanceKm(lat, lng, POLLACHI.lat, POLLACHI.lng);

      if (km <= MAX_KM) {
        healthCards.forEach(function (card) {
          card.href = healthAroundMe(card.dataset.search, lat, lng);
        });
        healthMsg.textContent = "✅ Showing healthcare services around your current location!";
      } else {
        healthMsg.textContent = "You're currently away from Pollachi, so we'll show healthcare services around Pollachi.";
      }
    },
    function (err) {
      if (err.code === 1) {
        healthMsg.textContent = "Oops! Location access is blocked. Please click the 🔒 icon in your browser's address bar and set Location to Allow.";
      } else {
        healthMsg.textContent = "Oops! We couldn't find your location. We'll show places around Pollachi.";
      }
    },
    { timeout: 10000 }
  );
});