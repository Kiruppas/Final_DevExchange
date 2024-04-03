import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HeroSection from './components/HeroSection';
import Home from './components/Home';
import Ask from './components/Ask';
import Tags from './components/Tags';
import QuestionDetails from './components/QuestionDetails';



function App() {
  return ( 
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<HeroSection/>} />
          <Route path="/Home" element={<Home/>}></Route>
          <Route path="/Ask" element={<Ask/>}></Route>
          <Route path="/Tags" element={<Tags/>}></Route>
          <Route path="/questions/:id" element={<QuestionDetails />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
