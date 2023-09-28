import React from 'react';
import { motion } from 'framer-motion';

function AboutSection() {
  const logoVariants = {
    hidden: {
      opacity: 0,
      y: 50,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 3,
        ease: 'easeOut',
      },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={logoVariants}
      className="m-auto text-white flex"
    >
      <div className="bg-transparent text-white py-8">
        <div className="container mx-auto px-4 flex flex-wrap mt-[10%] ml-[10%] items-center text-justify ">
          <h2 className="text-3xl text-center font-bold w-full mb-4 ">Overview</h2>

          <div className="w-full md:w-2/5 mb-4">
            <motion.div
              className="pics border rounded-full border-white overflow-hidden"
              variants={imageVariants}
            >
              <img
                src="https://tneacounselling.in/wp-content/uploads/2022/08/SRM-Valliammai-Engineering-College-Kattankulathur-Chengalpattu.jpg"
                alt="Image 1"
                className="w-full h-auto"
              />
            </motion.div>
          </div>

          <div className="w-full md:w-3/5 mb-4">
            <p className="text-lg mb-4 ml-[2rem]">
              SRM Valliammai Engineering College (An Autonomous Institution) was established on September 9, 1999, and presently conducts 11 Undergraduate courses and 8 Postgraduate courses. The college has highly qualified, dynamic, and dedicated renowned faculty both from academic and industrial backgrounds. Besides, the students bring laurels to the college by securing university ranks.
            </p>
          </div>

          <div className="w-full md:w-1/2 mb-4">
            <p className="text-lg mb-4 mr-[2rem]">
              It is situated on an expansive 13.35-acre campus, adjacent to NH 45, between Tambaram and Chengalpattu. The serene atmosphere with lush green surroundings is conducive to the pursuit of higher studies.
            </p>
          </div>

          <div className="w-full md:w-2/5 mb-4">
            <motion.div
              className="pics border rounded-full border-white overflow-hidden"
              variants={imageVariants}
            >
              <img
                src="https://tneacounselling.in/wp-content/uploads/2022/08/SRM-Valliammai-Engineering-College-Kattankulathur-Chengalpattu.jpg"
                alt="Image 2"
                className="w-full h-auto"
              />
            </motion.div>
          </div>

          <div className="w-full md:w-2/5 mb-4">
            <motion.div
              className="pics border rounded-full border-white overflow-hidden"
              variants={imageVariants}
            >
              <img
                src="https://tneacounselling.in/wp-content/uploads/2022/08/SRM-Valliammai-Engineering-College-Kattankulathur-Chengalpattu.jpg"
                alt="Image 2"
                className="w-full h-auto"
              />
            </motion.div>
          </div>

          <div className="w-full md:w-1/2 mb-4">
            <p className="text-lg mb-4 ml-[2rem] ">
              The college operates from a multi-story building complex covering an impressive 59,000 square meters to cater to the demands of an ever-increasing number of students.
            </p>
          </div>

          <div className="w-full md:w-3/5 mb-4">
            <p className="text-lg mb-4 mr-[2rem]">
              SRM Valliammai Engineering College is a prestigious part of the SRM Group of Educational Institutions, sponsored by the Valliammai Society. The Valliammai Society was founded by Dr.T.R.Paarivendhar, a well-known educationist, in honor of his mother Tmt. R.Valliammai. Her care and guidance played a significant role in his personal development, and her ideals continue to inspire him.
            </p>
          </div>

          <div className="w-full md:w-2/5 mb-4">
            <motion.div
              className="pics border rounded-full border-white overflow-hidden"
              variants={imageVariants}
            >
              <img
                src="https://tneacounselling.in/wp-content/uploads/2022/08/SRM-Valliammai-Engineering-College-Kattankulathur-Chengalpattu.jpg"
                alt="Image 3"
                className="w-full h-auto"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default AboutSection;
