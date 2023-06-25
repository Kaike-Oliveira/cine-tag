import Banner from 'components/Banner';
import styles from './Favorites.module.css';
import Card from 'components/Card';
import Title from 'components/Title';

const Favorites = () => {
  return (
    <>
      <Banner image="favorites" />
      <Title>
        <h1>My favorites</h1>
      </Title>
      <section className={styles.container}>
        <Card id="1" title="title" cover="nay" />
      </section>
    </>
  )
}

export default Favorites;