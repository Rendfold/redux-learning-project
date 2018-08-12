import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReaduxPromise from 'redux-promise';
import { BrowserRouter, Route, Switch } from "react-router-dom";

import reducers from './reducers';
import PostIndex from "./components/PostIndex";
import PostsNew from './components/PostsNew';

const createStoreWithMiddleware = applyMiddleware(ReaduxPromise)(createStore);

ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
      <BrowserRouter>
        <Switch>
          <Route path="/posts/new" component={PostsNew} />
          <Route path="/" component={PostIndex} />
        </Switch>
      </BrowserRouter>
    </Provider>
  , document.querySelector('.container'));
