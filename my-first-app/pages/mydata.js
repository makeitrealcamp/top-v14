import React from 'react'

const myData = ({ posts }) => {
  console.log(posts)
  return (
    <div>myData</div>
  )
}

export async function getStaticProps() {
  try {
    const data = await fetch('http://localhost:3000/api/hello');
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


export default myData