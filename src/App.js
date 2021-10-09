import React from 'react';
import { ToastContainer } from 'react-toastify'
import Header from './components/Header/Header'
import 'react-toastify/dist/ReactToastify.css'

const App = () => {
  return (
    <main>
      <ToastContainer autoClose={2000} />
      <Header />
    </main>
  );
}

export default App;
