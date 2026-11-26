
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
        opening: "Check Show Timings",
        entry: "Ticket Price Varies",
        bestTime: "Movie Show Timings",
        facilities: ["Parking", "Air Conditioning", "Food & Snacks"],
        phone: "+91 96264 09202",
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
        opening: "Open 24 hours <br>Check-in: 12:30 PM <br> Check-out: 12:00 PM",
        entry: "Room Charges Apply",
        bestTime: "Throughout the Year",
        facilities: ["WiFi", "Parking", "Restaurant", "Clean Rooms"],
        phone: "098437 17799",
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
        opening: "10:00 AM – 10:00 PM",
        entry: "Free Entry",
        bestTime: "Morning & Evening",
        facilities: ["Parking", "Shopping", "Billing Counter"],
        phone: " 04259 233 925",
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
        phone: "1800-425-31111 ",
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
        opening: "Monday – Friday <br> 9:00 AM – 4:00 PM",
        entry: "Authorized Visitors Only",
        bestTime: "Academic Working Days",
        facilities: ["Engineering Courses", "Computer Science", "Library", "Hostel", "Laboratories", "Placement Cell", "Sports", "Transport"],
        phone: "+91 96261 99499",
        map: "https://www.google.com/maps/search/?api=1&query=P.A.+College+of+Engineering+and+Technology+Pollachi"
    },

    monkeyfalls: {
        name: "Monkey Falls",
        category: "Tourist Place",
        image: "pollachi_images_png/monkeyfalls.png",
        subImages: [
            "popupimages/monkeyfalls.png",
            "popupimages/monkeyfalls1.png",
            "popupimages/monkeyfalls2.png",
            "popupimages/monkeyfalls3.png"
        ],
        rating: "4.3",
        reviews: "2,760 reviews",
        location: "Aliyar Road, Pollachi, Tamil Nadu",
        description: "A scenic waterfall near Aliyar, popular for nature lovers and a refreshing day trip.",
        opening: "9:00 AM – 5:00 PM ",
        entry: "₹50 per person",
        bestTime: "Monsoon & After Monsoon",
        facilities: ["Parking", "Food Stalls", "Photography"],
        phone: "04259-235385",
        map: "https://www.google.com/maps/search/?api=1&query=Monkey+Falls+Pollachi"
    },

    topslip: {
        name: "Topslip",
        category: "Tourist Place",
        image: "pollachi_images_png/topslip.png",
        subImages: [
            "popupimages/topslip1.png",
            "popupimages/topslip2.png",
            "popupimages/topslip3.png",
            "popupimages/topslip4.png"
        ],
        rating: "4.4",
        reviews: "3,120 reviews",
        location: "Anamalai Hills, Pollachi, Tamil Nadu",
        description: "A forest area in the Anamalai Hills known for wildlife, trekking and scenic views.",
        opening: "Check Forest Dept. timings",
        entry: "From ₹30 · See fees below",
        bestTime: "October – March",
        facilities: ["Wildlife Safari", "Parking", "Photography"],
        fees: [
            { item: "Park Entry (Indian)", price: "₹30 – ₹80 per adult, children ~₹15" },
            { item: "Park Entry (Foreign)", price: "₹100 – ₹300 per person" },
            { item: "Vehicle Entry (Car)", price: "₹50 – ₹150 per car" },
            { item: "Camera (Still)", price: "₹50" },
            { item: "Camera (Video)", price: "₹200 – ₹250" },
            { item: "Forest Safari (Shared Van/Bus)", price: "₹200 – ₹450 per person" },
            { item: "Private Jeep Safari", price: "₹2,000 – ₹3,940 per jeep (6–8 passengers)" },
            { item: "Kozhikamuthi Elephant Camp", price: "₹250 – ₹500 per person" }
        ],
        feesNote: "Mobile phone cameras are usually free. Heavy vehicles ₹150+. A guard fee may apply if transiting to Parambikulam.",
        phone: "",
        map: "https://www.google.com/maps/search/?api=1&query=Topslip+Pollachi"
    },

    appleinn: {
        name: "Apple Inn",
        category: "Hotel & Restaurant",
        image: "hotels&restaurantsimages/Apple Inn.png",
        subImages: [
            "popupimages/applein.png",
            "popupimages/applein1.png",
            "popupimages/applein2.png",
            "popupimages/applein3.png"
        ],
        rating: "4.7",
        reviews: "1000+ reviews",
        location: "Valparai Main Road, Pollachi",
        description: "A comfortable stay in Pollachi with clean rooms and modern facilities.",
        opening: " 24-hour front desk (Check-in: 2:00 PM, Check-out: 12:00 PM)",
        entry: "Room Charges Apply",
        bestTime: "Throughout the Year",
        facilities: ["Clean Room", "WiFi", "AC", "Parking", "Hot Water"],
        phone: "+91 70780 57805",
        map: "https://www.google.com/maps/search/?api=1&query=Apple+Inn+Pollachi"
    },

    srikrishnan: {
        name: "Sri Krishnan Residency",
        category: "Hotel & Restaurant",
        image: "hotels&restaurantsimages/Sri Krishnan Residency.png",
        subImages: [
            "popupimages/srikrishna.png",
            "popupimages/srikrishna1.png",
            "popupimages/srikrishna2.png",
            "popupimages/srikrishna3.png"
        ],
        rating: "3.7",
        reviews: "700+ reviews",
        location: "Raja Mill Road, Pollachi",
        description: "A budget-friendly hotel in Pollachi with clean, air-conditioned rooms.",
        opening: "Open 24 hours (Check-in: 12:00 PM, Check-out: 11:00 AM)",
        entry: "Room Charges Apply",
        bestTime: "Throughout the Year",
        facilities: ["Clean Room", "AC", "Parking", "Hot Water"],
        phone: " +91 86678 09995",
        map: "https://www.google.com/maps/search/?api=1&query=Sri+Krishnan+Residency+Pollachi"
    },

    surryamax: {
        name: "The Surrya Max Residency",
        category: "Hotel & Restaurant",
        image: "hotels&restaurantsimages/The Surrya Max Residency.png",
        subImages: [
            "popupimages/suriyamax.png",
            "popupimages/suryamax1.png",
            "popupimages/suryamax2.png",
            "popupimages/suryamax3.png"
        ],
        rating: "4.7",
        reviews: "1200+ reviews",
        location: "Nehru Colony, Pollachi",
        description: "A well-rated hotel in Pollachi with clean rooms and good amenities.",
        opening: "Open 24 hours (Check-in: 12:00 PM, Check-out: 11:00 AM)",
        entry: "Room Charges Apply",
        bestTime: "Throughout the Year",
        facilities: ["Clean Room", "WiFi", "AC", "Parking", "Hot Water"],
        phone: "+91 88836 72000",
        map: "https://www.google.com/maps/search/?api=1&query=The+Surrya+Max+Residency+Pollachi"
    },
    amuthasurabhi: {
        name: "Amutha Surabhi",
        category: "Restaurant",
        image: "hotels&restaurantsimages/Amutha Surabhi.png",
        subImages: [
            "popupimages/amuthasurabi.png",
            "popupimages/amuthasurabi1.png",
            "popupimages/amuthasurabi2.png",
            "popupimages/amuthasurabi3.png"
        ],
        rating: "4.1",
        reviews: "8.2K+ reviews",
        location: "Palani Main Road, Pollachi",
        description: "A pure vegetarian restaurant in Pollachi with family dining and a party hall.",
        opening: "6:00 AM – 10:30 PM ",
        entry: "Menu Prices Apply",
        bestTime: "Pure Veg",
        facilities: ["Pure Veg", "Family Dining", "Party Hall", "AC", "Parking"],
        phone: "+91 94884 02555",
        map: "https://www.google.com/maps/search/?api=1&query=Amutha+Surabhi+Unjavelampatti+Pollachi"
    },

    gowrikrishna: {
        name: "Hotel Gowri Krishna",
        category: "Restaurant",
        image: "hotels&restaurantsimages/Hotel Gowri Krishna.png",
        subImages: [
            "popupimages/g1.jpg",
            "popupimages/g2.jpg",
            "popupimages/g3.jpg",
            "popupimages/g4.jpg"
        ],
        rating: "4.1",
        reviews: "9K+ reviews",
        location: "Near Gandhi Statue, Pollachi",
        description: "A pure vegetarian restaurant in Pollachi with family dining and a party hall.",
        opening: "6:00 AM to 11:00 PM dailys",
        entry: "Menu Prices Apply",
        bestTime: "Pure Veg",
        facilities: ["Pure Veg", "Family Dining", "Party Hall", "AC", "Parking"],
        phone: "+91 98944 17033",
        map: "https://www.google.com/maps/search/?api=1&query=Hotel+Gowri+Krishna+4+New+Scheme+Road+Pollachi"
    },

    thepalm: {
        name: "The Palm",
        category: "Restaurant",
        image: "hotels&restaurantsimages/Thepalm.png",
        subImages: [
            "popupimages/plam1.jpg",
            "popupimages/plam2.jpg",
            "popupimages/plam3.jpg",
            "popupimages/plam4.jpg"
        ],
        rating: "4.5",
        reviews: "700+ reviews",
        location: "Meenkarai Road, Pollachi",
        description: "A restaurant in Pollachi serving veg and non-veg food, with family dining and a party hall.",
        opening: "12:30 PM – 3:00 PM <br> 7:30 PM – 10:00 PM",
        entry: "Menu Prices Apply",
        bestTime: "Veg & Non-Veg",
        facilities: ["Veg", "Non-Veg", "Family Dining", "Party Hall", "AC", "Parking"],
        phone: "+91 94890 46013",
        map: "https://www.google.com/maps/search/?api=1&query=The+Palm+Coco+Lagoon+Pollachi"
    },

    pollachiphavan: {
        name: "Pollachi Phavan Mess",
        category: "Restaurant",
        image: "hotels&restaurantsimages/pollachiphavan.png",
        subImages: [
            "popupimages/pavanam1.jpg",
            "popupimages/pavanam2.jpg",
            "popupimages/pavanam3.jpg",
            "popupimages/pavanam4.jpg"

        ],
        rating: "4.0",
        reviews: "520+ reviews",
        location: "Coimbatore Main Road, Pollachi",
        description: "A restaurant in Pollachi serving veg and non-veg food, with family dining and a party hall.",
        opening: "11:00 AM – 11:00 PM",
        entry: "Menu Prices Apply",
        bestTime: "Veg & Non-Veg",
        facilities: ["Veg", "Non-Veg", "Family Dining", "Party Hall", "AC", "Parking"],
        phone: "+91 99940 70655",
        map: "https://www.google.com/maps/search/?api=1&query=Pollachi+Phavan+Mess+72%2F82+Coimbatore+Main+Road+Pollachi"
    },

    thangamcinemas: {
        name: "Thangam Cinemas",
        category: "Theatre",
        image: "entertainmentimages/ThangamCinemas.png",
        subImages: [
            "popupimages/thanagam1.jpg",
            "popupimages/thangam2.jpg",
            "popupimages/thangam3.jpg",
            "popupimages/thangam4.jpg"
        ],
        rating: "4.4",
        reviews: "6,351+ ratings",
        location: "Kottur Road, Suleeswaranpatti, Pollachi",
        description: "A popular AC cinema theatre in Pollachi featuring 4K projection, 3D technology and Dolby Atmos sound.",
        opening: "Check Show Timings",
        entry: "Movie Ticket Prices Apply",
        bestTime: "Movie Show Timings",
        facilities: ["AC", "4K Projection", "3D", "Dolby Atmos", "Parking", "Food & Beverages", "Online Booking"],
        phone: "+91 98948 63783",
        map: "https://www.google.com/maps/search/?api=1&query=Thangam+Cinemas+Pollachi"
    },

    dorais: {
        name: "Dorais Movie Land",
        category: "Theatre",
        image: "entertainmentimages/DoraisTheatre.png",
        subImages: [
            "popupimages/dorais1.jpg",
            "popupimages/dorais2.jpg",
            "popupimages/dorais3.jpg",
            "popupimages/dorais4.jpg"
        ],
        rating: "4.0",
        reviews: "2,621+ reviews",
        location: "Mahalingapuram, Pollachi",
        description: "A popular cinema theatre in Pollachi featuring 4K laser projection, 3D technology and Dolby Atmos sound.",
        opening: "Check Show Timings",
        entry: "Movie Ticket Prices Apply",
        bestTime: "Movie Show Timings",
        facilities: ["AC", "4K Projection", "3D", "Dolby Atmos", "Parking", "Food & Beverages", "Online Booking"],
        phone: "04259-223307",
        map: "https://www.google.com/maps/search/?api=1&query=Dorais+Movie+Land+Pollachi"
    },

    srisakthi: {
        name: "Sri Sakthi Cinemas",
        category: "Theatre",
        image: "entertainmentimages/srishakthicinemas.png",
        subImages: [
            "popupimages/srisakthi1.jpg",
            "popupimages/srisakthi2.jpg",
            "popupimages/srisakthi3.jpg",
            "popupimages/srisakthi4.jpg"
        ],
        rating: "4.1",
        reviews: "691+ reviews",
        location: "24, Municipal Office Road, Pollachi",
        description: "A modern multiplex in Pollachi offering multiple screens, 4K projection, Dolby Atmos sound and a premium movie experience.",
        opening: "Check Show Timings",
        entry: "Movie Ticket Prices Apply",
        bestTime: "Movie Show Timings",
        facilities: ["AC", "4K Projection", "Dolby Atmos", "Multiple Screens", "Parking", "Food & Beverages", "Online Booking", "Digital Payments"],
        phone: "+91 80728 15115",
        map: "https://www.google.com/maps/search/?api=1&query=Sri+Sakthi+Cinemas+Pollachi"
    },

    mcet: {
        name: "Dr. Mahalingam College of Engineering and Technology (MCET)",
        category: "College",
        image: "educationimages/mcet.png",
        subImages: [
            "popupimages/mcet1.jpg",
            "popupimages/mcet2.jpg",
            "popupimages/mcet3.jpg",
            "popupimages/mcet4.jpg"
        ],
        rating: "4.3",
        reviews: "1,325+ reviews",
        location: "Udumalai Road, Annamalai Nagar, Makkinampatti, Pollachi - 642003",
        description: "An autonomous engineering college in Pollachi offering undergraduate and postgraduate programmes in engineering, technology and computer science.",
        opening: "9:00 AM - 5:00 PM",
        entry: "Admission Required",
        bestTime: "June - August (Admission Period)",
        facilities: ["Engineering Courses", "Computer Science", "Library", "Hostel", "Laboratories", "Placement Cell", "Sports", "Transport"],
        phone: "+91 4259 236030",
        map: "https://www.google.com/maps/search/?api=1&query=Dr+Mahalingam+College+of+Engineering+and+Technology+Pollachi"
    },

    ngmcollege: {
        name: "Nallamuthu Gounder Mahalingam College (NGM College)",
        category: "College",
        image: "educationimages/ngmcollege.png",
        subImages: [
            "popupimages/ngm1.jpg",
            "popupimages/ngm2.jpg",
            "popupimages/ngm3.jpg",
            "popupimages/ngm4.jpg"
        ],
        rating: "4.1",
        reviews: "623+ reviews",
        location: "90, Pollachi Palghat Road, Pollachi - 642001",
        description: "An autonomous arts and science college in Pollachi offering undergraduate, postgraduate and research programmes in arts, science, commerce and management.",
        opening: "9:00 AM - 6:00 PM",
        entry: "Admission Required",
        bestTime: "June - August (Admission Period)",
        facilities: ["Arts & Science Courses", "Commerce", "Computer Science", "Library", "Hostel", "Sports", "Placement Cell", "Transport"],
        phone: "+91 4259 234868",
        map: "https://www.google.com/maps/search/?api=1&query=NGM+College+Pollachi"
    },


    npc: {
        name: "Nachimuthu Polytechnic College (NPC)",
        category: "College",
        image: "educationimages/npc.png",
        subImages: [
            "popupimages/npt1.jpg",
            "popupimages/npt2.jpg",
            "popupimages/npt3.jpg",
            "popupimages/npt4.jpg"
        ],
        rating: "4.4",
        reviews: "535+ reviews",
        location: "Udumalai Road, Makkinampatti, Pollachi - 642003",
        description: "An autonomous government-aided polytechnic college established in 1957, offering diploma programmes in various engineering and technical disciplines.",
        opening: "9:00 AM - 5:00 PM",
        entry: "Admission Required",
        bestTime: "June - August (Admission Period)",
        facilities: ["Diploma Courses", "Engineering Departments", "Library", "Hostel", "Laboratories", "Placement Cell", "Sports", "Bus Service"],
        phone: "+91 4259 236030",
        map: "https://www.google.com/maps/search/?api=1&query=Nachimuthu+Polytechnic+College+Pollachi"
    },
    pollachibusstand: {
        name: "Pollachi Bus Stand",
        category: "Transport",
        image: "serviceimages/bus.png",
        subImages: [
            "popupimages/bus1.jpg",
            "popupimages/bus2.jpg",
            "popupimages/bus3.jpg",
            "popupimages/bus4.jpg"
        ],
        rating: "3.7",
        reviews: "5,116 reviews",
        location: "Pollachi Bus Stand, Pollachi, Tamil Nadu - 642001",
        description: "A major public transport hub connecting Pollachi with nearby towns, cities and villages through government and private bus services.",
        opening: "24 Hours",
        entry: "Free Entry",
        bestTime: "Early Morning - Evening",
        facilities: ["Government Buses", "Private Buses", "Bus Routes", "Passenger Waiting Area", "Nearby Auto Services"],
        phone: "",
        map: "https://www.google.com/maps/search/?api=1&query=Pollachi+Bus+Stand"
    },

    eastpolicestation: {
       name: "Pollachi West Police Station",
    category: "Police Station",
    image: "serviceimages/police station.png",
    subImages: [
        "popupimages/police1.jpg",
        "popupimages/police2.jpg",
        "popupimages/police3.jpg"
    ],
    rating: "Not Available",
    reviews: "No reviews yet",
    location: "Palakkad Road, Venkatasa Colony, Pollachi, Tamil Nadu - 642001",
    description: "A local police station providing law enforcement, public safety, complaint registration and emergency assistance.",
    opening: "24 Hours",
    entry: "Public Service",
    bestTime: "Available 24 Hours",
    facilities: [
        "Complaint Registration",
        "Public Safety",
        "Police Assistance",
        "Emergency Response"
    ],
    phone: "04259 224633",
    map: "https://www.google.com/maps/search/?api=1&query=Pollachi+West+Police+Station"
    },

    governmenthospital: {
        name: "Government Hospital, Pollachi",
        category: "Government Hospital",
        image: "serviceimages/Pollachi Government Hospital.png",
        subImages: [
            "popupimages/gh1.jpg",
            "popupimages/gh2.jpg",
            "popupimages/gh3.jpg",
            "popupimages/gh4.jpg"
        ],
        rating: "3.6",
        reviews: "109 reviews",
        location: "Udumalai Road, Pollachi, Tamil Nadu - 642001",
        description: "A government healthcare facility providing medical consultation, emergency treatment and healthcare services for Pollachi and surrounding areas.",
        opening: "24 Hours",
        entry: "Public Healthcare",
        bestTime: "Available 24 Hours",
        facilities: ["Emergency Services", "Outpatient Department", "Inpatient Care", "Medical Consultation", "Blood Bank", "Ambulance"],
        phone: "04259 229322",
        map: "https://www.google.com/maps/search/?api=1&query=Government+Hospital+Pollachi"
    },
    becafe: {
        name: "Be Cafe",
        category: "Cafe",
        image: "cafeimages/becafe.png",
        subImages: [

        ],
        rating: "4.0",
        reviews: "34+ ratings",
        location: "45/2, Palakkad Road, Pollachi, Tamil Nadu - 642001",
        description: "A casual cafe offering coffee, tea, milkshakes, ice creams, burgers, sandwiches, momos and snacks.",
        opening: "10:00 AM - 10:00 PM",
        entry: "Free Entry",
        bestTime: "Evening",
        facilities: ["Coffee", "Tea", "Milkshakes", "Ice Cream", "Burgers", "Sandwiches", "Momos", "Snacks"],
        phone: "+91 98944 81581",
        map: "https://www.google.com/maps/search/?api=1&query=Be+Cafe+Pollachi"
    },

    ascafe: {
        name: "AS Caffe - A Unit of Amutha Surabhi",
        category: "Cafe",
        image: "cafeimages/ascafe.png",
        subImages: [],
        rating: "4.3",
        reviews: "550 ratings",
        location: "83, Bharathi Street, Pollachi, Tamil Nadu - 642002",
        description: "A cafe offering a variety of food and beverages, including snacks, desserts and refreshing drinks.",
        opening: "Closing time: 10:30 PM",
        entry: "Free Entry",
        bestTime: "Evening",
        facilities: ["Food & Beverages", "Snacks", "Desserts", "Vegetarian Options", "Takeaway"],
        phone: "",
        map: "https://www.google.com/maps/search/?api=1&query=AS+Caffe+Amutha+Surabhi+Pollachi"
    },

    teaplanet: {
        name: "The Tea Planet",
        category: "Cafe",
        image: "cafeimages/teaplanet.png",
        subImages: [],
        rating: "4.4",
        reviews: "108 reviews",
        location: "1, Kamaraj Road, Near Rounddana, Mahalingapuram, Pollachi - 642002",
        description: "A popular cafe known for bubble tea, sandwiches, momos, pasta, mocktails and refreshing beverages.",
        opening: "11:30 AM - 11:30 PM",
        entry: "Free Entry",
        bestTime: "Evening",
        facilities: ["Bubble Tea", "Sandwiches", "Momos", "Pasta", "Mocktails", "Snacks", "Dine-in"],
        phone: "+91 77087 64899",
        map: "https://www.google.com/maps/search/?api=1&query=The+Tea+Planet+Pollachi"
    },
    londonshakes: {
        name: "1950 The London Shakes",
        category: "Cafe",
        image: "cafeimages/londonshakes.png",
        subImages: [],
        rating: "4.2",
        reviews: "1,397+ ratings",
        location: "No. 14, Tagore Street, Mahalingapuram, Pollachi - 642002",
        description: "A popular cafe in Pollachi serving milkshakes, waffles, burgers, sandwiches, pizzas, pasta, momos and refreshing beverages.",
        opening: "10:30 AM - 10:00 PM",
        entry: "Free Entry",
        bestTime: "Evening",
        facilities: ["Milkshakes", "Waffles", "Burgers", "Sandwiches", "Pizza", "Pasta", "Momos", "Desserts", "Takeaway", "Delivery"],
        phone: "+91 93636 17590",
        map: "https://www.google.com/maps/search/?api=1&query=1950+The+London+Shakes+Pollachi"
    },
    easybuy: {
        name: "EasyBuy",
        category: "Shopping",
        image: "shoppingimages/easybuy.png",
        subImages: [],
        rating: "4.7",
        reviews: "Online customer ratings",
        location: "Ground, 1st & 2nd Floor, Coimbatore Road, Opposite Dorais Theatre, Pollachi - 642002",
        description: "A value-fashion retail store offering affordable clothing and accessories for men, women and children.",
        opening: "10:30 AM - 9:30 PM",
        entry: "Free Entry",
        bestTime: "Weekdays",
        facilities: ["Men's Clothing", "Women's Clothing", "Kids' Clothing", "Fashion Accessories", "Footwear", "Parking", "Online Payment"],
        phone: "1800 202 4454",
        map: "https://www.google.com/maps/search/?api=1&query=EasyBuy+Pollachi"
    },

    max: {
        name: "Max Fashion",
        category: "Shopping",
        image: "shoppingimages/max.png",
        subImages: [],
        rating: "4.0",
        reviews: "Online customer ratings",
        location: "TS No. 36/2 & 36/3, New Scheme Road, Next to PNB Bank, Pollachi - 642002",
        description: "A fashion retail store offering trendy and affordable clothing, footwear and accessories for men, women and children.",
        opening: "10:00 AM - 10:00 PM",
        entry: "Free Entry",
        bestTime: "Weekdays",
        facilities: ["Men's Clothing", "Women's Clothing", "Kids' Clothing", "Footwear", "Fashion Accessories", "Parking", "Card Payment"],
        phone: "+91 93846 62734",
        map: "https://www.google.com/maps/search/?api=1&query=Max+Fashion+Pollachi"
    },

    srikumaran: {
        name: "Sri Kumaran Super Store",
        category: "Supermarket",
        image: "shoppingimages/srikumaran.png",
        subImages: [],
        rating: "4.0",
        reviews: "1,040 ratings",
        location: "133, Sri Krishna Towers, Coimbatore Main Road, Opposite Nallappa Theatre, Venkatasa Colony, Pollachi - 642002",
        description: "A well-known supermarket in Pollachi offering groceries, fruits, vegetables, kitchen essentials, stationery and household products.",
        opening: "Not Verified",
        entry: "Free Entry",
        bestTime: "Morning - Evening",
        facilities: ["Groceries", "Fruits", "Vegetables", "Kitchen Essentials", "Stationery", "Household Items", "Home Delivery", "Online Ordering"],
        phone: "+91 94451 94451",
        map: "https://www.google.com/maps/search/?api=1&query=Sri+Kumaran+Super+Store+Pollachi"
    },

    tramasamytextiles: {
        name: "T Ramasamy Textiles",
        category: "Textiles",
        image: "shoppingimages/tramasamytextiles.png",
        subImages: [],
        rating: "4.0",
        reviews: "662 ratings",
        location: "No. 27/2, Near Town Police Station, Near Kannan Departmental Store, Police Station Road, Pollachi Bazaar - 642001",
        description: "A textile and clothing store in Pollachi offering a variety of garments and clothing collections.",
        opening: "Not Verified",
        entry: "Free Entry",
        bestTime: "Morning - Evening",
        facilities: ["Textiles", "Clothing Collections", "Traditional Wear", "Casual Wear"],
        phone: "",
        map: "https://www.google.com/maps/search/?api=1&query=T+Ramasamy+Textiles+Pollachi"
    },
    arathana: {
        name: "Arathana Hospital",
        category: "Hospital",
        image: "hospitalimages/arathana.png",
        subImages: [],
        rating: "4.5",
        reviews: "831 reviews",
        location: "120 C, Coimbatore Main Road, Opposite NM Petrol Bunk, Venkatasa Colony, Pollachi - 642002",
        description: "A multi-speciality hospital in Pollachi with a major focus on orthopaedics, trauma care and emergency medical services.",
        opening: "24 Hours",
        entry: "Medical Consultation",
        bestTime: "Available 24 Hours",
        facilities: ["Orthopaedics", "Trauma Care", "Emergency Care", "Laboratory", "Dental Care", "Physiotherapy"],
        phone: "+91 96887 66611",
        map: "https://www.google.com/maps/search/?api=1&query=Arathana+Hospital+Pollachi"
    },

    srisakthy: {
        name: "Sri Sakthy Medical Care",
        category: "Hospital",
        image: "hospitalimages/srisakthy.png",
        subImages: [],
        rating: "4.9",
        reviews: "1,164 reviews",
        location: "New Scheme Road, Near Sindhiya Hospital, Pollachi - 642001",
        description: "A medical care centre providing physician consultations and healthcare services, with a focus on diabetes and chronic disease management.",
        opening: "Monday - Saturday: 9:00 AM - 7:30 PM",
        entry: "Medical Consultation",
        bestTime: "Morning - Evening",
        facilities: ["Diabetes Care", "Hypertension Management", "Cardiac Care", "Thyroid Care", "Neurology Consultation", "Gastroenterology Consultation"],
        phone: "+91 98652 61115",
        map: "https://www.google.com/maps/search/?api=1&query=Sri+Sakthy+Medical+Care+Pollachi"
    },

    mcvhospital: {
        name: "MCV Memorial ENT Trust Hospital",
        category: "ENT Hospital",
        image: "hospitalimages/mcvhospital.png",
        subImages: [],
        rating: "4.8",
        reviews: "1,441 reviews",
        location: "115, Palghat Road, Pollachi - 642001",
        description: "A specialised ENT hospital providing medical consultation, diagnosis and treatment for ear, nose, throat and head and neck conditions.",
        opening: "24 Hours (Confirm OPD timings)",
        entry: "Medical Consultation",
        bestTime: "Monday - Saturday",
        facilities: ["ENT Consultation", "Ear Treatment", "Nose & Sinus Treatment", "Throat Treatment", "Head & Neck Surgery", "Hearing Care"],
        phone: "+91 4259 225122",
        map: "https://www.google.com/maps/search/?api=1&query=MCV+Memorial+ENT+Trust+Hospital+Pollachi"
    },

    prabhuhospital: {
        name: "Prabhu Multi Speciality Hospital",
        category: "Multi Speciality Hospital",
        image: "hospitalimages/prabhuhospital.png",
        subImages: [],
        rating: "4.2",
        reviews: "443 reviews",
        location: "95, New Scheme Road, Pollachi - 642001",
        description: "A multi-speciality hospital providing medical consultations, emergency treatment, diagnostic services and specialised healthcare.",
        opening: "24 Hours",
        entry: "Medical Consultation",
        bestTime: "Available 24 Hours",
        facilities: ["Cardiology", "Dentistry", "Dermatology", "ICU Care", "Trauma Care", "General Surgery", "Orthopaedics", "Paediatric Care", "Emergency Services"],
        phone: "+91 78269 26308",
        map: "https://www.google.com/maps/search/?api=1&query=Prabhu+Multi+Speciality+Hospital+Pollachi"
    },
    railwaystation: {
        name: "Pollachi Junction Railway Station",
        category: "Railway Station",
        image: "serviceimages/Pollachi Junction Railway Station.png",
        subImages: [
            "popupimages/rail1.jpg",
            "popupimages/rail2.jpg",
            "popupimages/rail3.jpg",
            "popupimages/rail4.jpg"
        ],
        rating: "4.2",
        reviews: "306 reviews",
        location: "Railway Station Road, Periyapodhu, Pollachi - 642001",
        description: "Pollachi Junction is an important railway station connecting Pollachi with Coimbatore, Palakkad, Dindigul and other destinations.",
        opening: "24 Hours",
        entry: "Ticket Required for Travel",
        bestTime: "Based on Train Schedule",
        facilities: ["Railway Ticket Booking", "Waiting Hall", "Platforms", "Public Address System", "Wheelchair Facility", "Parking", "Food Stalls"],
        phone: "",
        map: "https://www.google.com/maps/search/?api=1&query=Pollachi+Junction+Railway+Station"
    },

    ragatravels: {
        name: "Raga Tours & Travels",
        category: "Tours & Travels",
        image: "transportimages/ragatravels.png",
        subImages: [],
        rating: "4.9",
        reviews: "834 reviews",
        location: "Shop No. 4, S.S Complex, New Scheme Road, Above Poorvika Mobile, Mahalingapuram, Pollachi - 642001",
        description: "A local travel agency offering taxi services, car rentals, outstation trips and sightseeing tours to destinations such as Valparai, Topslip and Parambikulam.",
        opening: "24 Hours",
        entry: "Booking Required",
        bestTime: "Available 24 Hours",
        facilities: ["Call Taxi", "Car Rental", "Outstation Trips", "Valparai Tours", "Topslip Tours", "Sightseeing Packages"],
        phone: "+91 98422 29090",
        map: "https://www.google.com/maps/search/?api=1&query=Raga+Tours+and+Travels+Pollachi"
    },

    passengerautostand: {
        name: "Passenger Auto Stand",
        category: "Auto Stand",
        image: "transportimages/passengerautostand.png",
        subImages: [],
        rating: "5.0",
        reviews: "3 reviews",
        location: "Palakkad - Pollachi Road, Outside Pollachi New Bus Stand, Pollachi - 642001",
        description: "A local passenger auto-rickshaw stand providing convenient transportation for short-distance travel within Pollachi and nearby areas.",
        opening: "Not Verified",
        entry: "Fare Applicable",
        bestTime: "Based on Auto Availability",
        facilities: ["Auto Rickshaw Service", "Local Transportation", "Passenger Pickup", "Short-Distance Travel"],
        phone: "",
        map: "https://www.google.com/maps/search/?api=1&query=Passenger+Auto+Stand+Pollachi"
    },
    pollachihpo: {
        name: "Pollachi Head Post Office",
        category: "Post Office",
        image: "bankimages/pollachihpo.png",
        subImages: [],
        rating: "3.4",
        reviews: "75 reviews",
        location: "Palakkad Road, Palaghat, Pollachi - 642001",
        description: "The main India Post office in Pollachi providing postal, parcel, Speed Post, registered post and savings-related services.",
        opening: "Monday - Friday: 8:00 AM - 8:00 PM; Saturday: 8:00 AM - 3:00 PM",
        entry: "Free Entry",
        bestTime: "Weekday Morning",
        facilities: ["Speed Post", "Registered Post", "Parcel Booking", "Post Office Savings", "Money Orders", "Postal Tracking"],
        phone: "+91 4259 229316",
        map: "https://www.google.com/maps/search/?api=1&query=Pollachi+Head+Post+Office"
    },

    mahalingapurampost: {
        name: "Mahalingapuram Post Office",
        category: "Post Office",
        image: "bankimages/mahalingapurampost.png",
        subImages: [],
        rating: "3.3",
        reviews: "12 reviews",
        location: "1, Vijayaraghavan Street, Mahalingapuram, Pollachi - 642002",
        description: "An India Post sub post office serving the Mahalingapuram area with everyday postal and delivery services.",
        opening: "9:00 AM - 5:00 PM",
        entry: "Free Entry",
        bestTime: "Weekday Morning",
        facilities: ["Mail Delivery", "Speed Post", "Registered Post", "Parcel Services", "Postal Tracking", "Savings Services"],
        phone: "1800 266 6868",
        map: "https://www.google.com/maps/search/?api=1&query=Mahalingapuram+Post+Office+Pollachi"
    },

    sbi: {
        name: "State Bank of India (SBI)",
        category: "Bank",
        image: "bankimages/sbi.png",
        subImages: [],
        rating: "2.8",
        reviews: "99 reviews",
        location: "1, Palakkad Road, Venkatasa Colony, Pollachi - 642001",
        description: "A major public sector bank providing personal banking, savings accounts, loans, deposits and digital banking services.",
        opening: "Monday - Saturday: 10:00 AM - 4:00 PM",
        entry: "Free Entry",
        bestTime: "Weekday Morning",
        facilities: ["Savings Account", "Current Account", "ATM", "Personal Loans", "Gold Loans", "Fixed Deposits", "Internet Banking", "UPI Services"],
        phone: "1800 1234",
        map: "https://www.google.com/maps/search/?api=1&query=State+Bank+of+India+Pollachi"
    },

    esafbank: {
        name: "ESAF Small Finance Bank",
        category: "Bank",
        image: "bankimages/esafbank.png",
        subImages: [],
        rating: "4.7",
        reviews: "26 reviews",
        location: "Shop No. 58/3A, Municipal Boys HSS Street, Opposite ATSC Theatre, Pollachi - 642001",
        description: "A small finance bank offering savings accounts, deposits, microfinance, gold loans and other banking services.",
        opening: "Monday - Saturday: 9:00 AM - 5:30 PM",
        entry: "Free Entry",
        bestTime: "Weekday Morning",
        facilities: ["Savings Account", "Fixed Deposits", "Gold Loans", "Microfinance", "ATM", "Money Transfer", "Digital Banking"],
        phone: "+91 92880 93016",
        map: "https://www.google.com/maps/search/?api=1&query=ESAF+Small+Finance+Bank+Pollachi"
    },
    hdfcbank: {
        name: "HDFC Bank",
        category: "Bank",
        image: "bankimages/hdfcbank.png",
        subImages: [],
        rating: "Not Verified",
        reviews: "No verified review count",
        location: "No. 1, Venkatraman Road, Mahalingapuram, Pollachi - 642002",
        description: "HDFC Bank is a private sector bank providing personal banking, savings accounts, current accounts, loans, deposits, credit cards and digital banking services.",
        opening: "Monday - Saturday: 10:00 AM - 4:00 PM (Confirm with Branch)",
        entry: "Free Entry",
        bestTime: "Weekday Morning",
        facilities: ["Savings Account", "Current Account", "ATM", "Personal Loans", "Home Loans", "Gold Loans", "Fixed Deposits", "Credit Cards", "Internet Banking", "UPI Services"],
        phone: "1800 1601",
        map: "https://www.google.com/maps/search/?api=1&query=HDFC+Bank+Venkatraman+Road+Pollachi"
    },
    sreekaliamman: {
        name: "Sree Kaliamman Traders",
        category: "Petrol Pump",
        image: "petrolimages/sreekaliamman.png",
        subImages: [],
        rating: "4.2",
        reviews: "378 reviews",
        location: "Ground Floor, Coimbatore Road, Gandhi Market, Pollachi - 642001",
        description: "An IndianOil petrol pump in Pollachi providing petrol, diesel and other fuel services for local commuters and travellers.",
        opening: "6:00 AM - 10:00 PM",
        entry: "Free Entry",
        bestTime: "Anytime During Operating Hours",
        facilities: ["Petrol", "Diesel", "XP95 Fuel", "XP100 Fuel", "Air Filling", "Digital Payment"],
        phone: "+91 96552 13699",
        map: "https://www.google.com/maps/search/?api=1&query=Sree+Kaliamman+Traders+Pollachi"
    },

    pollachiassociates: {
        name: "Pollachi Associates",
        category: "Petrol Pump",
        image: "petrolimages/pollachiassociates.png",
        subImages: [],
        rating: "Not Verified",
        reviews: "No verified review count",
        location: "Ground Floor, Theppakulam Street, Pollachi - 642001",
        description: "A Hindustan Petroleum (HPCL) fuel station providing petrol and diesel services to vehicles in Pollachi.",
        opening: "24 Hours",
        entry: "Free Entry",
        bestTime: "Available 24 Hours",
        facilities: ["Petrol", "Diesel", "Fuel Filling", "Vehicle Refuelling"],
        phone: "+91 94422 20188",
        map: "https://www.google.com/maps/search/?api=1&query=Pollachi+Associates+Petrol+Bunk"
    },

    nmahalingam: {
        name: "N. Mahalingam & Co.",
        category: "Petrol Pump",
        image: "petrolimages/nmahalingam.png",
        subImages: [],
        rating: "4.2",
        reviews: "629 reviews",
        location: "102, Coimbatore Road, Arumugam Nagar, Pollachi - 642002",
        description: "An ABT petrol pump operated by N. Mahalingam & Company, part of the Sakthi & ABT Group, providing fuel services to vehicles in Pollachi.",
        opening: "24 Hours",
        entry: "Free Entry",
        bestTime: "Available 24 Hours",
        facilities: ["Petrol", "Diesel", "Fuel Filling", "Vehicle Refuelling"],
        phone: "+91 95855 09456",
        map: "https://www.google.com/maps/search/?api=1&query=N+Mahalingam+and+Co+Petrol+Pump+Pollachi"
    },
    sreekaliamman: {
        name: "Sree Kaliamman Traders",
        category: "Petrol Pump",
        image: "petrolimages/sreekaliamman.png",
        subImages: [],
        rating: "4.2",
        reviews: "378 reviews",
        location: "Ground Floor, Coimbatore Road, Gandhi Market, Pollachi - 642001",
        description: "An IndianOil petrol pump in Pollachi providing petrol, diesel and other fuel services for local commuters and travellers.",
        opening: "6:00 AM - 10:00 PM",
        entry: "Free Entry",
        bestTime: "Anytime During Operating Hours",
        facilities: ["Petrol", "Diesel", "XP95 Fuel", "XP100 Fuel", "Air Filling", "Digital Payment"],
        phone: "+91 96552 13699",
        map: "https://www.google.com/maps/search/?api=1&query=Sree+Kaliamman+Traders+Pollachi"
    },

    pollachiassociates: {
        name: "Pollachi Associates",
        category: "Petrol Pump",
        image: "petrolimages/pollachiassociates.png",
        subImages: [],
        rating: "Not Verified",
        reviews: "No verified review count",
        location: "Ground Floor, Theppakulam Street, Pollachi - 642001",
        description: "A Hindustan Petroleum (HPCL) fuel station providing petrol and diesel services to vehicles in Pollachi.",
        opening: "24 Hours",
        entry: "Free Entry",
        bestTime: "Available 24 Hours",
        facilities: ["Petrol", "Diesel", "Fuel Filling", "Vehicle Refuelling"],
        phone: "+91 94422 20188",
        map: "https://www.google.com/maps/search/?api=1&query=Pollachi+Associates+Petrol+Bunk"
    },

    nmahalingam: {
        name: "N. Mahalingam & Co.",
        category: "Petrol Pump",
        image: "petrolimages/nmahalingam.png",
        subImages: [],
        rating: "4.2",
        reviews: "629 reviews",
        location: "102, Coimbatore Road, Arumugam Nagar, Pollachi - 642002",
        description: "An ABT petrol pump operated by N. Mahalingam & Company, part of the Sakthi & ABT Group, providing fuel services to vehicles in Pollachi.",
        opening: "24 Hours",
        entry: "Free Entry",
        bestTime: "Available 24 Hours",
        facilities: ["Petrol", "Diesel", "Fuel Filling", "Vehicle Refuelling"],
        phone: "+91 95855 09456",
        map: "https://www.google.com/maps/search/?api=1&query=N+Mahalingam+and+Co+Petrol+Pump+Pollachi"
    },
    pollachitalukoffice: {
        name: "Pollachi Taluk Office",
        category: "Government Office",
        image: "governmentimages/pollachitalukoffice.png",
        subImages: [],
        rating: "Not Verified",
        reviews: "No reviews yet",
        location: "Taluk Office Campus, Pollachi, Coimbatore District - 642001",
        description: "A Tamil Nadu Government Revenue Department office providing land records, income certificates, community certificates, nativity certificates and other revenue-related public services.",
        opening: "Monday - Friday: 10:00 AM - 5:45 PM",
        entry: "Public Service",
        bestTime: "Weekday Morning",
        facilities: ["Income Certificate", "Community Certificate", "Nativity Certificate", "Land Records", "Patta Services", "Revenue Services"],
        phone: "04259 226625",
        map: "https://www.google.com/maps/search/?api=1&query=Pollachi+Taluk+Office"
    },

    pollachimunicipality: {
        name: "Pollachi Municipality Office",
        category: "Government Office",
        image: "governmentimages/pollachimunicipality.png",
        subImages: [],
        rating: "Not Verified",
        reviews: "No reviews yet",
        location: "108, Palakkad Road, Pollachi, Coimbatore District - 642001",
        description: "The local municipal administration office responsible for civic services, public health, sanitation, water supply, roads and municipal development in Pollachi.",
        opening: "Monday - Friday: 10:00 AM - 5:45 PM",
        entry: "Public Service",
        bestTime: "Weekday Morning",
        facilities: ["Property Tax Payment", "Water Tax Payment", "Birth Certificate", "Death Certificate", "Trade Licence", "Sanitation Services", "Public Grievances"],
        phone: "04259 220999",
        map: "https://www.google.com/maps/search/?api=1&query=Pollachi+Municipality+Office"
    },

    subcollectoroffice: {
        name: "Sub Collector Office, Pollachi",
        category: "Government Office",
        image: "governmentimages/subcollectoroffice.png",
        subImages: [],
        rating: "Not Verified",
        reviews: "No reviews yet",
        location: "Palakkad Road, Pollachi, Coimbatore District - 642001",
        description: "The Sub Collector Office administers revenue division activities, handles public grievances, coordinates government departments and oversees revenue administration in the Pollachi division.",
        opening: "Monday - Friday: 10:00 AM - 5:45 PM",
        entry: "Public Service",
        bestTime: "Weekday Morning",
        facilities: ["Public Grievance Redressal", "Revenue Administration", "Land-related Enquiries", "Government Service Coordination", "Public Petitions"],
        phone: "04259 224855",
        map: "https://www.google.com/maps/search/?api=1&query=Sub+Collector+Office+Pollachi"
    },
    tangedco: {
        name: "Electricity Board (TANGEDCO)",
        category: "Government Service",
        image: "governmentimages/tangedco.png",
        subImages: [],
        rating: "Not Verified",
        reviews: "No reviews yet",
        location: "Pollachi Electricity Distribution Office, Pollachi, Coimbatore District - 642001",
        description: "The Tamil Nadu electricity distribution service providing electricity connections, bill payments, power supply maintenance and complaint registration for Pollachi residents.",
        opening: "Monday - Saturday: 10:00 AM - 5:00 PM",
        entry: "Public Service",
        bestTime: "Weekday Morning",
        facilities: ["Electricity Bill Payment", "New Service Connection", "Power Failure Complaints", "Meter Related Services", "Name Transfer", "Online Payment", "Customer Support"],
        phone: "1912",
        map: "https://www.google.com/maps/search/?api=1&query=TANGEDCO+Electricity+Board+Pollachi"
    },

    arasusevai: {
        name: "Arasu e-Sevai Centre",
        category: "Government Service",
        image: "governmentimages/arasusevai.png",
        subImages: [],
        rating: "Not Verified",
        reviews: "No reviews yet",
        location: "Various Locations in Pollachi",
        description: "Tamil Nadu Government e-Sevai centres help citizens access online government services, apply for certificates and submit applications through authorised service centres.",
        opening: "Varies by Centre",
        entry: "Service Charges Applicable",
        bestTime: "Weekday Morning",
        facilities: ["Income Certificate", "Community Certificate", "Nativity Certificate", "Birth Certificate Application", "Death Certificate Application", "Patta Services", "Government Scheme Applications", "Online Applications"],
        phone: "",
        map: "https://www.google.com/maps/search/?api=1&query=Arasu+e-Sevai+Centre+Pollachi"
    }

};


// ============================================================
// 2. Category ku yetha labels (3 info boxes)
// ============================================================
const categoryLabels = {
    "Theater": ["Opening Hours", "Ticket Price", "Best Time to Visit"],
    "Hotel & Restaurant": ["Timings", "Price", "Best Time to Visit"],
    "Tourist Place": ["Opening Hours", "Entry Fee", "Best Time to Visit"],
    "College": ["Timings", "Admission", "Best Time to Visit"],
    "Shopping": ["Timings", "Entry", "Best Time to Visit"],
    "Hospital": ["Open", "Emergency", "Specialities"],
    "Service": ["Timings", "Phone", "Services"],
    "Restaurant": ["Timings", "Price", "Food Type"],

    "Cafe": ["Opening Hours", "Price", "Best Time to Visit"],
    "Education": ["Opening Hours", "Admission", "Courses"],
    "Petrol Pump": ["Opening Hours", "Fuel Types", "Facilities"],
    "Auto LPG Station": ["Opening Hours", "Fuel Type", "Facilities"],
    "Bank": ["Bank Timings", "Account Services", "Customer Care"],
    "Post Office": ["Opening Hours", "Postal Services", "Contact"],
    "Transport": ["Service Timings", "Ticket / Fare", "Facilities"],
    "Railway Station": ["Station Timings", "Train Services", "Facilities"],
    "Tours & Travels": ["Opening Hours", "Travel Packages", "Contact"],
    "Auto Stand": ["Availability", "Fare", "Service Type"],
    "Police Station": ["Availability", "Emergency Contact", "Services"],
    "Government Hospital": ["Opening Hours", "Emergency", "Medical Services"],
    "Government Office": ["Office Timings", "Contact", "Public Services"],
    "Government Service": ["Service Timings", "Contact", "Available Services"],
    "Multi Speciality Hospital": ["Opening Hours", "Emergency", "Specialities"],
    "ENT Hospital": ["Opening Hours", "Consultation", "Specialities"],
    "Supermarket": ["Opening Hours", "Products", "Facilities"],
    "Textiles": ["Opening Hours", "Collections", "Facilities"]
};


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