import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Hero from './routes/home/Hero';
import { Cover } from "./components/ui/cover";
import Features from "./routes/home/Features";
import ComingSoon from "./routes/home/Comingsoon";

function App() {
  const [count, setCount] = useState(0);
  
  return (
    <div>
      <div className="bg-[url(./assets/HeroBG.jpg)] bg-cover bg-center bg-fixed">
        {/* Add relative positioning and high z-index to navbar container */}
        <div className="relative z-50">
          <Navbar />
        </div>
        <div className="bg-black bg-opacity-70">
          <Hero />
        </div>
      </div>
      <div className="bg-black">
        <Features />
      </div>
      <div className="">
        <ComingSoon />
      </div>
    </div>
  );
}

export default App;