import "./App.scss";
import { Routes, Route } from "react-router-dom";
import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
import { AboutProduct } from "./pages/AboutProduct/AboutProduct";
import { Home } from "./pages/Home/Home";
import { Team } from "./pages/Team/Team";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";

function App() {
  return (
    <div className="App">
      <main>
        <Header />
        <ScrollToTop/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/information" element={<AboutProduct />} />
          <Route path="/team" element={<Team />} />
        </Routes>
        <Footer />
      </main>
    </div>
  );
}

export default App;
