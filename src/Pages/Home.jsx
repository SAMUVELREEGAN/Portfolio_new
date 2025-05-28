import LandingPage from "../Components/LandingPage";
import Details from "../Components/Details";
import ScrollMarquee from "../Components/ScrollMarquee";
import MyServices from "../Components/MyServices";
import About from "../Components/About";
import Education from "../Components/Education";
import Skills from "../Components/Skills";
import MyProject from "../Components/MyProject";
import Answer from "../Components/Answer";
import MyExperience from "../Components/MyExperience";
import Contact from "../Components/Contact";

const Home = () => {
  return (
    <div>
      <div id="home">
        <LandingPage />
      </div>
      <ScrollMarquee />
      <Details />
      <MyServices />
      <div id="about">
        <About />
      </div>
      <Education />
      <div id="skills">
        {/* <Skills /> */}
      </div>
      <div id="projects">
        <MyProject />
      </div>
      <ScrollMarquee />
      <Answer />
      <MyExperience />
      <div id="contact">
        <Contact />
      </div>
    </div>
  );
};

export default Home;
