// ============================================================
// other-services.js
// "Other ... Services" cards: Google Maps search
//   - visitor inside Pollachi area  -> results around the visitor's location
//   - visitor outside / blocked     -> results around Pollachi
// Works on any page that has:
//   <a class="other-card" data-search="..."> inside .other-services
//   <button id="otherLocBtn">  and  <p id="otherLocMsg">
// (wrapped in a function, so it never clashes with nearby.js or other scripts)
// ============================================================
(function () {
  const POLLACHI = { lat: 10.6609, lng: 77.0048 };
  const MAX_KM = 20;     // Pollachi centre-la irundhu ivlo km kulla irundha "inside"
  const ZOOM_ME = 14;    // map zoom around visitor (offices kammi, adhanaala 14)
  const ZOOM_POLLACHI = 14;

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
           "/@" + lat + "," + lng + "," + ZOOM_ME + "z";
  }

  function aroundPollachiLink(search) {
    return "https://www.google.com/maps/search/" + encodeURIComponent(search + " in Pollachi") +
           "/@" + POLLACHI.lat + "," + POLLACHI.lng + "," + ZOOM_POLLACHI + "z";
  }

  const cards = document.querySelectorAll(".other-services .other-card[data-search]");
  const btn = document.getElementById("otherLocBtn");
  const msg = document.getElementById("otherLocMsg");

  if (cards.length === 0) return;

  function say(text) {
    if (msg) msg.textContent = text;
  }

  // Mudhalil ellaa cards-kum Pollachi link
  cards.forEach(function (card) {
    card.href = aroundPollachiLink(card.dataset.search);
  });

  if (!btn) return;

  btn.addEventListener("click", function () {
    if (!navigator.geolocation) {
      say("Oops! Your browser doesn't support location access. Please try opening this website in another browser.");
      return;
    }
    say("Finding your location...");

    navigator.geolocation.getCurrentPosition(
      function (pos) {
        const lat = pos.coords.latitude;
        const lng = pos.coords.longitude;
        const km = distanceKm(lat, lng, POLLACHI.lat, POLLACHI.lng);

        if (km <= MAX_KM) {
          cards.forEach(function (card) {
            card.href = aroundMeLink(card.dataset.search, lat, lng);
          });
          say("✅ Showing services around your current location!");
        } else {
          cards.forEach(function (card) {
            card.href = aroundPollachiLink(card.dataset.search);
          });
          say("You're currently away from Pollachi, but don't worry! We'll show you services around Pollachi.");
        }
      },
      function (err) {
        cards.forEach(function (card) {
          card.href = aroundPollachiLink(card.dataset.search);
        });
        if (err.code === 1) {
          say("Oops! Location access is blocked. Please click the 🔒 icon in your browser's address bar and set Location to Allow. Showing services around Pollachi for now.");
        } else {
          say("Oops! We couldn't find your location. Please turn on your device's location services and try again! Showing services around Pollachi for now.");
        }
      },
      { timeout: 10000 }
    );
  });
})();