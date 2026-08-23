import "./PTDC.css";
import PTDCImg from "../assets/PTDC.jpg";

function PTDC() {
    return (
        <section className="ptdc-section">

            {/* LEFT CONTENT */}
            <div className="ptdc-content">

                <h2 className="ptdc-title">
                    PTDC
                </h2>

                <h4 className="ptdc-subtitle">
                    Pakistan Tourism Development Corporation
                </h4>

                <p>
                    Pakistan Tourism Development Corporation (PTDC)
                    was incorporated on March 30, 1970, under the
                    repealed Companies Act 1913 (now the Companies
                    Ordinance, 1984) as a Public Corporation Limited
                    by shares.
                </p>

                <p>
                    PTDC is owned by the Government of Pakistan
                    (99.75% share). The principal objective of the
                    corporation is to promote and develop tourism
                    in Pakistan.
                </p>

            </div>


            {/* RIGHT IMAGE */}
            <div className="ptdc-image-container">

                <img
                    src={PTDCImg}
                    alt="Pakistan Tourism"
                    className="ptdc-image"
                />

            </div>

        </section>
    );
}

export default PTDC;