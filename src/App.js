import { useState } from "react";
import "./App.css";
import { Aboutus } from "./components/Aboutus";
import Forms from "./components/Forms";
import Navbar from "./components/Navbar";
import Alert from "./components/Alert";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  const [mode, setmode] = useState("light");
  const [alert, setAlert] = useState(null);
  const [name, setname] = useState("Dark mode");

  const showalert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };
  const toggle = () => {
    if (mode === "light") {
      setmode("dark");
      setname("Light mode");
      document.body.style.backgroundColor = "#183148";
      showalert("Dark mode has been enabled", "success");
      document.title = "Textmanipulator - DarkMode";
    } else {
      setmode("light");
      setname("Dark mode");
      document.body.style.backgroundColor = "white";
      showalert("Light mode has been enabled", "success");
      document.title = "Textmanipulator - LightMode";
    }
  };

  return (
    <>
      <Router>
      <Navbar title={"Text-Manipulator"} name={name} toggle={toggle} mode={mode} />
        <Alert alert={alert} />

        <Routes>
          <Route exact path="/About" element ={<Aboutus mode={mode} />}>
          </Route>
          <Route exact path="/" element = {<Forms showalert={showalert} mode={mode} />}>
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
