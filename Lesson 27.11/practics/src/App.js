import {useState} from 'react'
import './App.css';
import {postsData} from './data/postsData'
import PostContainer from './components/postContainer/PostContainer';
import PostItem from './components/postItem/PostItem';

function App() {

  const [posts, setPosts]= useState(postsData);

  const deletePost = post_id => setPosts(posts.filter(el => el.id !== post_id));
  return (
    <div >
    <PostContainer posts={posts} deletePost={deletePost} />
      <PostItem/>
    </div>
  );
}

export default App;
