// Core
import { Link } from 'react-router-dom';

// Style
import styles from './Header.module.css';

// Images
import logo from './logo.png';
import HeaderLink from 'components/HeaderLink';

const Header = () => {
  return (
    <header className={styles.header}>
      <Link to="./">
        <img
          src={logo}
          alt='Logo CineTag'
        />
      </Link>
      <nav>
        <HeaderLink url='./'>
          Home
        </HeaderLink>
        <HeaderLink url='./favorites'>
          Favorite
        </HeaderLink>
      </nav>
    </header>
  )
}

export default Header;