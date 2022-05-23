import React from 'react'
import { stripeAPI } from "../fetch/stripeAPI";

function StripePayCheckoutButton() {
  return (
    <div className="text-reset me-4">
      <i className="fas fa-shopping-cart" onClick={() => stripeAPI()}></i>
    </div>
  );
}

export default StripePayCheckoutButton;