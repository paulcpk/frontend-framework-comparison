# Frontend-Framework-Comparison

_Updated: You can find the previous examples on the `legacy` branch_

A extensive comparison of modern frontend frameworks, by building the same App three times using the same tools an libraries.

## Overview

The following frameworks are being compared:

- [Next.js (React)](https://nextjs.org/)
- [Nuxt (Vue.js)](https://nuxt.com/)
- [SvelteKit (Svelte)](https://kit.svelte.dev/)
- [Astro](https://astro.build/)

### Pokedex App

The objective is to build a simple Pokedex App using [PokeApi](https://pokeapi.co/) as a backend.

[Read more](https://github.com/paulcpk/frontend-framework-comparison/blob/master/pokedex-app)

Here the respective repos:

- [Next.js (React)](https://github.com/paulcpk/frontend-framework-comparison/tree/master/pokedex-app/next-pokedex)
- [Nuxt (Vue.js)](https://github.com/paulcpk/frontend-framework-comparison/tree/master/pokedex-app/nuxt-pokedex)
- [SvelteKit (Svelte)](https://github.com/paulcpk/frontend-framework-comparison/tree/master/pokedex-app/svelte-pokedex)
- [Astro](https://github.com/paulcpk/frontend-framework-comparison/tree/master/pokedex-app/astro-pokedex)

## Total Ranking

My personal ranking:

1. Nuxt
2. Astro
3. Next.js
4. SvelteKit

### Commentary

Nuxt was the clear winner in my experience. It hat overall better structure, development features and ease of use. I'm amazed that a small team from France did a better job at building an open source framework with a polished build tool than the highly capitalized company Vercel behind Next.js.

I liked Astro due to it's simplicity, it feels like a JAMSTACK tool for React. Kind of what Gatsby was supposed to be, only much better developer experience. There are however certain use cases where I'd stay away, particularly when it comes to executing CRUD operation on complex data structures. It's great for read-only (publishing).

Next.js for me was somewhere in the middle. I've worked with Next.js many times before, within a three year period, the framework changed multiple times beyond recognition. I feel like its' core developers are more focussed on releasing new features, than evaluating what actually works and doesn't and changing things accordingly. You can build apps with Next, I don't like it however, it's much more cumbersome than it should be.

Svelte/SvelteKit comes last for me. This is less a criticism of the framework itself, more of the lack of community an features. The developer experience is quite good, but having only approximately 1% of stackoverflow posts, available developers and plugins as compared to the React ecosystem, make it a tough sell. I would refrain from using this on production apps, that actually need to be maintained for many years to come.