import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Zap, Users, Camera } from 'lucide-react';
import { useStore } from '../store/useStore';
import ArticleCard from '../components/ArticleCard/ArticleCard';
import GalleryGrid from '../components/Gallery/GalleryGrid';
import NewsletterSignup from '../components/Newsletter/NewsletterSignup';
import { MOCK_ARTICLES, MOCK_IMAGES } from '../data/mockData';

export default function Home() {
  const { setArticles, setEventImages, articles } = useStore();

  useEffect(() => {
    setArticles(MOCK_ARTICLES);
    setEventImages(MOCK_IMAGES);
  }, [setArticles, setEventImages]);

  const featuredArticles = articles.filter((a) => a.featured).slice(0, 3);
  const recentArticles = articles.slice(0, 6);

  return (
    <main>
      {/* Hero */}
      <section className="bg-gradient-to-br from-brand-dark via-blue-900 to-brand-primary text-white py-20 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Tech. Stories. Community.</h1>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Explore cutting-edge tutorials, real campus experiences, and moments that matter.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/blog"
              className="bg-brand-accent text-brand-dark font-semibold px-8 py-3 rounded-lg hover:bg-yellow-400 transition-colors inline-flex items-center gap-2 justify-center"
            >
              Explore Articles <ArrowRight size={18} />
            </Link>
            <Link
              to="/gallery"
              className="border-2 border-white text-white font-semibold px-8 py-3 rounded-lg hover:bg-white hover:text-brand-dark transition-colors inline-flex items-center gap-2 justify-center"
            >
              View Gallery <Camera size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-brand-dark">Explore Our Pillars</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Zap className="text-brand-primary" size={32} />,
                title: 'Tech Hub',
                description: 'Web dev, circuit design, AI tools, and software guides.',
                href: '/blog?category=TECH_HUB',
              },
              {
                icon: <Users className="text-brand-accent" size={32} />,
                title: 'Campus Pulse',
                description: 'Study hacks, student life, career paths, and resources.',
                href: '/blog?category=CAMPUS_PULSE',
              },
              {
                icon: <Camera className="text-purple-500" size={32} />,
                title: 'The Journal',
                description: 'Behind-the-scenes, opinions, event highlights, and milestones.',
                href: '/blog?category=THE_JOURNAL',
              },
            ].map((cat, i) => (
              <Link key={i} to={cat.href}>
                <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                  <div className="mb-4">{cat.icon}</div>
                  <h3 className="text-xl font-bold text-brand-dark mb-2">{cat.title}</h3>
                  <p className="text-gray-600 text-sm">{cat.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured */}
      {featuredArticles.length > 0 && (
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-brand-dark">Featured Stories</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {featuredArticles.map((article) => (
                <ArticleCard key={article.id} article={article} variant="featured" />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Recent */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-brand-dark">Latest Articles</h2>
            <Link to="/blog" className="text-brand-primary font-semibold hover:underline">View All →</Link>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {recentArticles.map((article) => (
              <ArticleCard key={article.id} article={article} />
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Preview */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-brand-dark">Event Gallery</h2>
            <Link to="/gallery" className="text-brand-primary font-semibold hover:underline">View Full Gallery →</Link>
          </div>
          <GalleryGrid images={MOCK_IMAGES} />
        </div>
      </section>

      <NewsletterSignup />
    </main>
  );
}