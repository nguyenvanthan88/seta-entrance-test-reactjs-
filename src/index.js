import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import axios from 'axios';

axios.defaults.baseURL =
    'https://jsonplaceholder.typicode.com/posts';
// axios.defaults.headers.common['Authorization'] = 'Auth Token';

axios.interceptors.request.use((request) => {
    console.log(request);
    request.headers.channelName = 'Than Nguyen';
    return request;
});

axios.interceptors.response.use((response) => {
    console.log(response);
    return response;
});
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
