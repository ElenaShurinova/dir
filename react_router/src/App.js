import React from 'react'
import { Link, NavLink, Route, Routes } from 'react-router'
import Home from './pages/home/Home'
import About from './pages/about/About'
import Posts from './pages/posts/Posts'
import Layout from './pages/Layout'
const App = () => {
  return (
    <>
        <Routes>
            <Route path='/' element={<Layout />}>
                <Route index element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/posts' element={<Posts />} />
                <Route path='*' element={<h1> Not Found </h1>} />
             </Route>
        </Routes>
    </>
  )
}
export default App
