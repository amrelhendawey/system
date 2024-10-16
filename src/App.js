import './App.css';
import SigninPage from './pages/SigninPage';
import SignupPage from './pages/SignupPage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SigninPage />} />
        <Route path="/signin" element={<SignupPage />} />
      </Routes>
    </Router>
  );
}

export default App;
