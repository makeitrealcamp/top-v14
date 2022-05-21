import Link from 'next/link';


const posts = ({ posts, error }) => {
  console.log(error)


  return (
    <>
      {

        posts && posts.map(({ id, title, body }) => <>
          <Link key={id} href={`/posts/${id}`} >
            <h4 className={'postTitle'}>{title} </h4>
          </Link>
          <style jsx>
            {`
        .postTitle {
          cursor: pointer;
        }
        `}
          </style>

        </>
        )
      }
      {
        error && <div>{error}!!</div>
      }

    </>
  )
}

export async function getStaticProps() {
  try {
    const data = await fetch('https://jsonplaceholder.typicode.com/posts');
    const posts = await data.json();

    return {
      props: { posts }, // will be passed to the page component as props
    }
  } catch (error) {
    console.log(error)
    return {
      props: { error: 'Ups' }, // will be passed to the page component as props
    }
  }
}


export default posts;