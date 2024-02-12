import React, { useEffect } from "react"
import logo from './logo.svg';
import './App.css';
// import { UserAgent } from 'react-useragent';

function App() {
  useEffect(() => {
    if (navigator.userAgent.includes("Instagram")) {
      window.open("https://react-external-urls.vercel.app/", "_blank")
    }
  }, [])
  return (
    <div className="App">
      {/* <UserAgent>
        {({ ua }) => {
          return ua.mobile ? <input type="date" /> : <input type="text" /> >;
        }}
      </UserAgent> */}
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
