import React, { createContext, useEffect, useState } from "react";
import axios from "axios";
import { landingpara as defaultPara } from "../Data/LandingPara";
import { about as defaultAbout } from "../Data/About";
import { Experience as defaultExperience } from "../Data/Experience";
import { Project as defaultProject } from "../Data/Project";
import { Education1 as defaultEducation } from "../Data/Education";
import { MyContact as defaultmycontact } from "../Data/MyContact";
import { defaultDetail } from "../Data/Detail";
import { Services as defaultServicesdata } from "../Data/Services";
import { Myskill as defaultMyskilldata } from "../Data/Skills";
import { Questions as defaultQuestionsdata } from "../Data/Questions";
import { sroll as defaultsrolldata } from "../Data/scroll";
import { ProjectURL as defaultProjectURLdata} from '../Data/ProjectURL';

export const MyContext = createContext();

export const MyProvider = ({ children }) => {
  const [landingData, setLandingData] = useState(defaultPara);
  const [aboutData, setAboutData] = useState(defaultAbout);
  const [education, setEducation] = useState(defaultEducation);
  const [MyContact, setMyContact] = useState(defaultmycontact);
  const [info, setInfo] = useState(defaultDetail[0]);
  const [experienceData, setexperienceData] = useState(defaultExperience);
  const [Projectdata, setProject] = useState(defaultProject);
  const [Servicesdata, setservices] = useState(defaultServicesdata);
  const [Myskilldata, setMyskill] = useState(defaultMyskilldata);
  const [Questionsdata, setQuestions] = useState(defaultQuestionsdata);
  const [Srolldata, setsroll] = useState(defaultsrolldata);
  const [ProjectURL, setProjectURL] = useState(defaultProjectURLdata);

  const baseURL = "http://3.83.228.251";

  useEffect(() => {
    // Fetch landing paragraph
    axios
      .get("/api/landingpara/")
      .then((res) => {
        if (res.data && res.data.length > 0) {
          setLandingData(res.data);
        }
      })
      .catch((err) => {
        console.warn("Landing API failed, using default content:", err);
      });

    // Fetch about data
    axios
      .get("/api/about/")
      .then((res) => {
        if (res.data && res.data.length > 0) {
          setAboutData(res.data);
        }
      })
      .catch((err) => {
        console.warn("About API failed, using default content:", err);
      });
    axios
      .get("/api/experience/")
      .then((res) => {
        if (res.data && res.data.length > 0) {
          setexperienceData(res.data);
        }
      })
      .catch((err) => {
        console.warn("About API failed, using default content:", err);
      });

    axios
      .get("/api/education/")
      .then((res) => {
        if (res.data && res.data.length > 0) {
          setEducation(res.data);
        }
      })
      .catch((err) => {
        console.warn("About API failed, using default content:", err);
      });

    axios
      .get("/api/mycontact/")
      .then((res) => {
        if (res.data) {
          setMyContact(res.data);
        }
      })
      .catch((err) => {
        console.warn("Contact API failed:", err);
      });

    axios
      .get("/api/detail/")
      .then((res) => {
        if (res.data) setInfo(res.data);
      })
      .catch(() => {
        console.warn("API failed, using default data.");
        setInfo(defaultDetail[0]);
      });

    axios
      .get("/api/projects/")
      .then((res) => {
        if (res.data && res.data.length > 0) {
          setProject(res.data);
        }
      })
      .catch((err) => {
        console.warn("API failed, using default content:", err);
      });

    axios
      .get("/api/services/")
      .then((res) => {
        if (res.data && res.data.length > 0) {
          setservices(res.data);
        }
      })
      .catch((err) => {
        console.warn("API failed, using default content:", err);
      });

    axios
      .get("/api/myskills/")
      .then((res) => {
        if (res.data && res.data.length > 0) {
          setMyskill(res.data);
        }
      })
      .catch((err) => {
        console.warn("API failed, using default content:", err);
      });

    axios
      .get("/api/questions/")
      .then((res) => {
        if (res.data && res.data.length > 0) {
          setQuestions(res.data);
        }
      })
      .catch((err) => {
        console.warn("API failed, using default content:", err);
      });
    axios
      .get("/api/scroll/")
      .then((res) => {
        if (res.data && res.data.length > 0) {
          setsroll(res.data);
        }
      })
      .catch((err) => {
        console.warn("API failed, using default content:", err);
      });

    axios
      .get("/api/projectsurls")
      .then((res) => {
        if (res.data && res.data.length > 0) {
          setProjectURL(res.data);
        }
      })
      .catch((err) => {
        console.warn("API failed, using default content:", err);
      });
  }, []);

  return (
    <MyContext.Provider
      value={{
        landingData,
        aboutData,
        experienceData,
        education,
        MyContact,
        info,
        baseURL,
        Projectdata,
        Servicesdata,
        Myskilldata,
        Questionsdata,
        Srolldata,
        ProjectURL
      }}
    >
      {children}
    </MyContext.Provider>
  );
};
