import "./Styles/Animation.css";
import { motion } from 'framer-motion';

export function Skills() {
  const skillsData = [
    { id: 1, skill: 'HTML', percentage: '90%' },
    { id: 2, skill: 'CSS', percentage: '85%' },
    { id: 2, skill: 'Tailwind CSS', percentage: '80%' },
    { id: 4, skill: 'JavaScript', percentage: '80%' },
    { id: 5, skill: 'React Js', percentage: '75%' },
    { id: 6, skill: 'Python', percentage: '70%' },
    { id: 7, skill: 'Figma', percentage: '60%' },
  ];

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        when: 'beforeChildren',
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <motion.div
      className=" text-red-950 text-center  pt-20 min-h-[20vh] mx-5 lg:mx-auto "
      id="skills"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <h1 className="text-4xl font-semibold mb-6 scroll-left text-blue-300">Skills</h1>
      <div className="max-w-3xl mx-auto bg-slate-500 p-8 rounded-lg shadow-lg scroll-right">
        {skillsData.map((skill) => (
          <motion.div
            key={skill.id}
            className="flex items-center mb-6 transition-transform transform hover:scale-105"
            variants={itemVariants}
          >
            <span className="text-sm font-bold text-orange-300 w-32 text-left uppercase">
              {skill.skill}
            </span>
            <div className="flex-1 h-2 bg-lime-200 rounded-full mx-4">
              <div
                className="h-2 rounded-full bg-lime-500 transition-all duration-1000"
                style={{ width: skill.percentage }}
              ></div>
            </div>
            <span className="text-xs text-green-300">{skill.percentage}</span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
