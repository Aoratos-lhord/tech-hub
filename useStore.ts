import { create } from 'zustand';
import { Article, Tag, EventImage, GalleryFilter } from '../types';

interface Store {
  articles: Article[];
  filteredArticles: Article[];
  setArticles: (articles: Article[]) => void;
  filterByTag: (tag: Tag) => void;
  filterByCategory: (category: string) => void;
  searchArticles: (query: string) => void;

  eventImages: EventImage[];
  galleryFilter: GalleryFilter;
  setEventImages: (images: EventImage[]) => void;
  setGalleryFilter: (filter: GalleryFilter) => void;

  darkMode: boolean;
  toggleDarkMode: () => void;
}

export const useStore = create<Store>((set) => ({
  articles: [],
  filteredArticles: [],
  setArticles: (articles) => set({ articles, filteredArticles: articles }),
  filterByTag: (tag) =>
    set((state) => ({
      filteredArticles: state.articles.filter((a) =>
        a.tags.some((t) => t.id === tag.id)
      ),
    })),
  filterByCategory: (category) =>
    set((state) => ({
      filteredArticles: state.articles.filter((a) => a.category === category),
    })),
  searchArticles: (query) =>
    set((state) => ({
      filteredArticles: state.articles.filter(
        (a) =>
          a.title.toLowerCase().includes(query.toLowerCase()) ||
          a.excerpt.toLowerCase().includes(query.toLowerCase())
      ),
    })),

  eventImages: [],
  galleryFilter: {},
  setEventImages: (images) => set({ eventImages: images }),
  setGalleryFilter: (filter) => set({ galleryFilter: filter }),

  darkMode: false,
  toggleDarkMode: () => set((state) => ({ darkMode: !state.darkMode })),
}));

interface GalleryFilter {
  category?: string;
  dateRange?: { start: string; end: string };
}