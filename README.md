# Real World React - a workshop for intermediate React application design

## What?

Learning React can get awfully complicated. Flux, Redux, server side rendering, React Native, higher order components, functions as child components, CSS in JS, and more. Let's simplify the equation: build a real world application using React and Redux, learning patterns and practices to make reusable, composable components as we go. Whether you are brand new to React or have some experience with it, you should walk away with a solid understanding of how to compose React applications. This workshop is intended for those who already have basic React knowledge or experience, and should be considered more of a 201 level workshop than a 101 level.

## Who?

Nathan Loding - more bio to come!


## Slides

~~You can view the most current version of the slides for this workshop [here](http://github.com/nloding/real-world-react-slides) or~~ you can grab your own copy to run locally [here](https://github.com/nloding/real-world-react-slides)


## First steps

1. The example app is based off `create-react-app`, so refer to its documentation for any changes you want to make.
2. Open that repository and run `npm install` or `yarn`, then `npm start` or `yarn start`
3. If your browser doesn't automatically open, launch `http://localhost:3000` to view the site
4. I apologize for the mix of semicolons and not ... no semicolons is a thing I do now


## Exercises

- Normalize state data
- Add or extend `Layout`
  - Alternately, create a 500 and/or 404 error page which use a different layout
- Add text filter to article list (note: API doesn't support this, so just filtering local store)
- Create/utilize `Tag` component, and make it customizable (reusable)
- Load user into state if app is reloaded and 'jwt' storage key is there
- Secure authenticated routes:
  - Create a custom `AuthenticatedRoute` using a HOC
  - Use a render prop to conditionally render the routes


## Tools

1. Node, npm/yarn ([Node](https://nodejs.org/en/), [Yarn](https://yarnpkg.com/en/))
2. Editor/IDE ([Atom](https://atom.io/), [WebStorm](https://www.jetbrains.com/webstorm/), [VSCode](https://code.visualstudio.com/), [Sublime](https://www.sublimetext.com/), etc.)
3. Chrome or Firefox
4. [React DevTools browser extension](https://github.com/facebook/react-devtools)
5. [Redux DevTools browser extension](https://github.com/zalmoxisus/redux-devtools-extension)


## Resources

- [Semantic UI Documentation](https://react.semantic-ui.com/introduction)
- [Real World (Conduit) API Reference](https://github.com/gothinkster/realworld/tree/master/api)
- [Original Real World React/Redux app](https://github.com/gothinkster/react-redux-realworld-example-app)


### Changelog

- May 2018: New slides, new application, new exercises; all based on attendee feedback from CodeMash


### Presentation History

- January 10, 2018: CodeMash
- May 31, 2018: Music City Code
