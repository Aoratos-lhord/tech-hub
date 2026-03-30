import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Calendar, Clock } from 'lucide-react';
import { useStore } from '../store/useStore';
import NewsletterSignup from '../components/Newsletter/NewsletterSignup';

export default function Article() {
  const { slug } = useParams<{ slug: string }>();
  const { articles } = useStore();
  const [readingProgress, setReadingProgress] = useState(0);

  const article = articles.find((a) => a.slug === slug);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = document.documentElement.scrollHeight - window.innerHeight;
      const progress = scrolled > 0 ? (window.scrollY / scrolled) * 100 : 0;
      setReadingProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!article) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-2xl font-bold text-gray-700">Article not found</p>
      </div>
    );
  }

  return (
    <main className="bg-white">
      {/* Progress bar */}
      <div
        className="fixed top-0 left-0 h-1 bg-gradient-to-r from-brand-primary to-brand-accent z-50"
        style={{ width: `${readingProgress}%`, transition: 'width 0.2s' }}
      />

      {/* Hero image */}
      <div className="relative h-96 overflow-hidden bg-gray-900">
        <img
          src={article.image}
          alt={article.title}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="mb-8">
          <div className="inline-block px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold mb-4">
            {article.category.replace(/_/g, ' ')}
          </div>
          <h1 className="text-4xl font-bold text-brand-dark mb-4">
            {article.title}
          </h1>

          <div className="flex flex-wrap gap-4 mb-6 text-gray-600">
            <div className="flex items-center gap-2">
              <Calendar size={18} />
              {new Date(article.date).toLocaleDateString()}
            </div>
            <div className="flex items-center gap-2">
              <Clock size={18} />
              {article.readingTime} min read
            </div>
          </div>

          <hr className="border-t-2 border-gray-200" />
        </div>

        {/* Content */}
        <div
          className="prose prose-lg max-w-none mb-8"
          dangerouslySetInnerHTML={{ __html: article.content }}
        />

        {/* Author */}
        <div className="bg-gray-50 rounded-lg p-6 border-l-4 border-brand-primary mb-8">
          <p className="font-bold text-brand-dark">By {article.author}</p>
          <p className="text-sm text-gray-600 mt-1">
            Tech enthusiast and storyteller
          </p>
        </div>
      </div>

      <NewsletterSignup />
    </main>
  );
}