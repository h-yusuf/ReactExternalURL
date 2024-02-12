import React, { useEffect } from "react";
import logo from './logo.svg';
import './App.css';

function App() {
  useEffect(() => {
    if (navigator.userAgent.includes("Instagram")) {
      const alertMessage = "Anda membuka aplikasi dari Instagram. Klik OK untuk membuka link di browser eksternal.";
      alert(alertMessage);
      window.open("https://react-external-urls.vercel.app/", "_blank");
    }
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          WELCOME TO EXTERNAL URL REACTJS
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
