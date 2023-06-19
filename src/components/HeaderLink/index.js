// Core
import { Link } from 'react-router-dom';

// Styles
import styles from './HeaderLink.module.css';

const HeaderLink = ({ children, url }) => {
  return (
    <Link to={url} className={styles.link}>
      {children}
    </Link>
  )
}

export default HeaderLink;