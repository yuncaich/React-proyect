import MenuBar from './menuBar/MenuBar'; 
import SliderComponent from './slider/SliderComponent';
import Price from './price/Price';
import Contact from './contact/contact';
import Map from './contact/Map';
import Footer from './footer/footer';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <MenuBar />
      </header>
      <main>
        <SliderComponent />
        <Price />
        <Contact />
        <Map />
        <Footer />
      </main>
      <footer>
        {/* Contenido del footer */}
      </footer>
    </div>
  );
}

export default App;
