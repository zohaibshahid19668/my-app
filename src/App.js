import React from 'react';
import logo from './logo.svg';
import './App.css';
import Axios from 'axios';
import QS from 'qs';
function App() {
  React.useEffect(()=>{
    let data = QS.stringify({
      'grant_type': 'client_credentials',
      'client_id': ' 79aaf575-45bc-4e59-a976-41000381cd10',
      'client_secret': ' Wn-zUzDv4mqrH1u-24AR2g8NanB9W8~dX_',
      'resource': ' 3530b95b-aca8-4164-b78e-0c07cbfd0681',
      'scope': ' .default' 
    });
    var config = {
      method: 'post',
      url: 'https://login.microsoftonline.com/6d56f056-48d8-4e5a-a528-0e2df50d29ac/oauth2/token',
      headers: { 
        'Content-Type': 'application/x-www-form-urlencoded', 
        'Access-Control-Allow-Origin':' true',
      },
      data : data
    };
    Axios(config)
    .then(function (response) {
      console.log(JSON.stringify("token res",response.data));
    })
    .catch(function (error) {
      console.log("token error",error);
    });
    
    console.log("zohaib")
  },[])
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>ZOHAIB</p>
        <p>
          Edit <code>src/App.js</code> and save to reload.
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
