
# KeyCloak and React

This project aims to explain how Keycloak works and its mechanism, using a simple ReactJS code.

The React application is a sample website with four pages:
- Welcome: it is a welcome page that doesn't require any login
- Public page: it is a page that does not require any log in
- Manager: Only users who have the role "manager" can access it. This page contains a simple HTML table with a list of employees
- User Details: Only users who have the role "manager" or "user" can access it. That page shows some information about the logged user. The page gets the user's data from the KeyCloak token.

A docker-compose file runs an instance of the KeyCloak server used by the React component application.

Moreover, there is a JSON file named realm-keycloak-tutorial.json. You can import this configuration file into the running Keycloak server, which recovers the setting I used to run the project or set the configuration up on your own.

## Installation 

Install and run the project.

Clone the projet:

```bash 
  git@github.com:motnip/keycloak-js-login.git
  cd keycloak-js-login
```

### Keycloak server

Run the keycloak server.
From the projetc root folder run:
```bash 
  docker-compose up -d
```    
This command will run the Keycloak server.
Now we need to import the configuration which set the application's client up.

Open the browser and go to localhost:8080
Click on "Administration console". Log in with user admin and password admin.
(Don not use this in production! :D)

Now it is time to add a Realm for our application.

From "Administration console" page:
- On the left side menu click on master. 
- A drop-down menu is open, then click on "Add realm".
- Import the configuration. Click on "select file" and pick, from the project root folder, the file named realm-keycloak-tutorial.json.
Kyelcoak will import the setting for our project.

You can to import the configuration or you can set it up on your own following the link in the Acknowledgements section on the bottom.

### Users and roles

Now we need to add two users to our application:
- user@acme.com
- manager@acme.com

To do that:
- On the left side, select "Users".
- Click on "Add user", fill down the form and click save.
- Now set the password up. Click on the menu above "Credentials."
- Set the password and confirm it.
- Set temporary to off. This operation will not ask you to change the password. Click on "set password".

Now you need to assign a role to each user:
- Assign the role "user" to user@acme.com 
- Assign the role "manager" to manager@acme.com.

### React app

Let us move to the React side. Back on the terminal and run:

From the project root folder run:
```bash 
  yarn Install
```    
and then
```bash 
  yarn start
```
This command will start the application.

Open your browser and go to localhost:3000.

Good learning!




## Acknowledgements

 - [keycloak](https://www.keycloak.org/)
 - [KeyCloak: Creating a realm and a user](https://www.keycloak.org/docs/latest/getting_started/index.html#creating-a-realm-and-a-user)
 - [KeyCloak: Javascript adapter](https://www.keycloak.org/docs/latest/securing_apps/#_javascript_adapter)
 

  
## License

[![GPLv3 License](https://img.shields.io/badge/License-GPL%20v3-yellow.svg)](https://opensource.org/licenses/)

  
## Authors

- [@motnip on Twitter](https://twitter.com/motnip)
- [@motnip on StackOverflow](https://stackoverflow.com/users/7395303/tomas-pinto)
- [@motnip on LinkdIn](www.linkedin.com/in/tomas-pinto-motnip)

