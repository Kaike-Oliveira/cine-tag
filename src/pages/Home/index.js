// Style
import styles from './Home.module.css';

// Components
import Banner from "components/Banner";
import Card from "components/Card";
import Title from "components/Title";
import { useEffect, useState } from 'react';

export const Home = () => {
  const [movies, setMovies] = useState([])

  useEffect(() => {
    fetch('https://my-json-server.typicode.com/Kaike-Oliveira/cinetag-api/movies')
    .then(response => response.json())
    .then(data => {
      setMovies(data)
    })
  }, [])
  
  return (
    <>
      <Banner image="home" />
      <Title>
        <h1>A place to store your videos and movies!</h1>
      </Title>
      <section className={styles.container}>
        {movies.map((movie) => {
          return <Card title={movie.title} id={movie.id} cover={movie.cover} key={movie.id} />
        })}
      </section>
    </>
  )
}