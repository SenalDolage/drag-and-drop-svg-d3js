# Introduction

This was developed as a proof of concept to show what can be done with [d3.js](https://d3js.org) and the control we have over Svg's. In this a sample floor plan svg, door nodes (`<g></g>`) can be embeded into the svg itself. 

The following was achieved in this POC:
* Drag and drop, dots (representing doors) in a `div` list into the svg after converting them into `<g></g>`.
* The dropped door nodes can be moved and placed in a different location.
* Zooming in and out, without changing the locations of the dropped door nodes.
* Viewing more details of dropped doors.
* Removing dropped door from the svg.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Screenshots

[![image.png](https://i.postimg.cc/5tKMCJcX/image.png)](https://postimg.cc/XZ5PRTYW)

[![image.png](https://i.postimg.cc/Wb169cxN/image.png)](https://postimg.cc/t78xTwXw)

[![image.png](https://i.postimg.cc/Hx385VYQ/image.png)](https://postimg.cc/yggNC6Sd)

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).