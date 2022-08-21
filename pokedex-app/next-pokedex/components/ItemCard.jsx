import Link from 'next/link'

function ItemCard({ postId, name }) {
  return (
    <Link
      href={{
        pathname: '/detail/[id]',
        query: { id: postId },
      }}
    >
      <a>
        <div className="tile">
          <figure className="image">
            <img
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${postId}.png`}
              alt={name}
            />
          </figure>
          <div className="content">
            <h3><span className="prefix">#{postId}:&nbsp;</span>{name}</h3>
          </div>
        </div>
      </a>
    </Link>
  )
}

export default ItemCard
