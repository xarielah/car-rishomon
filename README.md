# car-rishomon app
Car-rishomon is a plane front-end project using Israeli Gov API to search for registered car numbers and related data to the car's registration.

## How to install?

To install the project on your device, clone the repo into a favorite folder on your computer.
Then, install the dependencies by using:

```
npm i
```

After that, you need to create ```.env``` file on the root of the project (yes, outside the src folder).

1. Create on root folder ```.env``` file
2. Inside the ```.env``` file write the variable:
```
VITE_API_URL="https://data.gov.il/api/3/action/datastore_search?resource_id=053cea08-09bc-40ec-8f7a-156f0677aff3"
```
3. Start the app.

## How to start the app?

You will need to write on the terminal:
```
npm run dev
```

The app will run on [http://localhost:5173](http://localhost:5173/).
