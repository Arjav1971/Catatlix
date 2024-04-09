

import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";



import MainLayout from "../src/MainLayout"
import Home from './Home';
import Activities from './Activities';
import Analytics from './Analytics';
import Library from './Library';
import Transformation from './Transformation';

function App() {
  return (

    <Router>
      <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="activities" element={<Activities/>}/>
        <Route path="analytics" element={<Analytics/>}/>
        <Route path="library" element={<Library/>}/>
        <Route path="transformation" element={<Transformation/>}/>
       
      </Route>


      </Routes>
    </Router>
  );
}

export default App;
