import React from 'react';
import {Route, Switch } from 'react-router-dom';
import StreamCreate from './components/streams/StreamCreate';
import StreamEdit from './components/streams/StreamEdit';
import StreamDelete from './components/streams/StreamDelete';
import StreamShow from './components/streams/StreamShow';
import StreamList from './components/streams/StreamList';
import Header from './components/Header';

function App() {
  return (
    <div className="ui container">
      <Header/>
      <Switch>
      <Route path="/" exact component={StreamList} />
      <Route path="/stream/new" exact component={StreamCreate} />
      <Route path="/stream/edit" exact component={StreamEdit} />
      <Route path="/stream/delete" exact component={StreamDelete} />
      <Route path="/stream/show" exact component={StreamShow} />
    </Switch>
    </div>
  );
}

export default App;
