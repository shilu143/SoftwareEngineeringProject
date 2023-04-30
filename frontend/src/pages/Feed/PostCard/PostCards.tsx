import React, { useState, useEffect } from 'react';
import PostCard from './PostCard';

function PostCards() {
  
  const [postIds, setPostIds] = useState<string[]>(['adsf','asdfasdf','asdfsad']);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Add event listener to listen for scroll event
    window.addEventListener('scroll', handleScroll);

    // Remove event listener when component is unmounted
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Fetch new postIds from the backend
    const fetchPostIds = async () => {
      setLoading(true);
      const response = await fetch('backend-url');
      const data = await response.json();
      setPostIds(prevPostIds => [...prevPostIds, ...data]); // Append new postIds to the existing postIds
      setLoading(false);
    };
    fetchPostIds();
  }, []);

  const handleScroll = () => {
    // Check if user has reached the bottom of the page
    const bottom =
      Math.ceil(window.innerHeight + window.scrollY) >= document.documentElement.scrollHeight;

    if (bottom && !loading) {
      fetchMorePostIds();
    }
  };

  const fetchMorePostIds = async () => {
    // Fetch new postIds from the backend
    setLoading(true);
    const response = await fetch('backend-url');
    const data = await response.json();
    setPostIds(prevPostIds => [...prevPostIds, ...data]); // Append new postIds to the existing postIds
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
