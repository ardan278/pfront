// App.tsx
import { Routes, Route } from "react-router-dom";
import HomeLogo from "./Components/HomeLogo";
import Contact from "./Pages/Contact/Contact.tsx";
import ServicePage from "./Pages/Services/Service.tsx";
import SparePartForm from "./Pages/Services/SpareParts/SparePartForm";
import InstallationForm from "./Pages/Services/Installation/InstallationForm";
import ServiceForm from "./Pages/Services/Service/ServiceForm";
import ModernizationForm from "./Pages/Services/Modernization/modern_form";
import FormsPage from "./Pages/Forms/Form"; // Ensure FormsPage is correctly imported
import EventCalendar from "./Pages/EventCalendar/EventCalendar.tsx";
import RegForm from "./Pages/Forms/Reg_form";
import InstForm from "./Pages/Forms/Inst_form";
import ServForm from "./Pages/Forms/Serv_form";
import PartReqForm from "./Pages/Forms/Part_req_form";

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<HomeLogo />} />
      <Route path="/services" element={<ServicePage />} />
      <Route path="/forms" element={<FormsPage />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/sparepartform" element={<SparePartForm />} />
      <Route path="/installationform" element={<InstForm />} />
      <Route path="/service" element={<ServiceForm />} />
      <Route path="/serviceform" element={<ServiceForm />} />
      <Route path="/modernization" element={<ModernizationForm />} />
      <Route path="/event-calendar" element={<EventCalendar />} />
      <Route path="/registrationform" element={<RegForm />} />
      <Route path="/installationfromservices" element={<InstallationForm />} />
      <Route path="/serviceformold" element={<ServForm />} />
      <Route path="/partrequestform" element={<PartReqForm />} />
    </Routes>
  );
};

export default App;
