import React from 'react';
import GlobalStyle from './globalStyles';
import {BrowserRouter as Router} from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';

//Pages
import Home from './pages/Home';
import Footer from './components/Footer/Footer';
import FloatingActionButtons from "./components/FloatingButtons/FloatingActionButtons";

function App() {
    return (
        <Router>
            <GlobalStyle/>
            <Navbar/>
            <Home/>
            <Footer/>
            <FloatingActionButtons/>
        </Router>
    );
}

export default App;
