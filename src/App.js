import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import Textarea from './Textarea';
import Alert from './Alert';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import About from './About';

export default function App() {
  const [mode, setMode] = useState('dark');
  const [alert, setAlert] = useState({ message: '', type: '' });

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert('Dark mode has been enabled', 'success');
      setInterval(() => {
        document.title = 'with the help of chat & Harry';
      }, 2000);
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert('Light mode has been enabled', 'success');
      setInterval(() => {
        document.title = 'coded by vinneth kumar';
      }, 1500);
  
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
      <div>
        {/* <Router>
          <Navbar name="Textutils1" mode={mode} toggleMode={toggleMode} />
          <Routes>
            <Route path="/" element={<Textarea mode={mode} showAlert={showAlert} />} />
            <Route path="/about" element={<About mode={mode} toggleMode={toggleMode} />} />
          </Routes>
          {alert.message && <Alert alert={alert} />}
        </Router> */}
        <Navbar name="Textutils1" mode={mode} toggleMode={toggleMode}/>
        {alert.message && <Alert alert={alert} />}
        <Textarea  mode={mode}/>
      </div>
    </div>
  );
}



































