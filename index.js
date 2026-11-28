

// ============================================================
// 3. Popup code (idhu maaradhu vendaam)
// ============================================================
const popup = document.getElementById("popup");
const popupMainImage = document.getElementById("popupMainImage");
const popupGallery = document.getElementById("popupGallery");

const popupContainer = document.querySelector(".popup-container");

function showImageSection(show) {
    popupContainer.classList.toggle("no-image", !show);
}

function setText(id, text) {
    const el = document.getElementById(id);
    if (el) el.textContent = text;
}

function openPopup(data) {

    // Images
     const hasImage = !!(data.image && data.image.trim() !== "");
    showImageSection(hasImage);

    if (hasImage) {
        popupMainImage.onerror = function () { showImageSection(false); };  // file illana / path thappu na
        popupMainImage.onload = function () { showImageSection(true); };
        popupMainImage.src = data.image;
    } else {
        popupMainImage.removeAttribute("src");
    }

    // Gallery: main image irundhaa mattum, sub images irundhaa mattum
    popupGallery.innerHTML = "";
    const subs = hasImage ? (data.subImages || []) : [];
    subs.forEach(function (img) {
        const image = document.createElement("img");
        image.src = img;
        popupGallery.appendChild(image);
    });
    popupGallery.style.display = subs.length ? "" : "none";



    // Text
    setText("popupName", data.name);
    setText("popupCategory", data.category);
    setText("popupLocation", "📍 " + data.location);
    setText("popupDescription", data.description);

    // Rating: illa-na maraichidum
    const ratingEl = document.getElementById("popupRating");
    if (data.rating) {
        ratingEl.innerHTML = "⭐ " + data.rating + " (" + data.reviews + ")";
        ratingEl.style.display = "";
    } else {
        ratingEl.style.display = "none";
    }

    // 3 info boxes: category ku yetha labels
    const labels = data.labels || categoryLabels[data.category] ||
        ["Opening Hours", "Entry Fee", "Best Time to Visit"];

    setText("popupOpeningLabel", labels[0]);
    setText("popupEntryLabel", labels[1]);
    setText("popupBestTimeLabel", labels[2]);

    document.getElementById("popupOpening").innerHTML = data.opening;
    document.getElementById("popupEntry").innerHTML = data.entry;
    document.getElementById("popupBestTime").innerHTML = data.bestTime;

    // Facilities
    const facilities = document.getElementById("popupFacilities");
    facilities.innerHTML = "";
    (data.facilities || []).forEach(function (item) {
        const facility = document.createElement("p");
        facility.innerHTML = "✓ " + item;
        facilities.appendChild(facility);
    });

    // Fees: data.fees irundha mattum
    const feesBox = document.getElementById("popupFeesBox");
    const feesTable = document.getElementById("popupFees");
    if (feesBox && feesTable) {
        feesTable.innerHTML = "";
        if (data.fees && data.fees.length > 0) {
            data.fees.forEach(function (row) {
                const tr = document.createElement("tr");
                const td1 = document.createElement("td");
                const td2 = document.createElement("td");
                td1.innerHTML = row.item;
                td2.innerHTML = row.price;
                tr.appendChild(td1);
                tr.appendChild(td2);
                feesTable.appendChild(tr);
            });
            setText("popupFeesNote", data.feesNote || "");
            feesBox.style.display = "";
        } else {
            feesBox.style.display = "none";
        }
    }

    // Map button
    document.getElementById("popupMap").href = data.map;

    // Call button: phone irundha mattum
    const callBtn = document.getElementById("popupCall");
    if (callBtn) {
        if (data.phone) {
            callBtn.href = "tel:" + data.phone.replace(/\s+/g, "");
            callBtn.style.display = "";
        } else {
            callBtn.style.display = "none";
        }
    }

    // Open
    popup.style.display = "flex";
}

function closePopup() {
    popup.style.display = "none";
}

// "View Details" buttons
document.querySelectorAll(".details-btn").forEach(function (button) {
    button.addEventListener("click", function (event) {
        event.preventDefault();

        const data = places[button.dataset.place];
        if (!data) return;

        currentPlace = button.dataset.place;
        openPopup(data);
        updateHeart();
    });
});

// Gallery: sub image click panna main image oda swap aagum
popupGallery.addEventListener("click", function (event) {
    if (event.target.tagName === "IMG") {
        const oldMain = popupMainImage.getAttribute("src");
        const clicked = event.target.getAttribute("src");
        popupMainImage.src = clicked;
        event.target.src = oldMain;
    }
});

// ============ Heart (favourite) ============
const favBtn = document.getElementById("favBtn");
let currentPlace = null;

function getFavs() {
    try { return JSON.parse(localStorage.getItem("favPlaces")) || []; }
    catch (e) { return []; }
}

function saveFavs(list) {
    try { localStorage.setItem("favPlaces", JSON.stringify(list)); }
    catch (e) { }
}

function updateHeart() {
    if (!favBtn) return;
    const liked = getFavs().includes(currentPlace);
    favBtn.classList.toggle("liked", liked);
    favBtn.textContent = liked ? "♥" : "♡";
}

if (favBtn) {
    favBtn.addEventListener("click", function () {
        if (!currentPlace) return;
        let favs = getFavs();
        if (favs.includes(currentPlace)) {
            favs = favs.filter(function (p) { return p !== currentPlace; });
        } else {
            favs.push(currentPlace);
        }
        saveFavs(favs);
        updateHeart();
    });
}

// Close: ✕ button
document.getElementById("closebtn").addEventListener("click", closePopup);

// Close: popup veliya (dark area) click panna
popup.addEventListener("click", function (event) {
    if (event.target === popup) closePopup();
});

// Close: Esc key
document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") closePopup();
});

//T0GGLE BUTTON

let menubtn = document.getElementById("menubtn");
let navbar = document.getElementById("navbar");

menubtn.addEventListener("click", function () {
    navbar.classList.toggle("active");

    if (navbar.classList.contains("active")) {
        menubtn.textContent = "✕";
    } else {
        menubtn.textContent = "☰";
    }
});

let navLinks = navbar.querySelectorAll("a");
navLinks.forEach(function (link) {
    link.addEventListener("click", function () {
        navbar.classList.remove("active");
        menubtn.textContent = "☰";
    });
});

