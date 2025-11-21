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

## Building the recipe

## Unit Testing
While developing my application I wrote unit tests for specific elements and ran these using Vitest. This allowed to me confirm that the functions I'd written were outputting what I was expecting and could handle things like invalid input or any of the changes I made without breaking anything that was already written. I also took the opportunity on a couple of occasions to practice test-driven-development by writing a testing before building a function and then writing the function to suit that test - I found this a very useful excercise  as this gave me a clear understanding of what I did or didn't need to do with a specific function to avoid writing lines of code that wouldn't be used or didn't do what I wanted.
Due to my limited knowledge in writing tests I chose not to write tests for each of my components but this is something that I want to learn more about and then go back in and write a comprehensive set of tests for.

## File Structure
My project uses a React file structure as explained below:
- public/ <- This folder stores any of the images that are used within the application
- src/ <- This folder stores the source code for the application
  - assets/ <- to be deleted
  - components/ <- The components folder stores each of the elements that make up the app in the Documemnt Object Model in a web browser - components is the name given to these files within react. While some of these do have specific uses and wouldn't be reused, most of these are designed to be able to be reused and either input or output different data depending on the details that are passed into the component
    - CookieWarning.jsx <- This file contains the CookieWarning element that's used to confirm if a user is happy for cookies to be used to save their recipe or not.
    - CookieWarning.test.jsx <- This file is the unit test I built to ensure the CookieWarning is shown/not shown correctly depending on specific conditions such as cookies having been allowed previously.
    - CreateIngredient.jsx <- This is the component used to add new ingredients in to the application it contains a form and other components within that form. To keep the form simple some of the elements are hidden by default and have a default value set but can be shown or hidden on setting the button. Submitting the form calls the setCookie function from the CookieUtils.js file
    - ErrorAlert.jsx <- This is a reusable component I created to display an error from the application. To avoid needing to create a new error modal or popup for each possible error message, this component takes a message as a property and will then display this message in a modal that's fixed to the top of the screen.
    - Footer.jsx <- to be deleted
    - Header.jsx <- This component is shared across all pages within the application, right now this only contains the name and logo of the application but as I continue to build this the goal is to add a working backend with the ability to log in/out and the buttons for this will be stored in the header. If I chose to add any other pages as well, the links to these will be added in the header.
    - Ingredient.jsx <- This is the most used component in the application, it's used to show each individual action as part of a recipe (e.g. "Start cooking the chicken") along with the context on how long that particular action will take overall. It also contains edit functionality to allow the name of the ingredient or the specific time that ingredient element is showing to be changed - if the name is changed, this will be reflected on any other Ingredient element for the same itemm.
    - Recipe.jsx <- This is the overall container for all elements within the Recipe which includes the CreateIngredient, Ingredient and any other elements. This allows me to route to this area of the app from the Welcome page without needing to specify each element individually.
    - SetTimeInstruction.jsx <- This is the second most used component in the app, all it contains is a div and a h3. It takes a time as an input property and will then display a prompt to "Set a timer for X minutes"
    - TimeDurationInput.jsx <- This is a child component of the CreateIngredient component, it's used to take time as an input from the user. To avoid needing to repeat the same code over and over, this takes a specific time type as an input (e.g. cook, rest, prep) and will then update the corresponding field in an object. This means the element only needs to be shown on screen as many times as there are different time types within an ingredient.
    - TimeDurationInputCompact.jsx <- This is a more compact version of the TimeDurationInput component thats used for editing a time on within the Ingredient card, I created this as it doesn't need to include details such as the name of the cooking type that's being edited.
    - Welcome.jsx <- This is the homepage for the application, right now this contains the app's logo, a welcome message and a button to navigate to the Recipe builder component.
    - Welcome.test.jsx <- While experimenting with unit tests I created this file to test that the Welcome compoent is displayed correctly within the application.
  - contexts/ <-to be deleted
  - styles/ <- This folder contains all the stylesheets for the specific components of my application (Or where a specific component doesnt' have it's own stylesheet, it will be covered in the stylesheet of it's parent element.) Separating out style sheets made it easier to find the rules that applied to a particular component and ensure I could be as specific as possible where needed.
    - CookieWarning.css
    - CreateIngredient.css
    - ErrorAlert.css
    - Header.css
    - Ingredient.css
    - Recipe.css
    - Welcome.css
  - utils/ <- This folder contains all the reuseable functions I created for my app, doing this allowed me to avoid needing to rewrite the same code in different parts of my app or needing to bundle reusable functinos in with a component to make them easier to find and make changes should I need to.
    - CookieUtils.js <- This file contains the functions I created to set and read cookies from the users web browser to allow users input to be temporarily saved without needing to do this manually on teh user's part.
    - TextUtils.js <- This file contains all the reusable functions I created to interact with text. Right now this only contains 1 function called capitalize which takes a String as an argument and will then output a new string with each word in that changed so the first letter is a capital letter.
    - TextUtils.test.js <- This file contains the unit test I wrote for the Capitalize function as described above. I decided to practice test-driven-development so rather than writing the function first I wrote the test and specified what I wwanted the function to output given specific inputs and then wrote the function to acheive these outputs.
    - TimeUtilities.js <- This file contains the functions I used to interact with times entered by users. I stored all times in both the application and in cookies in seconds so have a function called store time to convert the hours, minutes and seconds to just seconds and a separate function called recallTime to convert back to an Object containing Hours, Minutes, and Seconds. I also created a separate function called normalizeTime that was used while receiving user input to ensure that the times they were entering in the Hours Minutes and Seconds boxes were valid (e.g. not negative and increasing hours/minutes when a user enters more than 60 seconds.
    - TimeUtilities.test.js <- This file contains the unit tests I wrote for all of the time functions to ensure they were working the way I expected and weren't introducing any bugs into my application
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
