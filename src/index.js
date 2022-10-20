import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';
import {
  Provider
} from 'react-redux';
import store from './redux__data_storage/store.js';

import './index.css';

import reportWebVitals from './reportWebVitals';

import Main from './pages/main.js';
import Admin_Panel from './pages/admin_panel/admin_panel.js';
import Article_Editor from './pages/admin_panel/toolbar/article_editor/article_editor.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='adminpanel' element={<Admin_Panel />} />
          <Route path='articleeditor' element={<Article_Editor />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
