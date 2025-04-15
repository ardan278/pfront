import React from 'react';
import { Routes, Route } from "react-router-dom";
import HomeLogo from './Components/HomeLogo';

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/HomeLogo" element={<HomeLogo />} />
    </Routes>
  );
};

export default App;