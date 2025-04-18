'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Button } from '@/src/components/ui/button';
import { Card, CardContent } from '@/src/components/ui/card';

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

  return (
    <div className="min-h-screen bg-slate-950 text-white flex flex-col items-center justify-center px-4 py-10">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="text-center w-full max-w-5xl"
      >
        {/* Logo */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-8"
        >
          <div className="w-14 h-14 relative">
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
              {/* <svg viewBox="0 0 24 24" fill="none">
                <path d="M12 2L8 7H16L12 2Z" fill="#FF4D6A" />
                <path d="M12 22C10 19.5 8.5 17.5 8 14H16C15.5 17.5 14 19.5 12 22Z" fill="#FF4D6A" />
                <circle cx="12" cy="12" r="6" fill="#FF4D6A" />
                <circle cx="9" cy="10" r="1.5" fill="white" />
              </svg> */}
            </motion.div>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-green-400">
            Developer Tools Installer
          </h1>
        </motion.div>

        {/* Heading and Description */}
        <motion.div variants={itemVariants} className="mb-10 px-2">
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold mb-5 leading-tight">
            <span className="bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">
              One Page. All Installations.
            </span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-slate-300">
            Stop searching for installation commands. Find all the tools you need in one place and get started with a single click.
          </p>
        </motion.div>

        {/* Terminal Code */}
        <motion.div variants={itemVariants} className="mb-14 px-2">
          <Card className="bg-slate-900 border border-slate-800 shadow-xl max-w-full sm:max-w-xl mx-auto">
            <CardContent className="p-4 sm:p-6">
              <div className="flex items-center gap-1 mb-4">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>

              <div className="font-mono text-xs sm:text-sm break-words">
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
                  className="mt-2"
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
                  className="mt-2"
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
          className="mb-6"
        >
          <Link href="/tools">
            <Button
              size="lg"
              className="w-full sm:w-auto bg-green-500 hover:bg-green-600 text-white text-lg sm:text-xl font-bold px-8 py-4 sm:px-16 sm:py-6 rounded-xl shadow-lg shadow-green-500/20"
            >
              <span className="flex items-center justify-center gap-3">
                Get Started
                <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </span>
            </Button>
          </Link>
        </motion.div>

        {/* Footer Note */}
        <motion.p
          variants={itemVariants}
          className="text-sm sm:text-base text-slate-400 px-2"
        >
          Over 100+ installation commands for popular frameworks and libraries
        </motion.p>
      </motion.div>
    </div>
  );
}
