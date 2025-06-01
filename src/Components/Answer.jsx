import { useContext, useState } from "react";
// import { Questions } from "../Data/Questions";
import "./Answer.css";
import { MyContext } from "../Context/MyContext";

const Answer = () => {
  const {Questionsdata} = useContext(MyContext)
  const [openId, setOpenId] = useState(null);

  const toggleAnswer = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
   <div>
    <div style={{textAlign:"center" , margin:"10px 0px" ,color:'var(--text-color)'}} >
      -Faq
    <h3>Questions? Look here.</h3>
    </div>
     <div className="faq-container">
      {Questionsdata.map((item) => (
        <div key={item.id} className="faq-item">
          <button className="faq-question" onClick={() => toggleAnswer(item.id)}>
            <span>{item.qus}</span>
            <span className="faq-icon">{openId === item.id ? "−" : "+"}</span>
          </button>
          <div className={`faq-answer ${openId === item.id ? "open" : ""}`}>
            <p style={{color: 'var(--text-color)' }}>{item.ans}</p>
          </div>
        </div>
      ))}
    </div>
   </div>
  );
};

export default Answer;
