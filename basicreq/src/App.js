import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Register from "./page/auth/register";
import Login from "./page/auth/login";
import Home from "./page/home";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
      </Routes>
    </Router>
  );
};

export default App;
