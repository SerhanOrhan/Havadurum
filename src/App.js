import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route} from "react-router-dom";
import './App.css';
import Home from '../src/pages/Home';
import Search from '../src/pages/Search';
import Detail from './pages/Detail';


function App() {

  return (

    <Routes>
      <Route path="/" element={<Home />} />
      <Route  path="/search" element={<Search />} />
      <Route path="/detail/:name" element={<Detail/>}></Route>
    </Routes>

      
  


  );
}


export default App;