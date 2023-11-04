import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import Textarea from './Textarea';
// import About from './About';
import Alert from './Alert';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

export default function App() {
  const [mode, setMode] = useState('dark');
  const [alert, setAlert] = useState({ message: '', type: '' });

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert('Dark mode has been enabled', 'success');
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert('Light mode has been enabled', 'success');
    }
  }

  setTimeout(() => {
    setAlert({ message: '', type: '' });
  }, 2000);

  const showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type,
    });
  }

  useEffect(() => {
    localStorage.setItem('mode', mode);
  }, [mode]);

  return (
    <div>
      {/* <Router> */}
        <Navbar name="Textutils1" mode={mode} toggleMode={toggleMode} />
        {alert.message && <Alert alert={alert} />}
        {/* <Routes> */}
          {/* <Route path="/about" element={<About mode={mode} toggleMode={toggleMode} />} />
          <Route
            path="/"
            element={<Textarea heading="Enter text to analyze" mode={mode} showAlert={showAlert} />}
          />
        {/* </Routes> */}
      {/* </Router> */}
      < Textarea />
    </div>
  );
}































