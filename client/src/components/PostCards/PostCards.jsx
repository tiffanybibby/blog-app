import { useState, useEffect } from 'react'
import './PostCards.css'
import Post from '../Post/Post'
import { getPosts } from '../../services/posts'

const PostCard = () => {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    const fetchPosts = async () => {
      const allPosts = await getPosts()
      setPosts(allPosts)
    }
    fetchPosts()
  }, [])

  const CARDS = posts

    .map((post, index) =>
      index < 4 ? (
        <Post
          _id={post._id}
          title={post.title}
          imgURL={post.imgURL}
          content={post.content}
          author={post.author}
          key={index}
        />
      ) : null
    )

  return (
    <div className='post-cards'>
      <div className='latest'>Blog Posts</div>
      <div className='cards'>{CARDS}</div>
    </div>
  )
}

export default PostCard

