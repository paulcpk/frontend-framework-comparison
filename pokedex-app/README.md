# Pokedex App

The objective is to build a simple Pokedex App using [PokeApi](https://pokeapi.co/) as a backend.

## UI Requirements

*The user should be able to:*
- See an overview of the first 30 Pokemon when entering the page
- Endless scroll with infinite loading
- Select a Pokemon and see additional data on a separate detail route
- Go back via the navigation
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

### Next.js

The latest version of Next.js causes `Parsing error: Cannot find module 'next/babel'` when importing modules out of the box - can be fixed easily, however not very reassuring

Routing and the usage of the `Link` component still feels a bit strange, mainly due to passing an additional `<a>` element to the component for it to work. Just the work required to make setup an [active state on a navigation link](https://github.com/vercel/next.js/tree/canary/examples/active-class-name) feels disproportionate.

Styling: None of the built in or 3rd party libraries (CSS-Modules, Next.js: Styled JSX, Styled-Components, etc.) feel particulartly appealing. Using styles in the React ecosystem always feels like an akward workaround for something that the Angular-CLI or Ember-CLI solved perfectly, namely auto resolving stylesheets on a component level.

Time to implement: ~ 0h

### Nuxt.js

Time to implement: ~ 0h

### SveleKit 

Time to implement: ~ 0h
