import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Indexpage from './Pages/Indexpage'
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Indexpage/>} />
      </Routes>
    </Router>
  );
}

export default App
