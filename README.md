# Deferit-DummyData

DummyData
Developed in Node.js.

### Libraries used

    Express.
    filejson.
    json-server.
    Chai.
    Mocha.

## Getting Started

First install the dependencies:

```bash
npm install
# or
yarn
```

Run the development server:

```bash
npm run start
# or
yarn start
```

Open [http://localhost:3001](http://localhost:3001) with your browser to see the [reactive] result.

# or

Open [http://localhost:3001/responce](http://localhost:3001/responce) with your browser to see the result.

## Unit testing

```bash
npm run test
# or
yarn test
```

## Descriptions:

This project only generates a dummy data for a fixed number (100) of reciepts to be represented in another project.

The data is generated from a class for cleaner code.

### Data example:

```bash
[{
    "date": "07/08/2012",
    "status": "unable to pay",
    "amount": "$80",
    "img": {
      "url": "https://via.placeholder.com/826x1169/12393D/E4E5E7",
      "thumbnail": "https://via.placeholder.com/165x233/12393D/E4E5E7"
    }
  }]
```
