import './App.css';
import NavBar from './components/NavBar';
import TextForm from './components/TextForm';
import About from './components/About';
import React, {useState} from 'react'
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {

  const [mode, setMode] = useState('light');

  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type
    });

    setTimeout(() => {
      setAlert(null)
    },2000);
  }

  const changeMode = () => {
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = "#495057";
      showAlert("Dark Mode Enabled", "success");
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode Enabled", "success");
    }
  }

  return (
    <>
    <Router>
      <NavBar title="Mohak's Text Utils" aboutTitle="About Mohak" changeMode={changeMode} mode={mode}/>
      <div className="container my-3">
        <Alert alert={alert} />
        <Routes>
          <Route exact path="/" element={<TextForm heading="Enter a text to analyze" mode={mode} showAlert={showAlert} />} />
          <Route exact path="/about" element={<About mode={mode} />} />
        </Routes>
      </div>
      </Router>
    </>
  );
}

export default App;
