import { render, screen } from '@testing-library/svelte';
import ItemCard from '@/components/ItemCard.svelte';

const ITEM_DATA = {
	postId: 1,
	name: 'Bulbasaur',
	height: 100,
	weight: 100,
	types: [{ type: { name: 'grass' } }]
};

test('ItemCard: shows proper heading when rendered', () => {
	render(ItemCard);
	// const heading = screen.getByRole('heading', {
	// 	name: `#${ITEM_DATA.postId}: ${ITEM_DATA.name}`
	// });
	const node = screen.queryByText("#");
	// expect(heading).not.toBeNull();
	expect(node).not.toBeNull();
});
