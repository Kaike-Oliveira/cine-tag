import Banner from 'components/Banner';
import styles from './Favorites.module.css';
import Card from 'components/Card';
import Title from 'components/Title';
import { useFavoriteContext } from 'contexts/Favorites';

const Favorites = () => {
  const { favorite } = useFavoriteContext();

  return (
    <>
      <Banner image="favorites" />
      <Title>
        <h1>My favorites</h1>
      </Title>
      <section className={styles.container}>
        {favorite.map((fav) => (
          <Card title={fav.title} id={fav.id} cover={fav.cover} key={fav.id} />
        ))}
      </section>
    </>
  )
}

export default Favorites;