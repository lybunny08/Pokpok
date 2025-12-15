import React from 'react';

function Newsletters() {
  return (
    <div className='flex items-center justify-center w-full h-[80vh] bg-[#bababa] rounded-lg'>
      <div className='flex flex-col gap-[16px] items-center justify-center w-[300px]'>
        <span className='text-[48px]'>Stay in loop</span>
        <p className='text-center max-w-[280px] '>Be the first to know about new collections and exclusive offers.</p>
        <div class="input-container">
          <input
            type="email"
            placeholder="Email Address"
            class="email-input"
          />
          <div class="submit-arrow">→</div>
        </div>
      </div>
    </div>
  );
}

export default Newsletters;