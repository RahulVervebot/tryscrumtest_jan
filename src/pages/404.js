import React, {useEffect} from "react"
import { graphql, navigate } from "gatsby"
import Layout from "../components/Layout"
import Seo from "../components/Seo"

const NotFoundPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title
useEffect(() =>{
const timer = setTimeout(() =>{
navigate('/');
}, 100);
return () => clearTimeout(timer);
},[]);

  return (
    <Layout pageTitle="tryScrum | Management Consulting" metaDesc="Professional Scrum Certification - Online Agile training tryScrum" pageName="home" >
      <Seo title="404: Not Found" />
      <h1>404: Not Found</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </Layout>
  )
}

export default NotFoundPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
