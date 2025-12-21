import React from 'react';
import TestimonialsCard from '../ui/TestimonialsCard';

function Testimonials() {
    return (
      <section className='flex flex-col gap-[80px] justify-center items-center'>
        <span className='text-[32px] font-medium'>Testimonials</span>
        <TestimonialsCard />
      </section>
    );
}

export default Testimonials;