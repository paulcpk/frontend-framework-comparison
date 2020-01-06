import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import { graphql, useStaticQuery } from "gatsby"

const IndexPage = () => {
  const postData = useStaticQuery(graphql`
    query {
      articles {
        posts {
          readable_publish_date
          id
          title
        }
      }
    }
  `)
  console.log('postData', postData);

  // const PostList = postData.map(post => (
  //   <article>
  //     <h3>{post.title}</h3>
  //     <Link to={`/post/${post.id}`}></Link>
  //   </article>
  // ))

  return (
    <Layout>
      <SEO title="Gatsby example blog" />
    </Layout>
  )
}

export default IndexPage
