// App.tsx
import { Routes, Route } from "react-router-dom";
import HomeLogo from "./Components/HomeLogo";
import Contact from "./Pages/Contact";
import ServicesPage from "./Pages/Services/Service";
import SparePartForm from "./Pages/Services/SpareParts/SparePartForm";
import FormsPage from "./Pages/Forms/Form"; // Ensure FormsPage is correctly imported

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<HomeLogo />} />
      <Route path="/services" element={<ServicesPage />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/forms" element={<FormsPage />} />
      <Route path="/sparepartform" element={<SparePartForm />} />
    </Routes>
  );
};

export default App;
