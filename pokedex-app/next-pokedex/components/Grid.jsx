import Link from 'next/link'
import { useState, useEffect } from 'react'
import ItemCard from './ItemCard'

const FETCH_LIMIT = 30

function getPostIdFromUrl(url) {
  return url.split('/').reverse()[1]
}

function Grid() {
  const [data, setData] = useState([])
  const [displayData, setDisplayData] = useState([])
  const [searchValue, setSearchValue] = useState('')
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

  useEffect(() => {
    const filteredCollection = data.filter((item) =>
      item.name.includes(searchValue)
    )
    setDisplayData(filteredCollection)
  }, [data, searchValue])

  if (!data) {
    return <p>Loading...</p>
  }

  return (
    <div className="grid-container">
      <div className="grid-search">
        <input
          id="search-input"
          className="input is-medium"
          type="text"
          placeholder="Search"
          onChange={(e) => setSearchValue(e.target.value)}
        />
      </div>
      <div className="grid-wrapper">
        {displayData.map((item) => {
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
                  postId={postId}
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
    </div>
  )
}

export default Grid
