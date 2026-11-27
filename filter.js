// =====================================================
// UNIVERSAL FILTER + SORT  (ellaa category pages-kum oru file)
// Use: <script src="filter.js" defer></script>  (index.js-ku appuram)
// =====================================================
(function () {

    // ---------- Pill label -> match rule ----------
    // Key = pill label (emoji illama, lowercase). Value = RegExp or function(text, card)
    const RULES = {
        // Theatres
        "4k": /\b4k\b/,
        "dolby atmos": /dolby/,
        "ac": /\bac\b/,
        "parking": /parking/,
        "food & snacks": /snack|food/,

        // Hotels
        "budget": /budget/,
        "top rated": function (t) { return getRating(t) >= 4.5; },
        "wifi": /wi-?fi/,

        // Restaurants
        "veg": function (t) { return /veg/.test(t.replace(/non-?\s?veg/g, "")); },
        "non-veg": /non-?\s?veg/,
        "both": function (t) {
            return /non-?\s?veg/.test(t) && /veg/.test(t.replace(/non-?\s?veg/g, ""));
        },
        "party hall": /party hall/,

        // Cafe
        "online ordering": /online ordering/,
        "delivery": /delivery/,
        "family & friends": /family|friends/,
        "desserts": /dessert|ice cream|waffle|sundae/,

        // Education
        "schools": /school/,
        "engineering": /engineering/,
        "arts & science": /arts & science/,
        "polytechnic": /polytechnic/,

        // Tourist places
        "nature": /nature|forest/,
        "hills": /hills?\b/,
        "dams": /\bdam\b/,
        "temples": /temple/,
        "heritage": /heritage/,
        "trekking": /trek/,

        // Shopping
        "supermarket": /supermarket|super store|grocer/,
        "malls": /\bmall\b/,
        "textiles": /textile/,
        "electronics": /electronic/,
        "fashion": /fashion/,

        // Hospital
        "24/7 emergency": /24\s?\/\s?7|24 hours|emergency/,
        "maternity & child care": /maternity|child|paediatric|pediatric|gynae/,
        "orthopedics": /orthop/,
        "cardiology": /cardio|cardiac|heart/,

        // Banking
        "nationalized banks": /\bsbi\b|state bank|nationali[sz]ed|canara|indian bank|bank of baroda|union bank/,
        "private banks": /hdfc|icici|axis|esaf|private|small finance/,
        "24/7 atms": /\batm\b/,
        "post offices": /post office/,
        "money transfer": /money transfer|neft|rtgs|imps|money order/,

        // Essential services
        "petrol bunk": /petrol|diesel/,
        "lpg gas": /lpg/,
        "electricity": /electric/,
        "water": /\bwater\b/,
        "internet": /internet|wi-?fi/,

        // Government
        "taluk office": function (t, card) { return /taluk/.test(cardName(card)); },
        "municipality": /municipal/,
        "rto office": /\brto\b/,
        "registration": /registration/,
        "citizen centers": /sevai|citizen/,

        // Repair
        "bike repair": /\bbike\b|two-wheeler/,
        "car service": /\bcar\b/,
        "electrical": /electrical/,
        "plumbing": /plumbing/,
        "mobile repair": /mobile/,

        // Transport
        "bus": /\bbus\b/,
        "train": /train|railway/,
        "taxi & cab": /taxi|\bcab\b/,
        "auto": /\bauto\b/,
        "city bus": /city bus|local & outstation|bus stand/,

        // Emergency
        "police": /police/,
        "fire & rescue": /fire|rescue/,
        "ambulance": /ambulance|medical emergency/,
        "safety": /safety|women|child/
    };

    // ---------- Helpers ----------
    function normLabel(text) {
        return text
            .replace(/[^\p{L}\p{N}&\/+\-. ]/gu, "")   // emoji remove
            .replace(/\s+/g, " ")
            .trim()
            .toLowerCase();
    }

    function getRating(text) {
        const m = text.match(/(\d\.\d)\s*(\(|\/|\s)/);
        return m ? parseFloat(m[1]) : 0;
    }

    function getReviews(text) {
        const m = text.match(/\(([\d.,]+)\s*([kK])?\+?\s*reviews?/);
        if (!m) return 0;
        let n = parseFloat(m[1].replace(/,/g, ""));
        if (m[2]) n *= 1000;
        return n;
    }

    function cardName(card) {
        const h = card.querySelector("h3, h4");
        return (h ? h.textContent : card.textContent).trim().toLowerCase();
    }

    // Card text + index.js "places" data (description, facilities...) serthu search pannum
    function cardText(card) {
        let text = card.textContent;
        if (typeof places !== "undefined") {
            card.querySelectorAll(".details-btn[data-place]").forEach(function (btn) {
                const p = places[btn.dataset.place];
                if (p) {
                    text += " " + [p.name, p.category, p.description,
                    (p.facilities || []).join(" ")].join(" ");
                }
            });
        }
        return text.replace(/\s+/g, " ").toLowerCase();
    }

    function matches(label, text, card) {
        if (/^all\b/.test(label)) return true;

        const rule = RULES[label];
        if (typeof rule === "function") return rule(text, card);
        if (rule instanceof RegExp) return rule.test(text);

        // Rule illa-na: label-a appadiye text-la thedum
        return text.indexOf(label) !== -1;
    }

    // ---------- Setup each pill group ----------
    const allPillBoxes = Array.prototype.slice.call(document.querySelectorAll(".filter-pills"));

    allPillBoxes.forEach(function (box, i) {
        const nextBox = allPillBoxes[i + 1] || null;

        // Intha pill box-ku keela, next pill box varaikkum irukkura cards
        const cards = Array.prototype.slice
            .call(document.querySelectorAll(".filter-card, .item"))
            .filter(function (card) {
                const after = box.compareDocumentPosition(card) & Node.DOCUMENT_POSITION_FOLLOWING;
                const before = nextBox
                    ? (nextBox.compareDocumentPosition(card) & Node.DOCUMENT_POSITION_PRECEDING)
                    : true;
                return after && before;
            });

        if (cards.length === 0) return;

        const parent = cards[0].parentElement;
        const originalOrder = cards.slice();
        const texts = new Map();
        cards.forEach(function (c) { texts.set(c, cardText(c)); });

        // "No results" message
        const empty = document.createElement("p");
        empty.className = "filter-empty";
        empty.textContent = "No results found for this filter.";
        empty.style.cssText = "display:none;grid-column:1/-1;width:100%;text-align:center;" +
            "padding:30px 10px;font-weight:600;color:#555;";
        parent.appendChild(empty);

        const pills = Array.prototype.slice.call(box.querySelectorAll(".pill"));
        const sortSelect = (box.closest(".filter-option") || box.parentElement)
            .querySelector(".sort-select");

        function applyFilter() {
            const activePill = box.querySelector(".pill.active") || pills[0];
            const label = normLabel(activePill.textContent);
            let visible = 0;

            cards.forEach(function (card) {
                const show = matches(label, texts.get(card), card);
                card.style.display = show ? "" : "none";
                if (show) visible++;
            });

            empty.style.display = visible === 0 ? "block" : "none";
        }

        function applySort() {
            if (!sortSelect) return;
            const mode = sortSelect.selectedIndex;   // 0 nearest, 1 popular, 2 A-Z, 3 Z-A
            const list = originalOrder.slice();

            if (mode === 1) {
                list.sort(function (a, b) { return getReviews(texts.get(b)) - getReviews(texts.get(a)); });
            } else if (mode === 2) {
                list.sort(function (a, b) { return cardName(a).localeCompare(cardName(b)); });
            } else if (mode === 3) {
                list.sort(function (a, b) { return cardName(b).localeCompare(cardName(a)); });
            }

            list.forEach(function (c) { parent.insertBefore(c, empty); });
        }

        pills.forEach(function (pill) {
            pill.addEventListener("click", function () {
                pills.forEach(function (p) { p.classList.remove("active"); });
                pill.classList.add("active");
                applyFilter();
            });
        });

        if (sortSelect) sortSelect.addEventListener("change", applySort);

        applyFilter();
    });

})();
