import "./NTCB.css";
import ntcbImage from "../assets/NTCB.jpg";

function NTCB() {
    return (
        <section className="ntcb-section">

            {/* LEFT IMAGE */}
            <div className="ntcb-image-container">
                <img
                    src={ntcbImage}
                    alt="National Tourism Coordination Board"
                    className="ntcb-image"
                />
            </div>


            {/* RIGHT CONTENT */}
            <div className="ntcb-content">

                <h2 className="ntcb-title">
                    NTCB
                </h2>

                <h4 className="ntcb-subtitle">
                    National Tourism Coordination Board
                </h4>

                <p>
                    Tourism is a focused area of the present government.
                    Several initiatives are being undertaken to garner
                    the potential offered by the tourism industry. To
                    develop and enhance coordination with provinces,
                    federal ministries, and private actors, policies,
                    strategies and frameworks are being developed to
                    promote tourism nationally and internationally.
                </p>

                <p>
                    The National Tourism Coordination Board (NTCB)
                    has been constituted to coordinate tourism
                    development and promote Pakistan as a tourism
                    destination.
                </p>

               

            </div>

        </section>
    );
}

export default NTCB;