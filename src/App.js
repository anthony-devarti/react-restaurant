import FeaturedProducts from './FeaturedProducts';
import './App.css';
import Hero from './hero'
import Topbar from './topbar';

function App() {
  return (
    <div className='App'>
      <Topbar />
      <Hero />
      <FeaturedProducts />
    </div>
  );
}
export default App;