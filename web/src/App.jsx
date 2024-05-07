import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Questions from './pages/Questions';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="questions/" element={<Questions />}></Route>
        <Route path="*" element={<Home />}></Route>
      </Routes>
    </Router>
  )
}

export default App
