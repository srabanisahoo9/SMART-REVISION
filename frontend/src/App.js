import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Register from "./page/auth/register";
import Login from "./page/auth/login";
import Home from "./page/home";
import QuestionForm from "./page/questionform";
import "./style/questionForm.css"
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="login" element={<Login />} />
      <Route path="register" element={<Register />} />
      <Route path="/form" element={<QuestionForm />} />
    </Routes>
  );
};

export default App;
