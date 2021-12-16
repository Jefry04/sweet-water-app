# Service

### Service Health Check

Call `/api/status` to verify current status of the service

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
