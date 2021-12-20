# Installation Guide

To run this project you must have installed:

- Node JS
- Docker

## Installing NodeJS

We recommend using [Node Version Manager](https://github.com/nvm-sh/nvm) (NVM) for this:

To install or update nvm, you should run the install script. To do that, use the following cURL command:

`curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash`

In this project we use Node v14.17.6, when you have nvm installed got to /sw-service directory and run

`nvm use`

this will install node v14.17.6 in your machine and set it up for this project.

## Installing Docker

Go to https://docs.docker.com/get-docker/ and follow the installation procedure.

Once you have docker installed, you can continue with the next step.

## Bootstrap Mongo Database

To start the database using docker-compose, go to sw-service/ and run:

```
docker-compose up -d
```

To interact with the Mongo CLI, enter database service docker container and run

```
# Login as admin

mongo admin -u root -p aguadulce

# Login as User in sw-database 

mongo -u sw-database-admin -p admin-aguadulce --authenticationDatabase sw-database
```
