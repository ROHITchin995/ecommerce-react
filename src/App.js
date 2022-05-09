import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Suspense } from 'react';
import Login from './pages/login';
import Home from './pages/home';


function App() {
  return (
    
      <Router>
        <Routes>
          <Route path="/home" element={
            <Suspense fallback={<div className='loader'>Loading</div>}>
              <Home />
            </Suspense>
          } />
        
          <Route path="/" element={
            <Suspense fallback={<div className='loader'>Loading</div>}>
              <Login />
            </Suspense>
          } />
        </Routes>
      </Router>
    
  );
}

export default App;
