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
- Minified all `css` and `js` files.
- Inlined `css` so that I can overcome `render-blocking` issue.
- Removed the request for google fonts and used a snippet found online for **async** loading google fonts.
- Made all `scripts` load **async**.
- Replaced _Cameron_ with my name xDDD.

## main.js
- Removed `document.body.scrollTop` from inside the loop and put it just before so that I overcome FSL problem.
- Declared `phase` variable oustide the loop so it doesn't get declared everytime saving some time.
- Changed `changePizzaSizes` alot deleting the call for `determineDx` and determining the size and calculating width percentage directly inside `changePizzaSizes`.
- Declared `pizzasDiv` outside the loop.
- Replaced `querySelectorAll` with `getElementsByClassName`.
- Reduced number of `pizzas` to a number according to the user screen height.
- Other performance tweaks xD

## Ideas
- If you have any ideas about optimizing this even more feel free to contact me anytime at [hi@basselahmed.com](mailto:hi@basselahmed.com)
