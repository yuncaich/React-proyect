import MenuBar from './menuBar/MenuBar'; 
import SliderComponent from './slider/SliderComponent';
import Price from './price/Price';
import Contact from './contact/contact';
import ImageMap from './contact/imageMap';
import Footer from './footer/footer';
import ImagePrice from './price/ImagePrice';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <MenuBar />
      </header>
      <main>
        <SliderComponent />
        <ImagePrice />
        <Contact />
        <ImageMap />
        <Footer />
      </main>
      <footer>
        {/* Contenido del footer */}
      </footer>
    </div>
  );
}

export default App;
