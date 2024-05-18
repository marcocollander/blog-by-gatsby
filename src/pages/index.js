import * as React from "react"
import Layout from "../components/layout";
import { StaticImage } from "gatsby-plugin-image";
import Seo from '../components/seo'

const IndexPage = () => {
  return (
    <Layout pageTitle="Blog Marka Raubuć">
      <StaticImage
        src='../images/mountain.jpg'
        alt='Zdjęcie autorstwa Sagui Andrea z Pexels'
      />
    </Layout>
  )
}


export const Head = () => <Seo title="Strona główna" />

export default IndexPage

