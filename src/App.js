import Navbar from "./scenes/Navbar";
import DotGroup from "./scenes/DotGroup"
import Landing from "./scenes/Landing";
import MySkills from "./scenes/MySkills";
import Publications from "./scenes/Publications";
import Certifications from "./scenes/Certifications";
import Contact from "./scenes/Contact";
import Footer from "./scenes/Footer";
import { useEffect, useState } from "react";
import LineGradient from "./components/LineGradient";
import useMediaQuery from "./hooks/useMediaQuery";

function App() {
  const [selectedPage, setSelectedPage] = useState('home');
  const [isTopOfPage, setIsTopOfPage] = useState(true);
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) setIsTopOfPage(true);
      if (window.scrollY !== 0) setIsTopOfPage(false);
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="app bg-deep-blue">
      <Navbar isTopOfPage={isTopOfPage} selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
      <div className="w-5/6 mx-auto md:h-full">
        {isAboveMediumScreens && (
          <DotGroup
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}
          />
        )}
        <Landing setSelectedPage={setSelectedPage} />
      </div>
      <LineGradient />
      <div className="w-5/6 mx-auto">
          <MySkills />
      </div>
      <LineGradient />
      <div className="w-5/6 mx-auto">
          <Publications />
      </div>
      <LineGradient />
      <div className="w-5/6 mx-auto">
          <Certifications />
      </div>
      <LineGradient />
      <div className="w-5/6 mx-auto">
          <Contact />
      </div>
      <Footer />
    </div>
  );
}

export default App;
