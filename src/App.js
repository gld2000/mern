import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Public from './components/Public';
import Login from './components/Login';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />} />
        <Route index element={<Public />} />
        <Route path="login" element={<Login />} />
    </Routes>
  );
}

export default App;
