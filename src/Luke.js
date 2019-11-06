import React, { useState, useEffect } from 'react';
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

function Luke( { nr, posts }) {

  const post = posts.find(post => post.slug.current == nr);

  if (!post) return <h3>Denne luken finnes ikke.</h3>;

  return (
    <div className="luke-side">
    <h1>Luke {post.title}</h1>
      <BlockContent
        blocks={post.body}
        serializers={serializers}
        imageOptions={{w: 500}}
        projectId="jraodywc"
        dataset="production"
      />
    </div>
);
}

export default Luke;
