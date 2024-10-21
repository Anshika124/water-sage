import React from 'react';

const TechniquesCard = ({ title, description, onClick }) => {

    let descriptionPreview = description;
    let word_list = descriptionPreview.split(" ").slice(0, 150)
    let desc = word_list.join(" ");
    // if (desc.length > 150) {
    //   desc = desc.slice(0, 150);
    // }
    if (word_list.length >= 500) {
        desc += "..."
    }
    

    return (
        <div className="technique-card" style={cardStyle} onClick={onClick}>
            <h1 style={titleStyle}>{title}</h1>
            <p style={descriptionStyle}>{desc}...<span style={readMoreStyle}>Read more</span></p>
        </div>
    );
};

// Inline styles
const cardStyle = {
    backgroundColor: '#D0F0FF',
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    marginBottom: '20px',
    width: '100%',
};

const titleStyle = {
    fontWeight: 'bold',
    fontSize: '25px',
    textAlign: 'center',
};

const descriptionStyle = {
    fontSize: '20px',
    textAlign: 'justify',
    color: '#555',
};

const readMoreStyle = {
    color: 'blue',
    cursor: 'pointer',
    fontSize: '16px',
};

export default TechniquesCard;
