import { useState } from "react";
import "./App.css";

// import About from "./componen/ts/About";
import Alert from "./components/Alert";
import Navbar from "./components/Navbar";
import TextForms from "./components/TextForms";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "./components/About";
function App() {
  const [modeTextColor, setmodeTextColor] = useState("dark");
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (messege, type) => {
    setAlert({
      msg: messege,
      typ: type,
    });

    // setTimeout(setAlert(null), 3000);

    setTimeout(() => {
      setAlert(null);
    }, 3000);
  };
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      setmodeTextColor("light");
      document.body.style.backgroundColor = "#2c4258";
      showAlert("Dark mode has been enable", "success");
    } else {
      setMode("light");
      setmodeTextColor("dark");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enable", "primary");
    }
  };
  // const name="Rahul Rathore"
  return (
    <>
      <Router>
        <Navbar
          title="TextUtils"
          aboutText="About us"
          mode={mode}
          toggleMode={toggleMode}
          modeTextColor={modeTextColor}
        ></Navbar>
        <Alert alert={alert} />
        {/* <TextForms
          showAlert={showAlert}
          heading="Enter the text to Analyse"
          mode={mode}
        /> */}
         <Routes>
          <Route exact path="/" element={  <TextForms
          showAlert={showAlert}
          heading="Enter the text to Analyse"
          mode={mode}
        />}/>
          <Route exact path="/about" element={<About/>}/>
          
          {/* <Route path="*" element={<NotFound/>}/> */}
        </Routes>
        <div className="container my-3">{/* <About mode={mode}/> */}</div>
      </Router>
    </>
  );
}

export default App;
