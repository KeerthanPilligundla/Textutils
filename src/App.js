import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import React, { useState } from 'react';
import Alert from './components/Alert';
import About from './components/About ';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {

  const [mode, setMode] = useState("light")
  const [alert, setAlert] = useState(null)

  const showAlert = (message,type)=>{
    setAlert({
      msg:message,
      typ:type
    })
    setTimeout(() => {
      setAlert(null)
    }, 3000);
  }

  const toogleMode = ()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor = '#3a3b3c';
      showAlert("Dark mode has been enabled","success");
    }else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled","success");
    }
  }
  return (
    <>
    <Router>
      <Navbar title="TextUtils" aboutText="About Us" mode={mode} toogleMode={toogleMode}/>
      <Alert alert={alert}/>
      <Switch>
            <Route exact path="/about">
              <About mode ={mode}/>
            </Route>
            <Route exact path="/">
            <div className="container my-3">
              <Textform showAlert={showAlert} heading="Try Textutils - Word Counter, Character Counter, Remove Extra Spaces" mode={mode}/>
            </div>
            </Route>
      </Switch>
    </Router>
    </>
  );
}

export default App;
