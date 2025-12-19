import React from 'react';
import ProductCard from '../ui/ProductCard';
import red from '../../../assets/products/red.png'
import hairnews from '../../../assets/Hairnews.png'

function NewProduct() {
  return (
    <div className='flex flex-col lg:flex-row lg:ml-[-45px] gap-[40px] lg:gap-[100px] items-center'>
      <div className='w-[650px] h-[340px] lg:h-[500px] bg-[#bababa] rounded-lg  '
        style={{backgroundImage: `url(${hairnews})`,backgroundSize: 'cover',
				backgroundPosition: 'center',
				backgroundRepeat: 'no-repeat', }} ></div>

			<ProductCard className='w-full lg:w-[250px] '
				imageUrl={red}
				productName="Hair"
				category="Skin"
			/>
    </div>
  );
}

export default NewProduct;