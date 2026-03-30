import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Search, Moon, Sun } from 'lucide-react';
import { useStore } from '../../store/useStore';

const CATEGORIES = [
  { label: 'Tech Hub', href: '/blog?category=TECH_HUB' },
  { label: 'Campus Pulse', href: '/blog?category=CAMPUS_PULSE' },
  { label: 'The Journal', href: '/blog?category=THE_JOURNAL' },
  { label: 'Gallery', href: '/gallery' },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const { darkMode, toggleDarkMode, searchArticles } = useStore();

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md border-b border-brand-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 bg-gradient-to-br from-brand-primary to-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">Ⓝ</span>
            </div>
            <span className="font-bold text-xl text-brand-dark hidden sm:inline">
              Neges Hub
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {CATEGORIES.map((cat) => (
              <Link
                key={cat.href}
                to={cat.href}
                className="text-gray-700 hover:text-brand-primary font-medium transition-colors"
              >
                {cat.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={() => setSearchOpen(!searchOpen)}
              className="p-2 hover:bg-gray-100 rounded-lg transition"
            >
              <Search size={20} />
            </button>

            <button
              onClick={toggleDarkMode}
              className="p-2 hover:bg-gray-100 rounded-lg transition"
            >
              {darkMode ? (
                <Sun size={20} className="text-yellow-500" />
              ) : (
                <Moon size={20} />
              )}
            </button>

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden p-2"
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {mobileOpen && (
          <div className="md:hidden pb-4 space-y-2 border-t border-gray-200">
            {CATEGORIES.map((cat) => (
              <Link
                key={cat.href}
                to={cat.href}
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg"
                onClick={() => setMobileOpen(false)}
              >
                {cat.label}
              </Link>
            ))}
          </div>
        )}

        {searchOpen && (
          <div className="pb-4 border-t border-gray-200">
            <input
              type="text"
              placeholder="Search articles..."
              onChange={(e) => searchArticles(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-primary"
              autoFocus
            />
          </div>
        )}
      </div>
    </nav>
  );
}