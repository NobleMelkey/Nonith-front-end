import React, { useState } from "react";
import './MobileNumberModal.css';

const MobileNumberModal = ({ onClose }) => {
  const [mobileNumber, setMobileNumber] = useState("");
  const [showOffer, setShowOffer] = useState(false);

  const handleSend = () => {
    setShowOffer(true);
  };

  const handleClose = () => {
    setShowOffer(false);
    onClose();
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Enter Your Mobile Number</h2>
        <input
          type="text"
          placeholder="Mobile Number"
          value={mobileNumber}
          onChange={(e) => setMobileNumber(e.target.value)}
        />
        <button onClick={handleSend}>Send</button>
        <button onClick={onClose}>Cancel</button>
        {showOffer && (
          <div className="offer-message">
            <p>Ayyo.. you got a Flat 50% offer</p>
            <button onClick={handleClose}>Close</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default MobileNumberModal;
