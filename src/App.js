import React from 'react';
import { Box } from '@mui/system';
import {Route, Routes} from 'react-router-dom'
import Navbar from './components/Navbar';
import ExerciseDetail from './pages/ExerciseDetail';
import Home from './pages/Home'
import Footer from './components/Footer';
import './App.css'
function App() {
  return (
    <div className="App">
      <Box width="400px" sx={{width:{x1:'1488px'}}} m="auto">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/exercise/:id' element={<ExerciseDetail/>}/>
      </Routes>
      <Footer/>
      </Box>
    </div>
  );
}

export default App;
