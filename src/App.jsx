import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home/Home";
import Quiz from "./pages/Quiz/Quiz";
import Puzzle from "./pages/Puzzle/Puzzle";
import Gallery from "./pages/Gallery/Gallery";
import Letters from "./pages/Letters/Letters";
import Meter from "./pages/Meter/Meter";
import Wheel from "./pages/Wheel/Wheel";
import Cake from "./pages/Cake/Cake";
import WishWall from "./pages/WishWall/WishWall";
import Finale from "./pages/Finale/Finale";
import Footer from "./components/Footer/Footer";
import MusicPlayer from "./components/MusicPlayer/MusicPlayer";
import CursorTrail from "./components/CursorTrail/CursorTrail";
import FloatingStars from "./components/FloatingStars/FloatingStars";
import FloatingHearts from "./components/FloatingHearts/FloatingHearts";
import AuroraBackground from "./components/AuroraBackground/AuroraBackground";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <>
      <AuroraBackground />
      <FloatingStars />
      <FloatingHearts />
      <CursorTrail />
      <MusicPlayer />
      <ScrollToTop />

      

      <Routes>
        
        <Route path="/" element={<Home />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/letters" element={<Letters />} />
        <Route path="/meter" element={<Meter />} />
        <Route path="/wheel" element={<Wheel />} />
        <Route path="/cake" element={<Cake />} />
        <Route path="/wishwall" element={<WishWall />} />
        <Route path="/finale" element={<Finale />} />
                <Route path="/puzzle" element={<Puzzle />} />
 
      </Routes>

      <Footer />
    </>
  );
}

export default App;