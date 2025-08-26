import React, { useState } from 'react';

const HeroSection = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <section
      id="section"
      className={`bg-gradient-to-b px-3 sm:px-10 from-[#F5F7FF] via-[#fffbee] to-[#E6EFFF] pt-6 h-full ${
        isMenuOpen ? 'overflow-hidden' : ''
      }`}
    >
   

      {/* Main Content */}
      <main className="flex-grow flex flex-col items-center max-w-7xl mx-auto w-full">
        <button
          className="mt-16 mb-6 flex items-center space-x-2 border border-indigo-600 text-indigo-600 text-xs rounded-full px-4 pr-1.5 py-1.5 hover:bg-indigo-50 transition"
          type="button"
        >
          <span>Explore how we help grow students skills.</span>
          <span className="flex items-center justify-center size-6 p-1 rounded-full bg-indigo-600">
            <svg width="14" height="11" viewBox="0 0 16 13" fill="none">
              <path d="M1 6.5h14M9.5 1 15 6.5 9.5 12" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
        </button>

        <h1 className="text-center text-gray-900 font-bold text-3xl sm:text-4xl md:text-5xl max-w-2xl leading-tight">
        Inspiring excellence through values{' '}
          <span className="text-indigo-600"> learning, and growth.</span>
        </h1>

        <p className="mt-4 text-center text-gray-600 max-w-md text-sm sm:text-base leading-relaxed">
          Learn why professionals trust our solution to complete their learning journey.
        </p>

        <button
          className="mt-8 bg-indigo-600 text-white px-6 pr-2.5 py-2.5 rounded-full text-sm font-medium flex items-center space-x-2 hover:bg-indigo-700 transition"
          type="button"
        >
          <span>Apply Now</span>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path d="M4.821 11.999h13.43m0 0-6.714-6.715m6.715 6.715-6.715 6.715" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>

        <img
          className="rounded-[50px] mt-16 h-72 w-full object-cover rounded-b-none max-w-5xl"
          src="https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=1074&auto=format&fit=crop"
          alt="Hero"
        />
      </main>
    </section>
  );
};

export default HeroSection;
