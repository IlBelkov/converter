import React from 'react';
import { ToastContainer } from 'react-toastify'
import { Converter } from './components/Converter/Converter'
import Header from './components/Header/Header'
import 'react-toastify/dist/ReactToastify.css'

const App = () => {
  return (
    <main>
      <ToastContainer autoClose={2000} />
      <Header />
      <Converter />
    </main>
  );
}

export default App;
