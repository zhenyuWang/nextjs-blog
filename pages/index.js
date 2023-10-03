import Head from 'next/head'
import Hero from '@/components/home-page/hero'
import FeaturedPosts from '@/components/home-page/featured-posts'
import { getFeaturedPosts } from '@/lib/posts-util'

export default function HomePage({ featuredPosts }) {
  return (
    <>
      <Head>
        <title>Running Snail&apos;s Blog</title>
        <meta name='description' content='I post about programming and web development.' />
      </Head>
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
