import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Indexpage from './Pages/Indexpage'
import ContactForm from './Pages/ContactForm';
import Aboutus from './Pages/Aboutus';
import Shop from './Pages/Shop';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Indexpage/>} />
        <Route path="/contact" element={<ContactForm/>} />
        <Route path="/about" element={<Aboutus/>} />
        <Route path="/Shop" element={<Shop/>} />
      </Routes>
    </Router>
  );
}

export default App
