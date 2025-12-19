import React from 'react';

function JournalCard({ category, title, image, alt = "Journal article", tags }) {
  return (
    <div className='flex flex-col items-start gap-[8px] group cursor-pointer'>
      {/* Image container - timing exact */}
      <div className='h-[300px] w-full rounded-sm bg-[#bababa] overflow-hidden'>
        <img 
          src={image} 
          alt={alt}
          className='w-full h-full object-cover transition-transform duration-400 ease-custom group-hover:scale-110'
          style={{
            transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)'
          }}
        />
      </div>
      
      {/* Category */}
      <div className='flex flex-wrap gap-2'>
        {Array.isArray(category) ? (
          category.map((cat, index) => (
            <span 
              key={index} 
              className='text-[12px] font-medium text-gray-400 uppercase tracking-wide px-2 py-1 bg-gray-400/10 rounded-full'
            >
              {cat}
            </span>
          ))
        ) : (
          <span className='text-sm text-gray-600 uppercase tracking-wide'>
            {category}
          </span>
        )}
      </div>
      
      <h3 className='text-base font-medium leading-tight'>{title}</h3>
      
      {/* Tags optionnels */}
      {tags && Array.isArray(tags) && (
        <div className='flex flex-wrap gap-1 pt-1'>
          {tags.map((tag, index) => (
            <span 
              key={index} 
              className='text-[10px] text-gray-500 px-1.5 py-0.5 bg-gray-50 rounded'
            >
              #{tag}
            </span>
          ))}
        </div>
      )}
      
      {/* Read more avec animation synchronisée */}
      <div className='relative pt-[8px]'>
        <span className='text-[12px] font-medium text-black group-hover:text-black transition-colors duration-400'>
          Read more
          {/* Ligne animée - mêmes propriétés que l'image */}
          <span 
            className='absolute left-0 -bottom-1 w-0 h-[1px] bg-black transition-all duration-400 ease-custom group-hover:w-full'
            style={{
              transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)'
            }}
          />
        </span>
      </div>
    </div>
  );
}

export default JournalCard;