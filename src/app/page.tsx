'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Button } from '@/src/components/ui/button';
import { Card, CardContent } from '@/src/components/ui/card';
import { tools } from '@/src/data/tools';

export default function Home() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 10, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.4 } }
  };

  // Get a selection of tools from each category
  const featuredTools = [
    ...tools.filter(tool => tool.category === 'tech-stack').slice(0, 4),
    ...tools.filter(tool => tool.category === 'database').slice(0, 4),
    ...tools.filter(tool => tool.category === 'ui-libraries').slice(0, 4),
    ...tools.filter(tool => tool.category === 'animations').slice(0, 4),
  ];

  return (
    <div className=" min-h-screen bg-slate-950 text-white flex flex-col items-center justify-center px-4 sm:px-6 py-4 sm:py-6">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="text-center w-full max-w-5xl"
      >
        {/* Logo */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3 mb-6 sm:mb-8"
        >
          <div className="w-12 h-12 sm:w-14 sm:h-14 relative">
            <motion.div
              animate={{
                y: [0, -10, 0],
                rotate: [0, 5, 0]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: "loop"
              }}
              className="absolute inset-0"
            >
             
            </motion.div>
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold text-green-400 flex items-center gap-2">
            Developer Tools 
          </h1>
        </motion.div>

        {/* Heading and Description */}
        <motion.div variants={itemVariants} className="mb-8 sm:mb-10 px-2">
          <h2 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-5 leading-tight">
            <span className="bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">
              One Page. All Installations.
            </span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-slate-300 max-w-2xl mx-auto">
            Stop searching for installation commands. Find all the tools you need in one place and get started with a single click.
          </p>
        </motion.div>

        {/* Terminal Code */}
        <motion.div variants={itemVariants} className="mb-10 sm:mb-14 px-2">
          <Card className="bg-slate-900 border border-slate-800 shadow-xl max-w-full sm:max-w-xl mx-auto">
            <CardContent className="p-3 sm:p-4 md:p-6">
              <div className="flex items-center gap-1 mb-3 sm:mb-4">
                <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-red-500"></div>
                <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-yellow-500"></div>
                <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-green-500"></div>
              </div>

              <div className="font-mono text-[10px] sm:text-xs md:text-sm break-words">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                >
                  <span className="text-green-400">$ </span>
                  <motion.span
                    className="text-slate-300"
                  >
                    bunx create-next-app@latest
                  </motion.span>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.8, duration: 0.5 }}
                  className="mt-1.5 sm:mt-2"
                >
                  <span className="text-green-400">$ </span>
                  <span className="text-slate-300">
                    bun add express
                  </span>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 3, duration: 0.5 }}
                  className="mt-1.5 sm:mt-2"
                >
                  <span className="text-green-400">$ </span>
                  <span className="text-slate-300">
                    bunx create-vite@latest my-react-app --template react
                  </span>
                </motion.div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* CTA Button */}
        <motion.div
          variants={itemVariants}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
          className="mb-4 sm:mb-6 w-full max-w-xs sm:max-w-none mx-auto"
        >
          <Link href="/tools" className="w-full">
            <Button
              size="lg"
              className="w-full bg-green-500 hover:bg-green-600 text-white text-base sm:text-lg md:text-xl font-bold px-6 sm:px-8 md:px-16 py-3 sm:py-4 md:py-6 rounded-xl shadow-lg shadow-green-500/20"
            >
              <span className="flex items-center justify-center gap-2 sm:gap-3">
                Get Started
                <svg className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </span>
            </Button>
          </Link>
        </motion.div>

        {/* Footer Note */}
        <motion.p
          variants={itemVariants}
          className="text-xs sm:text-sm md:text-base text-slate-400 px-2"
        >
          Over 100+ installation commands for popular frameworks and libraries
        </motion.p>
      </motion.div>
    </div>
  );
}
