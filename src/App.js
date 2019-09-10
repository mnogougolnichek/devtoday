import React, {Suspense} from 'react';
import { Route, Switch} from 'react-router';
import {routes} from "./routes/index"
import './App.css';
import Loader from "./components/loader/Loader";
import Feed from "./components/feed/Feed";
import Post from "./components/post/Post";

const Rrr = () => (
    <div>
      <h3>RRR</h3>

    </div>
);

const Rrr2 = () => (
    <h3>RRR2222228888888888888</h3>
);

console.log(routes);

function App() {
  return (
      <div className="App">

        <Suspense fallback={(<Loader/>)}>
          <Switch>
            <Route exact path="/" component={Feed}>

            </Route>
            <Route exact path="/post/:id" component={Post}/>
          </Switch>
        </Suspense>
      </div>
  );
}

export default App;
