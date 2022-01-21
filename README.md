# Frontend Mentor - Time tracking dashboard solution

This is a solution to the [Time tracking dashboard challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/time-tracking-dashboard-UIQ7167Jw). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Switch between viewing Daily, Weekly, and Monthly stats

### Screenshot

![](./design/my-solution.png)

### Links

- Solution URL: [GitHub](https://github.com/marisudris/frontend-mentor-time-tracking-dashboard)
- Live Site URL: [GitHub Pages](https://marisudris.github.io/frontend-mentor-time-tracking-dashboard/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow

### What I learned

I tried to do as little media queries as possible, by using `grid-template-columns: repeat(auto-fit(...))` and Heydon Pickering's [Flexbox Albatross](https://heydonworks.com/article/the-flexbox-holy-albatross/) as well as `clamp()` font sizes and some length values.  
I stumbled upon a particular issue with defining full-width columns/rows that span all tracks on
_implicit_ grids. The standard `1 / -1` solution doesn't work, since negative indexes exist only on
_explicit_ grids, and the `auto-fit(...)` definition only defines implicit grid. As it happens - apparently there's a [feature request](https://github.com/w3c/csswg-drafts/issues/2402) for this, so that in (hopefully not so distant) future we're gonna be able to declare a grid item to span all tracks regardless of whether or not tracks are explicit or implicit.  
Meanwhile, I ended up defining a couple of media queries for the grid header span to solve this issue.

### Continued development

I plant to continue learning Grid and how the visual spacing works for pure text grid items: how the
grid gap affects it vs. how the margin/padding does.

### Useful resources

- [Flexbox Albatross](https://heydonworks.com/article/the-flexbox-holy-albatross/) - by Heydon Pickering - the closest solution to `container queries` for flex items that we have right now.

## Author

- Frontend Mentor - [@marisudris](https://www.frontendmentor.io/profile/marisudris)
- GitHub - [@marisudris](https://www.github.com/marisudris)
