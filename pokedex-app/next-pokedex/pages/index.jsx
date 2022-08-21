import Head from 'next/head'
import Grid from '../components/Grid'

function Home({ data }) {
  return (
    <>
      <Head>
        <title>Pokedex App</title>
      </Head>
      <Grid items={data.results} />
    </>
  )
}

export async function getServerSideProps() {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=60`)
  const data = await res.json()

  return { props: { data } }
}

export default Home
