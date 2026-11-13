
const places = {

    murugalaya: {
        name: "Murugalaya Theater AC",
        category: "Theater",
        image: "muruglaya_theatre.png",
        subImages: [
            "murugalayaimages/image.png",
            "murugalayaimages/image copy.png",
            "murugalayaimages/image copy 3.png",
            "murugalayaimages/image copy 2.png"
        ],
        rating: "3.9",
        reviews: "2.3k reviews",
        location: "Pollachi, Tamil Nadu",
        description: "Enjoy the latest movies with a comfortable cinema experience.",
        opening: "9:00 AM – 11:00 PM",
        entry: "Ticket Price Varies",
        bestTime: "Evening",
        facilities: ["Parking", "Air Conditioning", "Food & Snacks"],
        map: "https://www.google.com/maps/search/?api=1&query=Murugalaya+Theater+Pollachi"
    },

    madhava: {
        name: "Hotel Madhava Inn",
        category: "Hotel & Restaurant",
        image: "madavaimages/Madhava Inn Restaurant.png",
        subImages: [
            "madavaimages/image.png",
            "madavaimages/image copy.png",
            "madavaimages/Madhava Multicuisine Restaurant.png",
            "madavaimages/Warm Orange Modern Twin Room.png"
        ],
        rating: "4.1",
        reviews: "1.4k reviews",
        location: "Pollachi, Tamil Nadu",
        description: "A comfortable place to stay and enjoy delicious food.",
        opening: "Open Daily",
        entry: "Room Charges Apply",
        bestTime: "Throughout the Year",
        facilities: ["WiFi", "Parking", "Restaurant", "Clean Rooms"],
        map: "https://www.google.com/maps/search/?api=1&query=Hotel+Madhava+Inn+Pollachi"
    },

    dmart: {
        name: "DMart Pollachi",
        category: "Shopping",
        image: "dmart.png",
        subImages: [
            "dmartimages/image.png",
            "dmartimages/image copy.png",
            "dmartimages/Bright Household Products Aisle.png",
            "dmartimages/Vibrant Modern Supermarket Aisle.png"
        ],
        rating: "3.8",
        reviews: "1k reviews",
        location: "Pollachi, Tamil Nadu",
        description: "A shopping destination for groceries, household products and daily essentials.",
        opening: "Check Store Timings",
        entry: "Free Entry",
        bestTime: "Morning & Evening",
        facilities: ["Parking", "Shopping", "Billing Counter"],
        map: "https://www.google.com/maps/search/?api=1&query=DMart+Pollachi"
    },

    aliyar: {
        name: "Aliyar Dam",
        category: "Tourist Place",
        image: "aliyardam.png",
        subImages: [
            "aliyardam images/image1.png",
            "aliyardam images/image.png",
            "aliyardam images/image copy.png",
            "aliyardam images/image copy 2.png"
        ],
        rating: "4.3",
        reviews: "16k reviews",
        location: "Aliyar, Pollachi, Tamil Nadu",
        description: "A beautiful dam surrounded by the Western Ghats, perfect for nature lovers, picnic, photography and a peaceful getaway.",
        opening: "6:00 AM – 6:30 PM",
        entry: "₹20 (Adults), ₹10 (Children)",
        bestTime: "October – March",
        facilities: ["Food Stalls", "Restrooms", "Photography", "Picnic Area"],
        map: "https://www.google.com/maps/search/?api=1&query=Aliyar+Dam+Pollachi"
    },

    pacet: {
        name: "P.A College of Engineering and Technology",
        category: "College",
        image: "pacet.jpg",
        subImages: [
            "pacetimages/Bright Modern Computer Lab Rows.png",
            "pacetimages/Grand P.A. Educational Institutions Gate.png",

            "pacetimages/Modern Cafeteria with Indoor Greenery.png",
            "pacetimages/Vibrant CSE and MECH Library Stacks.png"
        ],
        rating: "4.1",
        reviews: "600 reviews",
        location: "Pollachi, Tamil Nadu",
        description: "An engineering college providing academic and technical education.",
        opening: "College Working Hours",
        entry: "Authorized Visitors Only",
        bestTime: "Academic Working Days",
        facilities: ["Library", "Laboratories", "Transport", "Canteen"],
        map: "https://www.google.com/maps/search/?api=1&query=Dr+Mahalingam+College+Pollachi"
    }

};

document.querySelectorAll(".details-btn").forEach(button => {

    button.addEventListener("click", () => {

        const data = places[button.dataset.place];

        if (!data) return;

        // Main Image
        document.getElementById("popupMainImage").src = data.image;

        // Gallery Images
        const gallery = document.getElementById("popupGallery");

        gallery.innerHTML = "";

        data.subImages.forEach(img => {

            const image = document.createElement("img");

            image.src = img;

            gallery.appendChild(image);

        });

        // Text Details
        document.getElementById("popupName").textContent = data.name;

        document.getElementById("popupRating").textContent =
            `⭐ ${data.rating} (${data.reviews})`;

        document.getElementById("popupLocation").textContent =
            `📍 ${data.location}`;

        document.getElementById("popupDescription").textContent =
            data.description;

        document.getElementById("popupOpening").textContent =
            data.opening;

        document.getElementById("popupEntry").textContent =
            data.entry;

        document.getElementById("popupBestTime").textContent =
            data.bestTime;

        // Facilities
        const facilities = document.getElementById("popupFacilities");

        facilities.innerHTML = "";

        data.facilities.forEach(item => {

            const facility = document.createElement("p");

            facility.textContent = "✓ " + item;

            facilities.appendChild(facility);

        });

        // Google Map
        document.getElementById("popupMap").href = data.map;

        // Category
        document.getElementById("popupCategory").textContent =
            data.category;

        // Open Popup
        document.getElementById("popup").style.display = "flex";

    });

});

const mainImage = document.getElementById("popupMainImage");
const gallery = document.getElementById("popupGallery");

gallery.addEventListener("click", function (event) {

    if (event.target.tagName === "IMG") {

        // Store current main image
        let oldMainImage = mainImage.getAttribute("src");

        // Get clicked sub-image
        let clickedImage = event.target.getAttribute("src");

        // Swap images
        mainImage.src = clickedImage;
        event.target.src = oldMainImage;

    }

});


// Close Popup
document.getElementById("closebtn").addEventListener("click", () => {

    document.getElementById("popup").style.display = "none";

});

// let mainImage = document.querySelector(".main-image img");

// let subImages = document.querySelector(".sub-image");

// subImages.addEventListener("click", function(event) {

//     if (event.target.tagName === "IMG") {

//         let temp = mainImage.src;

//         mainImage.src = event.target.src;

//         event.target.src = temp;

//     }

// });