import './App.css';
import FeaturedProducts from './FeaturedProducts';
import Hero from './hero'
import Topbar from './topbar';
import About from './about'
import Visit from './visit'

function App() {
  
  return (
    <div className='App'>
      <Topbar />
      <Hero />
      <About />
      <FeaturedProducts />
      <Visit />
    </div>
  );
}
export default App;