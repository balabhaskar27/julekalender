import React, { useState, useEffect } from 'react';
import Forside from './Forside';
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
import { Countdown } from './utils/countdown';

const { DateTime } = require('luxon');

function App() {
  const now = DateTime.local().setZone('Europe/London').toISO();

  const visCountdown = now < "2019-11-30T23:00:00";

  const [posts, setPosts] = useState([]);

  console.log(now);
  console.log(posts);

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

  console.log(now);

  const jepp = now < then ? "JADDA" : "NEI"
  console.log(jepp);

  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div className="App">
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
                <li><Link className="nav-item nav-link" to="/om">Om</Link></li>
              </ul>
            </div>
          </nav>
          {visCountdown ? <Countdown 
		timeTillDate="11 30 2019, 23:00 pm" 
		timeFormat="MM DD YYYY, h:mm a" 
	/> : null}
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
