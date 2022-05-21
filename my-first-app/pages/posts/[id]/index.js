import Link from 'next/link'
import React from 'react'

const post = ({ post }) => {
  console.log(post)
  return (
    <>
      <h2>
        {post.title}
      </h2>
      <p>{post.body}</p>
      <Link href={`/posts/`}> Go back</Link>
    </>
  )
}

export const getServerSideProps = async (context) => {
  console.log(context)

  try {
    const data = await fetch(`https://jsonplaceholder.typicode.com/posts/${context.params.id}`);
    const post = await data.json();
    return {
      props: { post }, // will be passed to the page component as props
    }
  } catch (error) {
    return {
      props: { error: 'Ups' }, // will be passed to the page component as props
    }
  }


}

export default post