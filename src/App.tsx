import { BrowserRouter, Navigate, Route, Routes } from 'react-router'
import Layout from './components/Layout'
import Home from './pages/Home'
import Projects from './pages/Projects'
import Research from './pages/Research'
import Impact from './pages/Impact'
import Awards from './pages/Awards'
import Resume from './pages/Resume'
import Contact from './pages/Contact'
import './App.css'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="projects" element={<Projects />} />
          <Route path="research" element={<Research />} />
          <Route path="impact" element={<Impact />} />
          <Route path="awards" element={<Awards />} />
          <Route path="resume" element={<Resume />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
