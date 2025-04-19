// App.tsx
import { Routes, Route } from "react-router-dom";
import HomeLogo from "./Components/HomeLogo";
import Contact from "./Pages/Contact/Contact.tsx";
import ServicePage from "./Pages/Services/Service.tsx";
import SparePartForm from "./Pages/Services/SpareParts/SparePartForm";
import FormsPage from "./Pages/Forms/Form"; // Ensure FormsPage is correctly imported
import EventCalendar from "./Pages/EventCalendar/EventCalendar.tsx";

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<HomeLogo />} />
      <Route path="/services" element={<ServicePage />} />
      <Route path="/forms" element={<FormsPage />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/sparepartform" element={<SparePartForm />} />
      <Route path="/event-calendar" element={<EventCalendar />} />
    </Routes>
  );
};

export default App;
