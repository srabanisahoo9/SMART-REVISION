import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Register from './register';
import Login from './loginpage';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login />} />
            </Routes>
        </Router>
    );
}

export default App;
