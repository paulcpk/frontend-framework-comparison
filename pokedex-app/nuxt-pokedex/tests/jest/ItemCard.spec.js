import { mount } from '@vue/test-utils'
import ItemCard from '@/components/ItemCard'

const ITEM_DATA = {
  postId: 1,
  name: 'Bulbasaur',
  height: 100,
  weight: 100,
  types: [{ type: { name: 'grass' } }],
}

describe('ItemCard', () => {
  test('renders a heading', () => {
    const wrapper = mount(ItemCard, {
      propsData: {
        ...ITEM_DATA,
      },
    })

    // wrapper.text() returns white spaces as &#x00A0; unicode char
    // changing the formatting (line breaks) within ItemCard breaks this test
    expect(wrapper.find('h3').text().replace(/\u00A0/, " ")).toBe(
      `#${ITEM_DATA.postId}: ${ITEM_DATA.name}`
    )
  })
  test('renders correctly', () => {
    const wrapper = mount(ItemCard)
    expect(wrapper.element).toMatchSnapshot()
  })
})
