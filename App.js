import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Content from './components/Content';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Content />
      <ContactForm />
      <Footer />
    </>
  );
}

export default App;
