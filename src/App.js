import React, { useState, useEffect } from 'react';
import Forside from './Forside';
import { Helmet } from 'react-helmet';
import Luke from './Luke';
import About from './About';
import './App.scss';
import logo from './assets/logo-offer.png';
import {
  HashRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import {client} from "./sanity";

const { DateTime } = require('luxon');

function App() {
  const now = DateTime.utc().toISO();

  const [posts, setPosts] = useState([]);
  const query = `*[_type == $type  && ((publishedAt <= "${now}"))]{author, body, mainImage, publishedAt, slug, title, solution}`;

  useEffect(() => {
    const fetchPosts = () => {
      client
        .fetch(query, {
          type: 'post',
        })
        .then((res) => {
          setPosts(res);
        })
        .catch((err) => {
          console.log('err', err);
          console.error('Oh no, error occured: ', err);
        });
    };
    now && fetchPosts();
  }, []);

  function compare( a, b ) {
    let aint = parseInt(a.title, 10);
    let bint = parseInt(b.title, 10);

    if ( aint < bint ){
      return -1;
    }
    if ( aint > bint ){
      return 1;
    }
    return 0;
  }

  const postsSorted = posts.sort(compare);

  const then = "2019-11-30T10:41:00"

  const jepp = now < then ? "JADDA" : "NEI"

  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div className="App">
        <Helmet>
        <title>OSK Julekalender</title>
      </Helmet>
        <div className="main-container">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a href="#"><img src={logo} height="50px;"/></a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup"
                    aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <ul className="nav navbar-nav">
                <li><Link className="nav-item nav-link" to="/">Luker</Link></li>
                <li><Link className="nav-item nav-link" to="/om">Om julekalenderen</Link></li>
              </ul>
            </div>
          </nav>
          <Switch>
            <Route exact path="/">
              <Forside posts={postsSorted} />
            </Route>
            <Route exact path="/om">
              <About />
            </Route>
            <Route path="/luke/:nr" component={props => <Luke nr={props.match.params.nr} posts={posts} />}/>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
