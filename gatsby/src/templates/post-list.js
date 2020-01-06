import React from "react"

export default ({ pageContext: { posts } }) => {
  return posts.map(post => (
    <article>
      <h3>{post.title}</h3>
    </article>
  ))
}
