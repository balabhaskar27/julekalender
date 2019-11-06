import React, { useState, useEffect } from 'react';
import { client } from './sanity.js';
import {
  Link
} from "react-router-dom";

function Forside( { posts }) {

  return (
    <div className="grid-container luke-bakgrunn">
      {posts.map((post, i) => {
        const cl = i % 2 === 0 ? "even" : "odd";

        return (<div className={"post-element " + cl}>
          <Link className="link-luke" to={"/luke/" + post.slug.current}><div className={`nummer-${cl}`}>{post.title}</div></Link>
      </div>)})}
    </div>
  );
}

export default Forside;
