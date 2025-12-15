import React from 'react';
import Skin from '../../assets/skin.jpg';
import Hair from '../../assets/hair.avif';
import Body from '../../assets/body.avif';

// 1. Définir les données des catégories
const categories = [
  {
    name: 'Body',
    image: Body,
  },
  {
    name: 'Skin',
    image: Skin,
  },
  {
    name: 'Hair',
    image: Hair,
  },
];

// 2. Créer un composant réutilisable pour la carte de catégorie
function CategoryCard({ name, image }) {
  // Styles pour l'arrière-plan de l'image
  const cardStyle = {
    backgroundImage: `url(${image})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  };

  return (
    <div
      className='flex items-end px-[16px] pb-[16px] h-[510px] w-full rounded-lg bg-[#bababa] cursor-pointer transition duration-300 ease-in-out hover:opacity-90'
      style={cardStyle}
    >
      <div className='flex py-[8px] items-center justify-center w-full border border-white rounded-full text-white font-medium text-[14px] backdrop-blur-sm bg-white/30'>
        {name}
      </div>
    </div>
  );
}

// 3. Le composant principal utilise les données et le composant réutilisable
function CategorySection() {
  return (
    <div className='flex flex-col gap-[24px] '>
      <h4 className='text-[24px] font-semibold'>Shop by Category</h4>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-[16px] '>
        {categories.map((category) => (
          <CategoryCard
            key={category.name}
            name={category.name}
            image={category.image}
          />
        ))}
      </div>
    </div>
  );
}

export default CategorySection;