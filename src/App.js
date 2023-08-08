
import './App.css';
import Header from './components/header';
import Home from "./components/Home"
import {BrowserRouter, } from "react-router-dom"

function App() {
  return (
    <BrowserRouter>
  
    <Header/>
    
    <Home/>
    
    
    
    </BrowserRouter>
  );
}

export default App;
