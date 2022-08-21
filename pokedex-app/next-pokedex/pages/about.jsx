import Head from 'next/head'

function About() {
  return (
    <>
      <Head>
        <title>Pokedex App - About</title>
      </Head>

      <div className="content about-page">
        <h1>About</h1>
        <p>This app serves as an objective example for comparison of different web frontend frameworks (Next.js, Nuxt, SvelteKit). By developing the same (identical) app three times, one can estimate more closely the strenghts and weaknesses of a certain framework.</p>
      </div>
    </>
  )
}

export default About
