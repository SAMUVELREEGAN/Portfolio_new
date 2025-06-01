import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import MyLayout from "./Layouts/MyLayout";
import FullModelPage from "./Components/FullModelPage";
import Resume from "./Components/Resume";
import { MyProvider } from "./Context/MyContext";
import Visitors from "./Components/Visitors";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [theme, setTheme] = useState('light');  // default light
  const [themesColors, setThemesColors] = useState(null);

  // Function to apply CSS variables dynamically
  const applyTheme = (themeName, colors) => {
    const root = document.documentElement;
    root.setAttribute('data-theme', themeName);
    Object.entries(colors).forEach(([key, value]) => {
      root.style.setProperty(key, value);
      
    });
  };

  useEffect(() => {
    axios.get('http://localhost:8000/api/landingpara/theme-settings')
      .then(res => {
        const themes = res.data;  // backend data
        setThemesColors(themes);
        console.log("Themes from backend:", themes);

        const preferredTheme = localStorage.getItem('theme') || 'light';

        const themeData = themes[preferredTheme];
        if (themeData && themeData.colors) {
          applyTheme(preferredTheme, themeData.colors);
          setTheme(preferredTheme);
          
        }
      })
      .catch(err => {
        console.error("Failed to fetch theme from backend, using CSS fallback", err);
        const fallbackTheme = localStorage.getItem('theme') || 'light';
        document.documentElement.setAttribute('data-theme', fallbackTheme);
      });
  }, []);

  return (
    <MyProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<MyLayout />} path="/">
            <Route element={<Home />} path="/" />
            <Route path="/model" element={<FullModelPage />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/visitors" element={<Visitors />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </MyProvider>
  );
}

export default App;
