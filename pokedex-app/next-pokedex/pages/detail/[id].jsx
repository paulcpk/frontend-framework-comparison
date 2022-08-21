function Detail({ data }) {
  console.log('data', data)

  return <p>Detail page</p>
}

export async function getServerSideProps(context) {
  const { id } = context.query

  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
  const data = await res.json()

  return { props: { data } }
}

export default Detail
