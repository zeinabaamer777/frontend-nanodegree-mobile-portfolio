# Website Performance Optimization portfolio project
This is a project made for `Udacity Front-end Nanodegree Program` about optimizing website speed.

**LIVE LINK:** https://basselahmed.github.io/frontend-nanodegree-mobile-portfolio/dist/

## Table of contents
- Installation
- `index.html` optimizations.
- `main.js` optimizations.
- Ideas.

## Installation
- Install npm
- Install gulp
- Download this repo && cd into it
- run `npm install`
- run `gulp`
- open `dist/index.html` via any browser

## index.html
- First I **compressed** all resources this file requests.
- minified all `css` and `js` files.
- inlined `css` so that I can overcome `render-blocking` issue.
- removed the request for google fonts and used a snippet found online for **async** loading google fonts.
- made all `scripts` load **async**.
- replaced _Cameron_ with my name xDDD.

## main.js
- removed `document.body.scrollTop` from inside the loop and put it just before so that I overcome FSL problem.
- declared `phase` variable oustide the loop so it doesn't get declared everytime saving some time.
- changed `changePizzaSizes` alot deleting the call for `determineDx` and determining the size and calculating width percentage directly inside `changePizzaSizes`.

## Ideas
- If you have any ideas about optimizing this even more feel free to contact me anytime at [hi@basselahmed.com](mailto:hi@basselahmed.com)
