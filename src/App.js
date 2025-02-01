import './App.css';
import Form from './components/Form';
import NavBar from './components/NavBar';
import React, {useState} from 'react'

function App() {

  const [mode, setMode] = useState('light')   // State to Enable DarkMode
  const [textColor,setTextColor] = useState('Enable Dark Mode')   // State to change the text
  const [borderColor,setBorderColor] = useState('grey')   // State to change the nav-border color

  const toggleMode = ()=>{     // Logic for Toggle Dark or Light Mode 

    if (mode === 'light')
    {
      setMode('dark');
      setBorderColor('black');
      setTextColor('Enable Light Mode');

     document.body.style.backgroundColor = '#111827';
    }
    else
    {
      setMode('light');
      setBorderColor('grey');
      setTextColor('Enable Dark Mode');
      document.body.style.background = 'white'
    }

  }

  return (
    
    <>
      <NavBar title="TextUtils" mode = {mode} toggleMode = {toggleMode} borderBottom = {borderColor} textColor = {textColor}/>

      <div className="formDiv container my-5">
        <Form  mode = {mode}/>
      </div>
    </>
  );
}

export default App;
