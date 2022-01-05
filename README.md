## Local Setup

In the project directory, you can run:

### `npm install`

To install all the dependencies.

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

This application has a React frontend and a NodeJS backend along with MongoDB Atlas as a database to store the discount coupons.

## Problems encountered during development

### `Parsing Date`

In order to validate the date of the coupon,  [moment.js](https://momentjs.com/docs/#/parsing) was used to parse the date from `DD/MM/YYYY` to </br> `DD MM YYYY hh:mm:ss`

### `Stale State`

While fetching the entered coupon details from the database for validation and calculation, the state of the fetched coupon was taking some time to update and wasn't available to use straightaway. [This article](https://www.daggala.com/react-state-not-updating-immediately) was referred to solve this issue.
