// Core
import { BrowserRouter, Route, Routes } from "react-router-dom";

// Pages
import { Home } from "pages/Home";

function AppRoutes() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default AppRoutes;
