import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HeroBackground from './components/HeroBackground';
import SliderComponent from './slider/SliderComponent';
import Contact from './contact/contact';
import ImageMap from './contact/imageMap';
import Footer from './footer/footer';
import ImagePrice from './price/ImagePrice';
import RegisterPage from './RegisterPage';
import TermsPage from './pages/TermsPage';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          {/* El Menubar ya está incluido dentro del HeroBackground */}
        </header>
        <main>
          <Routes>
            <Route path="/" element={<>
              <HeroBackground />
              <SliderComponent />
              <ImagePrice />
              <Contact />
              <ImageMap />
            </>} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/terms" element={<TermsPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
