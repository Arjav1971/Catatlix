

import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";



import MainLayout from "../src/MainLayout"
import Home from './Home';
import Activities from './Activities';
import Analytics from './Analytics';
import Library from './Library';
import Transformation from './Transformation';
import Settings from './Settings';
import Logout from './Logout';
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
        <Route path="settings" element={<Settings/>}/>
        <Route path="logout" element={<Logout/>}/>
       
      </Route>


      </Routes>
    </Router>
  );
}

export default App;
