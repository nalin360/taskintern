# Day 02-07-2023

### Logging Interceptor

Logging Interceptor Reference links

[@algoan/nestjs-logging-interceptor - npm Package Overview - Socket](https://socket.dev/npm/package/@algoan/nestjs-logging-interceptor)

[typescript - Logging request/response in Nest.js - Stack Overflow](https://stackoverflow.com/questions/55093055/logging-request-response-in-nest-js)

now it log in object which is more readable

{
  "message": "LoggingInterceptor - method: {method} -  url: /feedback",
  "class_name": "FeedbackController",
  "body": {},
  "headers": {
    "accept-encoding": "gzip, deflate, br",
    "accept": "*/*",
    "user-agent": "Thunder Client (https://www.thunderclient.com)",
    "host": "localhost:3000",
    "connection": "close"
  }
}

---

### ResponseInterceptor

now the error shows 

{

    message: 'ResponseInterceptor',

    path: url,

    description:`Server error `,

    statusCode:statusCode

    }

# Day 14-6-2023

src/t2

Changes :

1. made a separate connection in src/t2/connection so it can be used again
2. moved all logic from controller to service file
