// server.js

const express = require('express');
const Stripe = require('stripe');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const stripe = Stripe('pk_test_51PKJksSHtM7n7VRbNlsSLzb5ErZh2NFd9Ifmlbwn7OjCGTQEeXqcJHQwWdwZjrEKefuqfqmvi9q0bMXUEAMJffOn00CcVJgE3m'); // Replace with your Stripe secret key

app.use(cors());
app.use(bodyParser.json());

app.post('/create-payment-intent', async (req, res) => {
  const { amount, payment_method } = req.body;

  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency: 'usd',
      payment_method,
      confirmation_method: 'manual',
      confirm: true,
    });

    res.json({ clientSecret: paymentIntent.client_secret });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
