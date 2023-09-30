# Pokedex App

The objective is to build a simple Pokedex App using [PokeApi](https://pokeapi.co/) as a backend.

## UI Requirements

*The user should be able to:*
- See an overview of the first 30 Pokemon when entering the page
- Use a "Load more" button at the bottom of the overview to load more items
- Select a Pokemon and see additional data on a separate detail route
- Go back via a navigation button
- Navigate to the about page, to read additional information about the app

## Technical Requirements

*The Pokedex app should:*
- Be an SPA (no SSR/SSG requirement)
- Use Yarn as a package manager
- Use [Bulma](https://bulma.io/) or for component styling
- Use Github Actions for for CI/CD
- Use Playwright for testing
- Use Jamstack hosting (Vercel/Netlify) for hosting

## Thoughts/Rebuttal

I will build the apps using the three frameworks in the following order (going from most to least familiarity):
1. Next.js
2. Nuxt
3. SvelteKit

Since I will spend some more time in the first run with style and asset considerations, this should even out nicely once I get to SvelteKit.

### Next.js

The latest version of Next.js causes `Parsing error: Cannot find module 'next/babel'` when importing modules out of the box - can be fixed easily, however not very reassuring.

Routing and the usage of the `Link` component still feels a bit strange, mainly due to passing an additional `<a>` element to the component for it to work. Just the work required to make setup an [active state on a navigation link](https://github.com/vercel/next.js/tree/canary/examples/active-class-name) feels disproportionate.

*Styling:* None of the built in or 3rd party libraries (CSS-Modules, Next.js: Styled JSX, Styled-Components, etc.) feel particulartly appealing. Using styles in the React ecosystem always feels like an akward workaround for something that the Angular-CLI or Ember-CLI solved perfectly, namely auto resolving stylesheets on a component level.

In this run, I spent some time adding and removing different CSS or component libraries, until I found a setup that I liked. Next.js didn't always play nice with that.

Although quite feature rich in total, Next.js feels surprisingly rugged to me, considering it's one, if not the most used framework used in conjunction with React. I must say, the [Next.js examples folder](https://github.com/vercel/next.js/tree/canary/examples/with-jest) is a joy to peruse, very helpful.

Time to implement: ~ 6.5h

Breakdown:
- App Setup and UI: 4.5h
- Testing Setup: 1.5h
- CI/CD: 0.5h

### Nuxt.js

Initial setup is quite straightforward. I like the fact the asset import can be managed centrally through `nuxt.config.js` instead of importing them form different components as with React/Next.js. 

There's no clean implementation of the equivalent to `React.Fragment` (`<></>`), which seems odd since you're forced to use empty div-elements instead. (Some workarounds exist)[https://stackoverflow.com/questions/57901393/is-there-anything-like-react-fragment-in-vuejs-nuxtjs] but I would expect such a popular framework to feature this out of the box.

The data handling and "controller"-type mechanism of defining an object with predefined methods seem quite rigid and rusprisingly cumbersome.

I'm also not so fond of the templating syntax. Defining and passing a destructured object to a child component feels kind of complicated. The variable/handler syntax reminds me of the worst parts of AngularJS or Ember.js (e.g. `<my-component v-bind="someVar" :my-title="myTitle" @click="loadMore"`)

** Update: ** Yeah, the syntax is definitely no fun. Who should know intuitively when to use `<input @input="$emit('updateGrid')" />` over `<input @input="updateGrid" />`. There's no clear distinction between variables and strings syntactically.

Testing Setup: I faced significant issues implementing the basic test case for the ItemCard component. `@vue/test-utils` used instead of `@testing-library/react` seems to be buggy than the ladder. Setting the (props as described in the docs)[https://test-utils.vuejs.org/guide/#what-is-vue-test-utils], rendered the component without props:
```const wrapper = mount(ItemCard, {
    props: {
      postId: 1,
      name: 'Bulbasaur',
    },
  })```
After using a workaround by using an additional `setProps()` on the wrapper component, the result still differed from the expected value due to issues with line breaks. This process seems unnecessarily cumbersome.

** Update: ** The first mentioned example in the docs was false, (this is the correct way)[https://v1.test-utils.vuejs.org/api/options.html#propsdata]

After more issues with `@vue/test-utils` (`wrapper.text()` returns white spaces as (a unicode char)[https://unicodeplus.com/U+00A0], which makes string matching much more complicated), I was able to successfully implement playwright with only slight adjustments to the test cases. I needed to add an extra second wait time, before the grid search and navigation was fully functional. This seems to be a performance issue, but since we're running Playwright with a dev server, I think it can be overlooked.

Overall the experience was less pleasent than using Next.js. Even though Nuxt seems more polished at first, with lots of plugins and CLI based setup, when push comes to shove, the smaller community size leads to plugins and libraries to be less well maintained compared to equivalents form the React ecosystem. Data handling felt quite messy, unnecessarily cumbersome. But the implementing the same test cases with Nuxt really gave me a reason to stay away. This part really does not feel like a production ready solution.

Time to implement: ~ 6h

Breakdown:
- App Setup and UI: 4h
- Testing Setup: 2h
- CI/CD: 0h

### SveleKit 

I highly anticipate the process here, as this framework gets a decent amount of hype, but I've only worked with it rudimentarily.

I'm having trouble figuring out where and how to import my global stylesheet. Still no clue after 30m+ of searching. They changed the bundler to Vite a couple of months back, changind the workflow entirely. Seems like the proper way is to import it via the top level `+layout.svelte` file. Feels a bit odd to me.

After setting up the data fetching (according to the docs)[https://kit.svelte.dev/docs/routing#page-page-js], I realize that I really dislike this `/myroute/+layout.svelte`, `/myroute/+page.svelte`, `/myroute/+page.js` syntax. I have less than a dozen files and I already feel confused looking at this. 

Same goes for the (Directives Syntax)[https://svelte.dev/docs#template-syntax-element-directives]. Similarly to my criticism of Nuxt's syntax, this feels quite confusing as well. React's data and attribute handling just feels much closer to using plain HTML and JS, which makes it more intuitive.

The way to fetch URL params is (just ridiculous)[https://kit.svelte.dev/docs/routing#page-page-svelte]: 
```
/** @type {import('./$types').PageData} */
  export let data;
```

I keep asking myself, "Who would come up with that and think it was a good idea?". 

This doesn't work btw. Still struggling to fetch my `id` param from the URL. It seems like they completely revamped the API for this, all the Stackoverflow posts dated older than ~ 6 months are useless.

More highly esotheric syntax for observing variable changes: (https://stackoverflow.com/questions/56983938/in-svelte-how-to-console-logyes-when-a-variable-changed)[https://stackoverflow.com/questions/56983938/in-svelte-how-to-console-logyes-when-a-variable-changed]

Setting up tests was super tough, (This post helped)[https://www.roboleary.net/2021/11/18/svelte-app-testing-jest.html] but still required some adjustments.

Time to implement: ~ 6.5h

Breakdown:
- App Setup and UI: 4.5h
- Testing Setup: 2h
- CI/CD: 0h

### Astro.js 

I had a pretty good time until I tried to implement dynamic routes. Astro's conventions are great for converting static content, like Markdown into HTML + Styles. However it seems to me like just a glorified Blogging engine.

At first, the Markdown flavor of the components and pages makes it feel like everything is just super easy to setup with one line of code. Once you try to do something a bit more complicated, you'll most likely need to write your components in React's JSX/TSX syntax anyway, and you're back to writing a React app with a slightly less sophisticated API for providing data to SSR/SSG rendered components.

See the API: https://docs.astro.build/en/core-concepts/routing/#static-ssg-mode

*Correction*: I just needed to prioritize SSR over SSG, then things make more sense.

https://docs.astro.build/en/guides/server-side-rendering/#enabling-ssr-in-your-project

It seems like Astro could be in fact a more elegant replacement for Next.js or Gatsby, especially for content driven apps.

I was extremely fast here, since I could completely reuse some of the React components from the Next.js repo (I could have easily used the vue or svelte components as well).

Time to implement: ~ 2.5h

Breakdown:
- App Setup and UI: 2h
- Testing Setup: 0.5h
- CI/CD: 0h