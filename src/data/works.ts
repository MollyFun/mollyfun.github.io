export interface Work {
  id: string;
  title: string;
  category: string;
  image: string;
  description: string;
  year: number;
  client?: string;
  link?: string;
}

export const categories = [
  'All',
  'Digital Art',
  'Illustration',
  'Photography',
  'Sculpture',
  'Mixed Media'
];

export const works: Work[] = [
  {
    id: '1',
    title: 'Neon Dreams',
    category: 'Digital Art',
    image: 'https://images.unsplash.com/photo-1549490349-8643362247b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80',
    description: 'A vibrant exploration of neon colors and abstract shapes, inspired by cyberpunk aesthetics and futuristic cityscapes.',
    year: 2023,
    client: 'Personal Project',
  },
  {
    id: '2',
    title: 'Tranquil Waters',
    category: 'Photography',
    image: 'https://images.unsplash.com/photo-1468276311594-df7cb65d8df6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    description: 'A serene landscape capturing the stillness of a mountain lake at dawn, showcasing the harmony between water, mountains, and sky.',
    year: 2022,
    client: 'Nature Magazine',
    link: 'https://example.com/tranquil-waters',
  },
  {
    id: '3',
    title: 'Urban Fragments',
    category: 'Mixed Media',
    image: 'https://images.unsplash.com/photo-1561214115-f2f134cc4912?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1209&q=80',
    description: 'A collage of urban textures and patterns, combining photography, digital manipulation, and traditional media to create a layered representation of city life.',
    year: 2023,
    client: 'City Art Gallery',
  },
  {
    id: '4',
    title: 'Ethereal Bloom',
    category: 'Illustration',
    image: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1045&q=80',
    description: 'A delicate floral illustration combining traditional ink techniques with digital coloring, exploring the ephemeral nature of beauty.',
    year: 2022,
    client: 'Botanical Journal',
  },
  {
    id: '5',
    title: 'Geometric Harmony',
    category: 'Sculpture',
    image: 'https://images.unsplash.com/photo-1576699445826-81e3e6f9c008?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    description: 'A minimalist sculpture exploring the relationship between geometric forms, light, and shadow, crafted from polished metal and stone.',
    year: 2021,
    client: 'Modern Art Museum',
    link: 'https://example.com/geometric-harmony',
  },
  {
    id: '6',
    title: 'Digital Dystopia',
    category: 'Digital Art',
    image: 'https://images.unsplash.com/photo-1558244661-d248897f7bc4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    description: 'A dark, atmospheric digital painting depicting a futuristic dystopian landscape, exploring themes of technology, isolation, and environmental decay.',
    year: 2023,
    client: 'Sci-Fi Anthology',
  },
  {
    id: '7',
    title: 'Whispers of Nature',
    category: 'Photography',
    image: 'https://images.unsplash.com/photo-1518495973542-4542c06a5843?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80',
    description: 'A macro photography series capturing the intricate details of plant life, revealing patterns and textures invisible to the naked eye.',
    year: 2022,
    client: 'Environmental Foundation',
  },
  {
    id: '8',
    title: 'Abstract Emotions',
    category: 'Illustration',
    image: 'https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1160&q=80',
    description: 'A series of abstract illustrations exploring the visual representation of human emotions through color, line, and composition.',
    year: 2021,
    client: 'Psychology Today',
    link: 'https://example.com/abstract-emotions',
  },
  {
    id: '9',
    title: 'Temporal Fragments',
    category: 'Mixed Media',
    image: 'https://images.unsplash.com/photo-1515405295579-ba7b45403062?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1160&q=80',
    description: 'A mixed media installation exploring the concept of time through layered photographs, found objects, and handwritten text.',
    year: 2023,
    client: 'Contemporary Arts Center',
  },
  {
    id: '10',
    title: 'Organic Forms',
    category: 'Sculpture',
    image: 'https://images.unsplash.com/photo-1554188248-986adbb73be4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    description: 'A series of biomorphic sculptures inspired by natural growth patterns, crafted from sustainable materials including reclaimed wood and biodegradable polymers.',
    year: 2022,
    client: 'Sustainable Design Exhibition',
  },
  {
    id: '11',
    title: 'Digital Renaissance',
    category: 'Digital Art',
    image: 'https://images.unsplash.com/photo-1563089145-599997674d42?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    description: 'A digital reinterpretation of classical Renaissance paintings, blending traditional artistic techniques with modern digital tools and contemporary themes.',
    year: 2021,
    client: 'Digital Arts Festival',
    link: 'https://example.com/digital-renaissance',
  },
  {
    id: '12',
    title: 'Urban Rhythms',
    category: 'Photography',
    image: 'https://images.unsplash.com/photo-1516527653392-84f67e4dc10b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80',
    description: 'A black and white photography series capturing the patterns, movements, and energy of urban life through long exposure and creative framing.',
    year: 2023,
    client: 'Metropolitan Museum',
  },
];
