import React from 'react';
import './PublicNotices.css'; // Import the CSS file

// Mock data based on the screenshot
const noticesData = [
  {
    id: 1,
    highlight: "Tender Advertisement-",
    text: " Printing of Publicity Material",
    fileLink: "/pdfs/advertisement-printing-publicity-material.pdf"
  },
  {
    id: 2,
    highlight: "Tender Document-",
    text: " Printing of Publicity Material",
    fileLink: "/pdfs/notice2.pdf"
  },
  {
    id: 3,
    highlight: "Tender Advertisement-",
    text: " Procurement of SMD's/Digital Standees and Laptops",
    fileLink: "/pdfs/notice3.pdf"
  },
  {
    id: 4,
    highlight: "Tender Document-",
    text: " Procurement of SMD's/Digital Standees and Laptops",
    fileLink: "/pdfs/notice4.pdf"
  },
  {
    id: 5,
    highlight: "Auction of Office Items-",
    text: " Auction of Office Items",
    fileLink: "/pdfs/notice5.pdf"
  },
  {
    id: 6,
    highlight: "Advertisement (Tender Notice) -",
    text: " Outsourcing of Flashman's Hotel Rawalpindi",
    fileLink: "/pdfs/notice6.pdf"
  },
  {
    id: 7,
    highlight: "Tender Document | Invition to Bids regarding Outsourcing of Flashman's Hotel Rawalpindi",
    text: "",
    fileLink: "/pdfs/notice7.pdf"
  },
  {
    id: 8,
    highlight: "Tender Notice advertisement -",
    text: " Tender notice for printing booklets and publicity materials!",
    fileLink: "/pdfs/notice8.pdf"
  },
  {
    id: 9,
    highlight: "Tender Document for Provision of Services for Printing / Re Printing of Publicity Material",
    text: "",
    fileLink: "/pdfs/notice9.pdf"
  },
  {
    id: 10,
    highlight: "Auction Of Vehicle -",
    text: " PTDC vehicle auction",
    fileLink: "/pdfs/notice10.pdf"
  },
  {
    id: 11,
    highlight: "Prequalification Document -",
    text: " PTDC's Lands in Gilgit Baltistan",
    fileLink: "/pdfs/notice11.pdf"
  },
  {
    id: 12,
    highlight: "Advertisement -",
    text: " PTDC Lands in Gilgit Baltistan",
    fileLink: "/pdfs/notice12.pdf"
  },
  {
    id: 13,
    highlight: "Updated - Invitation for Open Competitive Financial Bidding",
    text: " for PTDC Properties",
    fileLink: "/pdfs/notice13.pdf"
  },
  {
    id: 14,
    highlight: "Invitation for Open Competitive Financial Bidding",
    text: " for Flashman's Hotel Rawalpindi",
    fileLink: "/pdfs/notice14.pdf"
  }
];

const PublicNotices = () => {
  return (
    <div className="notices-container">
      <h2 className="notices-main-title">Public Notices (Tenders & Advertisements)</h2>

      <div className="table-responsive">
        <table className="notices-table">
          <thead>
            <tr>
              <th className="col-sr-no">Sr.<br/>No.</th>
              <th className="col-notice">
                Tender Notices &nbsp;&nbsp;&nbsp; <span>(Forms & ToR's)</span>
              </th>
              <th className="col-details">View Details</th>
            </tr>
          </thead>
          <tbody>
            {noticesData.map((notice) => (
              <tr key={notice.id}>
                {/* Using the "Fisheye" unicode character to match the bullet point in the image */}
                <td className="col-sr-no icon-cell">&#9673;</td>
                <td className="col-notice">
                  <span className="notice-highlight">{notice.highlight}</span>
                  {notice.text && <span className="notice-text">{notice.text}</span>}
                </td>
                <td className="col-details">
                  <a 
                    href={notice.fileLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="download-btn"
                    download // Suggests the browser to download the file instead of just opening it
                  >
                    Download
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PublicNotices;