import {Routes, Route } from "react-router-dom";
import Sidebar from './components/Sidebar'
import Navbar from './components/Navbar'
import About from './components/About'
import Resume from "./components/Resume";
import Portfolio from "./components/Portfolio";


const App = () => {
  return (
    <main>
      <Sidebar />
      <div className="main-content">
        <Navbar />
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/Resume" element={<Resume />} />
          <Route path="/Portfolio" element={<Portfolio />} />
        </Routes>
      </div>
    </main>
  )
}

export default App