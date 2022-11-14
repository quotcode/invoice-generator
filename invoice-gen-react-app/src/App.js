
import React, {useState} from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './Navbar.css';

import Home from "./components/pages/Home";
import Navbar from './components/layout/Navbar';
import Invoice from './components/pages/Invoice';
import About from './components/pages/About';
import OurServices from './components/pages/Ourservices';
import Contact from './components/pages/Contact';
import PageNotFound from './components/pages/PageNotFound';
import ViewInvoice from './components/pages/ViewInvoice';
import CompanyDetails from './components/pages/CompanyDetails';
import { AppContext } from './Context';


function App() {
    const [ custs, setCusts ] = useState('');
    // Part of AppContext
    const dispatchCustomerEvent = (actionType, payload) =>{
        switch(actionType){
            case 'ADD_CUST':
                setCusts(payload.newCust);
                return;
            case 'DELETE_ITEM':
                setCusts(payload.newCust)
            default: 
                return;
        }
    };

    return (
        <Router>
            <div className="App">
            <AppContext.Provider value={{ custs, dispatchCustomerEvent }}>
                    <Navbar/>
                    <Routes>
                        <Route exact path="/" element={< Home />}></Route>
                        <Route exact path="/about" element={< About />}></Route>
                        <Route exact path="/services" element={< OurServices />}></Route>
                        <Route exact path="/invoice-generate" element={< Invoice />}></Route>
                        <Route exact path="/view-invoice" element={< ViewInvoice />}></Route>
                        <Route exact path="/company-details" element={< CompanyDetails  />}></Route>
                        <Route exact path="/contact" element={< Contact />}></Route>
                        <Route exact path="*" element={< PageNotFound />}></Route>
                    </Routes>
                </AppContext.Provider>
            </div>
        </Router>

    );
}

export default App;
