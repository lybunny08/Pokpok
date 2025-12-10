import InfiniteGallery from '../components/InfiniteGallery';
import Fafa from '../assets/gallery/fafa.jpeg';
import Bli from '../assets/gallery/bli.jpeg';
import Bla from '../assets/gallery/bla.jpeg';
import Glop from '../assets/gallery/glop.jpeg';
import Pho from '../assets/gallery/pho.jpeg';

const images = [
  Fafa,
  Bli,
  Bla,
  Glop,
  Pho
];

export default function Gallerie() {
  return (
    <div>
      <h1>Galerie</h1>
      <InfiniteGallery images={images} />
    </div>
  );
}
