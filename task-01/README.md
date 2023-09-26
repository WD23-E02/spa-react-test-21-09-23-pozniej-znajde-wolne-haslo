# 1. [Display Data using JSX](https://www.robinwieruch.de/react-pass-props-to-component)

Before you start

- Navigate to the directory `task-01` in your terminal
- Install dependencies with `npm install`

## Instructions

Display the user data provided below using JSX.

The requirements are:

- Show data
- Bind data to an HTML attribute `<img src=???>`
- Create a link to the user's Twitter profile: `https://twitter.com/tim`
- Use `Array.prototype.map()` to list all the companies

```js
const user = {
  name: "Jeff Bezos",
  city: "Albuquerque",
  born: 1964,
  likes: "Being rich",
  twitterLink: "https://twitter.com/jeffbezos",
  img: "https://img-cdn.inc.com/image/upload/w_1920,h_1080,c_fill/images/panoramic/getty_1032942302_dkawzr.jpg",
  twitterName: "JeffBezos",
  companies: [
    "Amazon",
    "The Washington Post",
    "Google share holder",
    "IMBD",
    "Alexa",
    "Blue Origin",
    "Twitch",
    "Zappos",
    "Whole food market",
    "Amazon robotics",
    "Goodreads",
  ],
};
```

## What the final application looks like

![Example](./public/task-01.png)

> Bonus challenge if you have extra time at the end of the exam
>
> Create a reusable component for the user details. Pass data to it using props.
