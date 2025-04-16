// App.tsx
import { Routes, Route } from "react-router-dom";
import HomeLogo from "./Components/HomeLogo";
import Contact from "./Pages/Contact";
import Services from "./Pages/Services";
import SparePartForm from "./Pages/Services/SpareParts/SparePartForm";

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<HomeLogo />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/services" element={<Services />} />
      <Route path="/services/spareparts" element={<SparePartForm />} />
    </Routes>
  );
};

export default App;
