import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import About from './components/About';
 
import Home from './components/Home';
import Navbar from './components/Navbar';
import Product from './components/Product';
import Services from './components/Services';
import Cnt from './components/Cnt';
import Footer from './components/Footer';
  

function App() {
  return (
     <Router>
      <Navbar/>
      <Routes>
        
        <Route path="/" element={<Home/>}/>
        <Route path="/Contact" element={<Cnt/>}/>
        <Route path="/Services" element={<Services/>}/>
        
      </Routes>
      <Footer/>
     </Router>
  );
}

export default App;
