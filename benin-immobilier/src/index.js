import React from 'react';
import ReactDOM from 'react-dom/client';
// import Header from './components/Header';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Accueil from './pages/Accueil';
import Contact from './pages/Contact';
import Temoignages from './pages/Temoignages';
import Projets from './pages/Projets';
import Layout from './components/Layout';
import Louer from './components/Louer'
import Acheter from './components/Acheter'



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Accueil />}/>
          <Route path="/contact" element={<Contact />}/>
          <Route path="/temoignages" element={<Temoignages />}/>

          <Route path="/projets" element={<Projets />}>
            <Route path="louer" element={<Louer />}/>
            <Route path="acheter" element={<Acheter />}/>
          </Route>

        </Routes>
      </Layout>
    </Router>
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
