import React, { useRef } from "react";
import "../styles/Factdetails.css";

const Factdetails = ({ fact, onClose }) => {
  const canvasRef = useRef(null);

  const downloadImageWithText = () => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const image = new Image();
    image.src = fact.image;

    image.onload = () => {
      // Set canvas dimensions to match the image
      canvas.width = image.width;
      canvas.height = image.height;

      // Draw the image on the canvas
      ctx.drawImage(image, 0, 0, canvas.width, canvas.height);

      // Add styles for the text
      ctx.fillStyle = "white";
      ctx.font = `${canvas.width * 0.05}px Arial`; // Font size based on image width
      ctx.textAlign = "center";
      ctx.textBaseline = "top"; // Align text from the top
      ctx.shadowColor = "black"; // Add a shadow for readability
      ctx.shadowBlur = 8;

      // Calculate positions for text to fit within the image
      const titleY = canvas.height * 0.2; // 20% down the height for title
      const descY = canvas.height * 0.5; // 50% down the height for description

      // Draw the title text in the middle of the image
      ctx.fillText(fact.title, canvas.width / 2, titleY);

      // Draw the description text below the title
      ctx.font = `${canvas.width * 0.04}px Arial`; // Smaller font for description
      ctx.fillText(fact.description, canvas.width / 2, descY);

      // Create the download link
      const link = document.createElement("a");
      link.href = canvas.toDataURL("image/jpeg");
      link.download = `fact-with-text-${fact.id}.jpg`;
      link.click();
    };
  };

  return (
    <div className="fact-details">
      <div className="fact-content-container">
        {/* Image */}
        <img src={fact.image} alt={fact.title} className="fact-image" />

        {/* Content overlay on top of the image */}
        <div className="fact-content-overlay">
          <h2>Facts of the Day</h2>
          <h3>#{fact.id}</h3>
          <p>{fact.title}</p>
          <p>{fact.description}</p>
        </div>

        {/* Canvas element for drawing the image and text */}
        <canvas ref={canvasRef} style={{ display: "none" }}></canvas>

        {/* Download button */}
        <button onClick={downloadImageWithText} className="download-button">
          Download Image 
        </button>

        <button onClick={onClose} className="close-button">
          Close
        </button>
      </div>
    </div>
  );
};

export default Factdetails;
