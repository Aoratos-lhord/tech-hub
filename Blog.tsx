import React, { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Filter, X } from 'lucide-react';
import { useStore } from '../store/useStore';
import ArticleCard from '../components/ArticleCard/ArticleCard';

const TAGS = [
  { name: 'WebDev', slug: 'webdev' },
  { name: 'CircuitDesign', slug: 'circuit-design' },
  { name: 'AI-Tools', slug: 'ai-tools' },
  { name: 'StudyHacks', slug: 'study-hacks' },
  { name: 'StudentLife', slug: 'student-life' },
];

export default function Blog() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [showFilters, setShowFilters] = useState(false);
  const { articles } = useStore();

  const selectedCategory = searchParams.get('category');
  const selectedTag = searchParams.get('tag');

  const filteredArticles = useMemo(() => {
    let filtered = articles;

    if (selectedCategory) {
      filtered = filtered.filter((a) => a.category === selectedCategory);
    }

    if (selectedTag) {
      filtered = filtered.filter((a) =>
        a.tags.some((t) => t.slug === selectedTag)
      );
    }

    return filtered;
  }, [articles, selectedCategory, selectedTag]);

  return (
    <main className="py-12 px-4 bg-white min-h-screen">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-brand-dark mb-2">
          {selectedCategory ? selectedCategory.replace(/_/g, ' ') : 'All Articles'}
        </h1>
        <p className="text-gray-600 mb-12">
          {filteredArticles.length} article{filteredArticles.length !== 1 ? 's' : ''}
        </p>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <aside className={`${showFilters ? 'block' : 'hidden'} lg:block`}>
            <div className="sticky top-24">
              <div className="flex justify-between items-center mb-4 lg:hidden">
                <h3 className="font-bold">Filters</h3>
                <button onClick={() => setShowFilters(false)}>
                  <X size={24} />
                </button>
              </div>

              <div className="bg-white rounded-lg p-4 shadow-md border border-gray-200">
                <h3 className="font-bold text-brand-dark mb-3">Tags</h3>
                <div className="space-y-2">
                  {TAGS.map((tag) => (
                    <button
                      key={tag.slug}
                      onClick={() => setSearchParams({ tag: tag.slug })}
                      className={`block w-full text-left px-3 py-2 rounded-lg text-sm font-medium ${
                        selectedTag === tag.slug
                          ? 'bg-brand-primary text-white'
                          : 'hover:bg-gray-100 text-gray-700'
                      }`}
                    >
                      #{tag.name}
                    </button>
                  ))}
                </div>
              </div>

              {(selectedCategory || selectedTag) && (
                <button
                  onClick={() => setSearchParams({})}
                  className="w-full mt-4 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg font-semibold"
                >
                  Clear Filters
                </button>
              )}
            </div>
          </aside>

          {/* Articles */}
          <div className="lg:col-span-3">
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="lg:hidden mb-6 flex items-center gap-2 px-4 py-2 bg-gray-100"
            >
              <Filter size={18} />
              Filters
            </button>

            {filteredArticles.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-gray-600 mb-4">No articles found.</p>
                <button
                  onClick={() => setSearchParams({})}
                  className="text-brand-primary font-semibold hover:underline"
                >
                  Clear filters
                </button>
              </div>
            ) : (
              <div className="grid sm:grid-cols-2 gap-6">
                {filteredArticles.map((article) => (
                  <ArticleCard key={article.id} article={article} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}