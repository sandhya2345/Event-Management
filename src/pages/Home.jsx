import React from 'react';
import { motion } from "framer-motion";
import illustration from "../assets/illustration3.png";
import Features from './Features';
import RecentActivity from './RecentActivity';
import Footer from '../components/Footer';
// import { CalendarView } from "../components/CalendarView";

const Home = () => {
  return (
    <div className="relative min-h-screen pt-30 pb-20 bg-gradient-to-r from-primary via-primary-dull to-white text-white">

      <section className="flex flex-col-reverse lg:flex-row items-center justify-between px-4 sm:px-6 md:px-10 lg:px-20 gap-10 pb-12">
        <motion.div
          className="w-full lg:w-1/2 text-center lg:text-left"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-2">
            Transforming Event<br /> Planning with <br />Smart Technology
          </h1>
          <p className="text-base sm:text-lg mb-6 text-white/90">
            Seamlessly integrating innovative solutions with<br /> client-focused service and strategic planning, empowering event teams to deliver flawless, memorable experiences with confidence.
          </p>
          <button className="px-6 py-3 bg-white text-primary font-medium rounded-md shadow-md hover:bg-teal-100 transition">
            Create an Event
          </button>
        </motion.div>

        <motion.div
          className="w-full lg:w-1/2 flex justify-center"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <img
            src={illustration}
            alt="Event Illustration"
            className="w-[80%] max-w-[400px] md:max-w-md lg:max-w-lg"
          />
        </motion.div>
      </section>

      
      <Features />

     

      <RecentActivity />

      {/* <CalendarView/> */}

      <Footer/>

    </div>
    
  );
};

export default Home;
