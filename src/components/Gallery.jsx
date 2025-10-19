import Card from './Card';
import { tarotDeck } from '../data/tarotDeck';
import './Gallery.css';

const Gallery = () => {
  return (
    <div className="gallery">
      <h2>Tarot Card Gallery</h2>
      <div className="gallery-grid">
        {tarotDeck.map((card) => (
          <Card key={card.id} card={card} />
        ))}
      </div>
    </div>
  );
};

export default Gallery;
