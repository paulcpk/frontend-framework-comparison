import { mount } from '@vue/test-utils'
import ItemCard from '@/components/ItemCard'

const ITEM_DATA = {
  postId: 1,
  name: 'Bulbasaur',
  height: 100,
  weight: 100,
  types: [{ type: { name: 'grass' } }],
}

test('ItemCard: renders a heading', () => {
  const wrapper = mount(ItemCard, {
    propsData: {
      postId: 1,
      name: 'Bulbasaur',
    },
  })

  // sorry excuse for an assertion due to being unable
  // to properly extract a cleam string via `wrapper.get('h3').text()`
  // I blame the library (@vue/test-utils)
  expect(wrapper.get('h3').html()).toBe(
    `<h3><span class="prefix">#${ITEM_DATA.postId}:&nbsp;</span>
  ${ITEM_DATA.name}
</h3>`
  )
})

describe('ItemCard', () => {
  test('renders correctly', () => {
    const wrapper = mount(ItemCard)
    expect(wrapper.element).toMatchSnapshot()
  })
})
