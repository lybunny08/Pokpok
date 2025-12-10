import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { Draggable } from 'gsap/Draggable';

gsap.registerPlugin(Draggable);

const InfiniteGallery = ({ images }) => {
  const container = useRef(null);

  useEffect(() => {
    const slider = container.current;
    let width = slider.scrollWidth / 2;

    const updateWidth = () => {
      width = slider.scrollWidth / 2;
    };

    // Initiate draggable horizontal infinite scroll
    Draggable.create(slider, {
      type: 'x',
      inertia: true,
      onDrag: loop,
      onThrowUpdate: loop
    });

    function loop() {
      if (slider._gsTransform.x < -width) {
        gsap.set(slider, { x: slider._gsTransform.x + width });
      } else if (slider._gsTransform.x > 0) {
        gsap.set(slider, { x: slider._gsTransform.x - width });
      }
    }

    window.addEventListener('resize', updateWidth);
    updateWidth();

    return () => {
      window.removeEventListener('resize', updateWidth);
      Draggable.get(slider)?.kill();
    };
  }, []);

  return (
    <div className="infinite-gallery" ref={container}>
      <div className="track">
        {images.concat(images).map((img, i) => (
          <div className="slide" key={i}>
            <img src={img} alt="" draggable="false" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default InfiniteGallery;
