import { render, screen } from '@testing-library/react'
import ItemCard from '@/components/ItemCard'

const ITEM_DATA = {
  postId: 1,
  name: 'Bulbasaur',
  height: 100,
  weight: 100,
  types: [{ type: { name: 'grass' } }],
}

describe('ItemCard', () => {
  it('renders a heading', () => {
    render(<ItemCard {...ITEM_DATA} />)

    const heading = screen.getByRole('heading', {
      name: `#${ITEM_DATA.postId}: ${ITEM_DATA.name}`,
    })

    expect(heading).toBeInTheDocument()
  })

  it('renders correctly', () => {
    const { container } = render(<ItemCard {...ITEM_DATA} />)
    expect(container).toMatchSnapshot()
  })
})
