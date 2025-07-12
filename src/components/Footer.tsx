import React from 'react';
import { Heart, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-900 border-t border-slate-800 py-12">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <div className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-2">
                Mohammadulbaqir
              </div>
              <p className="text-gray-400">
                Transforming data into insights, one analysis at a time.
              </p>
            </div>

            <div className="flex items-center gap-8">
              <div className="text-center">
                <div className="text-gray-500 text-sm">
                  © 2025 All rights reserved.
                </div>
              </div>

              <button
                onClick={scrollToTop}
                className="p-3 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg text-blue-400 hover:from-blue-500/30 hover:to-purple-500/30 transition-all duration-300 transform hover:scale-110"
                aria-label="Scroll to top"
              >
                <ArrowUp size={20} />
              </button>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-slate-800 text-center">
            <p className="text-gray-400 text-sm">
              Ready to unlock the power of your data? Let's build something amazing together.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;