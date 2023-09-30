function ItemCard({ postId, name, height, weight, types }) {
  return (
    <div className="tile">
      <figure className="image">
        <img
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${postId}.png`}
          alt={name}
        />
      </figure>
      <div className="content">
        <h3>
          <span className="prefix">#{postId}:&nbsp;</span>
          {name}
        </h3>

        {height && weight && types && (
          <table className="mb-4 mt-4">
            <tbody>
              <tr>
                <th>Height:</th>
                <td>{height}</td>
              </tr>
              <tr>
                <th>Weight:</th>
                <td>{weight}</td>
              </tr>
              <tr>
                <th>Types:</th>
                <td>{types.map((type) => type.type.name).join(', ')}</td>
              </tr>
            </tbody>
          </table>
        )}
      </div>
    </div>
  )
}

export default ItemCard
