import React, { useState } from "react";
import FactItem from "./Factitem";
import FactDetails from "./Factdetails";
import "../styles/Factoftheday.css";

const facts = [
  {
    id: 1,
    title: "Turn off the water while you brush your teeth",
    description: "Save up to 4 gallons a minute. That's up to 200 gallons a week for a family of four.",
   image:require("../assets/11.jpg") ,
  },
  {
    id: 2,
    title: "Install an instant water heater",
    description: "You don’t have to run the water while it heats up, reducing energy costs.",
  image: require("../assets/12.jpg"),
  },
  {
    id: 3,
    title: "Use the garbage disposal sparingly",
    description: "Compost vegetable food waste and save gallons every time.",
  image: require("../assets/15.jpg"),
  },
];

const Factoftheday = () => {
  const [selectedFact, setSelectedFact] = useState(null);

  const handleFactClick = (fact) => {
    setSelectedFact(fact);
  };

  return (
    <div className="fact-of-the-day">
      <h1>Fact of the Day</h1>
      <p>
      Water is one of the most precious resources on our planet, and conserving it is crucial for sustaining life and the environment. In this section, we bring you insightful facts and tips about water conservation, helping you understand the small changes we can make to protect and preserve water for future generations. Let’s explore a new fact each day to raise awareness and take steps towards a sustainable future!
      </p>

      <div className="view-toggle">
        <button>Grid View</button> | <button>List View</button>
      </div>

      <div className="facts-grid">
        {facts.map((fact) => (
          <FactItem key={fact.id} fact={fact} onClick={() => handleFactClick(fact)} />
        ))}
      </div>

      {selectedFact && (
        <div className="fact-details-overlay">
          <FactDetails fact={selectedFact} onClose={() => setSelectedFact(null)} />
        </div>
      )}
    </div>
  );
};

export default Factoftheday;
