import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DoctorPatientDetails from './components/DoctorPatientDetails';
import DoctorsList from './components/DoctorsList';
import './App.css'

const App=()=> {
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DoctorsList />} />
        <Route path="/doctors/:doctorId/patients/:patientId" element={<DoctorPatientDetails />} />
        <Route path="*" element={<div>Page Not Found</div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App
