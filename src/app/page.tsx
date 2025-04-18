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
    <div className="min-h-screen bg-slate-950 text-white flex flex-col items-center justify-center">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="text-center max-w-4xl mx-auto px-4"
      >
        {/* Logo with rocket */}
        <motion.div
          variants={itemVariants}
          className="flex items-center justify-center gap-3 mb-8"
        >
          <div className="w-16 h-16 relative">
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
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2L8 7H16L12 2Z" fill="#FF4D6A" />
                <path d="M12 22C10 19.5 8.5 17.5 8 14H16C15.5 17.5 14 19.5 12 22Z" fill="#FF4D6A" />
                <circle cx="12" cy="12" r="6" fill="#FF4D6A" />
                <circle cx="9" cy="10" r="1.5" fill="white" />
              </svg>
            </motion.div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-green-400">Developer Tools Installer</h1>
        </motion.div>

        {/* Main content */}
        <motion.div variants={itemVariants} className="mb-12">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">
              One Page. All Installations.
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto">
            Stop searching for installation commands. Find all the tools you need in one place
            and get started with a single click.
          </p>
        </motion.div>

        {/* Terminal code animation */}
        <motion.div
          variants={itemVariants}
          className="mb-16"
        >
          <Card className="bg-slate-900 border border-slate-800 shadow-xl max-w-2xl mx-auto">
            <CardContent className="p-6">
              <div className="flex items-center gap-1 mb-4">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>

              <div className="font-mono text-sm">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                >
                  <span className="text-green-400">$ </span>
                  <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8, duration: 0.8, staggerChildren: 0.03 }}
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
                  <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2.1, duration: 0.8, staggerChildren: 0.03 }}
                    className="text-slate-300"
                  >
                    bun add express
                  </motion.span>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 3, duration: 0.5 }}
                  className="mt-2"
                >
                  <span className="text-green-400">$ </span>
                  <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 3.3, duration: 0.8, staggerChildren: 0.03 }}
                    className="text-slate-300"
                  >
                    bunx create-vite@latest my-react-app --template react
                  </motion.span>
                </motion.div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Get Started Button */}
        <motion.div
          variants={itemVariants}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
          className="mb-8"
        >
          <Link href="/tools">
            <Button
              size="lg"
              className="bg-green-500 hover:bg-green-600 text-white px-16 py-8 text-xl font-bold rounded-xl shadow-lg shadow-green-500/20"
            >
              <span className="flex items-center gap-3">
                Get Started
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </span>
            </Button>
          </Link>
        </motion.div>

        <motion.p
          variants={itemVariants}
          className="text-slate-400"
        >
          Over 100+ installation commands for popular frameworks and libraries
        </motion.p>
      </motion.div>
    </div>
  );
}