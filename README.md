# Eats Restaurant
___
A fullstack website for a hypothetical restuarnt, built with Mongo, Express, React and Node.js.




## Features
___
+ Mobile ready - Following industry standard

+ Booking system - Posting and getting data through an REST API, and storing it in Mongo Database.
+ Automated Emailing - Confirming bookings, allows for cancellation and modification of bookings.

+ Admin mode - Allows staff to manually modify bookings.

## File Structure
___
The main folder "eat", has two subfolders containing the back-end and front-end respectively. Node_modules will have to be installed in both folders to run the server & site simultaneously, more on that in the installation section.
#### Client
The components are split into two categories, pages and general components. 
Styling components are kept in a sibling folder next to the components they are applied to.

#### Server
Standard MVC structure. 

```
📦eat
 ┃ ┃📦client
 ┣ 📂components
 ┃ ┣ 📜BookingFormComponent.tsx
 ┃ ┣ 📂styles
 ┃ ┃ ┣ 📜BookingFormStyle.tsx
 ┃ ┣ 📂tests
 ┃ ┃ ┗ 📜Navbar.test.tsx
 ┣ 📂pages
 ┃ ┣ 📜Admin.tsx
 ┃ ┣ 📂styles
 ┃ ┃ ┣ 📜AdminChangeStyles.tsx
 ┃ ┃ ┗ 📜StartStyle.tsx
 ┃ ┣ 📂tests
 ┃ ┃ ┣ 📜Admin.test.tsx
 ┃ ┃ ┗ 📜NotFound.test.tsx
 ┃📦server
 ┣ 📂controllers
 ┃ ┣ 📜adminControl.js
 ┃ ┗ 📜bookingControl.js
 ┣ 📂models
 ┃ ┗ 📜bookingSchema.js
 ┃┣ 📂routes
 ┃ ┣ 📜adminRouter.js
 ┃ ┗ 📜bookingRouter.js
 ┣ 📜.env
 ┣ 📜main.js
 ┣ 📜package-lock.json
 ┗ 📜package.json
 ┃
 


```
## Naming Conventions
___


#### Pascal Case
Any and all components (including styled ones) uses Pascal Case as per the React standard.


#### Camel Case
All other variables uses Camel Case.


## Installation
___

This project requires [npm](https://docs.npmjs.com/getting-started) to be installed, as well as basic knowledge of [git](https://git-scm.com/docs/git-pull).   
Seeing as there is no live version, you also have to add your own [MongoDB Cluster](https://docs.mongodb.com/manual/introduction/), [nodemailer](https://nodemailer.com/about/) account, and replace the [.env](https://dev.to/luk707/managing-dotenv-files-in-git-repositories) variables with your own.   
See official documentation for more information.  


```
DB_LOGIN = 
NODEMAILER_USER =
NODEMAILER_PASSWORD =
```

After performing a pull request you will have to navigate to the server and client folders referenced in 
[File Structure](##file-structure) and install node_modules in both folders.

``` 
npm install
```
After which you can run the start command by terminal in the server and client folder to start the server and website.

```
npm start 
```
