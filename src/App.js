import React from 'react';
import { stripeAPI } from "./components/fetch/stripeAPI";
import './App.css';

function App() {

  return (
    <div className="jumbotron p-5 bg-light">
      <h1>App</h1>
      <button
        type="button"
        className="btn btn-primary"
        onClick={() => stripeAPI()}
      >
        Checkout
      </button>
    </div>
  );
}

export default App;
