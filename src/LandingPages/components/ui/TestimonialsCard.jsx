import React from 'react';

function TestimonialsCard() {
  const testimonials = [
    {
      id: 1,
      name: "Chloe",
      role: "Regular Customer",
      text: "This body wash has completely transformed my shower routine. It lathers beautifully, smells divine, and leaves my skin feeling silky smooth without any residue.",
      product: "Body Wash",
      rating: 5,
    },
    {
      id: 2,
      name: "Marcus",
      role: "Skincare Enthusiast",
      text: "I've been using this face cream for 3 months and the results are amazing! My skin feels hydrated all day and the redness has reduced significantly.",
      product: "Hydrating Face Cream",
      rating: 4,
    },
    {
      id: 3,
      name: "Sophia",
      role: "Hair Care Expert",
      text: "The hair serum is a game-changer! My frizzy hair is now smooth and shiny. Just a few drops after showering makes such a difference.",
      product: "Nourishing Hair Serum",
      rating: 5,
    },
    {
      id: 4,
      name: "Alex",
      role: "Sensitive Skin User",
      text: "As someone with sensitive skin, finding a gentle exfoliator was hard. This one is perfect! It cleanses deeply without irritation.",
      product: "Gentle Exfoliating Scrub",
      rating: 4,
    },
    {
      id: 5,
      name: "Emma",
      role: "Professional Hair Stylist",
      text: "The Hair Repair treatment transformed my damaged hair! It restored shine and strength after years of heat styling. My hair feels healthier and looks incredible.",
      product: "Lavender Essential Oil",
      rating: 5,
    },
    {
      id: 6,
      name: "David",
      role: "Senior Software Engineer",
      text: "As someone who spends 10+ hours daily in front of screens, this Eye Repair cream has been a lifesaver. It dramatically reduced my dark circles and puffiness. The cooling effect is instant and the formula absorbs quickly without leaving greasy residue. My eyes look refreshed even after long coding sessions!",
      product: "Eye Repair Cream",
      rating: 4,
    }
  ];

  const renderStars = (rating) => {
    return (
      <div className="flex">
        {[...Array(5)].map((_, i) => (
          <svg
            key={i}
            className={`w-3 h-3 ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
    );
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {testimonials.map((testimonial) => (
        <div
          key={testimonial.id}
          className="group flex flex-col p-6 rounded-xl bg-white border border-gray-100"
        >
          {/* En-tête avec nom et étoiles */}
          <div className="flex flex-col gap-2 mb-4">
            <div className="flex justify-between items-start">
              <div>
                <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                <p className="text-xs text-gray-500">{testimonial.role}</p>
              </div>
              {renderStars(testimonial.rating)}
            </div>
          </div>

          {/* Témoignage */}
          <div className="flex-grow mb-6">
            <p className="text-sm text-gray-700 leading-relaxed italic">
              "{testimonial.text}"
            </p>
          </div>

          {/* Produit associé */}
          <div className="flex items-center gap-3 pt-4 border-t border-gray-100 group-hover:border-gray-200 transition-colors">
            <div className="h-12 w-10 bg-gradient-to-br from-gray-100 to-gray-200 rounded-md flex items-center justify-center">
              <span className="text-[10px] font-medium text-gray-600">
                {testimonial.product.charAt(0)}
              </span>
            </div>
            <div className="flex-1">
              <h5 className="text-sm font-medium text-gray-900">{testimonial.product}</h5>
              <button className="text-xs text-gray-600 hover:text-gray-900 transition-colors mt-1 flex items-center gap-1">
                View product
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default TestimonialsCard;