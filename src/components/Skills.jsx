import React, { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";

const SkillBar = ({ label, percentage }) => {
  const [width, setWidth] = useState(0);
  const [displayPercentage, setDisplayPercentage] = useState(0);
  const { ref, inView } = useInView({
    threshold: 0.5,
  });

  useEffect(() => {
    let percentageTimer;
    if (inView) {
      setWidth(percentage);

      percentageTimer = setInterval(() => {
        setDisplayPercentage((oldPercentage) => {
          if (oldPercentage < percentage) {
            return oldPercentage + 1;
          } else {
            clearInterval(percentageTimer);
            return percentage;
          }
        });
      }, 10);
    } else {
      setWidth(0);
      setDisplayPercentage(0);
    }

    return () => {
      clearInterval(percentageTimer);
    };
  }, [inView, percentage]);

  return (
    <div ref={ref} className="flex items-center mb-4">
      <div className="flex items-center justify-center text-md font-poppins font-medium text-white bg-black h-11 w-1/4">
        {label}
      </div>
      <div className="flex-1 items-center bg-white border-2 border-black">
        <div className="flex flex-row justify-between">
          <div
            className="bg-gray-500 h-10 transition-all duration-500 ease-out"
            style={{ width: `${width}%` }}
          ></div>
          <div className="flex items-center justify-center mr-2 text-md font-poppins font-bold text-black">
            {`${displayPercentage}%`}
          </div>
        </div>
      </div>
    </div>
  );
};

const Skill = () => {
  const skills = [
    { label: "HTML & CSS", percentage: 80 },
    { label: "React", percentage: 75 },
    { label: "React Native", percentage: 65 },
    { label: "Tailwind CSS", percentage: 65 },
    { label: "Java", percentage: 70 },
    { label: "Javascript", percentage: 85 },
    { label: "MySQL", percentage: 75 },
    { label: "jQuery", percentage: 75 },
    { label: "Git", percentage: 75 },
    { label: "Figma", percentage: 90 },
  ];

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5, // Trigger when 50% of the element is in the viewport
  });

  return (
    <div className="p-4">
      <h1 className="mt-8 mb-8 font-poppins text-[28px] font-semibold text-black">
        My Experience & Tools
      </h1>
      {skills.map((skill, index) => (
        <SkillBar
          key={index}
          label={skill.label}
          percentage={skill.percentage}
        />
      ))}
    </div>
  );
};

export default Skill;
