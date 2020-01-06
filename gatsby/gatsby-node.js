const fetch = require(`node-fetch`)
exports.sourceNodes = async ({
  actions: { createNode },
  createContentDigest,
}) => {
  const articles_html_url = `https://dev.to/api/articles`
  const articles_result = await fetch(articles_html_url)
  const articles_resultData = await articles_result.json()

  createNode({
    posts: articles_resultData,
    url: articles_html_url,
    // required fields
    id: `articles`,
    parent: null,
    children: [],
    internal: {
      type: `Articles`,
      contentDigest: createContentDigest(articles_resultData),
    },
  })
}

exports.createPages = async ({ actions: { createPage } }) => {
  const articles_html_url = `https://dev.to/api/articles`
  const articles_result = await fetch(articles_html_url)

  createPage({
    path: `/`,
    component: require.resolve("./src/templates/post-list.js"),
    context: { posts: articles_result },
  })
  // Create a page for each Pokémon.
  articles_result.forEach(post => {
    createPage({
      path: `/post/${post.id}/`,
      component: require.resolve("./src/templates/post.js"),
      context: { post },
    })
  })
}
