import React, { useState } from 'react';
import '../styles/Home.css';

// Single FAQ Component
const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  // Toggle FAQ visibility
  const toggleFAQ = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="faq-item">
      <div className="faq-question" onClick={toggleFAQ}>
        <h3>{question}</h3>
        <span className={`faq-arrow ${isOpen ? 'open' : ''}`}>&#9660;</span> {/* Down arrow */}
      </div>
      {isOpen && <div className="faq-answer"><p>{answer}</p></div>}
    </div>
  );
};

// FAQ Section Component
const FAQ = () => {
  const faqData = [
    {
      question: "What is water conservation?",
      answer: "Water conservation is the practice of using water efficiently to reduce unnecessary water usage. It involves strategies, technologies, and behaviors aimed at preserving water resources. With growing populations and climate change, water conservation has become increasingly important. Examples include reducing water wastage, reusing water, implementing efficient irrigation techniques, and protecting natural water ecosystems. Proper water conservation ensures that there will be sufficient resources for future generations, helping balance the growing demand for water with its limited supply."
    },
    {
      question: "Why is water conservation important?",
      answer: "Water conservation is critical for ensuring a sustainable water supply for future generations. The global demand for freshwater is increasing due to population growth, industrial activities, and agriculture, while the supply of freshwater remains finite. Conserving water helps mitigate the impacts of droughts, protects water ecosystems, and reduces the energy needed for water treatment and distribution. It also helps prevent water scarcity in regions that are vulnerable to climate change. Efficient water use is vital to support economic development, maintain healthy ecosystems, and provide communities with a stable water supply."
    },
    {
      question: "How can I conserve water at home?",
      answer: "There are several effective ways to conserve water at home. First, fixing leaks in faucets, toilets, and pipes can save a significant amount of water. Installing water-efficient fixtures like low-flow showerheads and dual-flush toilets also helps reduce consumption. Limiting the duration of showers, turning off the tap while brushing your teeth, and only running washing machines and dishwashers with full loads are simple habits that save water. Using native, drought-tolerant plants in your garden and implementing drip irrigation systems further reduces outdoor water use. Harvesting rainwater for irrigation and household use is another excellent strategy."
    },
    {
      question: "What is rainwater harvesting?",
      answer: "Rainwater harvesting involves collecting and storing rainwater from surfaces like roofs to be reused for various purposes. The collected rainwater can be used for irrigation, flushing toilets, and even potable uses when properly filtered and treated. This method is particularly useful in regions with limited access to fresh groundwater or where seasonal rainfall patterns make water supply inconsistent. By reducing dependency on groundwater or municipal water systems, rainwater harvesting conserves vital water resources and provides a reliable alternative, especially in times of drought. It also helps reduce stormwater runoff, which can mitigate flooding and erosion."
    },
    {
      question: "How does drip irrigation help conserve water?",
      answer: "Drip irrigation is a highly efficient method of delivering water directly to the plant roots through a network of valves, pipes, and emitters. Unlike traditional irrigation systems, which water the entire soil surface, drip irrigation minimizes evaporation and runoff by targeting only the root zone. This method significantly reduces water wastage and is particularly effective in arid and semi-arid regions where water is scarce. Drip irrigation also improves crop yields by providing a consistent moisture supply, reduces weed growth, and enhances soil health by preventing overwatering. It’s a key technology in modern agriculture aimed at conserving water."
    },
    {
      question: "What are the causes of water scarcity?",
      answer: "Water scarcity arises due to a combination of natural and human-induced factors. Overpopulation increases the demand for water, while over-extraction depletes available resources faster than they can be replenished. Pollution from industrial waste, agriculture runoff, and untreated sewage contaminates freshwater sources, making them unusable. Climate change exacerbates these problems by altering precipitation patterns, leading to prolonged droughts and shrinking glaciers that serve as critical water reserves. Poor water management practices, such as inefficient irrigation and lack of infrastructure for wastewater treatment, further contribute to scarcity. In regions with political instability, access to clean water is often restricted due to conflict over shared water resources."
    },
    {
      question: "What are some global solutions to combat water scarcity?",
      answer: "Several solutions have been developed to address global water scarcity. Desalination, the process of removing salt from seawater, provides a new source of freshwater in coastal areas. Water recycling and reuse systems, such as greywater recycling, treat wastewater for non-drinking purposes like irrigation or industrial use. Efficient irrigation methods like drip irrigation and sprinkler systems significantly reduce water usage in agriculture. Rainwater harvesting and better watershed management help collect and store rainwater for future use. On a policy level, governments are implementing water-saving regulations, pricing water more appropriately to reduce waste, and promoting public awareness campaigns on conservation."
    },
    {
      question: "How can industries reduce water consumption?",
      answer: "Industries can reduce water consumption through a combination of technological innovations, process optimization, and water recycling. One approach is to adopt water-efficient technologies, such as closed-loop cooling systems that reuse water rather than discharge it after one use. Wastewater recycling allows industries to treat and reuse their own wastewater, reducing the need for fresh water. Optimizing industrial processes to use less water during production can also lead to significant reductions in water consumption. Regular maintenance of equipment to prevent leaks and adopting sustainable practices, such as using alternative water sources like greywater, are key steps industries can take to minimize their water footprint."
    },
    {
      question: "What role do governments play in solving water scarcity?",
      answer: "Governments play a critical role in addressing water scarcity through regulation, policy-making, and infrastructure development. They are responsible for creating laws and policies that promote sustainable water use, such as setting limits on water withdrawals, implementing tariffs to discourage excessive use, and protecting water ecosystems. Governments also invest in infrastructure for water storage, treatment, and distribution, which is essential for managing water resources effectively. In addition, governments can facilitate international cooperation on transboundary water issues and fund research and development in water-saving technologies. Public awareness campaigns initiated by governments also play a key role in educating citizens about water conservation."
    },
    {
      question: "How does climate change affect water availability?",
      answer: "Climate change has a profound impact on water availability. It alters weather patterns, causing more extreme conditions such as prolonged droughts or intense rainfall, which can lead to flooding. Melting glaciers and reduced snowpack, which serve as natural water storage, reduce the long-term availability of freshwater in regions that depend on them. Rising temperatures increase evaporation rates, depleting surface water and soil moisture. Additionally, rising sea levels can lead to the intrusion of saltwater into freshwater systems, particularly in coastal areas, contaminating the water supply. Overall, climate change disrupts the balance of the water cycle, exacerbating water scarcity."
    },
    {
      question: "What are some innovative technologies being used to address water scarcity?",
      answer: "Several innovative technologies are being developed to combat water scarcity. Desalination technology, which converts seawater into drinkable water, is becoming increasingly efficient and affordable. Smart water management systems use sensors and data analytics to monitor and optimize water usage in real-time, helping to reduce waste and improve efficiency. Wastewater treatment and recycling technologies allow for the purification and reuse of water that would otherwise be discarded. In agriculture, AI-driven systems can predict optimal watering times based on weather forecasts and soil conditions, further conserving water. Atmospheric water generators, which extract moisture from the air, are also an emerging technology aimed at providing water in arid regions."
    }
  ];

  return (
    <div className="faq-section">
      <h2>FAQs on Water Conservation</h2>
      {faqData.map((faq, index) => (
        <FAQItem key={index} question={faq.question} answer={faq.answer} />
      ))}
    </div>
  );
};


// Info Component (About Us, Contact Us, Terms, etc.)
const InfoSection = () => {
  return (
    <div className="info-section">
      <h2>About Us</h2> {/* Heading should be clearly visible */}
      <p>WaterSage is a platform dedicated to spreading knowledge about water conservation techniques and creating awareness about water scarcity issues globally.</p>
      
      <h3>Contact Us</h3>
      <p>Email: contact@watersage.com</p>
      <p>Phone: +123-456-7890</p>

      <h3>Terms of Use</h3>
      <p>By using this platform, you agree to our terms and conditions, ensuring responsible use of the shared resources and content.</p>

      <h3>Privacy Policy</h3>
      <p>We are committed to protecting your privacy. Your information will be handled in accordance with our privacy policy.</p>
    </div>
  );
};

// HomePage Component
const Home = () => {
  return (
    <div className="home-page">
      <div className="half-page faq">
        <FAQ />
      </div>
      <div className="half-page info">
        <InfoSection />
      </div>
    </div>
  );
};

export default Home;