import "./Styles/Animation.css";
import { motion } from 'framer-motion';

export function Skills() {
  const skillsData = [
    { id: 1, skill: 'HTML', percentage: '90%' },
    { id: 2, skill: 'CSS', percentage: '85%' },
    { id: 3, skill: 'Tailwind CSS', percentage: '80%' },
    { id: 4, skill: 'JavaScript', percentage: '80%' },
    { id: 5, skill: 'React Js', percentage: '75%' },
    { id: 6, skill: 'Python', percentage: '70%' },
    { id: 7, skill: 'Figma', percentage: '60%' },
  ];

  return (
    <div className="skills-container text-red-950 text-center pt-20 min-h-[20vh] mx-5 lg:mx-auto" id="skills">
      <h1 className="skills-title text-4xl font-semibold mb-6">Skills</h1>
      <div className="skills-box max-w-3xl mx-auto bg-red-950 p-8 rounded-lg shadow-lg scroll-right">
        {skillsData.map(({ id, skill, percentage }) => (
          <div
            key={id}
            className="skill-item flex items-center mb-6 hover:scale-105"
          >
            <span className="skill-label text-sm font-bold text-red-300 w-32 text-left uppercase">
              {skill}
            </span>
            <div className="skill-bar flex-1 h-2 bg-red-200 rounded-full mx-4">
              <div
                className="skill-fill h-2 rounded-full bg-red-400"
                style={{ width: percentage }}
              ></div>
            </div>
            <span className="skill-percentage text-xs text-red-300">{percentage}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

 