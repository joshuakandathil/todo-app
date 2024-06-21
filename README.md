# ToDo List MFE App using webpack 5 Module Federation

This application implements a Todo List functionality. It also exposes the component as microfrontend using Webpack 5 module federation.

Following core functionalities are implemented:

1. Creates new Todo and adds them to a list of Todos
2. Todo items are persisted to localstorage to be available on page refresh
3. Todo items can be marked as complete/incomplete using checkbox
4. Todos can be deleted from the list of todos

### Architechture

1. Application exposes a TodoList component as a microfrontend for consumption from other host applications.
2. Typescript is used to maintain type safety. All classes and methods uses custom Todo interface.
3. Todos are saved and retreived from localstorage inorder to persist state on page refresh.
4. Unit tests are included for verifying core functionalities
5. Edge cases like empty string inputs and local storage unavailability are handled.

## Setting up the project

- Clone Repo

```bash
> git clone https://github.com/joshuakandathil/todo-app
> cd todo-app
```

- Install dependencies

```bash
> npm i
```

- Serve application

```bash
> npm run start
```

This serves the module federated component configured at the remote entry point at [http://localhost:3001/remoteEntry.js](http://localhost:3001/remoteEntry.js)

- Open and view the MFE as standalone
  Open [http://localhost:3001](http://localhost:3001) if you need to see just the ToDo List as standalone app.

## Execute test cases

```bash
> npm run test
```

This launches the test runner and runs all configured tests
