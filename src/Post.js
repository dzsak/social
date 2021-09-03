import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [users, setUsers] = useState([]);
  const [comments, setComments] = useState([]);

  const getPosts = async () => {
    const response = await axios.get(
      'https://jsonplaceholder.typicode.com/posts'
    );
    console.log(response);
    setPosts(response.data);
  };

  const getUsers = async () => {
    const response = await axios.get(
      'https://jsonplaceholder.typicode.com/users'
    );
    console.log(response);
    setUsers(response.data);
  };

  const getComments = async () => {
    const response = await axios.get(
      'https://jsonplaceholder.typicode.com/comments'
    );
    console.log(response);
    setComments(response.data);
  };

  useEffect(() => {
    getPosts();
  }, []);

  useEffect(() => {
    getUsers();
  }, []);

  useEffect(() => {
    getComments();
  }, []);

  const array = [];
  const newComments = [];

  const matchComments = (id) => {
    const newComments = comments.filter((el) => el.postId === id);
    console.log(newComments);
  };

  const matchId = (userId) => {
    for (let i = 0; i < users.length; i++) {
      if (users[i].id === userId) {
        array[0] = users[i].name;
        array[1] = users[i].username;
        array[2] = users[i].email;
      }
    }
  };

  return posts.map((post) => {
    return (
      <div className="card" key={post.id}>
        <div className="card-header">
          <p>{matchId(post.userId)}</p>
          <ul>
            {array.map((el, index) => {
              return <li key={index}>{el}</li>;
            })}
          </ul>
        </div>
        <div className="card-body">
          <blockquote className="blockquote mb-0">
            <Link to={`/posts/${post.id}`}>
              <p
                // onClick={() => matchComments(post.id)}
                style={{ fontWeight: 'bold', cursor: 'pointer' }}
              >
                {/* {newComments.map((el, index) => {
                return <li key={index}>{el}</li>;
              })} */}
                {post.title}
              </p>
            </Link>

            <p>{post.body}</p>
          </blockquote>
        </div>
      </div>
    );
  });
};

export default Posts;
