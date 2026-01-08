import React from 'react';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

const popularSmallPosts = [
  {
    id: 1,
    date: "20 Nov 2025",
    title: "Inside the Technology That Makes Everyday Tasks Easier",
    image: "/appliance.jpg",
  },
  {
    id: 2,
    date: "20 Nov 2025",
    title: "Glow Begins Here: The Secret Behind Radiant Skin",
    image: "/consumer&electronics.png",
  },
  {
    id: 3,
    date: "20 Nov 2025",
    title: "Inside the Technology That Makes Everyday Tasks Easier",
    image: "/healthpersonal.jpg",
  },
];

const allUpdates = [
  { id: 1, image: "/consumer.jpg" },
  { id: 2, image: "/consumer.jpg" },
  { id: 3, image: "/consumer.jpg" },
  { id: 4, image: "/consumer.jpg" },
];

export default function NewsEventsPage() {
  return (
    <main className="min-h-screen bg-white font-sans">
      <section className="bg-[#101c44] text-white pt-6 pb-20 px-6 md:px-12 lg:px-24">
        <nav className="text-sm text-gray-400 mb-16">
          <span className="hover:text-white cursor-pointer transition">Home</span>
          <span className="mx-2">/</span>
          <span className="text-white">News & Events</span>
        </nav>
        
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          <span className="bg-[#3b4b8a] text-xs font-medium px-4 py-1.5 rounded-full mb-8">
            News&Events
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-5xl font-semibold leading-relaxed">
            Latest updates from our company and brands.
          </h1>
        </div>
      </section>
     <section className="py-16 px-6 md:px-12 lg:px-24">
  <h2 className="text-2xl font-bold mb-10 text-[#101c44]">Popular Posts</h2>
  
  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
    <div className="lg:col-span-2 group cursor-pointer flex flex-col">
      <div className="relative aspect-[16/10] mb-6 overflow-hidden rounded-lg">
        <Image 
          src="/consumer.jpg"
          alt="Main post"
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <p className="text-sm text-[#7D8DBB] font-medium mb-3">1 Dec 2025</p>
      <h3 className="text-xl font-bold text-[#101c44] leading-tight">
        Shaping the Future of Everyday Living Through Innovation
      </h3>
    </div>
    <div className="flex lg:flex-col lg:h-full lg:justify-between gap-6 lg:gap-0 overflow-x-auto lg:overflow-visible pb-4 lg:pb-0 snap-x snap-mandatory scrollbar-hide">
      {popularSmallPosts.map((post, index) => (
        <div 
          key={post.id} 
          className={`
            min-w-[85%] sm:min-w-[60%] lg:min-w-full snap-start 
            flex gap-4 items-start group cursor-pointer
            lg:flex-1 
            ${index !== 0 ? 'lg:border-t lg:border-gray-100' : 'lg:pt-0'}
          `}
        >
          <div className="relative w-32 h-24 lg:w-40 lg:h-28 flex-shrink-0 overflow-hidden rounded-md">
            <Image 
              src={post.image}
              alt={post.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
            />
          </div>

          <div className="flex flex-col flex-grow">
            <p className="text-[11px] text-[#7D8DBB] font-medium mb-2">{post.date}</p>
            <h4 className="text-sm font-bold text-[#101c44] leading-snug group-hover:underline line-clamp-2">
              {post.title}
            </h4>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

      <section className="py-12 px-6 md:px-12 lg:px-24 border-t border-gray-100">
        <h2 className="text-lg font-semibold text-gray-500 mb-8">All Updates</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {allUpdates.map((item) => (
            <div key={item.id} className="group cursor-pointer">
              <div className="relative aspect-[4/3] mb-4 overflow-hidden rounded-lg">
                <Image 
                  src={item.image}
                  alt="Update"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <p className="text-[11px] text-[#7D8DBB] font-medium mb-2">02 Nov 2025</p>
              <h4 className="text-sm text-black font-bold leading-snug">
                Glow Begins Here: The Secret Behind Radiant Skin
              </h4>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-16">
          <button className="flex items-center gap-2 px-8 py-3 text-black border border-black rounded-lg font-medium hover:bg-gray-50 transition-colors">
            Load More <ArrowRight size={18} />
          </button>
        </div>
      </section>
    </main>
  );
}