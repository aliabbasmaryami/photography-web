import './App.css';
import About_us from './components/AboutUs';
import Header from './components/Header';
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import Ourservices from './components/Ourservices';
import Forms from './components/Forms';
import Footer from './components/Footer';



function App() {
  return (
    <div className="App">
    <Header/>
    <Home/>
    <AboutUs/>
    <Ourservices/>
    <Forms/>
    <Footer/>
    </div>
  );
}

export default App;
