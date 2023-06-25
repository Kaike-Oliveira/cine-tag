// Style
import styles from './NotFound.module.css';

const NotFound = () => {
  return (
    <section className={styles.container}>
      <h2>Ops!</h2>
      <p>The content you are looking for was not found</p>
    </section>
  )
}

export default NotFound;