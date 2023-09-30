import PostItem from './post-item'
import classes from './posts-grid.module.css'

export default function PostsGrid({ posts }) {
  return (
    <ul>
      {posts.map((post, index) => (
        <PostItem key={index} />
      ))}
    </ul>
  )
}
