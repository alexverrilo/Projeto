import React, { FunctionComponent } from 'react';
import PaginaPrincipal from './pages/principal';
import { Route, Routes } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import PaginaBaresRestaurantes from './pages/baresrestaurantes';


const App: FunctionComponent = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PaginaPrincipal/>}/>
        <Route path="/bares-restaurantes" element={<PaginaBaresRestaurantes/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
