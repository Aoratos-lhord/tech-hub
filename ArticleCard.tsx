import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Clock, Heart } from 'lucide-react';
import { Article } from '../../types';

interface ArticleCardProps {
  article: Article;
  variant?: 'grid' | 'featured';
}

const categoryColors = {
  TECH_HUB: 'bg-blue-100 text-blue-800',
  CAMPUS_PULSE: 'bg-green-100 text-green-800',
  THE_JOURNAL: 'bg-purple-100 text-purple-800',
};

export default function ArticleCard({ article, variant = 'grid' }: ArticleCardProps) {
  const [liked, setLiked] = useState(false);

  if (variant === 'featured') {
    return (
      <Link to={`/article/${article.slug}`}>
        <div className="card-hover rounded-xl overflow-hidden bg-white shadow-lg h-full flex flex-col">
          <div className="relative h-80 overflow-hidden">
            <img
              src={article.image}
              alt={article.title}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              loading="lazy"
            />
            <div className={`absolute top-4 left-4 px-3 py-1 rounded-full text-sm font-semibold ${categoryColors[article.category]}`}>
              {article.category.replace(/_/g, ' ')}
            </div>
          </div>

          <div className="p-6 flex-1 flex flex-col">
            <h2 className="text-2xl font-bold text-brand-dark mb-2">
              {article.title}
            </h2>
            <p className="text-gray-600 mb-4 flex-1 line-clamp-2">{article.excerpt}</p>

            <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
              <div className="flex items-center gap-1">
                <Calendar size={16} />
                {new Date(article.date).toLocaleDateString()}
              </div>
              <div className="flex items-center gap-1">
                <Clock size={16} />
                {article.readingTime} min
              </div>
            </div>

            <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-200">
              <span className="text-sm font-medium text-brand-primary">Read More →</span>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  setLiked(!liked);
                }}
                className="p-2 hover:bg-gray-100 rounded-lg transition"
              >
                <Heart
                  size={20}
                  className={liked ? 'fill-red-500 text-red-500' : 'text-gray-400'}
                />
              </button>
            </div>
          </div>
        </div>
      </Link>
    );
  }

  return (
    <Link to={`/article/${article.slug}`}>
      <div className="card-hover rounded-lg overflow-hidden bg-white shadow-md h-full flex flex-col">
        <div className="relative h-48 overflow-hidden">
          <img
            src={article.image}
            alt={article.title}
            className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
            loading="lazy"
          />
        </div>

        <div className="p-4 flex-1 flex flex-col">
          <h3 className="font-bold text-lg text-brand-dark mb-2 line-clamp-2">
            {article.title}
          </h3>
          <p className="text-gray-600 text-sm mb-3 line-clamp-2 flex-1">{article.excerpt}</p>

          <div className="flex items-center gap-2 text-xs text-gray-500">
            <Clock size={14} />
            {article.readingTime} min read
          </div>
        </div>
      </div>
    </Link>
  );
}