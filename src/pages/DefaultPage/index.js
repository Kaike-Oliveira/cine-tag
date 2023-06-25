// Core
import FavoritesProvider from "contexts/Favorites";
import { Outlet } from "react-router-dom";

// Components
import Container from "components/Container";
import Header from "components/Header";

const DefaultPage = () => {
  return (
    <main>
      <Header />
      <FavoritesProvider>
        <Container>
          <Outlet />
        </Container>
      </FavoritesProvider>
    </main>
  )
}

export default DefaultPage;