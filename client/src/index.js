import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom'


document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
      <Root />,
      document.getElementById('root'),
  );
})

const Root = () => {
  return(
  <BrowserRouter>
      <App />
  </BrowserRouter>
  )
}
