const categories = [

  {
    id: 1,
    name: "Travel",
    offers: 988,
    icon: "✈️",
    api:"https://www.freetestapi.com/api/v1/destinations?sort=name&order=desc",
    data: [
      {
        name: "Flights",
        image: "https://e7.pngegg.com/pngimages/551/808/png-clipart-airplane-flight-airplane-s-mode-of-transport-flight-thumbnail.png", // Replace with actual image URL
        description: "Book flights at amazing prices.",
      },
      {
        name: "Hotels",
        image: "https://e7.pngegg.com/pngimages/853/941/png-clipart-orange-hotel-illustration-hotel-gratis-vecteur-hotel-angle-text-thumbnail.png", // Replace with actual image URL
        description: "Stay in luxurious hotels for less.",
      },
      {
        name: "Tours",
        image: "https://e7.pngegg.com/pngimages/816/6/png-clipart-cebu-galaxy-tours-travel-vacation-tour-operator-hotel-travel-room-swimwear-thumbnail.png", // Replace with actual image URL
        description: "Explore the world with our tours.",
      },
      {
        name: "Food",
        image: "https://e7.pngegg.com/pngimages/269/559/png-clipart-fast-food-organic-food-vegetarian-cuisine-junk-food-junk-food-natural-foods-food-thumbnail.png", // Replace with actual image URL
        description: "Discover top restaurants and eateries.",
      },
      {
        name: "Cab",
        image: "https://e7.pngegg.com/pngimages/468/40/png-clipart-taxi-yellow-cab-taxi-car-desktop-wallpaper-thumbnail.png", // Replace with actual image URL
        description: "Affordable and reliable cab services.",
      },
      {
        name: "Rental Cars",
        image: "https://e7.pngegg.com/pngimages/196/164/png-clipart-car-rental-renting-bus-fleet-vehicle-car-compact-car-car-thumbnail.png", // Replace with actual image URL
        description: "Rent cars for your trips at great rates.",
      },
      {
        name: "Cruises",
        image: "https://e7.pngegg.com/pngimages/611/91/png-clipart-white-cruise-ship-on-body-of-water-illustration-cruise-ship-travel-passenger-princess-cruises-cruise-ship-mode-of-transport-luxury-yacht-thumbnail.png", // Replace with actual image URL
        description: "Set sail for a relaxing cruise experience.",
      },
      {
        name: "Backpacks",
        image: "https://e7.pngegg.com/pngimages/357/592/png-clipart-backpacking-bag-backpack-blue-luggage-bags-thumbnail.png", // Replace with actual image URL
        description: "The best backpacks for your travel adventures.",
      },
      {
        name: "Travel Guides",
        image: "https://e7.pngegg.com/pngimages/835/145/png-clipart-tourism-tour-guide-travel-vacation-tourist-child-hand-thumbnail.png", // Replace with actual image URL
        description: "Get expert travel guides to make the most of your trip.",
      },
      {
        name: "Local Events",
        image: "https://e7.pngegg.com/pngimages/295/540/png-clipart-pattaya-travel-hotel-tour-guide-beach-sea-fishing-blue-landscape-thumbnail.png", // Replace with actual image URL
        description: "Find exciting local events during your travels.",
      },
    ],
  },
  
  {
    id: 2,
    name: "Web Hosting",
    offers: 386,
    icon: "☁️",
    api:"https://api.escuelajs.co/api/v1/categories",
    data: [
      {
        name: "Shared Hosting",
        image: "https://e7.pngegg.com/pngimages/323/805/png-clipart-e-commerce-web-design-internet-online-shopping-sales-web-design-web-design-company-thumbnail.png", // Replace with actual image path
      },
      {
        name: "VPS",
        image: "https://e7.pngegg.com/pngimages/162/756/png-clipart-virtual-machine-virtual-private-server-vmware-vsphere-computer-servers-virtualization-others-computer-network-windows-server-thumbnail.png", // Replace with actual image path
      },
      {
        name: "Cloud Hosting",
        image: "https://e7.pngegg.com/pngimages/701/111/png-clipart-shared-web-hosting-service-cloud-computing-internet-hosting-service-dedicated-hosting-service-workspace-text-cloud-computing-thumbnail.png", // Replace with actual image path
      },
      {
        name: "Dedicated Servers",
        image: "https://e7.pngegg.com/pngimages/975/111/png-clipart-data-center-server-web-hosting-service-dedicated-hosting-service-computer-network-server-hd-cloud-computing-internet-thumbnail.png", // Replace with actual image path
      },
      {
        name: "Domain Registration",
        image: "https://e7.pngegg.com/pngimages/59/270/png-clipart-domain-name-web-hosting-service-world-wide-web-website-search-engine-optimization-world-wide-web-search-engine-optimization-web-design-thumbnail.png", // Replace with actual image path
      },
      {
        name: "SSL Certificates",
        image: "https://e7.pngegg.com/pngimages/1011/970/png-clipart-transport-layer-security-comodo-group-computer-security-https-public-key-certificate-ssl-text-logo-thumbnail.png", // Replace with actual image path
      },
      {
        name: "Website Builders",
        image: "https://e7.pngegg.com/pngimages/309/465/png-clipart-logo-website-builder-world-wide-web-web-design-text-thumbnail.png", // Replace with actual image path
      },
      {
        name: "Email Hosting",
        image: "https://e7.pngegg.com/pngimages/527/350/png-clipart-email-address-technical-support-customer-service-web-hosting-service-email-miscellaneous-logo-thumbnail.png", // Replace with actual image path
      },
      {
        name: "Managed WordPress",
        image: "https://e7.pngegg.com/pngimages/659/992/png-clipart-email-hosting-service-aol-mail-webmail-envelope-miscellaneous-angle-thumbnail.png", // Replace with actual image path
      },
      {
        name: "CDN Services",
        image: "https://e7.pngegg.com/pngimages/276/515/png-clipart-cloudinary-computer-software-software-as-a-service-digital-asset-management-others-miscellaneous-text-thumbnail.png", // Replace with actual image path
      },
    ],
  }
  ,
  {
    id: 3,
    name: "Beauty And Health",
    offers: 1986,
    icon: "💄",
    api:"https://api.escuelajs.co/api/v1/categories",
    data: [
      {
        name: "Skincare",
        image: "https://e7.pngegg.com/pngimages/423/47/png-clipart-lotion-skin-care-cream-exfoliation-skincare-face-cosmetics-thumbnail.png", // Replace with actual image path
      },
      {
        name: "Haircare",
        image: "https://e7.pngegg.com/pngimages/169/994/png-clipart-hair-coloring-long-hair-capelli-beauty-brown-hair-haircare-woman-girl-thumbnail.png", // Replace with actual image path
      },
      {
        name: "Makeup",
        image: "https://e7.pngegg.com/pngimages/370/703/png-clipart-ingredients-of-cosmetics-beauty-parlour-makeup-cosmetics-assorted-makeup-kit-miscellaneous-cosmetics-thumbnail.png", // Replace with actual image path
      },
      {
        name: "Vitamins",
        image: "https://e7.pngegg.com/pngimages/463/52/png-clipart-two-yellow-gels-illustration-vitamin-e-gold-vitamin-e-gold-coin-cosmetics-thumbnail.png", // Replace with actual image path
      },
      {
        name: "Supplements",
        image: "https://e7.pngegg.com/pngimages/864/722/png-clipart-dietary-supplement-whey-protein-bodybuilding-supplement-proteine-nutrition-whey-thumbnail.png", // Replace with actual image path
      },
      {
        name: "Fitness Equipment",
        image: "https://e7.pngegg.com/pngimages/91/921/png-clipart-elliptical-trainers-exercise-equipment-physical-fitness-exercise-bikes-bicycle-bicycle-frame-indoor-cycling-thumbnail.png", // Replace with actual image path
      },
      {
        name: "Spa Treatments",
        image: "https://e7.pngegg.com/pngimages/36/954/png-clipart-massage-people-massage-beauty-massage-woman-thumbnail.png", // Replace with actual image path
      },
      {
        name: "Fragrances",
        image: "https://e7.pngegg.com/pngimages/808/880/png-clipart-kannauj-ittar-perfume-agarwood-fragrance-oil-perfumes-perfume-india-thumbnail.png", // Replace with actual image path
      },
      {
        name: "Dental Care",
        image: "https://e7.pngegg.com/pngimages/558/412/png-clipart-dentist-looking-at-child-s-tooth-collage-dentistry-health-care-dental-implant-health-face-service-thumbnail.png", // Replace with actual image path
      },
      {
        name: "Eye Care",
        image: "https://e7.pngegg.com/pngimages/926/748/png-clipart-lasik-eye-surgery-eye-care-professional-eye-face-people-thumbnail.png", // Replace with actual image path
      },
    ],
  }
  ,
  {
    id: 4,
    name: "Clothing & Accessories",
    offers: 1019,
    icon: "👗",
    api:"https://api.escuelajs.co/api/v1/categories",
    data: [
      {
        name: "Dresses",
        image: "https://e7.pngegg.com/pngimages/679/478/png-clipart-evening-gown-prom-wedding-dress-dress-blue-fashion-thumbnail.png", // Replace with actual image path
      },
      {
        name: "Shoes",
        image: "https://e7.pngegg.com/pngimages/494/469/png-clipart-shoe-sandal-poster-taobao-a-pair-of-shoes-and-a-sandals-brown-leather-thumbnail.png", // Replace with actual image path
      },
      {
        name: "Handbags",
        image: "https://e7.pngegg.com/pngimages/711/532/png-clipart-handbag-leather-women-bag-white-luggage-bags-thumbnail.png", // Replace with actual image path
      },
      {
        name: "Jewelry",
        image: "https://e7.pngegg.com/pngimages/985/836/png-clipart-jewelry-jewelry-thumbnail.png", // Replace with actual image path
      },
      {
        name: "Watches",
        image: "https://e7.pngegg.com/pngimages/82/539/png-clipart-round-silver-colored-rolex-watch-at-10-10-rolex-daytona-rolex-datejust-counterfeit-watch-rolex-watch-watch-black-watches-electronics-black-hair-thumbnail.png", // Replace with actual image path
      },
      {
        name: "Hats",
        image: "https://e7.pngegg.com/pngimages/150/788/png-clipart-brown-straw-sun-hat-straw-hat-cap-cowboy-hat-sun-hat-raffia-hat-file-hat-fashion-thumbnail.png", // Replace with actual image path
      },
      {
        name: "Scarves",
        image: "https://e7.pngegg.com/pngimages/546/474/png-clipart-scarf-winter-fashion-wool-designer-children-fall-and-winter-scarves-child-children-thumbnail.png", // Replace with actual image path
      },
      {
        name: "Belts",
        image: "https://e7.pngegg.com/pngimages/231/793/png-clipart-black-belt-leather-black-belt-black-hair-fashion-thumbnail.png", // Replace with actual image path
      },
      {
        name: "Sunglasses",
        image: "https://e7.pngegg.com/pngimages/29/95/png-clipart-brown-aviator-sunglasses-with-silver-frames-aviator-sunglasses-eyewear-goggles-men-sunglass-brown-lens-thumbnail.png", // Replace with actual image path
      },
      {
        name: "Wallets",
        image: "https://e7.pngegg.com/pngimages/999/354/png-clipart-wallet-open-wallet-brown-leather-thumbnail.png", // Replace with actual image path
      },
    ],
  }
  ,
  {
    id: 5,
    name: "Electronics",
    offers: 363,
    icon: "📱",
    api:"https://api.escuelajs.co/api/v1/categories",
    data: [
      {
        name: "Phones",
        image: "https://e7.pngegg.com/pngimages/838/31/png-clipart-iphone-x-apple-iphone-8-plus-apple-iphone-7-plus-mobile-phone-accessories-iphone-5s-apple-gadget-mobile-phone-case-thumbnail.png", // Replace with actual image path
      },
      {
        name: "Laptops",
        image: "https://e7.pngegg.com/pngimages/63/912/png-clipart-black-microsoft-windows-laptop-computer-laptop-macbook-pro-refurbishment-macbook-air-laptops-gadget-electronics-thumbnail.png", // Replace with actual image path
      },
      {
        name: "Cameras",
        image: "https://e7.pngegg.com/pngimages/66/758/png-clipart-camera-camera-electronics-lens-thumbnail.png", // Replace with actual image path
      },
      {
        name: "Tablets",
        image: "https://e7.pngegg.com/pngimages/259/279/png-clipart-turned-on-tablet-computer-sony-xperia-z4-tablet-sony-xperia-tablet-z-sony-xperia-z2-tablet-sony-xperia-tablet-s-tablet-electronics-gadget-thumbnail.png", // Replace with actual image path
      },
      {
        name: "Headphones",
        image: "https://e7.pngegg.com/pngimages/306/125/png-clipart-headphones-headphones-thumbnail.png", // Replace with actual image path
      },
      {
        name: "Smartwatches",
        image: "https://e7.pngegg.com/pngimages/486/490/png-clipart-apple-watch-series-3-smartwatch-apple-watch-accessory-apple-watch-thumbnail.png", // Replace with actual image path
      },
      {
        name: "Gaming Consoles",
        image: "https://e7.pngegg.com/pngimages/773/938/png-clipart-xbox-one-x-video-game-consoles-black-video-game-console-accessories-playstation-4-xbox-thumbnail.png", // Replace with actual image path
      },
      {
        name: "Printers",
        image: "https://e7.pngegg.com/pngimages/489/564/png-clipart-copier-xerox-multi-function-printer-machine-printer-electronics-canon-thumbnail.png", // Replace with actual image path
      },
      {
        name: "Routers",
        image: "https://e7.pngegg.com/pngimages/75/701/png-clipart-black-modem-router-wireless-router-wi-fi-modem-icons-miscellaneous-electronics-thumbnail.png", // Replace with actual image path
      },
      {
        name: "Storage Drives",
        image: "https://e7.pngegg.com/pngimages/934/883/png-clipart-usb-flash-drives-kingston-technology-flash-memory-computer-data-storage-kingston-datatraveler-vault-privacy-3-flash-drive-computer-usb-flash-drive-thumbnail.png", // Replace with actual image path
      },
    ],
  }
  ,
  {
    id: 6,
    name: "Education",
    offers: 804,
    icon: "📚",
    api:"https://api.escuelajs.co/api/v1/categories",
    data: [
      {
        name: "Online Courses",
        image: "https://e7.pngegg.com/pngimages/27/972/png-clipart-pedagogy-massive-open-online-course-education-university-student-student-computer-network-angle-thumbnail.png", // Replace with actual image path
      },
      {
        name: "Books",
        image: "https://e7.pngegg.com/pngimages/920/640/png-clipart-book-lot-book-book-retro-comic-book-thumbnail.png", // Replace with actual image path
      },
      {
        name: "Tutoring",
        image: "https://e7.pngegg.com/pngimages/9/155/png-clipart-student-class-course-tutor-student-thumbnail.png", // Replace with actual image path
      },
      {
        name: "Language Learning",
        image: "https://e7.pngegg.com/pngimages/812/200/png-clipart-foreign-language-learning-language-acquisition-language-school-school-text-balloon-thumbnail.png", // Replace with actual image path
      },
      {
        name: "Certifications",
        image: "https://e7.pngegg.com/pngimages/434/143/png-clipart-academic-certificate-diploma-authorization-certificate-public-key-certificate-european-border-authorization-certificate-border-template-thumbnail.png", // Replace with actual image path
      },
      {
        name: "Educational Software",
        image: "https://e7.pngegg.com/pngimages/802/311/png-clipart-student-computer-software-education-student-computer-network-class-thumbnail.png", // Replace with actual image path
      },
      {
        name: "Study Tools",
        image: "https://e7.pngegg.com/pngimages/827/97/png-clipart-human-icon-using-magnifying-glass-illustration-science-studies-research-scientific-method-scientist-holding-a-magnifying-glass-3d-villain-glass-wine-glass-thumbnail.png", // Replace with actual image path
      },
      {
        name: "Workshops",
        image: "https://e7.pngegg.com/pngimages/266/707/png-clipart-car-workshop-workshop-workshop-workshop-workers-thumbnail.png", // Replace with actual image path
      },
      {
        name: "Seminars",
        image: "https://e7.pngegg.com/pngimages/841/221/png-clipart-seminar-education-presentation-information-others-presentation-dryerase-boards-thumbnail.png", // Replace with actual image path
      },
      {
        name: "Ebooks",
        image: "https://e7.pngegg.com/pngimages/427/534/png-clipart-prosperity-money-e-book-finance-financial-institution-ebook-text-payment-thumbnail.png", // Replace with actual image path
      },
    ],
  }
  ,
  {
    id: 7,
    name: "Services",
    offers: 147,
    icon: "🛠️",
    api:"https://api.escuelajs.co/api/v1/categories",
    data: [
      {
        name: "Repair",
        image: "https://e7.pngegg.com/pngimages/740/741/png-clipart-appliance-and-device-repair-advertisement-screenshot-laptop-computer-repair-technician-maintenance-service-laptop-computer-network-electronics-thumbnail.png", // Replace with actual image path
      },
      {
        name: "Cleaning",
        image: "https://e7.pngegg.com/pngimages/925/152/png-clipart-assorted-household-cleaning-items-commercial-cleaning-maid-service-cleaner-cleaning-agent-clean-furniture-bathroom-thumbnail.png", // Replace with actual image path
      },
      {
        name: "Consulting",
        image: "https://e7.pngegg.com/pngimages/895/439/png-clipart-businessperson-business-consultant-management-consulting-company-businesswoman-phone-company-service-thumbnail.png", // Replace with actual image path
      },
      {
        name: "Graphic Design",
        image: "https://e7.pngegg.com/pngimages/837/973/png-clipart-web-development-graphic-designer-graphic-design-gadget-electronics-thumbnail.png", // Replace with actual image path
      },
      {
        name: "Web Development",
        image: "https://e7.pngegg.com/pngimages/723/174/png-clipart-web-development-software-development-custom-software-mobile-app-development-computer-software-business-web-design-people-thumbnail.png", // Replace with actual image path
      },
      {
        name: "Marketing",
        image: "https://e7.pngegg.com/pngimages/618/380/png-clipart-influencer-marketing-digital-marketing-management-social-media-marketing-marketing-company-content-marketing-thumbnail.png", // Replace with actual image path
      },
      {
        name: "Legal Services",
        image: "https://e7.pngegg.com/pngimages/132/745/png-clipart-goal-legal-entity-identifier-company-service-strategy-goals-company-service-thumbnail.png", // Replace with actual image path
      },
      {
        name: "Accounting",
        image: "https://e7.pngegg.com/pngimages/298/600/png-clipart-accounting-illustration-accountant-finance-accounting-calculator-electronics-company-thumbnail.png", // Replace with actual image path
      },
      {
        name: "Event Planning",
        image: "https://e7.pngegg.com/pngimages/368/592/png-clipart-event-management-planning-mugwump-productions-wedding-planner-awards-ceremony-company-service-thumbnail.png", // Replace with actual image path
      },
      {
        name: "Photography",
        image: "https://e7.pngegg.com/pngimages/295/359/png-clipart-photography-studio-logo-design-on-various-background-thumbnail.png", // Replace with actual image path
      },
    ],
  }
  ,
  {
    id: 8,
    name: "Women's Clothing",
    offers: 2070,
    icon: "👚",
    api:"https://api.escuelajs.co/api/v1/categories",
    data: [
      {
        name: "Tops",
        image: "https://e7.pngegg.com/pngimages/135/625/png-clipart-fashion-clothing-dress-top-casual-women-with-white-women-accessories-thumbnail.png", // Replace with actual image path
      },
      {
        name: "Jeans",
        image: "https://e7.pngegg.com/pngimages/901/120/png-clipart-women-s-white-tank-top-and-blue-denim-shirt-jeans-t-shirt-graphy-waist-pants-jeans-blue-fashion-thumbnail.png", // Replace with actual image path
      },
      {
        name: "Dresses",
        image: "https://e7.pngegg.com/pngimages/242/726/png-clipart-churidar-clothing-in-india-dress-fashion-dress-purple-violet-thumbnail.png", // Replace with actual image path
      },
      {
        name: "Skirts",
        image: "https://e7.pngegg.com/pngimages/31/267/png-clipart-women-s-black-skirt-little-black-dress-waist-skirt-skirt-holidays-black-thumbnail.png", // Replace with actual image path
      },
      {
        name: "Lingerie",
        image: "https://e7.pngegg.com/pngimages/239/6/png-clipart-lingerie-thumbnail.png", // Replace with actual image path
      },
      {
        name: "Activewear",
        image: "https://e7.pngegg.com/pngimages/781/973/png-clipart-t-shirt-hoodie-gildan-activewear-clothing-maroon-tshirt-angle-thumbnail.png", // Replace with actual image path
      },
      {
        name: "Swimwear",
        image: "https://e7.pngegg.com/pngimages/135/782/png-clipart-lzr-racer-swimsuit-high-technology-swimwear-fabric-speedo-competitive-swimwear-speedometer-blue-black-thumbnail.png", // Replace with actual image path
      },
      {
        name: "Blazers",
        image: "https://e7.pngegg.com/pngimages/818/897/png-clipart-men-s-black-and-gray-formal-coat-blazer-suit-jacket-fashion-coat-blazer-tshirt-cloth-thumbnail.png", // Replace with actual image path
      },
      {
        name: "Sweaters",
        image: "https://e7.pngegg.com/pngimages/458/535/png-clipart-clothing-sleeveless-shirt-sweater-jeans-sweater-jeans-clothing-blue-fashion-thumbnail.png", // Replace with actual image path
      },
      {
        name: "Outerwear",
        image: "https://e7.pngegg.com/pngimages/946/854/png-clipart-school-uniform-clothing-outerwear-school-blue-child-thumbnail.png", // Replace with actual image path
      },
    ],
  }
  ,
  {
    id: 9,
    name: "Home Appliances",
    offers: 122,
    icon: "🏠",
    api:"https://api.escuelajs.co/api/v1/categories",
    data: [
      {
        name: "Refrigerators",
        image: "https://e7.pngegg.com/pngimages/525/13/png-clipart-refrigerator-refrigerator-thumbnail.png", // Replace with actual image path
      },
      {
        name: "Microwaves",
        image: "https://e7.pngegg.com/pngimages/864/109/png-clipart-microwave-oven-induction-cooking-kitchen-stove-home-appliance-microwave-oven-kitchen-kitchen-appliance-thumbnail.png", // Replace with actual image path
      },
      {
        name: "Washing Machines",
        image: "https://e7.pngegg.com/pngimages/8/183/png-clipart-washing-machine-washing-machine-thumbnail.png", // Replace with actual image path
      },
      {
        name: "Dishwashers",
        image: "/path/to/dishwasher-image.jpg", // Replace with actual image path
      },
      {
        name: "Ovens",
        image: "/path/to/oven-image.jpg", // Replace with actual image path
      },
      {
        name: "Vacuum Cleaners",
        image: "/path/to/vacuum-cleaner-image.jpg", // Replace with actual image path
      },
      {
        name: "Air Conditioners",
        image: "/path/to/air-conditioner-image.jpg", // Replace with actual image path
      },
      {
        name: "Heaters",
        image: "/path/to/heater-image.jpg", // Replace with actual image path
      },
      {
        name: "Coffee Makers",
        image: "/path/to/coffee-maker-image.jpg", // Replace with actual image path
      },
      {
        name: "Blenders",
        image: "/path/to/blender-image.jpg", // Replace with actual image path
      },
    ],
  }
  ,
];





export default categories;