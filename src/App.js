
import './App.modules.css';
import TodoComponent from './components/TodoComponent';
import LoginComponent from './components/LoginComponent';
import RegisterComponent from './components/RegisterComponent';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/register" exact element={<RegisterComponent />} />
        <Route path="/todoApp" element={<TodoComponent />} />
        <Route path="/login" element={<LoginComponent />} />
      </Routes>

    </BrowserRouter>

  );
}

export default App;
