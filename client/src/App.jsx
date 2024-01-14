// import { useState } from 'react'
import './App.css'
import Header from './Components/Header';
import Hero from './Components/Hero';
import Footer from './Components/Footer';

function App() {

  return (
    <div className='bg-black overflow-hidden'>
      <Header/>
      <Hero/>
      <Footer/>
    </div>
  );
}

export default App
