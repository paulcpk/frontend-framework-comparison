<script context="module">
  export function preload({ params, query }) {
    return this.fetch(`https://dev.to/api/articles`)
      .then(r => r.json())
      .then(posts => {
        return { posts };
      });
  }
</script>

<script>
  export let posts;
</script>

<svelte:head>
  <title>Sapper example blog</title>
</svelte:head>

<div class="row">
  <div class="col-lg-8 offset-md-2">
    <header>
      <h1 class="headline">Sapper example blog</h1>
    </header>
    <main class="post-container">
      {#each posts as post}
        <article class="post post-list-item">
          <h3>{post.title}</h3>
          <a rel="prefetch" href="post/{post.id}" class="btn btn-secondary">Read more</a>
        </article>
      {/each}
    </main>
  </div>
</div>
