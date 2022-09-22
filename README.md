# Euroworld interview

## summary
Euroworld is a little microservice about tennis player.
The goal is just fetching data player from a specific endpoint.


## Locally
### pre-requirements
1. install deps
```
npm i
```

2. Create .env file at the root of the project, with the following content : 
```
/euroworld-interview/local-tennis-api-url=VALUE
```
Replace VALUE by yours.

3. Then run locally 
```
npm run start
```

### test
The command to run the unit tests : 
```
npm run test
```

## deploy
The command to deploy : 
```
npm run serverless:dev
npm run serverless:test
npm run serverless:prod
```

By default, the aws-profile is mine (jlgouwy), please change it  by yours. Or erase the aws-profile flag if you want to use your default one from your machine.

Also, to deploy, first you need to deploy the SSM cloudformation (cloudformations/ssm-stack.yml).
Or create it manually in AWS console : `/euroworld-interview/[dev|test|prod]-tennis-api-url` with the corresponding url value.
