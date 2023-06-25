import styles from './Card.module.css';

import favorite from './favorite.png';
import favorited from './favorited.png'

const Card = ({id, title, cover}) => {
  return (
    <div className={styles.container}>
      <img src={cover} alt={title} className={styles.cover}/>
      <h2>{title}</h2>
      <img src={favorite} alt="Favorite movie" className={styles.favorite} />
    </div>
  )
}

export default Card;