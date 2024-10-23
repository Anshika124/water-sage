import React from "react";
import "../styles/Factdetails.css";

const Factdetails = ({ fact, onClose }) => {
  return (
    <div className="fact-details">
     
      <div className="fact-content">
        <h2>Facts of the day</h2>
        <h3>#{fact.id}</h3>
        
        <p>{fact.title}</p>
        <p>{fact.description}</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default Factdetails;
