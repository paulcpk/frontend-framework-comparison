import ItemCard from './ItemCard'

function Grid({ items }) {
  return (
    <div className="grid-container">
      {items.map((item) => (
        <ItemCard {...item} />
      ))}
    </div>
  )
}

export default Grid
