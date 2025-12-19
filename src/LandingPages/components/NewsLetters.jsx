import React from 'react';
import newsletter from '../../assets/newsletter.webp'

function Newsletters() {
  return (
    <div
      className="flex items-center justify-center w-full h-[80vh] rounded-xl text-white "
      style={{
        backgroundImage: `url(${newsletter})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="flex flex-col gap-[16px] items-center justify-center w-[300px]">
        <span className="text-[48px]">Stay in loop</span>
        <p className="text-center max-w-[280px]">Be the first to know about new collections and exclusive offers.</p>
        <div className="input-container">
          <input
            type="email"
            placeholder="Email Address"
            className="email-input"
          />
          <div className="submit-arrow">→</div>
        </div>
      </div>
    </div>
  );
}

export default Newsletters;