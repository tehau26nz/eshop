const products = [
  {
    _id: '1',
    name: 'City Highlights Tour',
    image: '/images/city_highlights.jpg', // Replace with actual image path
    description: 'A comprehensive tour of Wellington\'s iconic landmarks and cultural attractions.',
    category: 'City Tours',
    price: 78,
    rating: 5,
    numReviews: 20,
    duration: 'Half-day',
    isOffered: 'true',
    highlights: [
      'Te Papa Museum',
      'Wellington Cable Car',
      'Parliament Buildings',
      'Cuba Street',
      'Waterfront'
    ]
  },
  {
    _id: '2',
    name: 'Weta Workshop Tour',
    image: '/images/weta_workshop.jpg', // Replace with actual image path
    description: 'Immerse yourself in the world of movie magic at the renowned Weta Workshop.',
    category: 'Thematic Tours',
    price: 185,
    rating: 4.5,
    numReviews: 8,
    duration: 'Half-day',
    isOffered: 'true',
    highlights: [
      'Behind-the-scenes look at special effects',
      'Props and costume design'
    ]
  },
  {
    _id: '3',
    name: 'Nature and Wildlife Tour',
    image: '/images/nature_wildlife.jpg', // Replace with actual image path
    description: 'Discover Wellington\'s natural beauty and unique wildlife.',
    category: 'Nature Tours',
    price: 95,
    rating: 4,
    numReviews: 16,
    duration: 'Full-day',
    isOffered: 'true',
    highlights: [
      'Zealandia Wildlife Sanctuary',
      'Red Rocks',
      'Wellington Botanic Garden'
    ]
  },
  {
    _id: '4',
    name: 'Food and Wine Tour',
    image: '/images/food_wine.jpg', // Replace with actual image path
    description: 'Indulge in Wellington\'s vibrant food and wine scene.',
    category: 'Food & Wine Tours',
    price: 85,
    rating: 4,
    numReviews: 20,
    duration: 'Half-day',
    isOffered: 'true',
    highlights: [
      'Local markets',
      'Craft breweries',
      'Wine tasting',
      'Gourmet food experiences'
    ]
  },
  {
    _id: '5',
    name: 'Historical Tour',
    image: '/images/historical_tour.jpg', // Replace with actual image path
    description: 'Uncover Wellington\'s rich history and heritage.',
    category: 'Cultural Tours',
    price: 76,
    rating: 4.5,
    numReviews: 8,
    duration: 'Half-day',
    isOffered: 'true',
    highlights: [
      'Old St. Paul\'s Cathedral',
      'Wellington Museum',
      'Historic buildings and neighborhoods'
    ]
  },
  {
    _id: '6',
    name: 'Adventure Tour',
    image: '/images/adventure_tour.jpg', // Replace with actual image path
    description: 'Experience the adventurous side of Wellington.',
    category: 'Adventure Tours',
    price: 95,
    rating: 4,
    numReviews: 10,
    duration: 'Varies',
    isOffered: 'true',
    highlights: [
      'Hiking',
      'Kayaking',
      'Rock climbing',
      'Surfing',
      'Skydiving'
    ]
  }
];

export default products
