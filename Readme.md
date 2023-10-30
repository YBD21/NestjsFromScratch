# Nest.js Notes

This README provides an overview of essential concepts and tools in Nest.js, along with some conventions to follow when working with this framework. Additionally, a command to run a Nest.js application is included.

## Parts of Nest.js

1. **Modules**: Nest.js groups code into modules, helping to organize and structure your application effectively.

2. **Filters**: Filters validate incoming data, ensuring that it meets the required criteria.

3. **Interceptors**: Interceptors add extra logic to incoming requests or outgoing responses, enabling you to perform actions before or after the request reaches its destination.

## Nest.js Tools

4. **Pipe**: Pipes are used to validate data contained in the request, allowing you to process and transform the data before it is sent to your controllers or services.

5. **Guard**: Guards are responsible for ensuring that the user is authenticated and authorized to access certain routes or resources.

6. **Controller**: Controllers route incoming HTTP requests to a particular function in your application.

7. **Service**: Services contain the business logic of your application. They encapsulate the functionality needed to perform specific tasks.

8. **Repository**: Repositories provide a way to access and interact with databases, making it easier to manage database operations.

## Conventions of Nest.js

When working with Nest.js, it's essential to follow some conventions to maintain a clean and consistent codebase:

1. **One Class per File**: Organize your code by placing one class per file, except in some exceptional cases where multiple closely related classes are grouped.

2. **Class Name Significance**: The name of a class should include information about the kind of thing it represents, making it easier to understand the class's purpose.

3. **Class and File Name Matching**: The name of the class and the name of the file should always match, ensuring consistency in your codebase.

4. **Filename Template**: When naming your files, follow the convention of using the format `name.type_of_thing.ts` to make it clear what the file represents.

## Run Command

To run your Nest.js application, you can use the following command:

```shell
npx ts-node-dev src/main.ts
```

Replace `src/main.ts` with the entry point file of your Nest.js application if it's located in a different directory.

These notes and conventions will help you get started with Nest.js and maintain a structured and clean codebase for your projects. Happy coding! 🚀
