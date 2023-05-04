import React, { useState, useEffect } from 'react';
import PostCard from './PostCard';

function PostCards() {
  
  const [postIds, setPostIds] = useState<string[]>(['adsf','asdfasdf','asdfsad']);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchPostIds = async () => {
      setLoading(true);
      const response = await fetch('backend-url');
      const data = await response.json();
      setPostIds(prevPostIds => [...prevPostIds, ...data]);
      setLoading(false);
    };
    fetchPostIds();
  }, []);

  const fetchMorePostIds = async () => {
    setLoading(true);
    const response = await fetch('backend-url');
    const data = await response.json();
    setPostIds(prevPostIds => [...prevPostIds, ...data]);
    setLoading(false);
  };

  return (
    <div>
      {postIds.map(postId => (
        <PostCard key={postId} postid={postId} />
      ))}
      {loading && <div>Loading...</div>}
    </div>
  );
}

export default PostCards;
