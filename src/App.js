// import { useState } from 'react';
import './App.css';
import About from './component/About';
import Navbar from './component/Navbar';
import TextForm from './component/txtForm';
import React, { useState } from 'react';
import Alert from './component/Alertt';
import { BrowserRouter, Route, Routes } from "react-router-dom";



function App() {
  const [mode, setMode]= useState('light');
  const [alert,setAlert]=useState(null)
  
  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type,
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const toggleMode=()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor='#042743';
      showAlert('Dark mode is enabled','success');
      // document.title='TextUtils - Dark Mode'
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert('Dark mode is disabled','success');
      // document.title='TextUtils - Light Mode'
    }
  }
  return (
    <>
      {/* <BrowserRouter> */}
    <Navbar title="Wordz Play" aboutText="About" mode={mode} toggleMode={toggleMode}/>
    <Alert alert= {alert}/>
    <br />
    <div className="container my-3">
      {/* <Routes> */}
        {/* <About/> */}
      {/* <Route exact path="/about" element={<About mode={mode} />} /> */}
      {/* </Routes> */}
      {/* <Routes> */}
        <TextForm showAlert={showAlert} heading="Try Wordz Play - Text Converter, Word counter, Character counter"mode={mode} />
        {/* <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Try Wordz Play - Text Converter, Word counter, Character counter"mode={mode} />}></Route> */}
    {/* </Routes> */}
    </div>
    {/* </BrowserRouter> */}
    </>
  );
}

export default App;
 