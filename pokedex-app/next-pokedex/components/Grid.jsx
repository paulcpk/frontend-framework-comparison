import ItemCard from './ItemCard'

function getPostIdFromUrl(url) {
  return url.split('/').reverse()[1]
}

function Grid({ items }) {
  return (
    <div className="grid-container">
      {items.map((item) => (
        <ItemCard postId={getPostIdFromUrl(item.url)} name={item.name} />
      ))}
    </div>
  )
}

export default Grid
