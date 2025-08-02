import React from "react";
import { motion } from "framer-motion";
import {
  PlusSquare,
  ListChecks,
  CalendarDays,
  Users,
  Send,
} from "lucide-react";

const Features = () => {
  const features = [
    {
      name: "Create Event",
      icon: <PlusSquare className="w-12 h-12 text-customTeal" />,
      link: "/create-event",
    },
    {
      name: "View Events",
      icon: <ListChecks className="w-12 h-12 text-customTeal" />,
      link: "/events",
    },
    {
      name: "Calendar View",
      icon: <CalendarDays className="w-12 h-12 text-customTeal" />,
      link: "/calendar",
    },
    {
      name: "Manage Guests",
      icon: <Users className="w-12 h-12 text-customTeal" />,
      link: "/guests",
    },
    {
      name: "Send Invitations",
      icon: <Send className="w-12 h-12 text-customTeal" />,
      link: "/invitations",
    },
  ];

  const scrollingFeatures = [...features, ...features]; 

  return (
    <section className="bg-white text-primary text-left pb-2 px-20">
      <div className="max-w-7xl mx-auto py-8">
        <motion.h2
          className="text-4xl font-semibold mb-12 text-center"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          Event Management Tools
        </motion.h2>

        <div className="overflow-hidden">
          <motion.div
            className="flex gap-8 w-max"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
          >
            {scrollingFeatures.map((feature, index) => (
              <motion.a
                href={feature.link}
                key={index}
                className="flex flex-col items-center justify-center p-6 bg-transparent rounded-md transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:bg-gradient-to-r hover:from-midTeal hover:to-midTeal group cursor-pointer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  ease: "easeOut",
                  delay: (index % features.length) * 0.2,
                }}
                viewport={{ once: true }}
              >
                <div className="mb-6">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-center text-customTeal group-hover:text-white transition-all duration-300">
                  {feature.name}
                </h3>
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Features;
