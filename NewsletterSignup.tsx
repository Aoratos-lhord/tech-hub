import React, { useState } from 'react';
import { Mail, Check, AlertCircle } from 'lucide-react';

export default function NewsletterSignup() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      setStatus('success');
      setEmail('');
      setTimeout(() => setStatus('idle'), 5000);
    } catch {
      setStatus('error');
    }
  };

  return (
    <section className="bg-gradient-to-r from-brand-primary to-blue-600 py-12 px-4">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-white mb-2">Join the Hub</h2>
        <p className="text-blue-100 mb-6">
          Weekly tech tutorials, campus life stories, and event highlights.
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
          <div className="relative flex-1">
            <Mail className="absolute left-3 top-3 text-gray-400" size={18} />
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full pl-10 pr-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-accent"
            />
          </div>
          <button
            type="submit"
            disabled={status === 'loading'}
            className="bg-brand-accent text-brand-dark font-semibold px-8 py-3 rounded-lg hover:bg-yellow-500 transition-colors disabled:opacity-50"
          >
            {status === 'loading' ? 'Subscribing...' : 'Subscribe'}
          </button>
        </form>

        {status === 'success' && (
          <div className="mt-4 flex items-center justify-center gap-2 text-green-100">
            <Check size={18} />
            <span>Thanks for subscribing!</span>
          </div>
        )}

        {status === 'error' && (
          <div className="mt-4 flex items-center justify-center gap-2 text-red-100">
            <AlertCircle size={18} />
            <span>Something went wrong. Try again.</span>
          </div>
        )}
      </div>
    </section>
  );
}