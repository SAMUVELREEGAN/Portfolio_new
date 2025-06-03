import "./Contact.css";
import { useState, useContext, useRef } from "react";
import { MyContext } from "../Context/MyContext";
import pddf from '../assets/SAM _Node & Python.pdf'
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaDownload,
  FaEye,
} from "react-icons/fa";
import axios from "axios";

const Contact = () => {
  const { MyContact } = useContext(MyContext);
  const [selected, setSelected] = useState("connect");
  const [type, setType] = useState("text");
  const formRef = useRef();
  const [userMessage, setUserMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [bondType, setBondType] = useState("");

  // Function to get CSRF token from cookies
  function getCookie(name) {
    let cookieValue = null;
    if (document.cookie && document.cookie !== "") {
      const cookies = document.cookie.split(";");
      for (let c of cookies) {
        const cookie = c.trim();
        if (cookie.startsWith(name + "=")) {
          cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
          break;
        }
      }
    }
    return cookieValue;
  }

  const csrfToken = getCookie("csrftoken");

  const subtitleMap = {
    connect: "Let's Talk for Your Next Projects",
    hiring: "Hiring Opportunity - Let's Collaborate",
    freelance: "Freelance Projects - Let's Work Together",
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(formRef.current);
    const data = {};

    for (let [key, value] of formData.entries()) {
      data[key] = value;
    }

    data.type = selected;

    try {
      setLoading(true);
      setUserMessage("");

      const response = await axios.post(
        "/api/mycontact/contact/",
        data,
        { headers: { "Content-Type": "application/json" } }
      );

      if (response.data.success) {
        setUserMessage("Your message has been sent successfully.");
        formRef.current.reset();
      } else {
        setUserMessage("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Submission error:", error);
      setUserMessage("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const renderInputs = () => {
    switch (selected) {
      case "connect":
        return (
          <>
            <div className="form-group">
              <input name="name" type="text" placeholder="Your Name *" required />
            </div>
            <div className="form-group">
              <input name="email" type="email" placeholder="Your Email *" required />
            </div>
            <div className="form-group">
              <input name="contact" type="text" placeholder="Your Contact *" required />
            </div>
            <div className="form-group">
              <input name="message" placeholder="Say Hello" rows="4" />
            </div>
            <button className="submit-btn" type="submit" disabled={loading}>
              {loading ? "Sending..." : "Submit"}
            </button>
          </>
        );

      case "hiring":
  return (
    <>
      <div className="form-group">
        <a
          // href={MyContact.mypdf}
          href={pddf}
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
    rel="noopener noreferrer"
    className="resume-btn view-btn"
    title="View Resume"
    style={{
      pointerEvents: 'none',   // disables the link
      opacity: 0.5,            // optional: dims the link
      cursor: 'not-allowed'    // optional: shows disabled cursor
    }}
  >
    <FaEye /> View Resume
  </a>
</div>


      <div className="form-group">
        <input name="email" type="text" placeholder="Your Email *" required />
      </div>

      <div className="form-group">
        <input name="contact" type="text" placeholder="Your Contact" />
      </div>

      <div className="form-group">
        <input name="start_package" type="text" placeholder="Min Package (LPA)" />
      </div>

      <div className="form-group">
        <input name="end_package" type="text" placeholder="Max Package (LPA) *" required />
      </div>

      <div className="form-group">
        <input
          name="joining_date"
          type={type}
          onFocus={() => setType("date")}
          onBlur={(e) => !e.target.value && setType("text")}
          placeholder="Joining Date *"
          required
        />
      </div>

      <div className="form-group">
        <select
          name="bond_type"
          required
          onChange={(e) => setBondType(e.target.value)}
        >
          <option value="">Bond Type *</option>
          <option value="bond">Bond</option>
          <option value="unbound">Unbound</option>
        </select>
      </div>

      {bondType === "bond" && (
        <>
          <div className="form-group">
            <input
              name="bond_start_year"
              type="number"
              placeholder="Bond Start Year"
              required
            />
          </div>
          <div className="form-group">
            <input
              name="bond_end_year"
              type="number"
              placeholder="Bond End Year"
              required
            />
          </div>
        </>
      )}

      <div className="form-group">
        <input
          name="company_name"
          type="text"
          placeholder="Company Name *"
          required
        />
      </div>

      <div className="form-group">
        <input
          name="company_location"
          type="text"
          placeholder="Company Location *"
          required
        />
      </div>

      <div className="form-group">
  <label className="form-label" style={{color:"var(--text-color)"}}><strong>Work Type *</strong></label>
  <div className="work-type-options">
    <label className="radio-card">
      <input type="radio" name="work_type" value="hybrid" required />
      <span>Hybrid</span>
    </label>
    <label className="radio-card">
      <input type="radio" name="work_type" value="work_from_home" required />
      <span>WF Home</span>
    </label>
    <label className="radio-card">
      <input type="radio" name="work_type" value="work_from_office" required />
      <span>WF Office</span>
    </label>
  </div>
</div>


      <button className="submit-btn" type="submit" disabled={loading}>
        {loading ? "Sending..." : "Submit"}
      </button>
    </>
  );


      case "freelance":
        return (
          <>
            <div className="form-group">
              <input name="name" type="text" placeholder="Your Name *" required />
            </div>
            <div className="form-group">
              <input name="email" type="email" placeholder="Your Email *" required />
            </div>
            <div className="form-group">
              <input name="contact" type="number" placeholder="Your Contact*" required />
            </div>
            <div className="form-group">
              <input
                name="end_date"
                type={type}
                onFocus={() => setType("date")}
                onBlur={(e) => !e.target.value && setType("text")}
                placeholder="Project End Date *"
                required
              />
            </div>
            <div className="form-group">
              <input name="title" type="text" placeholder="Project Title *" required />
            </div>
            <div className="form-group">
              <input name="requirements" type="text" placeholder="Requirements *" required />
            </div>
            <div className="form-group">
              <input name="budget" type="text" placeholder="Budget *" required />
            </div>
            <div className="form-group">
              <input name="message" type="text" placeholder="Your Message" />
            </div>
            <button className="submit-btn" type="submit" disabled={loading}>
              {loading ? "Sending..." : "Submit"}
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
        <p style={{ flexWrap: "wrap", color: "var(--text-color)" }}>
         Feel free to reach out anytime. I’m always available to assist you with your queries.
        </p>
        <div className="contact-info">
          <p>
            <FaPhone className="icon" />
            <a href={`tel:${MyContact.phone}`} className="contact-link">
              {MyContact.phone}
            </a>
          </p>
          <p>
            <FaEnvelope className="icon" />
            <a
              href={`https://mail.google.com/mail/?view=cm&fs=1&to=${MyContact.email}`}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link"
            >
              {MyContact.email}
            </a>
          </p>
          <p>
            <FaMapMarkerAlt className="icon" />
            <a
              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(MyContact.address)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link"
            >
              {MyContact.address}
            </a>
          </p>
        </div>
      </div>

      <div className="contact-right">
        <div className="button-group">
          <button className={selected === "connect" ? "active" : ""} onClick={() => setSelected("connect")}>
            Contact to Connect
          </button>
          <button className={selected === "hiring" ? "active" : ""} onClick={() => setSelected("hiring")}>
            Hiring
          </button>
          <button className={selected === "freelance" ? "active" : ""} onClick={() => setSelected("freelance")}>
            Freelancing
          </button>
        </div>

        <form ref={formRef} className="contact-form" onSubmit={handleSubmit}>
          {renderInputs()}
        </form>

        {userMessage && (
          <p className="form-feedback" style={{ marginTop: "1rem", color: "var(--btn-bg-color)" }}>
            {userMessage}
          </p>
        )}
      </div>
    </div>
  );
};

export default Contact;
