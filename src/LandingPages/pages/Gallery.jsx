import InfiniteGallery from '../../components/InfiniteGallery';

const images = [
];

export default function Gallerie() {
  return (
    <div>
      <h1>Galerie</h1>
      <InfiniteGallery images={images} />
    </div>
  );
}
