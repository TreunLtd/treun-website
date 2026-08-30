import React from 'react';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navigation />
      <main>
        <h1>Treun Website (Building...)</h1>
        <p>Dev server is running. Navigation and Footer components are live.</p>
      </main>
      <Footer />
    </div>
  );
}

export default App;