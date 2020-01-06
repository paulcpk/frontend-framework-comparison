<script context="module">
  export function preload({ params, query }) {
    return this.fetch(`https://dev.to/api/articles/${params.id}`)
      .then(r => r.json())
      .then(data => {
        return { post: data };
      });
  }
</script>

<script>
  export let post;
</script>

<svelte:head>
  <title>{post.title}</title>
</svelte:head>

<div class="row">
  <div class="col-lg-8 offset-md-2">
    <header>
      <h1 class="headline">{post.title}</h1>
    </header>
    <article class="post post-full">
		{@html post.body_html}
	</article>
  </div>
</div>
