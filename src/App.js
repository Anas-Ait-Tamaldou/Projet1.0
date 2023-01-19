
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Infofilm from './Infofilm';
import Movie from './Movie';




function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Infofilm />}/>
        <Route path = "Movie/:id" element = {<Movie />}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App