// Core
import { BrowserRouter, Route, Routes } from "react-router-dom";

// Pages
import { Home } from "pages/Home";
import Favorites from "pages/Favorites";
import Player from "pages/Player";
import NotFound from "pages/NotFound";
import DefaultPage from "pages/DefaultPage";

function AppRoutes() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<DefaultPage />}>
            <Route index element={<Home />} />
            <Route path="favorites" element={<Favorites />} />
            <Route path=":id" element={<Player />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default AppRoutes;
