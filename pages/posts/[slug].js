import Head from 'next/head'
import PostContent from '@/components/posts/post-detail/post-content'
import { getPostData, getPostsFiles } from '@/lib/posts-util'

export default function PostDetailPage({ postData }) {
  return (
    <>
      <Head>
        <title>{postData.title}</title>
        <meta name='description' content={postData.excerpt} />
      </Head>
      <PostContent post={postData} />
    </>
  )
}

export function getStaticProps({ params }) {
  const { slug } = params
  const postData = getPostData(slug)

  return {
    props: {
      postData,
    },
    revalidate: 600,
  }
}

export function getStaticPaths() {
  const filenames = getPostsFiles()
  const paths = filenames.map((filename) => {
    return {
      params: {
        slug: filename.replace('.md', ''),
      },
    }
  })

  return {
    paths,
    fallback: false,
    // fallback: true, | blocking
  }
}
