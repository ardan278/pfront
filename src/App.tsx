import { Routes, Route } from "react-router-dom";
import HomeLogo from "./Components/HomeLogo";
import Contact from "./Pages/Contact";

const App: React.FC = () => {
  return (
      <Routes>
        <Route path="/" element={<HomeLogo />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
  );
};

export default App;