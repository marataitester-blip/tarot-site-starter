import { useTranslation } from 'react-i18next';
import './Card.css';

const Card = ({ card }) => {
  const { i18n } = useTranslation();
  const lang = i18n.language;

  return (
    <div className="card">
      <div className="card-image">
        <img src={card.imageUrl} alt={lang === 'ru' ? card.name_ru : card.name} />
      </div>
      <div className="card-content">
        <h3>{lang === 'ru' ? card.name_ru : card.name}</h3>
        <p className="card-arcana">{card.arcana} Arcana - {card.number}</p>
        <div className="card-keywords">
          {(lang === 'ru' ? card.keywords_ru : card.keywords_en).map((keyword, idx) => (
            <span key={idx} className="keyword">{keyword}</span>
          ))}
        </div>
        <p className="card-description">
          {lang === 'ru' ? card.description_ru : card.description_en}
        </p>
      </div>
    </div>
  );
};

export default Card;
