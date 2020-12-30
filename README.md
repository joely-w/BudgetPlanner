## BudgetPlanner
#### About

BudgetPlanner is a budget planning web app made in NodeJS using AirBNB coding guidlines.
#### Installation
The web app can be run by cloning the repo:

`git clone git@github.com:joely-w/BudgetPlanner.git` 

From then, you can initiate the npm project:

`npm install`

To configure the web app, you need to change the environmental variables file located at
`config/config.env`

You'll also need to create a database structure, for which a creation script will be uploaded soon!
 
#### Project structure:
  
```
    src  
       |-- app.js   app entry point  
       |-- /api     controller layer: api routes  
       |-- /config      config settings, env variables  
       |-- /services    service layer: business logic  
       |-- /models      data access layer: database models	  
       |-- /scripts     miscellaneous NPM scripts  
       |-- /subscribers     async event handlers  
       |-- /test    test suites  
       |-- /web     website files
```
