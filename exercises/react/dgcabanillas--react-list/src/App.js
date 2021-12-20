import React, { useEffect, useState } from 'react';
import { CssBaseline } from '@mui/material';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import './App.css';

const App = () => {
  const [users, setUsers] = useState([]);
  const [posts, setPosts] = useState(null);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => setUsers(users))
  }, []);

  const loadPostsWithComments = ( posts ) => {
    const postsIds = posts.reduce((ids, post, index) => {
      ids = ids + ( index === 0 ? '?' : '&') + 'postId=' + post.id;
      return ids;
    }, '')
    fetch('https://jsonplaceholder.typicode.com/comments' + postsIds)
      .then(response => response.json())
      .then(
        comments => {
          posts.forEach((post) => {
            post.comments = comments.filter(comment => comment.postId === post.id)
          })
          console.log( posts );
          setPosts( posts );
        }
      )
  }

  const selectUser = ( userId ) => {  
    setPosts(null);
    fetch('https://jsonplaceholder.typicode.com/posts?userId=' + userId)
      .then(response => response.json())
      .then(posts => { loadPostsWithComments(posts) })
  }

  return (
    <div style={{ display: 'flex' }}>
      <CssBaseline />
      <Header />
      <Sidebar users={users} selectUser={selectUser}/>
    </div>
  );
}

export default App;
