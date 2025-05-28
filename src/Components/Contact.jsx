import "./Contact.css";
import { useState } from "react";
import { MyContact } from "../Data/MyContact";
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaDownload,
  FaEye,
} from "react-icons/fa";

const Contact = () => {
  const [selected, setSelected] = useState("connect");
  const [type, setType] = useState("text");

  const subtitleMap = {
    connect: "Let's Talk for Your Next Projects",
    hiring: "Hiring Opportunity - Let's Collaborate",
    freelance: "Freelance Projects - Let's Work Together",
  };

  const renderInputs = () => {
    switch (selected) {
      case "connect":
        return (
          <>
            <div className="form-group">
              <input type="text" placeholder="Your Name *" required />
            </div>
            <div className="form-group">
              <input type="email" placeholder="Your Email *" required />
            </div>
            <div className="form-group">
              <input type="text" placeholder="Your Contact *" required />
            </div>
            <div className="form-group">
              <input placeholder="Say Hello" rows="4"></input>
            </div>
            <button className="submit-btn" type="submit">
              Submit
            </button>
          </>
        );

      case "hiring":
        return (
          <>
            <div className="form-group">
              <a
                href={MyContact[0].mypdf}
                download="Samuvel_Reegan_Resume.pdf"
                className="resume-btn download-btn"
                title="Download Resume"
              >
                <FaDownload /> Download Resume
              </a>
            </div>
            <div className="form-group">
              <a
                href="/resume"
                target="_blank"
                rel="noopener noreferrer"
                className="resume-btn view-btn"
                title="View Resume"
              >
                <FaEye /> View Resume
              </a>
            </div>
            <div className="form-group">
              <input type="text" placeholder="Your Email *" required />
            </div>
            <div className="form-group">
              <input type="text" placeholder="Your Contact" />
            </div>
            <div className="form-group">
              <input type="text" placeholder="Start Package (LPA) *" required />
            </div>
            <div className="form-group">
              <input type="text" placeholder="End Package (LPA) *" required />
            </div>
            <div className="form-group">
              <input
                type={type}
                onFocus={() => setType("date")}
                onBlur={(e) => {
                  if (!e.target.value) setType("text");
                }}
                placeholder="Joining Date *"
                required
              />
            </div>
            <div className="form-group">
              <select required>
                <option value="">Bond Type *</option>
                <option value="bond">Bond</option>
                <option value="unbound">Unbound</option>
              </select>
            </div>
            <div className="form-group">
              <input type="text" placeholder="Company Name *" required />
            </div>
            <div className="form-group">
              <input type="text" placeholder="Company Location *" required />
            </div>

            {/* <div className="form-group resume-btn-group">
            

            </div> */}

            <button className="submit-btn" type="submit">
              Submit
            </button>
          </>
        );

      case "freelance":
        return (
          <>
            <div className="form-group">
              <input type="text" placeholder="Your Name *" required />
            </div>
            <div className="form-group">
              <input type="email" placeholder="Your Email *" required />
            </div>
            <div className="form-group">
              <input type="number" placeholder="Your Contact*" required />
            </div>
            <div className="form-group">
              <input
                type={type}
                onFocus={() => setType("date")}
                onBlur={(e) => {
                  if (!e.target.value) setType("text");
                }}
                placeholder="Project End Date *"
                required
              />
            </div>
            <div className="form-group">
              <input type="text" placeholder="Project Title *" required />
            </div>
            <div className="form-group">
              <input type="text" placeholder="Requirements *" required />
            </div>
            <div className="form-group">
              <input type="text" placeholder="Budget *" required />
            </div>
            <div className="form-group">
              <input type="text" placeholder="Your Message " />
            </div>
            <button className="submit-btn" type="submit">
              Submit
            </button>
          </>
        );

      default:
        return null;
    }
  };

  return (
    <div className="contact-wrapper">
      <div className="contact-left">
        <h2 style={{ color: "var(--text-color)" }}>- Contact Me</h2>
        <h3 style={{ fontSize: "2.5rem", color: "var(--btn-bg-color)" }}>
          {subtitleMap[selected]}
        </h3>
<p style={{flexWrap:"wrap" , color: "var(--text-color)"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores voluptatum, delectus itaque eveniet atque explicabo excepturi in aspernatur commodi facere optio amet magni eius obcaecati sunt. Maiores veritatis tenetur officiis!</p>
        <div className="contact-info">
  <p>
    <FaPhone className="icon" />{" "}
    <a
      href={`tel:${MyContact[0].phone}`}
      className="contact-link"
    >
      {MyContact[0].phone}
    </a>
  </p>
  <p>
    <FaEnvelope className="icon" />{" "}
    <a
      href={`https://mail.google.com/mail/?view=cm&fs=1&to=${MyContact[0].email}`}
      target="_blank"
      rel="noopener noreferrer"
      className="contact-link"
    >
      {MyContact[0].email}
    </a>
  </p>
  <p>
    <FaMapMarkerAlt className="icon" />{" "}
    <a
      href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(MyContact[0].address)}`}
      target="_blank"
      rel="noopener noreferrer"
      className="contact-link"
    >
      {MyContact[0].address}
    </a>
  </p>
</div>

      </div>

      <div className="contact-right">
        <div className="button-group">
          <button
            className={selected === "connect" ? "active" : ""}
            onClick={() => setSelected("connect")}
          >
            Contact to Connect
          </button>
          <button
            className={selected === "hiring" ? "active" : ""}
            onClick={() => setSelected("hiring")}
          >
            Hiring
          </button>
          <button
            className={selected === "freelance" ? "active" : ""}
            onClick={() => setSelected("freelance")}
          >
            Freelancing
          </button>
        </div>

        <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
          {renderInputs()}
        </form>
      </div>
    </div>
  );
};

export default Contact;
