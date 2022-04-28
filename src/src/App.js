import './App.css';
import Box from './components/Box'
import { useState } from 'react';
import Form from './components/Form';
import Home from './pages/homepage/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {

  const [openform, setOpenform] = useState(false);
  const [opendownload, setOpenDownload] = useState(false);
  

  return (
    <>
      {openform ? <Form open={setOpenform} opendownload={setOpenDownload}/> : <></>}
      {opendownload ? <Box opendownload={setOpenDownload}/> : <></> }
    <BrowserRouter>
      <Routes>
         <Route path="/" element={<Home open={setOpenform} opendownload={setOpenDownload}/>} exact></Route>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
