import './App.css';
import React, { useState } from "react";
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';

function App() {


  // theme mode state
  const [mode, setMode] = useState("light")

  // theme styling state
  const [ThemeStyle, setThemeStyle] = useState({
    color: 'black',
    backgroundColor: 'white'
  })

  // alert state
  const [alert, setAlert] = useState(null)

  // dark mode logic
  const toggleMode = ()=>{
    if(mode === "dark"){
      document.body.style.backgroundColor = "white";
      setThemeStyle({
        color: 'black',
        backgroundColor: 'white'
      })
      setMode("light")

    }else{
      document.body.style.backgroundColor = "#183153";
      setThemeStyle({
        color: 'white',
        backgroundColor: '#183153'
      })
      setMode("dark")
      showAlert("success","Dark mode has been enabled successfully!")
    }
  }

  // alert showing function
  const showAlert=(type, msg)=>{
    setAlert({
      type: type,
      msg: msg
    })

    setTimeout(() => {
      setAlert(null)
    }, 2000);
  }

  return (
    <div>
      {/* navbar component */}
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} className="navbar-div"/>

      {/* alert component */}
      <div className="alert-container fixed-top">
      <Alert alert={alert} ></Alert>
      </div>

      {/* text form component */}
      <div className="container textForm-container" >
        <TextForm mode={mode} ThemeStyle={ThemeStyle} showAlert={showAlert} />
      </div>
    </div>
  );
}

export default App;
