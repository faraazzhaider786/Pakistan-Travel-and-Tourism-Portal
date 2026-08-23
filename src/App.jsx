import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import PublicationsPage from "./pages/PublicationsPage";
import PublicNoticesPage from "./pages/PublicNoticesPage";
import MusicIconsPage from "./pages/MusicIconsPage";
import NearbyAttractionsPage from "./pages/NearbyAttractionsPage";
import AttractionsPage from "./pages/AttractionsPage";

function App() {
    return (
        <BrowserRouter>

            <Navbar />

            <Routes>

                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/publications" element={<PublicationsPage />} />
                <Route path="/public-notices" element={<PublicNoticesPage />} />
                <Route path="/music-icons" element={<MusicIconsPage />} />
                <Route path="/nearby-attractions" element={<NearbyAttractionsPage />} />
                <Route path="/attractions" element={<AttractionsPage />} />

            </Routes>

            <Footer />

        </BrowserRouter>
    );
}

export default App;