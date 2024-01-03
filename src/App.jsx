

//Imports
import { bg, bg2 } from "./constants";
import { NavBar, Home, About, Project, Contact } from "./components";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import { BrowserRouter } from 'react-router-dom';
import { useRef } from 'react';

const App = () => {
  const parallaxRef = useRef(null);

  const scrollTo = (offset) => {
    if (parallaxRef.current) {
      parallaxRef.current.scrollTo(offset);
    }
  };

  return (
    <BrowserRouter>
    <div>
      <Parallax ref={parallaxRef} pages={4} style={{ height: "100vh" }}>
        {bg.map((bg, index) => (
          <ParallaxLayer
            key={index}
            offset={0}
            speed={bg.speed}
            style={{
              backgroundImage: `url(${bg.img})`,
              backgroundSize: "cover",
            }}
          />
        ))}

        <ParallaxLayer offset={0} speed={0}>
          <div>
              <NavBar scrollTo={scrollTo}/>      
              <Home scrollTo={scrollTo} />
          </div>
        </ParallaxLayer>

        <ParallaxLayer offset={1} speed={0}>
          <div>
            <About />
          </div>
        </ParallaxLayer>

        <ParallaxLayer offset={2} speed={0}>
          <div>
            <Project />
          </div>
        </ParallaxLayer>

        {bg2.map((bg2, index) => (
          <ParallaxLayer
            key={index}
            offset={3}
            speed={bg2.speed}
            style={{
              backgroundImage: `url(${bg2.img})`,
              backgroundSize: "cover",
            }}
          />
        ))}

        <ParallaxLayer offset={3} speed={0}>
          <div>
            <Contact />
          </div>
        </ParallaxLayer>
      </Parallax>
    </div>
    </BrowserRouter>
  );
};

export default App;