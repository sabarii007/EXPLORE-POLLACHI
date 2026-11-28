// =====================================
// GLOBAL SEARCH WITH GOOGLE AUTOCOMPLETE
// =====================================

// Category wise page mapping
const categoryPages = {
    "Theater": "entertainment.html",
    "Theatre": "entertainment.html",
    "Hotel & Restaurant": "hotel.html",
    "Restaurant": "hotel.html",
    "Tourist Place": "place.html",
    "College": "education.html",
    "Shopping": "shopping.html",
    "Supermarket": "shopping.html",
    "Textiles": "shopping.html",
    "Cafe": "cafe.html",
    "Hospital": "hospital.html",
    "ENT Hospital": "hospital.html",
    "Multi Speciality Hospital": "hospital.html",
    "Bank": "banking.html",
    "Post Office": "banking.html",
    "Transport": "transport.html",
    "Railway Station": "transport.html",
    "Tours & Travels": "transport.html",
    "Auto Stand": "transport.html",
    "Police Station": "emergencyservice.html",
    "Government Hospital": "emergencyservice.html",
    "Government Office": "government.html",
    "Government Service": "government.html",
    "Repair & Maintenance": "repair.html",
    "Petrol Pump": "essential-services.html"
};

// Create search data from places object
const searchData = Object.entries(places).map(([key, data]) => ({
    key: key,
    name: data.name,
    category: data.category,
    url: categoryPages[data.category] || "index.html"
}));


// =====================================
// HELPERS (shared)
// =====================================

const CARD_SELECTOR = ".place-card, .hotel-card, .card, .other-card, .service-card";

function findPlaceCard(key) {
    const button = document.querySelector(`.details-btn[data-place="${key}"]`);
    if (!button) return null;
    return button.closest(CARD_SELECTOR) || button.parentElement;
}

function highlightPlace(key) {
    const card = findPlaceCard(key);
    if (!card) return false;

    // Card filter-la hide aagi irundha, "All" filter-a click pannu
    if (card.style.display === "none") {
        const allBtn = document.querySelector(".filter-btn");
        if (allBtn) allBtn.click();
        card.style.display = "";   // fallback
    }

    card.scrollIntoView({ behavior: "smooth", block: "center" });
    card.classList.add("global-search-highlight");

    setTimeout(() => {
        card.classList.remove("global-search-highlight");
    }, 3000);

    return true;
}

function safeSession(action, key, value) {
    try {
        if (action === "set") sessionStorage.setItem(key, value);
        if (action === "get") return sessionStorage.getItem(key);
        if (action === "remove") sessionStorage.removeItem(key);
    } catch (e) { }
    return null;
}


// =====================================
// SEARCH INPUT SETUP
// =====================================

document.querySelectorAll('input[type="search"]').forEach(input => {

    const wrapper = input.parentElement;
    wrapper.style.position = "relative";

    // Inline suggestion
    const ghost = document.createElement("div");
    ghost.className = "search-ghost";

    // Dropdown suggestion
    const dropdown = document.createElement("div");
    dropdown.className = "search-suggestions";

    wrapper.appendChild(ghost);
    wrapper.appendChild(dropdown);

    let selectedSuggestion = null;
    let activeIndex = -1;
    let currentResults = [];


    // Ghost text-a input text oda exact-a align pannum
    function positionGhost() {
        const cs = getComputedStyle(input);
        ghost.style.fontFamily = cs.fontFamily;
        ghost.style.fontSize = cs.fontSize;
        ghost.style.fontWeight = cs.fontWeight;
        ghost.style.letterSpacing = cs.letterSpacing;
        ghost.style.left =
            (input.offsetLeft +
                parseFloat(cs.paddingLeft) +
                parseFloat(cs.borderLeftWidth)) + "px";
        ghost.style.top =
            (input.offsetTop + input.offsetHeight / 2) + "px";


        ghost.style.overflow = "hidden";
        ghost.style.maxWidth =
            (input.clientWidth - parseFloat(cs.paddingLeft) - parseFloat(cs.paddingRight)) + "px";
    }

    function positionDropdown() {
        dropdown.style.left = input.offsetLeft + "px";
        dropdown.style.width = input.offsetWidth + "px";
    }

    function renderGhost(item) {
        ghost.innerHTML = "";

        if (!item) return;
        if (!item.name.toLowerCase().startsWith(input.value.toLowerCase())) return;

        positionGhost();


        const typed = document.createElement("span");
        typed.className = "typed";
        typed.textContent = input.value;

        const remaining = document.createElement("span");
        remaining.className = "remaining";
        remaining.textContent = item.name.substring(input.value.length);

        ghost.append(typed, remaining);
    }


    // =====================================
    // OPEN SELECTED PLACE
    // =====================================

    function openPlace(item) {

        input.value = item.name;
        dropdown.style.display = "none";
        ghost.innerHTML = "";

        const found = highlightPlace(item.key);

        if (!found) {
            safeSession("set", "selectedSearchPlace", item.key);
            window.location.href = item.url;
        }
    }


    // =====================================
    // SHOW SUGGESTIONS
    // =====================================

    function showSuggestions() {

        const value = input.value.trim().toLowerCase();

        ghost.innerHTML = "";
        dropdown.innerHTML = "";

        selectedSuggestion = null;
        activeIndex = -1;

        if (value === "") {
            currentResults = searchData.slice(0, 8);
        } else {
            // startsWith munnaadi varum, appuram includes
            const starts = searchData.filter(i =>
                i.name.toLowerCase().startsWith(value));
            const contains = searchData.filter(i =>
                !i.name.toLowerCase().startsWith(value) &&
                i.name.toLowerCase().includes(value));
            currentResults = [...starts, ...contains].slice(0, 8);
        }

        if (currentResults.length === 0) {
            dropdown.style.display = "none";
            return;
        }

        // Google style inline suggestion
        if (value !== "") {
            const match = currentResults.find(item =>
                item.name.toLowerCase().startsWith(input.value.toLowerCase())
            );
            if (match) {
                selectedSuggestion = match;
                renderGhost(match);
            }
        }

        // Dropdown list
        currentResults.forEach(item => {
            const option = document.createElement("div");
            option.className = "search-option";
            option.textContent = item.name;

            option.addEventListener("mousedown", function (e) {
                e.preventDefault();
                openPlace(item);
            });

            dropdown.appendChild(option);
        });
        positionDropdown();
        dropdown.style.display = "block";


    }


    // =====================================
    // KEYBOARD SUGGESTION SELECTION
    // =====================================

    function selectSuggestion(index) {

        const options = dropdown.querySelectorAll(".search-option");
        options.forEach(o => o.classList.remove("active"));

        if (index >= 0 && index < options.length) {
            activeIndex = index;
            options[index].classList.add("active");
            selectedSuggestion = currentResults[index];

            renderGhost(currentResults[index]);

            options[index].scrollIntoView({ block: "nearest" });
        }
    }


    // =====================================
    // SEARCH (Enter / Search button)
    // =====================================

    function runSearch() {
        if (selectedSuggestion) {
            openPlace(selectedSuggestion);
            return;
        }

        if (!input.value.trim()) return;

        showSuggestions();
        if (currentResults[0]) openPlace(currentResults[0]);
    }


    // =====================================
    // EVENTS
    // =====================================

    input.addEventListener("input", showSuggestions);

    input.addEventListener("focus", showSuggestions);

    input.addEventListener("click", function () {
        if (dropdown.style.display !== "block") showSuggestions();
    });

    input.addEventListener("keydown", function (e) {

        if (e.key === "ArrowDown") {
            e.preventDefault();
            if (dropdown.style.display !== "block") showSuggestions();
            if (currentResults.length > 0) {
                selectSuggestion((activeIndex + 1) % currentResults.length);
            }
        }

        else if (e.key === "ArrowUp") {
            e.preventDefault();
            if (dropdown.style.display !== "block") showSuggestions();
            if (currentResults.length > 0) {
                selectSuggestion(
                    activeIndex <= 0 ? currentResults.length - 1 : activeIndex - 1
                );
            }
        }

        // Arrow Right - cursor text-in kadaisila irundha mattum accept
        else if (e.key === "ArrowRight") {
            if (selectedSuggestion &&
                input.selectionStart === input.value.length) {
                e.preventDefault();
                input.value = selectedSuggestion.name;
                ghost.innerHTML = "";
                dropdown.style.display = "none";
            }
        }

        else if (e.key === "Enter") {
            e.preventDefault();
            runSearch();
        }

        else if (e.key === "Escape") {
            dropdown.style.display = "none";
            ghost.innerHTML = "";
            selectedSuggestion = null;
        }
        else if (e.key === "Tab") {
            dropdown.style.display = "none";
            ghost.innerHTML = "";
        }
    });

    // Search button (hero + footer)
    const searchBtn = wrapper.querySelector("button");
    if (searchBtn) {
        searchBtn.addEventListener("click", runSearch);
    }

    // Close dropdown
    document.addEventListener("click", function (e) {
        if (!wrapper.contains(e.target)) {
            dropdown.style.display = "none";
            ghost.innerHTML = "";
        }
    });

    window.addEventListener("resize", () => {
        if (ghost.innerHTML) positionGhost();
    });
});


// =====================================
// AFTER PAGE NAVIGATION
// =====================================

window.addEventListener("load", function () {

    const key = safeSession("get", "selectedSearchPlace");
    if (!key) return;

    safeSession("remove", "selectedSearchPlace");

    setTimeout(() => highlightPlace(key), 500);
});