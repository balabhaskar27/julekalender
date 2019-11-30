import React from 'react';
import {
  Link
} from "react-router-dom";

function Forside( { posts }) {

  const arr = [...Array(24)];

  return (
    <div className="grid-container luke-bakgrunn">
      {arr.map((_, i) => {
        const post = posts[i];
        const cl = i % 2 === 0 ? "even" : "odd";

        if (post) {
          return (<div key={i} className={"post-element " + cl}>
            <Link className="link-luke" to={"/luke/" + post.slug.current}>
              <div className={`nummer-${cl}`}>{post.title}</div>
            </Link>
          </div>)
        }
          else {
          return (<div key={i} className={"post-element disabled"}>
              <div className={`nummer-${cl}-disabled`}>{i+1}</div>
          </div>)
          }
        })}
    </div>
  );
}

export default Forside;
