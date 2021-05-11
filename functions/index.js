const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51Il9QjKLIjGofiNX8BjUHZEZkgF4TYYmdqgE8eOg2uigTsk8Lqrk285ehaakTqXRP38lbqQmeYEg1Xen0lyhWzYU00VvhKbReD"
);

//API

//API Config
const app = express();

//Middlewares
app.use(cors({ origin: true })); //security
app.use(express.json()); //like pass data in json format

//API routes
app.get("/", (request, response) => response.status(200).send("Hello World!"));

app.post("/payment/create", async (request, response) => {
  const total = request.query.total;

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: "usd",
  });

  console.log("payment request >>>>>>>>>>>>>>>", total);

  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

//Listen command
exports.api = functions.https.onRequest(app);

// // http://localhost:5001/onlinedeal-ac1d9/us-central1/api
