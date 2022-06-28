import { useState } from 'react';
import './App.css';
import Alert from './components/Alert';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import {
  BrowserRouter as Router,  
  Routes,
  Route,
} from "react-router-dom";

  export default function App() {
  const [mode, setMode] = useState('light');
  const [alert, setalert] = useState(null);
  const toggleMode= () =>{
      if(mode === 'light'){
        setMode('dark');
        document.body.style.backgroundColor='#0f1634'
        showAlert("Dark mode has been enabled", "success");
      }
      else{
        setMode('light');
        document.body.style.backgroundColor='white'
        showAlert("light mode has been enabled", "success");
      }
  }
  const showAlert = (message, type) => {
    setalert({
      msg:message,
      type:type          
    })
    setTimeout(() => {
      setalert(null); 
    }, 1500);
  }
  return (
    <>
    <Router>
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      <div className="container my-3">
      <Routes>
          <Route exact path="/about" element={<About />}/>
      

          <Route exact path="/" element={ <TextForm heading="Enter the text to analyze below" mode={mode} showAlert={showAlert}/>}/>
        </Routes>
       </div>
       </Router> 
    </>
  );
}

