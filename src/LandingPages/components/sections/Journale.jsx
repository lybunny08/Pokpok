import React from 'react';
import JournalCard from '../ui/JournalCard';
import journal1 from '../../../assets/journal1.webp';
import journal2 from '../../../assets/journal2.png';
import journal3 from '../../../assets/journal3.webp';

function Journale() {
  const journalArticles = [
    {
      id: 1,
      image: journal1,
      category: ['Skincare'],
      title: 'The Transformative Power of Going Elyanne',
      alt: 'Transformative skincare article',
      tags: ['Skincare']
    },
    {
      id: 2,
      image: journal2,
      category: ['Skincare', 'Tips'], // Garder comme tableau
      title: 'Simple Steps for an Elyanne Skincare Routine',
      alt: 'Skincare routine guide',
      tags: ['Skincare', 'Routine', 'Tips']
    },
    {
      id: 3,
      image: journal3,
      category: ['Science', 'Ingredients'], // Plusieurs catégories
      title: 'The Power of Plant-Based Ingredients in Skincare',
      alt: 'Plant-based skincare ingredients',
      tags: ['Science', 'Plant-based', 'Ingredients']
    }
  ];

  return (
    <section className='flex flex-col gap-[24px]'>
      <h4 className='text-[24px] font-semibold'>From journal</h4>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-[16px]'>
        {journalArticles.map((article) => (
          <JournalCard
            key={article.id}
            image={article.image}
            category={article.category}
            title={article.title}
            alt={article.alt}
            tags={article.tags} // Nouvelle prop optionnelle
          />
        ))}
      </div>
    </section>
  );
}

export default Journale;