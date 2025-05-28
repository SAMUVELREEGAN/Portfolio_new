import './ScrollMarquee.css';
import { sroll } from '../Data/scroll'; // Update the path as needed
import { FaFire } from 'react-icons/fa'; // Common icon (you can change this)

const ScrollMarquee = () => {
  return (
    <div className="marquee-container">
      <div className="marquee-track">
        {sroll.concat(sroll).map((item, index) => (
          <div className="marquee-item" key={index}>
            <FaFire className="marquee-icon" />
            <span className="marquee-text">{item.scname.toUpperCase()}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ScrollMarquee;
