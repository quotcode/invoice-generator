import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import {} from 'react-router-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from "./components/pages/Home";
import Navbar from './components/layout/Navbar';
import Invoice from './components/pages/Inovice';
import About from './components/pages/About';
import OurServices from './components/pages/Ourservices';
import Contact from './components/pages/Contact';

function App() {
    return (
        <Router>
            <div className="App">
                <Navbar/>
                <Routes>
                    <Route exact path="/" element={<Home />}></Route>
                    <Route exact path="/about" element={<About />}></Route>
                    <Route exact path="/services" element={<OurServices />}></Route>
                    <Route exact path="/invoice-generate" element={<Invoice />}></Route>
                    <Route exact path="/contact" element={<Contact />}></Route>
                </Routes>

            </div>
        </Router>

    );
}

export default App;
