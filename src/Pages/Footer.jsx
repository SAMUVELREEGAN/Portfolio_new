import React, { useState, useEffect, useContext } from 'react';
import { FaInstagram, FaWhatsapp, FaLinkedin, FaGithub } from 'react-icons/fa';
import { MyContext } from '../Context/MyContext';
import { Modal, Button } from 'react-bootstrap';
// import { ProjectURL } from '../Data/ProjectURL';
import logo from '../assets/logo.png'

const defaultSocialLinks = [
  { name: 'Instagram', url: 'https://instagram.com/your_instagram', Icon: FaInstagram },
  { name: 'WhatsApp', url: 'https://wa.me/your_whatsapp_number', Icon: FaWhatsapp },
  { name: 'LinkedIn', url: 'https://linkedin.com/in/your_linkedin', Icon: FaLinkedin },
  { name: 'GitHub', url: 'https://github.com/your_github', Icon: FaGithub },
];

const Footer = () => {
  const [username, setUsername] = useState('');
  const [feedback, setFeedback] = useState('');
  const [socialLinks, setSocialLinks] = useState(defaultSocialLinks);
  const { Srolldata } = useContext(MyContext);
  const [loading, setLoading] = useState(false);
  const {ProjectURL} = useContext(MyContext)

    const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);


  useEffect(() => {
    const storedUser = localStorage.getItem('userName');
    if (storedUser) setUsername(storedUser);
    

    // Fetch social links from backend
    fetch('http://3.83.228.251/api/social-links/')
      .then((res) => {
        if (!res.ok) throw new Error('Failed to fetch');
        return res.json();
      })
      .then((data) => {
        const mappedLinks = data.map((item) => {
          let Icon = FaGithub;
          if (item.name.toLowerCase() === 'instagram') Icon = FaInstagram;
          else if (item.name.toLowerCase() === 'whatsapp') Icon = FaWhatsapp;
          else if (item.name.toLowerCase() === 'linkedin') Icon = FaLinkedin;
          else if (item.name.toLowerCase() === 'github') Icon = FaGithub;
          return { name: item.name, url: item.url, Icon };
        });
        setSocialLinks(mappedLinks);
      })
      .catch(() => {
        setSocialLinks(defaultSocialLinks);
      });
  }, []);

  const handleSubmit = async (e) => {
  e.preventDefault();
  setLoading(true);

  try {
    const response = await fetch('http://3.83.228.251/api/send-feedback/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, feedback }),
    });

    const data = await response.json();

    if (response.ok) {
      setFeedback('');
    } else {
      console.error(data.error || 'Feedback failed.');
    }
  } catch (error) {
    console.error('Error: ' + error.message);
  } finally {
    setLoading(false);
  }
};


  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        {/* Logo and Contact */}
        <div style={styles.section}>
          <div className='d-flex'>
                    <img src={logo} alt="" width='45' />
                    <h4 style={{ color: 'white', fontSize: '2rem', position: "relative", top: "3px", right: "3px", }}>am.</h4>
                  </div>
          <p style={styles.contact}>Email: samuelreegan372@gmail.com</p>
          <p style={styles.contact}>Phone: +91 93455 32741</p>
          <button className='all_btn1 px-2 mt-1' onClick={handleShow}>
         🔗 Project URLS 
      </button>

      <Modal show={show} onHide={handleClose} centered>
      
        <Modal.Body>
          {ProjectURL.map((item, index) => (
            <div key={index} className='mb-3'>
              <h5>{item.pro_name}</h5>
              <a href={item.pro_url} target="_blank" rel="noopener noreferrer">
                {item.pro_url}
              </a>
            </div>
          ))}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
        </div>

        {/* Technologies */}
        <div style={styles.section}>
          <h3 style={styles.heading}>Technologies Used</h3>
          <ul style={styles.techList}>
            {Srolldata.slice(0, 5).map((item, index) => (
              <li key={index} style={styles.techItem}>
                {item.scname.toUpperCase()}
              </li>
            ))}
          </ul>
        </div>

        {/* Social Media Links */}
        <div style={styles.section}>
          <h3 style={styles.heading}>Follow Me</h3>
          <ul style={styles.socialList}>
            {socialLinks.map(({ name, url, Icon }) => (
              <li key={name} style={styles.socialItem}>
                <a href={url} target="_blank" rel="noopener noreferrer" style={styles.socialLink}>
                  {name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Feedback */}
        <div style={styles.section}>
          <h3 style={styles.heading}>Feedback from {username || 'Guest'}</h3>
          <form onSubmit={handleSubmit} style={styles.form}>
  <textarea
    style={styles.textarea}
    placeholder="Write your feedback here..."
    value={feedback}
    onChange={(e) => setFeedback(e.target.value)}
    required
  />
  <button type="submit" style={styles.button} disabled={loading}>
    {loading ? 'Sending...' : 'Submit'}
  </button>
</form>

        </div>
      </div>

      <div style={styles.bottomBar}>
        <p>&copy; {new Date().getFullYear()} Samuel Reegan. All rights reserved.</p>
      </div>
    </footer>
  );
};

const styles = {
  footer: {
    background: 'linear-gradient(to right, #0f2027, #203a43, #2c5364)',
    color: '#f1f1f1',
    paddingTop: 50,
    paddingBottom: 20,
    fontFamily: "'Poppins', sans-serif",
  },
  container: {
    maxWidth: 1300,
    margin: '0 auto',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    gap: 40,
    padding: '0 20px',
  },
  section: {
    flex: '1 1 250px',
    minWidth: 250,
  },
  name: {
    fontSize: 28,
    fontWeight: '600',
    marginBottom: 10,
    color: '#fff',
  },
  contact: {
    fontSize: 15,
    color: '#ccc',
    margin: '5px 0',
  },
  heading: {
    fontSize: 18,
    fontWeight: 600,
    marginBottom: 10,
    color: '#fff',
  },
  techList: {
    listStyle: 'none',
    padding: 0,
    margin: 0,
    lineHeight: '1.8',
    color: '#ccc',
    fontSize: 15,
  },
  techItem: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: 6,
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: 10,
  },
  textarea: {
    resize: 'vertical',
    minHeight: 100,
    padding: 12,
    borderRadius: 8,
    border: '1px solid #555',
    backgroundColor: '#1e1e2f',
    color: '#fff',
    fontSize: 14,
  },
  button: {
    padding: 10,
    fontSize: 16,
    borderRadius: 6,
    border: 'none',
    backgroundColor: 'var(--btn-bg-color)',
    color: '#fff',
    fontWeight: 500,
    cursor: 'pointer',
    transition: 'background 0.3s ease',
  },
  socialList: {
    listStyle: 'none',
    padding: 0,
    margin: 0,
    fontSize: 16,
  },
  socialItem: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: 10,
  },
  icon: {
    marginRight: 10,
    fontSize: 20,
  },
  socialLink: {
    color: '#eee',
    textDecoration: 'none',
    transition: 'color 0.3s ease',
  },
  bottomBar: {
    borderTop: '1px solid #444',
    textAlign: 'center',
    marginTop: 40,
    paddingTop: 15,
    fontSize: 14,
    color: '#aaa',
  }
};

export default Footer;
