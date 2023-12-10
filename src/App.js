import MenuBar from './menuBar/MenuBar'; 
import SliderComponent from './slider/SliderComponent';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <MenuBar />
      </header>
      <main>
        <SliderComponent />
      </main>
      <footer>
        {/* Contenido del footer */}
      </footer>
    </div>
  );
}

export default App;
