import AllPosts from '@/components/posts/all-posts'
import { getAllPosts } from '@/lib/posts-util'

export default function AllPostsPage({ posts }) {
  return <AllPosts posts={posts} />
}

export function getStaticProps() {
  const posts = getAllPosts()

  return {
    props: {
      posts,
    },
  }
}
