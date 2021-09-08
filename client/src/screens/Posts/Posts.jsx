import { useState, useEffect } from 'react'
import './Posts.css'
import Post from '../../components/Post/Post'
import Layout from '../../components/Layout/Layout'
import { getPosts } from '../../services/posts'

const Posts = () => {
  const [posts, setPosts] = useState([])

  useEffect(() => {
      const fetchPosts = async () => {
      const allPosts = await getPosts()
      setPosts(allPosts)
    }
    fetchPosts()
  }, [])

  return (
    <Layout>
      <div className='posts'>
      {posts.map((post, index) => {
          return (
            <Post
            _id={post._id}
            title={post.title}
            imgURL={post.imgURL}
            content={post.content}
            author={post.author}
            key={index}
            />
            )
          })}
      </div>
    </Layout>
  )
}

export default Posts