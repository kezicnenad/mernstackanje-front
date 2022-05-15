import React from 'react'
import { stripeAPI } from "../fetch/stripeAPI";

function StripePayCheckoutButton() {
  return (
    <div>
      <button
        type="button"
        className="btn btn-primary"
        onClick={() => stripeAPI()}
      >
        Checkout
      </button>
    </div>
  );
}

export default StripePayCheckoutButton;