import React, { useState } from 'react';

const EventPayment = ({ handleBooking }) => {
  const [paymentMethod, setPaymentMethod] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [paymentCode, setPaymentCode] = useState('');
  const [cardDetails, setCardDetails] = useState({
    cardNumber: '',
    cardHolderName: '',
    expirationDate: '',
    cvv: ''
  });
  const [isEventBooked, setIsEventBooked] = useState(false);

  const handlePaymentMethodChange = (method) => {
    setPaymentMethod(method);
  };

  const handleContactNumberChange = (e) => {
    setContactNumber(e.target.value);
  };

  const handlePaymentCodeChange = (e) => {
    setPaymentCode(e.target.value);
  };

  const handleCardDetailsChange = (e) => {
    const { name, value } = e.target;
    setCardDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value
    }));
  };

  const handlePaymentSubmit = (e) => {
    e.preventDefault();

    if (paymentMethod === 'Mpesa' && contactNumber && paymentCode) {
      // Process Mpesa payment
      // ...
      setIsEventBooked(true);
      handleBooking(); // Call the handleBooking function from the parent component
    } else if (paymentMethod === 'Card' && validateCardDetails()) {
      // Process Card payment
      // ...
      setIsEventBooked(true);
      handleBooking(); // Call the handleBooking function from the parent component
    }
  };

  const validateCardDetails = () => {
    // Implement card details validation logic here
    // Return true if card details are valid, false otherwise
    // ...
  };

  return (
    <div>
      {!isEventBooked ? (
        <form onSubmit={handlePaymentSubmit}>
          <div>
            <label htmlFor="paymentMethod">Payment Method:</label>
            <select
              id="paymentMethod"
              value={paymentMethod}
              onChange={(e) => handlePaymentMethodChange(e.target.value)}
            >
              <option value="">Select payment method</option>
              <option value="Mpesa" className={paymentMethod === 'Mpesa' ? 'bold' : ''}>
                Mpesa
              </option>
              <option value="Card" className={paymentMethod === 'Card' ? 'bold' : ''}>
                Card
              </option>
            </select>
          </div>

          {paymentMethod === 'Mpesa' && (
            <div>
              <label htmlFor="contactNumber">Contact Number:</label>
              <input type="text" id="contactNumber" value={contactNumber} onChange={handleContactNumberChange} />
              <br />
              <label htmlFor="paymentCode">Payment Code:</label>
              <input type="text" id="paymentCode" value={paymentCode} onChange={handlePaymentCodeChange} />
            </div>
          )}

          {paymentMethod === 'Card' && (
            <div>
              <label htmlFor="cardNumber">Card Number:</label>
              <input
                type="text"
                id="cardNumber"
                name="cardNumber"
                value={cardDetails.cardNumber}
                onChange={handleCardDetailsChange}
              />
              <br />
              <label htmlFor="cardHolderName">Card Holder Name:</label>
              <input
                type="text"
                id="cardHolderName"
                name="cardHolderName"
                value={cardDetails.cardHolderName}
                onChange={handleCardDetailsChange}
              />
              <br />
              <label htmlFor="expirationDate">Expiration Date:</label>
              <input
                type="text"
                id="expirationDate"
                name="expirationDate"
                value={cardDetails.expirationDate}
                onChange={handleCardDetailsChange}
              />
              <br />
              <label htmlFor="cvv">CVV:</label>
              <input
                type="text"
                id="cvv"
                name="cvv"
                value={cardDetails.cvv}
                onChange={handleCardDetailsChange}
              />
            </div>
          )}

          <button className="bg-rose-600 rounded-lg p-2 text-white mt-4" type="submit">
            Confirm Payment
          </button>
        </form>
      ) : (
        <p>Event booked successfully!</p>
      )}
    </div>
  );
};

export default EventPayment;
