'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import TabNavigation from '@/src/components/TabNavigation';
import ToolCard from '@/src/components/ToolCard';
import SearchBar from '@/src/components/SearchBar';
import { tools, Tool } from '@/src/data/tools';

type Category = 'tech-stack' | 'database' | 'ui-libraries' | 'animations';
type PackageManager = 'npm' | 'yarn' | 'pnpm' | 'bun';

export default function ToolsPage() {
  const [activeCategory, setActiveCategory] = useState<Category>('tech-stack');
  const [searchQuery, setSearchQuery] = useState('');
  const [packageManager, setPackageManager] = useState<PackageManager>('bun');
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const savedPackageManager = localStorage.getItem('packageManager');
    if (savedPackageManager) {
      setPackageManager(savedPackageManager as PackageManager);
    }
    setTimeout(() => setIsLoaded(true), 100);
  }, []);

  const handlePackageManagerChange = (manager: PackageManager) => {
    setPackageManager(manager);
    localStorage.setItem('packageManager', manager);
  };

  const filteredTools = tools.filter(
    (tool) =>
      tool.category === activeCategory &&
      tool.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: 'beforeChildren',
        staggerChildren: 0.12,
        duration: 0.6,
      },
    },
    exit: {
      opacity: 0,
      transition: {
        when: 'afterChildren',
        staggerChildren: 0.05,
        staggerDirection: -1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 24,
      },
    },
    exit: {
      opacity: 0,
      y: -20,
      transition: { duration: 0.2 },
    },
  };

  const toolCardContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.07,
        delayChildren: 0.2,
      },
    },
  };

  const toolCardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: 'spring',
        stiffness: 260,
        damping: 20,
      },
    },
    hover: {
      y: -8,
      boxShadow: '0 15px 30px rgba(0,0,0,0.2)',
      transition: {
        type: 'spring',
        stiffness: 400,
        damping: 15,
      },
    },
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white px-4 sm:px-6 py-10 overflow-hidden">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isLoaded ? 'visible' : 'hidden'}
        className="max-w-7xl mx-auto flex flex-col gap-12"
      >
        {/* Header */}
        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center justify-center gap-3 text-center">
          <motion.h1
            className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-green-400"
            animate={{
              textShadow: [
                '0 0 8px rgba(74, 222, 128, 0)',
                '0 0 15px rgba(74, 222, 128, 0.6)',
                '0 0 8px rgba(74, 222, 128, 0)',
              ],
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            Developer Tools 
          </motion.h1>
        </motion.div>

        {/* Category Tabs */}
        <motion.div variants={itemVariants} className="mt-2 flex justify-center overflow-x-auto">
          <TabNavigation
            activeCategory={activeCategory}
            onCategoryChange={setActiveCategory}
          />
        </motion.div>

        {/* Package Manager Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-wrap justify-center gap-4 max-w-screen-sm mx-auto"
        >
          {(['npm', 'yarn', 'pnpm', 'bun'] as const).map((manager) => (
            <motion.button
              key={manager}
              onClick={() => handlePackageManagerChange(manager)}
              className={`px-4 py-2 sm:px-6 sm:py-3 rounded-xl text-sm sm:text-base font-semibold transition-all duration-200 ${
                packageManager === manager
                  ? 'bg-green-500 text-white ring-2 ring-green-400'
                  : 'bg-slate-800 text-slate-200'
              }`}
              whileHover={{
                scale: packageManager === manager ? 1.05 : 1.03,
                backgroundColor: packageManager === manager ? '#10b981' : '#1e293b',
              }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: 'spring', stiffness: 400, damping: 17 }}
            >
              {manager.toUpperCase()}
            </motion.button>
          ))}
        </motion.div>

        {/* Search Bar */}
        <motion.div
          variants={itemVariants}
          className="mt-5 max-w-2xl mx-auto w-full"
          whileHover={{ scale: 1.01 }}
          transition={{ type: 'spring', stiffness: 400, damping: 25 }}
        >
          <SearchBar value={searchQuery} onChange={setSearchQuery} />
        </motion.div>

        {/* Tool Cards */}
        <motion.div
          variants={toolCardContainerVariants}
          layout
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-x-6 gap-y-10"
        >
          <AnimatePresence mode="popLayout">
            {filteredTools.map((tool) => (
              <motion.div
                key={tool.id}
                layout
                variants={toolCardVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
                whileHover="hover"
                className="flex"
              >
                <ToolCard tool={tool} packageManager={packageManager} />
              </motion.div>
            ))}
          </AnimatePresence>

          {filteredTools.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="col-span-full text-center py-20"
            >
              <motion.p
                className="text-lg sm:text-xl text-slate-400"
                animate={{
                  y: [0, -5, 0],
                  opacity: [0.7, 1, 0.7],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatType: 'reverse',
                }}
              >
                No tools found. Try adjusting your search.
              </motion.p>
            </motion.div>
          )}
        </motion.div>
      </motion.div>
    </div>
  );
}
