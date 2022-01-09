<h1 align="center">My Unsplash</h1>

<div align="center">
   Solution for a challenge from  <a href="http://devchallenges.io" target="_blank">Devchallenges.io</a>.
</div>

<div align="center">
  <h3>
    </span>
    <a href="https://devchallenge-my-unsplash.herokuapp.com/">
      Solution
    </a>
    <span> | </span>
    <a href="https://devchallenges.io/challenges/rYyhwJAxMfES5jNQ9YsP">
      Challenge
    </a>
  </h3>
</div>

<!-- TABLE OF CONTENTS -->

## Table of Contents

- [Overview](#overview)
  - [Built With](#built-with)
- [Features](#features)
- [How to use](#how-to-use)
- [Contact](#contact)

<!-- OVERVIEW -->

## Overview

![screenshot](https://i.imgur.com/slincjE.png)

My Unsplash is a Unsplash clone using the MERN stack. Currently the project is being hosted on Heroku and can be viewed by clicking the 'Solution' link above.

This project I focused on creating better components and having solid data validation when needed. Some of my components were getting long (100+ lines of code) so figuring out what parts I could refactor into a separate smaller component was good practice. Like in my `ImageGrid` component, I had a function that would render the images to the user depending on if there were any images to render, and if the search brought back any images. My problem with the function was that it ended up cluttering my component and made it more confusing than anything, so I made a new component specifically for rendering the images to the user depending on the available data. 

And data validation-wise, the only real validation that I could do was making sure the user submitted a valid URL for their image. I used a npm package called `validator` to validate that the URL was valid, but if I had to validate it from scratch then I would have used a regular expression. It was also important that the URL was a link to the actual image (the URL ended with .jpg, .png, .webp, etc.) otherwise the image would be broken. And the data validation is not perfect by any means but should be enough for users to post images without any problems.

In the end, I learned quite a few things from this project like how to reduce the compiled JS file from webpack, incorporating TailwindCSS into a React project, and making a website reactive using media queries (both in css/tailwind and React). 

### Built With

<!-- This section should list any major frameworks that you built your project using. Here are a few examples.-->

- [React](https://reactjs.org/)
- [Tailwind](https://tailwindcss.com/)
- [Typescript](https://www.typescriptlang.org/)

## Features

<!-- List the features of your application or follow the template. Don't share the figma file here :) -->

This application/site was created as a submission to a [DevChallenges](https://devchallenges.io/challenges) challenge. The [challenge](https://devchallenges.io/challenges/rYyhwJAxMfES5jNQ9YsP) was to build an application to complete the given user stories.

## How To Use

<!-- Example: -->

To clone and run this application, you'll need [Git](https://git-scm.com) and [Node.js](https://nodejs.org/en/download/) (which comes with [npm](http://npmjs.com)) installed on your computer. From your command line:

```bash
# Clone this repository
$ git clone https://github.com/RyryTheGuy/my-unsplash-backend

# Install dependencies
$ npm install

# Run the app
$ npm start
```

## Contact

- GitHub [@RyryTheGuy](https://github.com/RyryTheGuy)