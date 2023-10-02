import Hero from '@/components/home-page/hero'
import FeaturedPosts from '@/components/home-page/featured-posts'
import { getFeaturedPosts } from '@/lib/posts-util'

export default function HomePage({ featuredPosts }) {
  return (
    <>
      <Hero />
      <FeaturedPosts posts={featuredPosts} />
    </>
  )
}

export function getStaticProps() {
  const featuredPosts = getFeaturedPosts()

  return {
    props: {
      featuredPosts,
      // revalidate: 60,
    },
  }
}
