import React from 'react';
import './App.css';
import Home from './Components/Home/Home'
import { BrowserRouter, Routes,Route } from 'react-router-dom'

function App() {
  return (
    <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        {/* <Route path='/create' element={<CreatePost />} /> */}
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
  );
}

export default App;