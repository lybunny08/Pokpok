import CategoryCard from '../ui/CategoryCard';
import Skin from '../../../assets/skin.jpg';
import Hair from '../../../assets/hair.webp';
import Body from '../../../assets/body.webp';

// Définir les données des catégories de produits
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

function CategorySection() {
  return (
    <section className='flex flex-col gap-[24px]'>
      <h4 className='text-[24px] font-semibold'>Shop by Category</h4>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-[16px]'>
        {categories.map((category) => (
          <CategoryCard
            key={category.name}
            name={category.name}
            image={category.image}
          />
        ))}
      </div>
    </section>
  );
}

export default CategorySection;