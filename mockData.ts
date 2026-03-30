import { Article, EventImage } from '../types';

export const MOCK_ARTICLES: Article[] = [
  {
    id: '1',
    title: 'Getting Started with React 18: Hooks & Concurrent Rendering',
    slug: 'getting-started-react-18',
    excerpt: 'Explore the powerful features of React 18 including Hooks API and concurrent rendering for faster UIs.',
    content: `<h2>Introduction</h2>
      <p>React 18 brings groundbreaking improvements to web development. In this tutorial, we'll explore the new features and best practices.</p>
      <h2>Understanding React Hooks</h2>
      <p>Hooks allow you to use state and other React features in functional components. They make your code more reusable and easier to understand.</p>
      <pre><code>import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  return &lt;div&gt;Count: {count}&lt;/div&gt;;
}</code></pre>
      <h2>Concurrent Rendering</h2>
      <p>React 18 introduces concurrent rendering, which allows React to interrupt a long-running render to handle a more urgent update.</p>`,
    author: 'Alex Chen',
    date: '2024-03-25',
    readingTime: 8,
    featured: true,
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&h=400&fit=crop',
    category: 'TECH_HUB',
    tags: [
      { id: 't1', name: 'WebDev', category: 'TECH_HUB', slug: 'webdev', color: 'blue' },
      { id: 't2', name: 'React', category: 'TECH_HUB', slug: 'react', color: 'blue' },
    ],
    likes: 342,
  },
  {
    id: '2',
    title: 'My Campus Life: Balancing Code & Coffee',
    slug: 'campus-life-balancing-code',
    excerpt: 'A student\'s perspective on managing demanding coursework, side projects, and social life.',
    content: `<h2>The Struggle is Real</h2>
      <p>When I first entered tech school, I thought I could handle everything. Little did I know about the challenges ahead.</p>
      <h2>Finding Balance</h2>
      <p>The key to success is not working harder, but working smarter. Here are my tips for balancing everything.</p>`,
    author: 'Jordan Smith',
    date: '2024-03-20',
    readingTime: 6,
    featured: true,
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=400&fit=crop',
    category: 'CAMPUS_PULSE',
    tags: [
      { id: 't3', name: 'StudentLife', category: 'CAMPUS_PULSE', slug: 'student-life', color: 'green' },
    ],
    likes: 128,
  },
  {
    id: '3',
    title: 'Behind the Scenes: Making of Our Tech Conference',
    slug: 'behind-the-scenes-tech-conference',
    excerpt: 'See the hard work and planning that goes into organizing a successful tech conference.',
    content: `<h2>From Idea to Reality</h2>
      <p>Six months of planning went into making this conference happen. From venue selection to speaker coordination.</p>
      <h2>The Journey</h2>
      <p>It wasn't easy, but seeing hundreds of tech enthusiasts gathered together made it all worthwhile.</p>`,
    author: 'Maria Garcia',
    date: '2024-03-15',
    readingTime: 5,
    featured: true,
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=400&fit=crop',
    category: 'THE_JOURNAL',
    tags: [
      { id: 't4', name: 'EventHighlights', category: 'THE_JOURNAL', slug: 'event-highlights', color: 'red' },
    ],
    likes: 256,
  },
];

export const MOCK_IMAGES: EventImage[] = [
  {
    id: 'img1',
    url: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800',
    thumbnail: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400',
    title: 'Annual Tech Conference 2024',
    date: '2024-03-15',
    height: 600,
    width: 800,
    caption: 'Keynote speakers sharing insights on future technology trends',
  },
  {
    id: 'img2',
    url: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800',
    thumbnail: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400',
    title: 'Campus Hackathon 2024',
    date: '2024-03-10',
    height: 600,
    width: 800,
    caption: 'Teams collaborating on innovative solutions',
  },
  {
    id: 'img3',
    url: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800',
    thumbnail: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400',
    title: 'Graduation Ceremony 2024',
    date: '2024-03-05',
    height: 600,
    width: 800,
    caption: 'Celebrating the achievements of our graduates',
  },
];