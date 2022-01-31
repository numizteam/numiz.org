import React from 'react';
import { Routes, Route } from "react-router-dom";
import './App.css';

import { About, Index } from './pages';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/landing">
          <Route index element={<Index/>} />
          {/* <Route path="about" element={<About/>} /> */}
        </Route>
      </Routes>
    </div>
  );
}

export default App;
