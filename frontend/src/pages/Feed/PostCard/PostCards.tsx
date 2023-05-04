
import React, { useState, useEffect, useContext } from 'react';
import PostCard from './PostCard';
import { AuthContext } from '../../../context/AuthContext';
import axios from 'axios';

interface Props {
  comid: string;
}
function PostCards({ comid }: Props) {

  const [postIds, setPostIds] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const user = useContext(AuthContext).user;

  useEffect(() => {
    const caller = async () => {
      const params = {comid:comid}
      const headers= {Authorization: `Bearer ${user?.token}`}
      const response = await axios.get('/fetchPostsOfCommunity', {headers,params})
      const pp = response.data.map((post:any) => String(post.postid));
      setPostIds(pp)
    }
    caller()

  }, [user]);


  return (
    <div>
      {postIds.map(postId => (
        <PostCard key={postId} postid={postId} />
      ))}
    </div>
  );
}

export default PostCards;
