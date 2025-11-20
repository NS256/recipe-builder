# Recipe builder

Recipe builder is my cs50 final project, I built this in response to my partner struggling with planning cooking with lots of ingredients or food items that take different amounts of time to cook or rest. 

While planning my app I wanted to meet the below goals:
- Build this as a web app that can be accessible through a web browser on any device
- Have an intuitive interface that while documentation can be written for, doesn’t require it
- Quickly add new items to a recipe and edit them without needing to re-load the page or add large amounts of code to render new JavaScript
- Have recipes saved in browser cookies to give temporary storage but also build in a way that it could be connected with a more complex backend in future to allow logging in.

For these reasons I chose to use React with Vite to build the front end of the application, this also gave me the ability to take advantage of Vitest to write some basic unit tests to validate the output of my functions and that specific content is rendered on the webpages successfully. Building with React also gives the possibility to easily connect a NodeJS/Express backend at a later stage to allow logging in and permanent saving or to quickly refactor to NextJS to build both the Front-end and Back-end.

## Navigation
While currently there are only two main pages to my application I chose to use the React Router library in my project to allow navigating between these two pages and any other pages I may choose to add without triggering browser refreshes. This will also allow me to add other pages in future that can pass information between each other more easily should I choose to do so.

When accessing the app you’re taken to a simple but friendly welcome page with a button to take you into the main recipe builder application. Right now the only other details this contains are the icon for the webpage and the welcome message but this is also where I can announce new features as I continue to build this or introduce the opportunity to log in.

## Adding ingredients to the recipe
When an ingredient is added to the recipe, this is stored in an array in State within the application. So that these ingredients can then be recalled in order and only include instructions to set a timer where relevant, each time the list of ingredients was updated I generated as close to a Hash Table as can be created in JavaScript that stored the time for a particular ingredient or instruction to show on screen - for each ingredient, to avoid duplicating information the only details that are stored in the Hash Table are it's ID and the particular time event to show in the ingredient element.

## Modularity
Throughout the development process I regularly redesigned my code to make elements more reusable and modular, an example of this is the error message that's shown when you try to submit an ingredient without setting a cooking time; I initially started to build this as an individual error but shifted to created a separate error component, leaning on the react-boostrap library for an alert and defining a function that would take the error message as an argument and then display the alert with specific error message on screen for a specific amount of time. This meant the only property that needed to be passed into any of apps components was the function to set an Error Message.

## AI use
I did make some use of AI while building this project to create the below features however in general my use of AI was to explain an issue or to understand an error message that was being displayed rather than to write the code for me so that I could ensure I was building my skills in React as much as possible.
- Adding a CSS animation to show/hide the error message modal.
- Some positional movements of elements within the DOM to reduce their impact on other elements.

## File Structure
My project uses a React file structure as explained below:
- public/ <- This folder stores any of the images that are used within the application
- src/ <- This folder stores the source code for the application
  - assets/ <- to be deleted
  - components/
    - CookieWarning.jsx
    - CookieWarning.test.jsx
    - CreateIngredient.jsx
    - ErrorAlert.jsx
    - Footer.jsx <- to be deleted
    - Header.jsx
    - Ingredient.jsx
    - Recipe.jsx
    - SetTimeInstruction.jsx
    - TimeDurationInput.jsx
    - TimeDurationInputCompact.jsx
    - Welcome.jsx
    - Welcome.test.jsx
  - contexts/ <-to be deleted
  - styles/
    - CookieWarning.css
    - CreateIngredient.css
    - ErrorAlert.css
    - Header.css
    - Ingredient.css
    - Recipe.css
    - Welcome.css
  - utils/
    - CookieUtils.js
    - TextUtils.js
    - TextUtils.test.js
    - TimeUtilities.js
    - TimeUtilities.test.js
  - App.css <- This file contains the styling for the App component, these are more global stylings but ones that aren't as high level as the ones applied in the index.css file below.
  - App.jsx <- This is the entry point for the React app within the index.html file. This doesn't contain any of the logic for the application but does layout the highlevel page structure of things like the Header, Router, Background Image and links to Vercel's (the hosting site I chose) Speed Insights tool to allow me to measure the performance of my application.
  - index.css <- These are the stylings for the website as a whole, I made limited changes here but used this file to specify variables for the different colours that would be used across the site in both light and dark modes.
  - main.jsx <- This is a file created by Vite as part of the React Project template, it enforced Strict Mode on the React App which is a mode to help identify issues in the code sooner.
- .gitignore <- This file lists any of the files or folders within a project that don't want to be uploaded to the repository
- README.md <- This file!
- eslint.config.js <- I used ESLint which is a tool to keep coding styles consistent across a project and to help to avoid syntax issues while writing code.
- index.html <- This file is the page that's loaded when the application loads, it contains the HTML head and body files
- package.json / package-lock.json <- These files store a list of the dependancies and other libraries this app relies on as well as the applicable version for each one to ensure the app can be built and run on any devices. Package.json also stores the version number and scripts that are relevant to this app, for example using Vitest for any testing.
- vercel.json <- This app is hosted through Vercel, due to the nature of a React Router application handling the router on the front end, I needed to add this file to resolve all paths to the "/" path on the back end so that the routing could be handled in react instead.
- vite.config.js <- I used Vite to build the template for this project as this is one of the most up to date ways to build a React app, this file provides some configuration settings to Vite to allow it to build the app correctly
   

## Cookies
To give temporary storage of a users recipe and handle events such as loss of internet connection or reloading a webpage I've added storage 
