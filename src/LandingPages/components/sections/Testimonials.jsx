import React from 'react';
import TestimonialsCard from '../ui/TestimonialsCard';

function Testimonials() {
    return (
      <div className='flex flex-col gap-[80px] justify-center items-center'>
        <span className='text-[32px] font-medium'>Testimonials</span>
        <div className='flex flex-row gap-[220px] '>
          <TestimonialsCard />
        </div>
      </div>
    );
}

export default Testimonials;