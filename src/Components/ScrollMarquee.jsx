import './ScrollMarquee.css';
// import { sroll } from '../Data/scroll'; 
import { FaFire } from 'react-icons/fa'; // Common icon (you can change this)
import { useContext } from 'react';
import { MyContext } from '../Context/MyContext';

const ScrollMarquee = () => {
  const {Srolldata} = useContext(MyContext)
  return (
    <div className="marquee-container">
      <div className="marquee-track">
        {Srolldata.concat(Srolldata).map((item, index) => (
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
