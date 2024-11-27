import {useState} from 'react'
import './App.css';
import {postsData} from './data/postsData'
import PostContainer from './components/postContainer/PostContainer';
import PostItem from './components/postItem/PostItem';

function App() {

  const [posts, setPost]= useState(postsData);
  console.log(posts);
  return (
    <div >
      <PostContainer posts={posts}/>
      <PostItem/>
    </div>
  );
}

export default App;
