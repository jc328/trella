import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';

const token = window.localStorage.getItem('STACK_TOKEN')

const store = configureStore( {auth: {token} } );


document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
      <Root />,
      document.getElementById('root'),
  );
})

const Root = () => {
  return(
  <BrowserRouter>
  <Provider store={store}>
      <App />
  </Provider>
  </BrowserRouter>
  )
}
