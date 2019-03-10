#  TOP YT

An aggregator of the top channels in Youtube.

## Technologies used

- React JS with Redux
- Node.js
- MongoDB

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

_Node.JS and npm must be installed. Download and install them from [here](https://nodejs.org)._

The `channels.csv` file provided has been imported to mongoDB database as `channels` collection.

### Installing

Follow these steps to run this project in your local computer.

```
$ https://github.com/geekysrm/mern-boilerplate.git
$ cd mern-boilerplate
```

Now, create a `keys.js` file inside `config` folder with the following variables:

```
module.exports = {
  mongoURI: YOUR_MOGODB_URI
};

```

Now run :

```
$ npm i
$ npm run client-install
```

Now, to run both the server and client on port `5000` and `3000` respectively, run:

```
$ npm run dev
```

To run only the server, run:

```
$ npm run server
```

To run only the client, run:

```
$ npm run client
```

## Built With

- [Node.JS](http://nodejs.org/) - Node.JS is used in the backend.
- [React.JS](https://reactjs.org/) -Frontend library used in the project.
- [Redux](https://redux.js.org/) - Used in addition to React.JS

## Authors

- **Soumya Ranjan Mohanty** - [geekysrm](https://github.com/geekysrm)

## License

This project is licensed under the MIT License.
