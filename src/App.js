import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
const axios = require('axios');

function App() {
  const [myState, setMyState] = useState('')

  const signal = () => {
    // let url = process.env.REACT_URL;
    let url = 'http://oc-bff-tworepo.ibmcloud-roks-bnp1arrp-6ccd7f378ae819553d37d5f2ee142bd6-0000.mex01.containers.appdomain.cloud/test';
    console.log(process.env.REACT_URL);
    axios.get(url)
    .then((res)=>{
      console.log(res.data);
      setMyState(res.data);
    })
    .catch(()=> {
      console.log('err', url);
    })
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <button onClick={() => signal()}>click here</button>
        <p>
          response : {myState}
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
