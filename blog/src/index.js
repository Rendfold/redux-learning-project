import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReaduxPromise from 'redux-promise';
import { BrowserRouter, Route } from "react-router-dom";

import reducers from './reducers';
import PostIndex from "./components/PostIndex";

const createStoreWithMiddleware = applyMiddleware(ReaduxPromise)(createStore);

ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
      <BrowserRouter>
        <div>
          <Route path="/" component={PostIndex} />
        </div>
      </BrowserRouter>
    </Provider>
  , document.querySelector('.container'));
