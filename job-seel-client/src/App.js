import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from './Components/Home/Home';
import Jobs from './Components/Pages/Jobs/Jobs';
import Resume from './Components/Pages/Resume/Resume';
import Postajob from './Components/Pages/Postajob/Postajob';
import Company from './Components/Pages/Company/Company';
import { BrowserRouter, Routes,Route } from 'react-router-dom';



function App() {
  return (
    <React.StrictMode>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/jobs' element={<Jobs />} />
            <Route path='/resume' element={<Resume />} />
            <Route path='/post-a-job' element={<Postajob />} />
            <Route path='/companies' element={<Company />} />
          </Routes>
        </BrowserRouter>
  </React.StrictMode>
  );
}

export default App;