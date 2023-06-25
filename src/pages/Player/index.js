import Banner from 'components/Banner';
import styles from './Player.module.css';
import Title from 'components/Title';
import { useParams } from 'react-router-dom';
import movies from 'json/db.json';

const Player = () => {
  const params = useParams();
  const movie = movies.find((movie) => (
    movie.id === Number(params.id)
  ))

  return (
    <>
      <Banner image="player" />
      <Title>
        <h1>Player</h1>
      </Title>
      <section className={styles.container}>
        <iframe
          width="100%"
          height="100%"
          src={movie.link}
          title={movie.title}
          frameborder="0"
          allow="accelerometer;
          autoplay;
          clipboard-write;
          encrypted-media;
          gyroscope;
          picture-in-picture;
          web-share"
          allowfullscreen
        />
        </section>
    </>
  )
}

export default Player;