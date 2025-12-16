import React from 'react';
import ProductCard from '../../components/ProductCard';
import red from '../../assets/products/red.png'

function NewProduct() {
  return (
    <div className='flex flex-row ml-[-45px] gap-[100px] items-center  '>
      <div className='w-[650px] h-[500px] bg-[#bababa] rounded-lg  '></div>
			<ProductCard className='w-[250px] '
				imageUrl={red}
				productName="Hair"
				category="Skin"
			/>
    </div>
  );
}

export default NewProduct;