import React from "react";
import "../styles/Factitem.css";

const Factitem = ({ fact, onClick }) => {
  return (
    <div className="fact-item" onClick={onClick}>
        <div className="fact-image">
        <img src={fact.image} alt={fact.title} />
      </div>
      <div className="fact-number">#{fact.id}</div>
      <div className="fact-title">{fact.title}</div>
      <div className="fact-arrow">→</div>
    </div>
  );
};

export default Factitem;
