import { BrowserRouter, Routes, Route } from 'react-router'
import Symptoms from './pages/Symptoms'
import RiskFactors from './pages/RiskFactors'
import Diagnosis from './pages/Diagnosis'
import Treatments from './pages/Treatments'
import CauseAndEffect from './pages/CauseAndEffect'
import Sources from './pages/Sources'
import Header from './components/Header'
import Footer from './components/Footer'
import Overview from './pages/Overview'

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Overview />} />
        <Route path="/symptoms" element={<Symptoms />} />
        <Route path="/risk-factors" element={<RiskFactors />} />
        <Route path="/diagnosis" element={<Diagnosis />} />
        <Route path="/treatments" element={<Treatments />} />
        <Route path="/cause-and-effect" element={<CauseAndEffect />} />
        <Route path="/sources" element={<Sources />} />
        <Route path="*" element={<main><h1>Page not found</h1><p>Choose a page from the navigation above.</p></main>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}
