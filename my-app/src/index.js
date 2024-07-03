import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Library from './chapter-03/Library';
import Clock from './chapter-04/Clock'
import CommentList from './chapter-05/CommentList'
import NotificationList from './chapter-06/NotificationList';
import Accommodate from './chapter-07/Accommodate';
import ConfirmButton from './chapter-08/ComfirmButton';
import LandingPage from './chapter-09/LandingPage';
import AttendanceBook from './chapter-10/AttendanceBook';
import SignUp from './chapter-11/SignUp';
import Calculator from './chapter-12/Calculator';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Calculator />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

