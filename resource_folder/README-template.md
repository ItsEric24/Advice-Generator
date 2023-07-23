# Frontend Mentor - Advice generator app solution

This is a solution to the [Advice generator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/advice-generator-app-QdUG-13db). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
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

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Generate a new piece of advice by clicking the dice icon

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)


## The Issue

-The project does not quickly generate random advice since the Api it uses, caches advices for 2 seconds. Any repeat request within 2 seconds will return the same advice even after repated clicking.   

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow
- Javascript
- Uses an advice api from [Api slip](https://api.adviceslip.com/)

### What I learned

-While building this project, i have learnt Javascript best practices especially while using the api.
-I have also learnt CSS animations which enabled me to create a more interactive button when a user clicks for an advice.

-Below are the lines of code i am proud to have learnt:

```CSS

.rotate{
    animation: mymove 5s infinite;
}

@keyframes mymove {
  50% {
    transform: rotate(180deg);
  }
}

```

`````````javascript

setTimeout(() => {
  button.classList.remove("rotate");
}, 5000);

getAdvice()
  .then((advice) => {
    if (advice) {
      count.innerHTML = "#" + advice.id;
      adviceText.innerHTML = "“" + advice.advice + "”";
    } else {
      adviceText.innerHTML =
        "Failed to fetch advice. So sorry try again later!!";
    }
  })
  .catch((error) => {
    console.error(error);
  });

`````````

### Continued development

-As I continue building more projects from [front-end mentor](https://www.frontendmentor.io/profile/yourusername) and other sources, I still want to work on my **problem solving skills** cause this is what truly defines a developer and **my design skills, as well as and many more** as I continue progressing in my Full-Stack Webdevelopment journey.

### Useful resources

-I Used the an api from Api Slip which enables the application to generate numerouse and random advices.
-I used ChatGPT for debugging a certain area i had trouble with but I realized that was how the Api was designed to do.

## Author
- Frontend Mentor - [@ItsEric24](https://www.frontendmentor.io/profile/ItsEric24);
- GitHub [@ItsEric24](https://github.com/ItsEric24)


**IF YOU READ THIS FILE, FEEL FREE TO EXPLORE MORE OF THE PROJECTS I HAVE BUILT IN THE ABOVE GITHUB LINK. THANK YOU**.
