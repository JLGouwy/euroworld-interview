# Euroworld interview

## summary
Euroworld is a little microservice about tennis player.
The goal is just fetching data player from a specific endpoint.

## test
The command to run : 
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
