import React, { useEffect, useState } from 'react';
import './PublicNotices.css';

const PublicNotices = () => {

  const [notices, setNotices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {

    const fetchPublicNotices = async () => {

      try {

        const response = await fetch(
          "http://localhost:5000/api/publicNotices"
        );

        if (!response.ok) {
          throw new Error("Failed to fetch public notices");
        }

        const data = await response.json();

        setNotices(data);

      } catch (error) {

        console.error("Error fetching public notices:", error);

        setError("Unable to load public notices.");

      } finally {

        setLoading(false);

      }
    };

    fetchPublicNotices();

  }, []);

  return (
    <div className="notices-container">

      <h2 className="notices-main-title">
        Public Notices (Tenders & Advertisements)
      </h2>

      {/* Loading */}

      {loading && (
        <div className="notices-loading">
          Loading public notices...
        </div>
      )}

      {/* Error */}

      {error && (
        <div className="notices-error">
          {error}
        </div>
      )}

      {/* Table */}

      {!loading && !error && (

        <div className="table-responsive">

          <table className="notices-table">

            <thead>

              <tr>

                <th className="col-sr-no">
                  Sr.<br />No.
                </th>

                <th className="col-notice">
                  Tender Notices &nbsp;&nbsp;&nbsp;
                  <span>(Forms & ToR's)</span>
                </th>

                <th className="col-details">
                  View Details
                </th>

              </tr>

            </thead>

            <tbody>

              {notices.map((notice, index) => (

                <tr key={notice._id}>

                  <td className="col-sr-no icon-cell">
                    &#9673;
                  </td>

                  <td className="col-notice">

                    <span className="notice-highlight">
                      {notice.highlight}
                    </span>

                    {notice.text && (
                      <span className="notice-text">
                        {notice.text}
                      </span>
                    )}

                  </td>

                  <td className="col-details">

                    <a
                      href={notice.fileLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="download-btn"
                      
                    >
                      Download
                    </a>

                  </td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>

      )}

      {/* No notices */}

      {!loading && !error && notices.length === 0 && (

        <div className="no-notices">
          No public notices available.
        </div>

      )}

    </div>
  );
};

export default PublicNotices;