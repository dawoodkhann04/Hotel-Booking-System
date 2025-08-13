const sampleListings = [
  {
    title: "Cozy Beachfront Cottage",
    description: "Escape to this charming beachfront cottage for a relaxing getaway. Enjoy stunning ocean views and easy access to the beach.",
    image: {
      filename: "cozy_beachfront_cottage",
      url: "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60"
    },
    price: 1500,
    location: "Malibu",
    country: "United States"
  },
  {
    title: "Modern Loft in Downtown",
    description: "Stay in the heart of the city in this stylish loft apartment. Perfect for urban explorers!",
    image: {
      filename: "modern_loft_downtown",
      url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60"
    },
    price: 1200,
    location: "New York City",
    country: "United States"
  },
  {
    title: "Rustic Cabin in the Woods",
    description: "Unplug and unwind in this cozy rustic cabin surrounded by nature. A peaceful retreat from the hustle and bustle.",
    image: {
      filename: "rustic_cabin_woods",
      url: "https://images.unsplash.com/photo-1587502537745-84fa4f8c5c25?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60"
    },
    price: 900,
    location: "Lake Tahoe",
    country: "United States"
  },
  {
    title: "Luxury Villa with Infinity Pool",
    description: "Indulge in luxury in this stunning villa featuring an infinity pool and breathtaking views.",
    image: {
      filename: "luxury_villa_infinity_pool",
      url: "https://images.unsplash.com/photo-1600573471732-6fbcb24f45c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dmlsbGF8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60"
    },
    price: 3000,
    location: "Bali",
    country: "Indonesia"
  },
  {
    title: "Charming Countryside B&B",
    description: "Enjoy the tranquility of the countryside in this charming bed and breakfast.",
    image: {
      filename: "charming_countryside_bb",
      url: "https://images.unsplash.com/photo-1595341888016-a392ef81b7de?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YmVkJTIwYW5kJTIwYnJlYWtmYXN0fGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60"
    },
    price: 700,
    location: "Cotswolds",
    country: "United Kingdom"
  },
  {
    title: "Desert Glamping Experience",
    description: "Sleep under the stars in a luxurious desert tent with all the comforts of home.",
    image: {
      filename: "desert_glamping_experience",
      url: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHRlbnQlMjBjYW1waW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60"
    },
    price: 1100,
    location: "Sahara",
    country: "Morocco"
  },
  {
    title: "Alpine Ski Lodge",
    description: "Hit the slopes and relax in this cozy alpine lodge with stunning mountain views.",
    image: {
      filename: "alpine_ski_lodge",
      url: "https://images.unsplash.com/photo-1615807718520-7c77d94b5c1e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHNraSUyMGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60"
    },
    price: 2000,
    location: "Zermatt",
    country: "Switzerland"
  },
  {
    title: "Historic City Apartment",
    description: "Stay in a beautifully restored apartment in the heart of a historic European city.",
    image: {
      filename: "historic_city_apartment",
      url: "https://images.unsplash.com/photo-1528909514045-2fa4ac7a08ba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Y2l0eSUyMGFwYXJ0bWVudHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60"
    },
    price: 1000,
    location: "Prague",
    country: "Czech Republic"
  },
  {
    title: "Tropical Jungle Treehouse",
    description: "Live among the treetops in this eco-friendly jungle treehouse retreat.",
    image: {
      filename: "tropical_jungle_treehouse",
      url: "https://images.unsplash.com/photo-1502920917128-1aa500764b84?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8dHJlZWhvdXNlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60"
    },
    price: 850,
    location: "Costa Rica",
    country: "Costa Rica"
  },
  {
    title: "Coastal Surf Shack",
    description: "Ride the waves and chill out in this laid-back surf shack by the beach.",
    image: {
      filename: "coastal_surf_shack",
      url: "https://images.unsplash.com/photo-1606788075764-8ab6d2042404?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHN1cmYlMjBob3VzZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60"
    },
    price: 600,
    location: "Byron Bay",
    country: "Australia"
  }
];

module.exports = { data: sampleListings };
