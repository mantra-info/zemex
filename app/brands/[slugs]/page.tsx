import React from 'react';
import { notFound } from 'next/navigation';
import { pageContent } from '@/utils/pageData';
import Image from 'next/image';

interface PageProps {
  params: Promise<{ slugs: string }>;
}

export default async function DynamicBrandPage({ params }: PageProps) {

  const { slugs } = await params;
  const data = pageContent[slugs];

  if (!data) {
    console.error(`No data found for slug: ${slugs}`);
    return notFound();
  }


  return (
    <div className="w-full bg-white font-sans antialiased">

      <section className="bg-[#0d1b3e] pt-6 pb-48 px-6">
        <div className="max-w-7xl mx-auto">
          <nav className="flex items-center space-x-2 text-xs text-gray-400 mb-12">
            {data.breadcrumb.map((crumb, i) => (
              <React.Fragment key={i}>
                {crumb.link ? (
                  <a href={crumb.link} className="hover:text-white transition-colors">{crumb.name}</a>
                ) : (
                  <span className="text-white font-medium">{crumb.name}</span>
                )}
                {i < data.breadcrumb.length - 1 && <span>/</span>}
              </React.Fragment>
            ))}
          </nav>

          <h1 className="text-4xl md:text-5xl font-semibold text-white text-center leading-relaxed">
            {data.title}
          </h1>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 -mt-40 relative z-10">
        <div className="rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white/5">
          <div className="relative w-full h-[350px] md:h-[550px]">
            <Image
              src={data.heroImage}
              alt={data.title}
              fill
              className="object-cover"
              sizes="100vw"
              priority
            />
          </div>
        </div>
      </div>

      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          {data.badge && (
            <div className="inline-block bg-[#ef4444] text-white px-6 py-2 rounded-full text-sm font-semibold mb-6 shadow-sm">
              {data.badge}
            </div>
          )}
          <h2 className="text-3xl md:text-4xl font-bold text-[#1f2937] mb-8">{data.introTitle}</h2>
          <p className="text-[#6b7280] text-lg leading-relaxed max-w-3xl mx-auto">{data.description}</p>
        </div>
      </section>


      <section className="pb-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className={`grid gap-8 justify-center ${data.items.length === 1 ? 'grid-cols-1 max-w-sm mx-auto' :
            data.items.length === 2 ? 'grid-cols-1 md:grid-cols-2 max-w-3xl mx-auto' :
              'grid-cols-1 md:grid-cols-4'
            }`}>
            {data.items.map((item, idx) => (
              <div key={idx} className="flex flex-col items-center group">
                <div className="w-full aspect-square rounded-[2.5rem] bg-[#f8faff] border border-blue-100/50 flex flex-col items-center justify-center p-3 transition-all duration-300 hover:shadow-xl hover:bg-white mb-6 self-center">
                  {item.image ? (

                    <Image
                      src={item.image}
                      alt={item.name}
                      width={300}
                      height={300}
                      className="max-h-fit object-contain"
                    />
                  ) : (
                    <div className="text-center">
                      <h3 className="text-4xl md:text-5xl font-black text-[#1f2937] tracking-tight">
                        {item.name}
                      </h3>
                      {item.subtitle && (
                        <p className="text-[10px] font-bold text-red-500 tracking-[0.2em] mt-2 uppercase">
                          {item.subtitle}
                        </p>
                      )}
                    </div>
                  )}
                </div>
                <span className="text-[#4b5563] font-medium text-sm">{item.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}