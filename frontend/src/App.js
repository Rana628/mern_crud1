//import { Routes } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './Home';
import ReadUser from './ReadUser';
import UpdateUser from './UpdateUser';

function App() {
  return (
    <div className>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/readuser/:id" element={<ReadUser/>} />
        <Route path="/updateuser/:id" element={<UpdateUser/>} />
      </Routes>
      
    </div>
  );
}

export default App;
