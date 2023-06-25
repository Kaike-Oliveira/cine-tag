// Style
import styles from './Home.module.css';

// Components
import Banner from "components/Banner";
import Card from "components/Card";
import Title from "components/Title";

// Movies
import movies from 'json/db.json';

export const Home = () => {
  return (
    <>
      <Banner image="home" />
      <Title>
        <h1>A place to store your videos and movies!</h1>
      </Title>
      <section className={styles.container}>
        {movies.map((movie) => {
          return <Card title={movie.titulo} id={movie.id} cover={movie.capa} key={movie.id} />
        })}
      </section>
    </>
  )
}