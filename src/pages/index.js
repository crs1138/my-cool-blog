import * as React from "react"
import { Link } from 'gatsby';

// markup
const IndexPage = () => {
  return (
    <main>
      <title>Home Page</title>
      <nav>
        Home |&nbsp;
        <Link to='/about'>
          About
        </Link>
      </nav>
      <h1>
        Congratulations
        <br />
        <span >— you just made a Gatsby site! </span>
        <span role="img" aria-label="Party popper emojis">
          🎉🎉🎉
        </span>
      </h1>
      <p>Lorem ipsum… this is a paragraph</p>
    </main>
  )
}

export default IndexPage
