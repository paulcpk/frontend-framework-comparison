import Head from 'next/head'
import Link from 'next/link'
import ItemCard from '../../components/ItemCard'

function Detail({ data }) {
  return (
    <>
      <Head>
        <title>Pokedex App - {data.name}</title>
      </Head>
      <Link href="/">
        <a className="button is-ghost mb-4">&lsaquo;&nbsp;Back</a>
      </Link>
      <ItemCard postId={data.id} {...data} />
    </>
  )
}

export async function getServerSideProps(context) {
  const { id } = context.query

  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
  const data = await res.json()

  return { props: { data } }
}

export default Detail
