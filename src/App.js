import Button from "./Button"
import styles from "./App.module.css"
import { useState,useEffect } from "react";
import Movie from "./components/Movie";
import{
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom"
import Home from "./routes/Home"
import Detail from "./routes/Detail";

function App() {
  return (
  <Router basename={process.env.PUBLIC_URL}>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/movie/:id" element={<Detail/>}/>
      <Route path="/hello" element={<h1>hello</h1>}/>
    </Routes>
  </Router>
);
}

export default App;
