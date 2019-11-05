import React, { useState, useEffect } from 'react';
import { client } from './sanity.js';

function Forside() {
  const query =
    '*[_type == $type]';

  const [posts, setPosts] = useState([]);

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

    fetchPosts();
  }, []);

  console.log(posts);

  return (
    <div className="grid-container">
      <div>Test</div>
      <div>Yo</div>
    </div>
  );
}

export default Forside;
