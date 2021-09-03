import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const PostDetails = () => {
  const { id } = useParams();

  const [post, setPost] = useState([]);

  useEffect(async () => {
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/comments?postId=${id}`
    );
    setPost(response.data);
    console.log(response);
  }, [id]);

  return post.map((el) => {
    return (
      <div key={el.id}>
        <div>
          <h5>{el.name}</h5>
          <p>{el.email}</p>
          <p>{el.body}</p>
        </div>
      </div>
    );
  });
};

export default PostDetails;
