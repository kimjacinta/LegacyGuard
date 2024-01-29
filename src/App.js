import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Layout from './components/Layout';

function App() {  
  return (
    <div>
    <BrowserRouter>
    <Layout>
        <Routes>
        <Route path="/" element={<Home />} />
        </Routes>
      </Layout>
    </BrowserRouter>
    </div>
  );
}

export default App;
