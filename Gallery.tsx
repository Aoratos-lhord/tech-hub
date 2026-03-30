import React, { useState } from 'react';
import { Calendar } from 'lucide-react';
import { useStore } from '../store/useStore';
import GalleryGrid from '../components/Gallery/GalleryGrid';
import NewsletterSignup from '../components/Newsletter/NewsletterSignup';

export default function Gallery() {
  const { eventImages } = useStore();
  const [dateFilter, setDateFilter] = useState('');

  const filteredImages = dateFilter
    ? eventImages.filter((img) => img.date.startsWith(dateFilter.substring(0, 7)))
    : eventImages;

  return (
    <main className="bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-br from-purple-600 to-pink-600 text-white py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-4">Event Gallery</h1>
          <p className="text-lg text-purple-100">Moments from our community</p>
        </div>
      </section>

      {/* Filter */}
      <section className="py-8 px-4 border-b border-gray-200">
        <div className="max-w-6xl mx-auto flex items-center gap-4">
          <Calendar size={20} className="text-gray-600" />
          <input
            type="month"
            value={dateFilter}
            onChange={(e) => setDateFilter(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-primary"
          />
          {dateFilter && (
            <button
              onClick={() => setDateFilter('')}
              className="px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg font-semibold"
            >
              Clear
            </button>
          )}
        </div>
      </section>

      {/* Gallery */}
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <p className="text-gray-600 mb-6">
            Showing {filteredImages.length} image{filteredImages.length !== 1 ? 's' : ''}
          </p>
          <GalleryGrid images={filteredImages} />
        </div>
      </section>

      <NewsletterSignup />
    </main>
  );
}