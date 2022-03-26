import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Link, Route, Router, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Login from './components/Home/Login';
import DashboardTable from './components/Dashboard/DashboardTable';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/dashboard' element={<DashboardTable />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
