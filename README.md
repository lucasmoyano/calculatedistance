Mozio - Frontend Test

You’ve been hired to write an app that will allow people to perform searches to know the 
distance between 2 points, to allow them to plan their travel.
The app will consist of a search form with two autocomplete inputs, one for the starting 
point and one for the ending point. It should also have a container to show the results 
items (this can be a container in the same page or in a new route).
You can use the google API for the autocomplete inputs or just use some hardcoded set of 
data (in a json file or somewhere else in your project).
The search should be performed asynchronously and you should send some kind of 
notification to the user about what process is running.
The app should allow deeplinking, which means that if the user reaches the application 
with some url parameters, the app should pre-fill the form and perform the search based 
on those parameters.
You should write the application using React with some library to manage the state 
outside of components. The UI doesn't need to look good but be sure to build something 
functional. The code should be kept clear and organized.

You can use whatever external library or component that you think is needed in order to 
create your solution.

If you use some CSS to improve the design/look of the app, please use CSS modules.

You'll get a bonus points if you:
- Use ES6
- Use Webpack
- Use Flow
- Write Unit tests
- You build every component as a reusable piece of code

You'll get a huge bonus if you will use https://github.com/mangojuicejs/mangojuice for 
state management.
