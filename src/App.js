import './App.scss';
import { useState } from 'react';
import Form from "./componets/Form.js"
import Posts from './componets/Posts';
import Home from './componets/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (

    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="form" element={<Form/>}/>
        <Route exact path="posts" element={<Posts/>}/>
      </Routes>
    
    </BrowserRouter>
    
      
    
  );
}

export default App;
