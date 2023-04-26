import React from 'react';
import PostCard from './PostCard';

function PostCards() {
  return (
    <div>
      <PostCard postid="12345" />
      <PostCard postid="12345"/>
      <PostCard postid="12345"/>
      {/* Add as many PostCard components as you want */}
    </div>
  );
}

export default PostCards;
