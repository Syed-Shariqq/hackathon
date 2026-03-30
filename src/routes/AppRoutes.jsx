import { Routes, Route } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import Home from '../pages/Home';
import Academics from '../pages/Academics';
import Admissions from '../pages/Admissions';
import Campus from '../pages/Campus';
import Research from '../pages/Research';
import Contact from '../pages/Contact';
import Events from '../pages/Events';
import Login from '../pages/Login';
import Dashboard from '../pages/Dashboard';
import AcademicsDepartment from '../pages/AcademicsDepartment';

export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/academics" element={<Academics />} />
        <Route path="/academics/:department" element={<AcademicsDepartment />} />
        <Route path="/admissions" element={<Admissions />} />
        <Route path="/campus" element={<Campus />} />
        <Route path="/research" element={<Research />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/events" element={<Events />} />
      </Route>
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
}
