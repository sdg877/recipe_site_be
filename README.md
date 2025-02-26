Description

I decided to build a MERN stack recipe site using an external API. I wanted users to be able to filter, search, and save recipes. This was my first full-stack website built without any assistance.

Timeframe

This site took me 45 hours to build including planning and deployment. I built this site alone.

Technologies used

MongoDB
Express
React
Node
Bootstrap

Frontend Deployment Link
Backend Deployment Link
Github Frontend Link
Github Backend Link

Brief

I decided to build a MERN stack site to showcase the skills that I learned during my engineering bootcamp. This was my first solo project using an external API. I wanted the site to be user-friendly and for the user to be able to save recipes and to be able to mark whether they would make again. 

Planning

I made a list of all the features that I wanted to include on the site. I wanted users to be able to search and filter recipes, to be able to save recipes to their profile if they have an account, and for them to be able to mark the recipe once they had tried it. Once I had decided on the user story, I made a list of all the pages and components I would need. I chose an external API and set up an account. 

Code Process

I started by setting up backend and frontend environments and installing relevant dependencies. I installed Mongoose and connected my backend in my server.js file. 

After I defined my user schema, I then added a checkToken.js, database.js and ensureLoggedIn.js files.

![Screenshot 2024-05-24 at 11 59 08](https://github.com/sdg877/recipe_site_fe/assets/149600602/af79af6f-6aca-44b0-9976-b77111fab982)
![Screenshot 2024-05-24 at 11 56 53](https://github.com/sdg877/recipe_site_fe/assets/149600602/07a6515d-87f2-4ca6-b71e-a4df2bb478d1)



In the frontend, I created a utilities folder and send-request.js, users-api.js and users-service.js files.
send-request.js

![Screenshot 2024-05-24 at 12 02 21](https://github.com/sdg877/recipe_site_fe/assets/149600602/1f6af299-d0df-4c22-95e6-23d8065e7e87)


users-api.js

![Screenshot 2024-05-24 at 12 03 21](https://github.com/sdg877/recipe_site_fe/assets/149600602/890e6544-c4cd-41c6-8849-b8b1fed22e81)

Snippet of user-service.js file

![Login function](https://github.com/sdg877/recipe_site_fe/assets/149600602/b2cdcf22-d778-474c-bd9f-1d3f981405c3)


I created sign-up and login form components and a login page and endpoints. I added a function so that the user could toggle between the forms depending on whether they have an account setup already. I then redirected the user to the profile page once they had logged in or signed up.

![Screenshot 2024-06-26 at 11 26 40](https://github.com/sdg877/recipe_site_fe/assets/149600602/36b7d3c7-bd95-4ec1-9ea0-7302bf0cc3cb)


Once the authorization was complete, I then moved on to setting up the API to source the recipes. I tested out a couple of recipe API’s before deciding the Spoonacular was the best one. I created an API key and saved it in my .env file on the frontend and created a useEffect hook. I noticed that some of the recipes did not have images and this threw off the formatting so I made a function to not display any recipes that do not have images. I created a filter and search so that the user can filter between meal types and search by specific ingredients.
![Screenshot 2024-06-26 at 11 29 34](https://github.com/sdg877/recipe_site_fe/assets/149600602/2a68d792-4bca-497d-bbda-a849ee0c8ecc)
![Screenshot 2024-06-26 at 11 31 48](https://github.com/sdg877/recipe_site_fe/assets/149600602/e5b90066-bfad-499c-b259-f1934ff8dc47)
![Screenshot 2024-06-26 at 11 33 24](https://github.com/sdg877/recipe_site_fe/assets/149600602/092aa507-655e-4ada-8ff3-a4343012d02c)
![Screenshot 2024-06-26 at 11 35 59](https://github.com/sdg877/recipe_site_fe/assets/149600602/c42257dd-0ee5-4869-b0f1-b4ab5e2da801)


Once I was able to view the recipes on my homepage, I created a RecipeView.jsx page which allows the users to view the recipe in detail. 
![Screenshot 2024-06-26 at 11 37 08](https://github.com/sdg877/recipe_site_fe/assets/149600602/e6769015-0a09-4515-a622-326e135f8f84)


I wanted logged in users to be able to save recipes to their profile using local storage.
![useEffect - save recipe](https://github.com/sdg877/recipe_site_fe/assets/149600602/1f62daab-6f19-4147-bc51-c51d07e8206a)


I pulled the data I wanted displayed onto the recipe card:

![Screenshot 2024-06-26 at 11 39 34](https://github.com/sdg877/recipe_site_fe/assets/149600602/deb59f70-d519-4e70-b703-8e31ec91c27b)

I then added two functions as I noticed that there were formatting errors with the data.
![Screenshot 2024-06-26 at 11 41 03](https://github.com/sdg877/recipe_site_fe/assets/149600602/8afaeec5-3d82-4e2a-a02e-48ceb3c1aed8)


I used local storage so that users were able to save recipes to their profile once logged in. 
![useEffect - save recipe](https://github.com/sdg877/recipe_site_fe/assets/149600602/944a69b7-551b-4815-a1aa-2672c6447c5b)


Challenges

This was my first full stack site built without any help from instructors and using an external API. There were points when setting up authentication and using the API that I struggled. I did a lot of online research and looked at previous projects which enabled me to overcome any issues that I was facing. 

Once I had deployed the site, I found that if the user refreshed the page on any page other than the homepage, they would get a 404 error saying page not found. I fixed this by adding the following page in the public folder in the frontend.
![Screenshot 2024-05-24 at 12 21 36](https://github.com/sdg877/recipe_site_fe/assets/149600602/5d6c9a8d-ed8c-4c51-93c1-638e45abb697)

Wins

That I was able to build this site from scratch and deploy it without any outside help. I thoroughly enjoyed this project.

Key learnings

To be patient, if something isn’t working and that everything can be resolved with proper research and practice.
