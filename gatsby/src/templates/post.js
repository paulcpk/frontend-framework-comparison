import React from "react"

export default ({ pageContext: { post } }) => (
  <article>
    <h3>{post.title}</h3>
  </article>
)
