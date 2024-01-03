import BouncingArrow from "./DownArrow";
import Typewriter from "typewriter-effect";
import { Resume } from "../assets";

const Home = ({ scrollTo }) => (
  <div className="ml-40 mt-40">
    <h2 className="font-spacemono text-[22px] text-white">Hello, my name is</h2>
    <h2 className="font-spacemono text-[50px] font-semibold text-black">
      Javier Chia.
    </h2>
    <h2 className="font-spacemono text-[50px] font-semibold text-[#656565]">
      I am{" "}
      <span style={{ display: "inline-block" }}>
        <Typewriter
          options={{
            loop: true,
          }}
          onInit={(typewriter) => {
            typewriter
              .typeString("a Student")
              .pauseFor(2000)
              .deleteAll()
              .typeString("an Athlete")
              .pauseFor(2000)
              .deleteAll()
              .start();
          }}
        />
      </span>
    </h2>
    <h2
      onClick={() => scrollTo(1)}
      className="font-spacemono mt-8 text-[24px] px-6 py-1 text-black border-2 border-black rounded-sm items-center cursor-pointer"
      style={{ display: "inline-block" }}
    >
      About me
      <span className="ml-3" style={{ display: "inline-block" }}>
        <BouncingArrow />
      </span>
    </h2>
    <a
      href={Resume}
      target="_blank"
      rel="noopener noreferrer"
      className="font-spacemono text-[24px] px-6 py-1 text-black border-2 ml-4 border-black rounded-sm items-center cursor-pointer inline-flex"
    >
      View CV
    </a>
  </div>
);

export default Home;
