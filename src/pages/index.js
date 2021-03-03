import * as React from "react"
import Layout from '../components/Layout/Layout';
import { StaticImage } from 'gatsby-plugin-image';
// markup
const IndexPage = () => {
  return (
    <Layout pageTitle='Home page'>
      <p>This is my frontpage content.</p>
      <StaticImage
        src='https://pbs.twimg.com/media/Evfau5TWYAgqTB-?format=jpg&name=900x900'
        alt='Honza at Gatsby Conf 2021'
        layout='fullWidth'
      />
    </Layout>
  )
}

export default IndexPage
