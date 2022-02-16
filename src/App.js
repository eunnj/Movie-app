import{
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom"
import Home from "./routes/Home"
import Detail from "./routes/Detail";
import Navbar from "./components/Navbar";
import Group from "./routes/Group";


function App() {
  return (
  <Router basename={process.env.PUBLIC_URL}>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/movie/:id" element={<Detail/>}/>
      <Route path={`/page/:group/:page`} element={<Group />} />
      </Routes>
  </Router>
);
}

export default App;
