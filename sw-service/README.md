# Service

This is the service repository for the Sweet Water App, is created with:

- Node js (v14)
- Mongo DB

For installation guide please visit our [documentation](docs/README.md)

### Quickstart

Before running the project, please make sure you have installed Node version 14.17.6 or nvm* (Node Version Manager).
If you're using nvm, go to the sw-service/ folder and run:

```
nvm use
```

Install all dependencies:
```
npm install
```

Bootstrap the database using docker in the sw-service/ folder:

```
docker-compose up -d
```

Run the service:
```
npm run dev
```
it will start in port 3001.

### Documentation

You can access the API documentation in:
```
http://localhost:3001/api-docs
```

### Service Health Check

Call `/api/status` to verify current status of the service

### Conventions for Commit Message
We follow a custom version of the [Conventional Commits](https://conventionalcommits.org/) pattern:
`<TICKET>: <TYPE>[SCOPE]: <SUBJECT>`

- Ticket (Every commit should include a Jira ticket number)
- Type (usually takes the values `feat` `fix` `docs` `style` `refactor` `perf` `test` `chore` They should still be associated with a Jira ticket.
- Scope (usually takes name of the topmost component in `/src` touched by the changes)
- Subject (The subject contains a succinct description of the change:)

Use the imperative, present tense: "change" not "changed" or "changes"
Don't capitalize the first letter
No dot (.) at the end

- For example:

  `SW-8: feat[sw-s]:  Create Mongo database and Authentication service endpoints`

