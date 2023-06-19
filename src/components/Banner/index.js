// Styles
import styles from './Banner.module.css';

const Banner = ({ image }) => {
  return (
    <div
      className={styles.cover}
      style={{ backgroundImage: `url('/assets/banner-${image}.png')` }}
    />
  )
}

export default Banner;