let art = [
  {
    name: "Mona Lisa",
    type: [
      "Portrait"
    ],
    url: "/images/art/monalisa.jpg",
    ratings: [
      5,
      5,
      5
    ],
    totalRatings: 3,
    usersRated: {
      ArtisticAnna: 5,
      Wer: 5,
      CreativeSteve: 5
    }
  },
  {
    name: "The Scream",
    type: [
      "Portrait"
    ],
    url: "/images/art/thescream.jpg",
    ratings: [
      1,
      4,
      5
    ],
    totalRatings: 3,
    usersRated: {
      CreativeSteve: 5,
      Wer: 1,
      ArtisticAnna: 4
    }
  },
  {
    name: "Starry Night",
    type: [
      "Landscape"
    ],
    url: "/images/art/starrynight.jpg",
    ratings: [
      2,
      4
    ],
    totalRatings: 2,
    usersRated: {
      ArtisticAnna: 4,
      Wer: 2
    }
  },
  {
    name: "Las Meninas",
    type: [
      "Portrait"
    ],
    url: "/images/art/lasmeninas.jpg",
    ratings: [
      3,
      2
    ],
    totalRatings: 2,
    usersRated: {
      Wer: 3,
      ArtisticAnna: 2
    }
  },
  {
    name: "The Persistence of Memory",
    type: [
      "Landscape"
    ],
    url: "/images/art/memoryofsalvadordali.jpg",
    ratings: [
      4,
      3
    ],
    totalRatings: 2,
    usersRated: {
      Wer: 4,
      ArtisticAnna: 3
    }
  },
  {
    name: "The Kiss",
    type: [
      "Portrait"
    ],
    url: "/images/art/thekiss.jpg",
    ratings: [
      1,
      4,
      1
    ],
    totalRatings: 3,
    usersRated: {
      Wer: 1,
      ArtisticAnna: 4,
      CreativeSteve: 1
    }
  },
  {
    name: "Guernica",
    type: [
      "Landscape"
    ],
    url: "/images/art/guernica.jpg",
    ratings: [
      2,
      4
    ],
    totalRatings: 2,
    usersRated: {
      Wer: 2,
      CreativeSteve: 4
    }
  },
  {
    name: "The Night Watch",
    type: [
      "Portrait"
    ],
    url: "/images/art/thenightwatch.jpg",
    ratings: [
      1
    ],
    totalRatings: 1,
    usersRated: {
      Wer: 1
    }
  },
  {
    name: "The Girl with a Pearl Earring",
    type: [
      "Portrait"
    ],
    url: "/images/art/girlwithapearl.jpg",
    ratings: [
      2,
      4,
      2
    ],
    totalRatings: 3,
    usersRated: {
      Wer: 2,
      ArtisticAnna: 4,
      CreativeSteve: 2
    }
  },
  {
    name: "Water Lilies",
    type: [
      "Landscape"
    ],
    url: "/images/art/waterlilies.jpg",
    ratings: [
      3,
      1
    ],
    totalRatings: 2,
    usersRated: {
      Wer: 3,
      ArtisticAnna: 1
    }
  },
  {
    name: "The Arnolfini Portrait",
    type: [
      "Portrait"
    ],
    url: "/images/art/arnolfini.jpg",
    ratings: [
      1,
      5,
      2
    ],
    totalRatings: 3,
    usersRated: {
      Wer: 1,
      ArtisticAnna: 5,
      CreativeSteve: 2
    }
  },
  {
    name: "American Gothic",
    type: [
      "Portrait"
    ],
    url: "/images/art/americangothic.jpg",
    ratings: [],
    totalRatings: 0,
    usersRated: {}
  },
  {
    name: "The Hay Wain",
    type: [
      "Landscape"
    ],
    url: "/images/art/thehaywain.jpg",
    ratings: [],
    totalRatings: 0,
    usersRated: {}
  },
  {
    name: "Nighthawks",
    type: [
      "Landscape"
    ],
    url: "/images/art/nighthawks.jpg",
    ratings: [],
    totalRatings: 0,
    usersRated: {}
  }
];

let artCategory = ["Portrait", "Landscape"];

module.exports = { art, artCategory };

// NOTE
// while user rate his category he add rate to usersRated -> /discover/add-rate on route