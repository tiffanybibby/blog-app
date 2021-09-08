import './Posts.css'
import Layout from '../../components/Layout/Layout'
import PostCards from '../../components/PostCards/PostCards'

const Posts = () => {

  return (
    <Layout>
      <div className='posts'>
            <PostCards
            />
      </div>
    </Layout>
  )
}

export default Posts