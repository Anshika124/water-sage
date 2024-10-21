import React, { useState } from 'react'
import TechniquesCard from '../components/TechniquesCard'
import '../styles/Techniques.css'

const techniquesData = [
  {
    title: 'Shorter Showers with Water-Saving Showerheads',
    description: 'Showers can be one of the most significant sources of water use in the home, but there are simple ways to reduce this. By taking shorter showers—cutting down from 10 minutes to 5 minutes—you can save up to 12 gallons of water per shower. In addition, installing a water-saving showerhead is a highly effective method to conserve water. These showerheads reduce the water flow rate while maintaining strong water pressure, which can cut water use by up to 50%. This combination of actions can save hundreds of gallons of water per month, making a substantial impact on your water consumption and utility bills.'
  },
  {
    title: 'Collecting Rainwater for Household Use',
    description: 'Rainwater harvesting is an ancient yet highly relevant method of water conservation in today’s world. By installing rain barrels or more complex rainwater harvesting systems, you can collect water from your roof during rainy periods and store it for later use. This collected water can be utilized for various non-potable purposes, such as watering gardens, washing cars, flushing toilets, or cleaning outdoor areas. In doing so, you reduce your dependence on municipal water systems and lower your water bills. Not only does rainwater collection save water, but it also helps prevent stormwater runoff, which can contribute to erosion and flooding in your local area.'
  },
  {
    title: 'Fixing Household Leaks Promptly',
    description: 'Household leaks can be incredibly wasteful, yet they often go unnoticed. A small drip from a leaky faucet may seem insignificant, but it can waste over 3,000 gallons of water a year. A constantly running toilet, which is one of the most common household leaks, can waste more than 200 gallons of water per day. Regular inspections of faucets, showerheads, and toilets are crucial for identifying leaks early. Fixing leaks not only saves water but also prevents damage to your home’s plumbing and reduces your utility bills. Simple fixes like replacing a washer or tightening a faucet handle can lead to significant water savings over time.'
  },
  {
    title: 'Using the Dishwasher and Washing Machine Efficiently',
    description: 'Both dishwashers and washing machines can be surprisingly efficient, but only when used properly. A dishwasher uses far less water than washing dishes by hand, provided it’s fully loaded before running. Modern dishwashers also have eco-settings that reduce water and energy consumption. Similarly, washing machines are more efficient when used with full loads, and many now come with water-saving features that adjust water levels based on load size. Switching to cold water washes can further reduce both water and energy usage. By making small adjustments in how you use these appliances, you can save thousands of gallons of water each year.'
  },
  {
    title: 'Turning Off the Tap During Daily Routines',
    description: 'It’s easy to overlook how much water we waste during simple daily tasks like brushing our teeth, washing dishes, or shaving. Leaving the tap running while brushing your teeth can waste up to 4 gallons of water in just a couple of minutes. By turning off the tap while you lather your hands, brush your teeth, or shave, you can significantly reduce water wastage. Similarly, filling a basin with water for washing dishes or shaving, instead of letting the water run, can lead to substantial water savings over time. These small habits, when practiced daily, contribute greatly to conserving water.'
  },
  {
    title: 'Using Watering Cans Instead of Hoses',
    description: 'Garden hoses can use a surprisingly large amount of water, especially when left running for extended periods. Using a watering can gives you more control over how much water you are applying and ensures that none is wasted. This is especially important for smaller garden areas or potted plants, where overwatering can lead to water runoff and soil erosion. Additionally, watering early in the morning or late in the evening reduces water loss due to evaporation, ensuring that your plants receive the necessary moisture with minimal waste. Installing drip irrigation systems in larger gardens can also help direct water to the roots of plants without wasting water on leaves or exposed soil.'
  },
  {
    title: 'Installing Water-Efficient Toilets',
    description: 'Older toilets are some of the most water-intensive fixtures in a home, using anywhere from 3.5 to 7 gallons of water per flush. By contrast, modern water-efficient toilets, including dual-flush models, use as little as 1.28 gallons per flush. This can result in a significant reduction in water usage over time, especially in households where toilets are flushed multiple times a day. Dual-flush toilets allow users to choose between a low flush for liquid waste and a full flush for solid waste, maximizing water efficiency. By replacing older toilets with these newer models, you can conserve thousands of gallons of water each year.'
  },
  {
    title: 'Smart Irrigation Systems for Gardens',
    description: 'Smart irrigation systems are a modern solution to conserving water in gardens and lawns. These systems use sensors to measure soil moisture levels, weather conditions, and evaporation rates to determine the optimal amount of water needed by plants. They adjust irrigation schedules automatically, ensuring that plants get the right amount of water without any waste. Unlike traditional sprinklers that water on a set schedule regardless of weather, smart irrigation systems only activate when the plants actually need water, reducing water consumption significantly. This not only conserves water but also promotes healthier plant growth by preventing overwatering.'
  },
  {
    title: 'Using Greywater for Non-Potable Uses',
    description: 'Greywater recycling is an innovative method of water conservation that involves reusing water from sinks, showers, and laundry for purposes like irrigation or flushing toilets. This treated greywater is safe for non-potable uses and can significantly reduce household water consumption. Installing a greywater system can cut water usage by up to 40%, especially in homes where a significant amount of water is used for gardening. By redirecting greywater for non-potable purposes, you not only conserve water but also reduce the burden on municipal water systems, making it a highly sustainable practice.'
  },
  {
    title: 'Mulching to Retain Soil Moisture',
    description: 'Mulching is a simple but effective way to conserve water in your garden. By covering the soil with organic mulch, such as bark chips, straw, or compost, you help the soil retain moisture, reducing the need for frequent watering. Mulch acts as a barrier, preventing water from evaporating and protecting plant roots from temperature fluctuations. It also improves soil structure and reduces erosion. Mulching can cut water usage by up to 50% in garden beds, making it an essential practice for maintaining a water-efficient landscape, particularly in dry or drought-prone areas.'
  }
];


function Techniques() {

  const [selectedTechnique, setSelectedTechnique] = useState(null);

  const showTechniqueDetails = (technique) => {
    setSelectedTechnique(technique);
  };

  const closeModal = () => {
    setSelectedTechnique(null);
  };

  return (
    <div style={pageStyle}>
      {techniquesData.map((technique, index) => (
        <TechniquesCard
          key={index}
          title={technique.title}
          description={technique.description}
          onClick={() => showTechniqueDetails(technique)}
        />
      ))}


      {/* Modal rendering logic */}
      {selectedTechnique && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>&times;</span>
            <h2 style={{ backgroundColor:'#248DC5', padding: '20px 0px 20px 20px', color:'white'}}>{selectedTechnique.title}</h2>
            <p style={{ padding: ' 0px 20px 20px 20px' }}>{selectedTechnique.description}</p>
          </div>
        </div>
      )}

    </div>
  )
}

const pageStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '70px 20px 20px 20px',

};

export default Techniques