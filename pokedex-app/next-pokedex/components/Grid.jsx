import Link from 'next/link'
import { useState, useEffect } from 'react'
import ItemCard from './ItemCard'

const FETCH_LIMIT = 30

function getPostIdFromUrl(url) {
  return url.split('/').reverse()[1]
}

function Grid() {
  const [data, setData] = useState([])
  const [page, setPage] = useState(0)

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon?limit=${FETCH_LIMIT}&offset=${
          page * FETCH_LIMIT
        }`
      )
      const res = await response.json()
      setData([...data, ...res.results])
    }

    fetchData()
  }, [page])

  if (!data) {
    return <p>Loading...</p>
  }

  return (
    <>
      <div className="grid-container">
        {data.map((item) => {
          const postId = getPostIdFromUrl(item.url)
          return (
            <Link
              key={postId}
              href={{
                pathname: '/detail/[id]',
                query: { id: postId },
              }}
            >
              <a>
                <ItemCard
                  postId={getPostIdFromUrl(item.url)}
                  name={item.name}
                />
              </a>
            </Link>
          )
        })}
      </div>
      <button
        className="load-more button is-primary is-fullwidth"
        onClick={() => setPage(page + 1)}
      >
        Load More
      </button>
    </>
  )
}

export default Grid
