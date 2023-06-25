// Core
import { BrowserRouter, Route, Routes } from "react-router-dom";

// Pages
import { Home } from "pages/Home";
import Favorites from "pages/Favorites";
import Header from "components/Header";
import Footer from "components/Footer";
import Container from "components/Container";
import FavoritesProvider from "contexts/Favorites";
import Player from "pages/Player";

function AppRoutes() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Container>
          <FavoritesProvider>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
          <Routes>
            <Route path="/favorites" element={<Favorites />} />
          </Routes>
          <Routes>
            <Route path="/:id" element={<Player />} />
          </Routes>
          </FavoritesProvider>
        </Container>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default AppRoutes;
