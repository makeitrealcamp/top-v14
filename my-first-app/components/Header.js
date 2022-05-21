
const Header = () => {
  return (
    <>
      <h1 className='title' > header</h1>
      <style jsx>
        {
          `
          h1 {
            color: red;
            text-transform: uppercase;
          }
          .title{
            text-decoration: underline;
          }          
          `
        }
      </style>
    </>
  )
}

export default Header