# Frontend-Framework-Comparison
Comparison of modern frontend frameworks, with the DEV.to API as a backend

## Overview

The following frameworks are being compared:
- Gatsby (React)
- Next.js (React)
- Nuxt.js (Vue)
- Sapper (Svelte)

The objective is to build a simple blog with the [DEV.to API](https://docs.dev.to/api/) as a backend. 

*Every example app should:*
- Use Bootstrap for styling (just CSS, no functional components)
- Support static HTML rendering
- Display a list of posts, queried from dev.to
- Navigate to the post when clicked on a "Read more" button
- Update the page title accordingly

## Thoughts

### Nuxt.js

Implementation was quick and easy. Everything that I needed (and more) was there and easy to find. Very mature project.

UPDATE: still some issues with the statically rendered HTML, doesn't survive a refresh. Needs more investigation.

Time to implement: ~ 1h

### Gatsby 

Got lost in the super complicated data layer and docs, postponed it for now. Besides that, seems quite mature, just a bit overwhelming.

Time to implement: > 1.5h

### Next.js

Everything felt surprisingly hacky. At every step of the way I ran into problems. You need extra packages and config for almost everything. I spent most of my time figuring out how to retrieve params from the url (which is kind of ridiculous). Also the CLI is quite basic.

Time to implement: ~ 2h

### Sapper

Sapper was a breeze, it was even easier than with Nuxt.js. Everything was super organized, logical and where I expected it. Besides that, Svelte is by far the most performant technology of them all. Impressive to see this kind of quality on such an early release (0.0.1 for Sapper). However, there are a lot of open issues on Github and lacking support for commonplace technologies like AMP.

BONUS: Sapper also comes with an excellently configured service worker out of the box.

Time to implement: ~ 0.5h

## Ranking

My personal ranking:
1. Nuxt.js (Easy to use, performant and lots of packages/plugins)
2. Sapper (Clearly best developer experience and performance, but still a bit immature)
3. Gatsby (Very powerful, albeit somewhat complicated)
4. Next.js (Can be used productively, but disadvantages compared with the other contenders)
