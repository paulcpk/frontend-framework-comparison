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

### Nuxt.j

Implementation was quick and easy. Everything that I needed (and more) was there and easy to find. Very mature project

### Gatsby 

Got lost in the super complicated data layer and docs, postponed it for now. Besides that, seems quite mature, just a bit overwhelming.

### Next.js

Everything felt surprisingly hacky. At every step of the way I ran into problems. You need extra packages, config for almost everything. I spent most of my time figuring out how to retrieve params from the url (which is kind of ridiculous). Also the CLI isn't quite polished.


### Sapper
