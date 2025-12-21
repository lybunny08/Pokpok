import { useState } from 'react';

function CategoryCard({ name, image }) {
  const [isHovered, setIsHovered] = useState(false);

  // Styles pour l'arrière-plan de l'image
  const cardStyle = {
    backgroundImage: `url(${image})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  };

  return (
    <div
      className='flex items-end px-[16px] pb-[16px] h-[510px] w-full rounded-lg bg-[#bababa] cursor-pointer'
      style={cardStyle}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={`flex py-[8px] items-center justify-center w-full border border-white rounded-full font-medium text-[14px] backdrop-blur-sm transition-all duration-300 ${
        isHovered 
          ? 'bg-white text-black' 
          : 'text-white'
      }`}>
        {name}
      </div>
    </div>
  );
}

export default CategoryCard;