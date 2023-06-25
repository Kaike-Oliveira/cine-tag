// Core
import { Link } from 'react-router-dom';
import { useFavoriteContext } from 'contexts/Favorites';

// Style
import styles from './Card.module.css';

// Icons
import favoriteIcon from './favorite.png';
import favoritedIcon from './favorited.png'

const Card = ({ id, title, cover }) => {
  const { favorite, addFavorite } = useFavoriteContext();
  const isFavorite = favorite.some((fav) => fav.id === id);
  const icon = isFavorite ? favoritedIcon : favoriteIcon;

  return (
    <div className={styles.container}>
      <Link className={styles.link} to={`/${id}`}>
        <img src={cover} alt={title} className={styles.cover}/>
        <h2>{title}</h2>
      </Link>
      <img
        src={icon}
        alt="Favorite movie"
        className={styles.favorite} 
        onClick={() => {
          addFavorite({ id, title, cover })
        }}
      />
    </div>
  )
}

export default Card;