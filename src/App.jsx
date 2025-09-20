import React from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Layout from './components/layout/Layout'
import ScrollToTop from './components/ScrollToTop'
import AboutPage from './pages/AboutPage'
import AdmissionsPage from './pages/AdmissionsPage'
import ContactPage from './pages/ContactPage'
import HomePage from './pages/HomePage'
import ProgramsPage from './pages/ProgramsPage'
import StudentResourcesPage from './pages/StudentResourcesPage'

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/goldenEducation/" element={<HomePage />} />
          <Route path="/goldenEducation/programs" element={<ProgramsPage />} />
          <Route path="/goldenEducation/admissions" element={<AdmissionsPage />} />
          <Route path="/goldenEducation/student-resources" element={<StudentResourcesPage />} />
          <Route path="/goldenEducation/about" element={<AboutPage />} />
          <Route path="/goldenEducation/contact" element={<ContactPage />} />
          <Route path="/goldenEducation/faq" element={<ContactPage />} />
        </Routes>
      </Layout>
    </Router>
  )
}



export default App
