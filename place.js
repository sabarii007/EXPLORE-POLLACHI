const POLLACHI = { lat: 10.6609, lng: 77.0048 };
const MAX_KM = 20;

// Rendu sections-kum common
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


// ============ Nearby Attractions ============

const attrCards = document.querySelectorAll(".nearby-attraction .nearby-card");
const routeBtn = document.getElementById("routeBtn");
const routeMsg = document.getElementById("routeMsg");

function routeLink(destination, origin) {
  return "https://www.google.com/maps/dir/?api=1" +
         "&origin=" + encodeURIComponent(origin) +
         "&destination=" + encodeURIComponent(destination + ", Tamil Nadu") +
         "&travelmode=driving";
}

function setRouteOrigin(origin) {
  attrCards.forEach(function (card) {
    card.href = routeLink(card.dataset.destination, origin);
  });
}

// First: route from Pollachi
setRouteOrigin("Pollachi, Tamil Nadu");

routeBtn.addEventListener("click", function () {
  if (!navigator.geolocation) {
    routeMsg.textContent = "Oops! Your browser doesn't support location access. Please try opening this website in another browser to explore nearby places.";
    return;
  }
  routeMsg.textContent = "Finding your location...";

  navigator.geolocation.getCurrentPosition(
    function (pos) {
      const lat = pos.coords.latitude;
      const lng = pos.coords.longitude;

      if (pos.coords.accuracy > 10000) {
        routeMsg.textContent = "Oops! We couldn't pinpoint your location. Please turn on your phone's GPS and try again. Once enabled, we'll show you the best routes from Pollachi! 📍";
        return;
      }

      const km = distanceKm(lat, lng, POLLACHI.lat, POLLACHI.lng);

      if (km <= MAX_KM) {
        setRouteOrigin(lat + "," + lng);
        routeMsg.textContent = "✅ Discover interesting places around your current location!";
      } else {
        routeMsg.textContent = "You're currently away from Pollachi, but don't worry! We'll show you interesting places around Pollachi.";
      }
    },
    function (err) {
      if (err.code === 1) {
        routeMsg.textContent = "Oops! Location access is blocked. Please click the 🔒 icon in your browser's address bar and set Location to Allow to discover nearby places.";
      } else {
        routeMsg.textContent = "Oops! We couldn't find your location. Please turn on your device's location services and try again!";
      }
    },
    { timeout: 10000 }
  );
});


// ============ Itineraries ============

const tripLinks = document.querySelectorAll(".itineraries .trip-link");
const tripBtn = document.getElementById("tripBtn");
const tripMsg = document.getElementById("tripMsg");

// Last stop = destination, middle stops = waypoints
function tripUrl(stopsText, origin) {
  const stops = stopsText.split("|").map(function (s) {
    return s.trim() + ", Tamil Nadu";
  });
  const destination = stops.pop();

  let url = "https://www.google.com/maps/dir/?api=1" +
            "&origin=" + encodeURIComponent(origin) +
            "&destination=" + encodeURIComponent(destination) +
            "&travelmode=driving";

  if (stops.length > 0) {
    url += "&waypoints=" + encodeURIComponent(stops.join("|"));
  }
  return url;
}

function setTripOrigin(origin) {
  tripLinks.forEach(function (link) {
    link.href = tripUrl(link.dataset.stops, origin);
  });
}

// First: route from Pollachi
setTripOrigin("Pollachi, Tamil Nadu");

tripBtn.addEventListener("click", function () {
  if (!navigator.geolocation) {
    tripMsg.textContent = "Oops! Your browser doesn't support location access. Please try opening this website in another browser.";
    return;
  }
  tripMsg.textContent = "Finding your location...";

  navigator.geolocation.getCurrentPosition(
    function (pos) {
      const lat = pos.coords.latitude;
      const lng = pos.coords.longitude;

      if (pos.coords.accuracy > 10000) {
        tripMsg.textContent = "Oops! We couldn't pinpoint your location. Please turn on your phone's GPS and try again. Until then, trips start from Pollachi. 📍";
        return;
      }

      const km = distanceKm(lat, lng, POLLACHI.lat, POLLACHI.lng);

      if (km <= MAX_KM) {
        setTripOrigin(lat + "," + lng);
        tripMsg.textContent = "✅ Your trips will start from your current location!";
      } else {
        tripMsg.textContent = "You're currently away from Pollachi, so your trips will start from Pollachi.";
      }
    },
    function (err) {
      if (err.code === 1) {
        tripMsg.textContent = "Oops! Location access is blocked. Please click the 🔒 icon in your browser's address bar and set Location to Allow.";
      } else {
        tripMsg.textContent = "Oops! We couldn't find your location. Trips will start from Pollachi.";
      }
    },
    { timeout: 10000 }
  );
});

