import Banner from 'components/Banner';
import styles from './Player.module.css';
import Title from 'components/Title';
import { useParams } from 'react-router-dom';
import NotFound from 'pages/NotFound';
import { useEffect, useState } from 'react';

const Player = () => {
  const [ movie, setMovie ] = useState()

  const params = useParams();

  useEffect(() => {
    fetch(`https://my-json-server.typicode.com/Kaike-Oliveira/cinetag-api/movies?id=${params.id}`)
    .then(response => response.json())
    .then(data => {
      setMovie(...data)
    })
  }, [params.id])

  if (!movie) {
    return (
      <NotFound />
    )
  }

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