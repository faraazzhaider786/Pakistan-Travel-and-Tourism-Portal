import React from 'react';
import './Publications.css'; // Import your standard CSS file

// Mock data: Update 'image' and 'pdfLink' with your actual file paths
const publicationsData = [
  {
    id: 1,
    title: "Pakistan Tourism Barometer 2025-26",
    image: "/images/barometer-25.jpg", 
    pdfLink: "/pdfs/barometer-2025-26.pdf", 
    fallbackColor: "#2F6B34" // Greens/Yellows used as fallback if image fails
  },
  {
    id: 2,
    title: "Pakistan Tourism Barometer 2024-25",
    image: "/images/barometer-24.jpg", 
    pdfLink: "/pdfs/barometer-2024-25.pdf",
    fallbackColor: "#2F6B34"
  },
  {
    id: 3,
    title: "Tourism in Pakistan",
    image: "/images/tourism-pakistan.jpg",
    pdfLink: "/pdfs/tourism-in-pakistan.pdf",
    fallbackColor: "#4A7A38"
  },
  {
    id: 4,
    title: "ECO Tourism in Pakistan",
    image: "/images/eco-tourism.jpg",
    pdfLink: "/pdfs/eco-tourism.pdf",
    fallbackColor: "#244C33"
  },
  {
    id: 5,
    title: "Pakistan's Sikh Heritage Trail",
    image: "/images/sikh-heritage.jpg",
    pdfLink: "/pdfs/sikh-heritage.pdf",
    fallbackColor: "#0D7A74"
  },
  {
    id: 6,
    title: "Buddhist Heritage Trail",
    image: "/images/buddhist-heritage.jpg",
    pdfLink: "/pdfs/buddhist-heritage.pdf",
    fallbackColor: "#A38626"
  },
  {
    id: 7,
    title: "Taxila Sites",
    image: "/images/taxila.jpg",
    pdfLink: "/pdfs/taxila-sites.pdf",
    fallbackColor: "#A38626"
  },
  {
    id: 8,
    title: "World Heritage Sites in Pakistan",
    image: "/images/world-heritage.jpg",
    pdfLink: "/pdfs/world-heritage.pdf",
    fallbackColor: "#0B6661"
  },
  {
    id: 9,
    title: "Rock Art Tourism in Pakistan",
    image: "/images/rock-art.jpg", // Replace with actual image path
    pdfLink: "/pdfs/rock-art-tourism.pdf", // Replace with actual PDF path
    fallbackColor: "#756B53", 
    buttonText: "Read Me >>"
  },
  {
    id: 10,
    title: "Mountaineering & Trekking in Pakistan",
    image: "/images/mountaineering.jpg",
    pdfLink: "/pdfs/mountaineering-trekking.pdf",
    fallbackColor: "#395736",
    buttonText: "Read Me >>"
  },
  {
    id: 11,
    title: "PTDC Newsletter 2022",
    image: "/images/ptdc-2022.jpg",
    pdfLink: "/pdfs/ptdc-newsletter-2022.pdf",
    fallbackColor: "#186954",
    buttonText: "Read Me >>"
  },
  {
    id: 12,
    title: "PTDC Newsletter 2021",
    image: "/images/ptdc-2021.jpg",
    pdfLink: "/pdfs/ptdc-newsletter-2021.pdf",
    fallbackColor: "#30465C",
    buttonText: "Read Me >>"
  },
  {
    id: 13,
    title: "Northern Pakistan Guide Map",
    image: "/images/northern-pakistan.jpg",
    pdfLink: "/pdfs/northern-pakistan-guide.pdf",
    fallbackColor: "#173A91",
    buttonText: "Read Me >>"
  },
  {
    id: 14,
    title: "Pakistan Guide Map",
    image: "/images/pakistan-guide.jpg",
    pdfLink: "/pdfs/pakistan-guide.pdf",
    fallbackColor: "#112635",
    buttonText: "Read More >>" // Updated to match the specific text on this card
  }
];

const Publications = () => {
  return (
    <div className="publications-section">
      <h2 className="publications-header">Publications</h2>

      <div className="publications-grid">
        {publicationsData.map((pub) => (
          <div 
            key={pub.id} 
            className="publication-card"
            style={{
              // Apply the background image dynamically
              backgroundImage: `url(${pub.image})`,
              backgroundColor: pub.fallbackColor
            }}
          >
            {/* Dark gradient for text readability */}
            <div className="card-overlay"></div>

            {/* Text and Link Container */}
            <div className="card-content">
              <h3 className="card-title">{pub.title}</h3>
              
              {/* Using standard <a> tag with target="_blank" to open PDF */}
              <a 
                href={pub.pdfLink}
                target="_blank" 
                rel="noopener noreferrer"
                className="read-me-btn"
              >
                Read Me {'> >'}
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Publications;