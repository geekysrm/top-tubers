#  TopTubers

An aggregator of the top channels in Youtube.

### Live here: https://top-yt.herokuapp.com/

## Technologies used

- [Node.JS](http://nodejs.org/) - Node.JS is used in the backend.
- [React.JS](https://reactjs.org/) -Frontend library used in the project.
- [Redux](https://redux.js.org/) - Used in addition to React.JS
- [MongoDB](http://mongodb.com) - Database of choice

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

_Node.JS and npm must be installed. Download and install them from [here](https://nodejs.org)._

The `channels.csv` file provided has been imported to mongoDB database as `channels` collection by using the following command on the command line from the root of the project:

```
 mongoimport -h <YOUR MONGODB URI> -d <YOUR DATABASE NAME> -c channels-u <YOUR USERNAME> -p <YOUR PASSWORD> --file channels.csv --type csv --headerline
```

### Installing

Follow these steps to run this project in your local computer.

```
$ https://github.com/geekysrm/top-tubers.git
$ cd top-tubers
```

Now, create a `.env` file in the root of the project with the following variables:

```
MONGO_URI=<YOUR MONGODB URI>
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

## TODO
- [ ] Fetch data from [Youtube API](https://developers.google.com/youtube/v3/) instead of CSV file.
- [ ] Add individual channel pages
- [ ] Add pagination on homepage
- [ ] Add feature to search channels by name and other parameters

## Authors

- **Soumya Ranjan Mohanty** - [geekysrm](https://github.com/geekysrm)

## License

This project is licensed under the MIT License.
