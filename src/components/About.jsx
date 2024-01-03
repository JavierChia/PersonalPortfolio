import { Javier } from "../assets";
import Skills from './Skills';

const About = () => (
  <div id="aboutMe">
    <div className="ml-10 pt-6 font-poppins text-[50px] font-semibold text-black flex items-center">
        <div className="flex-grow">
          <span className="mr-2">
            01.<span style={{ letterSpacing: "0.1em" }}>&nbsp;</span>
          </span>
          <span>ABOUT</span>
        </div>
        <hr className="border border-black border-solid border-width-1.5 rounded-full w-full ml-8 mr-10" />
    </div>
    <div className="flex flex-row">
      <div className="flex flex-col items-center mt-14 mx-16">
        <img src={Javier} className="h-[450px]" />
        <h2 className="mt-6 font-poppins text-[28px] font-semibold text-black">
          Who's this guy?
        </h2>
        <h3 className="mt-4 font-poppins text-[20px] text-black max-w-[450px] font-medium text-center">
          I’m a DIT student at SP [2022-2024]
          <br />
          I’m dedicated to mastering full-stack development and am passionate
          about creating engaging and playful UI!
        </h3>
      </div>
      <div className="w-3/5">
        <Skills />
      </div>
    </div>
  </div>
);

export default About;
