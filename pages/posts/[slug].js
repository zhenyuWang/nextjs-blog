import PostContent from '@/components/posts/post-detail/post-content'
import { getPostData, getPostsFiles } from '@/lib/posts-util'

export default function PostDetailPage({ postData }) {
  return <PostContent post={postData} />
  // return <h1>post detail page</h1>
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
