import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from './Components/Home/Home';
import { BrowserRouter, Routes,Route } from 'react-router-dom';



function App() {
  return (
    <React.StrictMode>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home />} />
            
          </Routes>
        </BrowserRouter>
  </React.StrictMode>
  );
}

export default App;