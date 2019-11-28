import React, { useState, useEffect } from 'react';
import imageUrlBuilder from '@sanity/image-url';
import { client } from './sanity';
const BlockContent = require('@sanity/block-content-to-react');

const serializers = {
  types: {
    code: props => (
      <pre data-language={props.node.language}>
        <code>{props.node.code}</code>
      </pre>
    )
  }
};

function About( { }) {
  const query = `*[_type == $type][0]`;

  const [about, setAbout] = useState({});

  useEffect(() => {
    const fetchAbout = () => {
      client
        .fetch(query, {
          type: 'about',
        })
        .then((res) => {
          setAbout(res);
        })
        .catch((err) => {
          console.log('err', err);
          console.error('Oh no, error occured: ', err);
        });
    };

    fetchAbout();
  }, []);

  console.log("about");
  console.log(about);

  return (
    <div className="about">
      <h1>{about.header}</h1>
      <div className="about-body">
        <BlockContent
          blocks={about.body}
          serializers={serializers}
          imageOptions={{w: 500}}
          projectId="jraodywc"
          dataset="production"
        />
      </div>
    </div>
  );
}

export default About;
