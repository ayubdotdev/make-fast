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
    // Set loaded state after a small delay for entrance animation
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

  // Enhanced container variants with better timing
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.12,
        duration: 0.6
      }
    },
    exit: {
      opacity: 0,
      transition: {
        when: "afterChildren",
        staggerChildren: 0.05,
        staggerDirection: -1
      }
    }
  };
  
  // Enhanced item variants with more fluid motion
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        type: "spring", 
        stiffness: 300, 
        damping: 24 
      } 
    },
    exit: { 
      opacity: 0, 
      y: -20, 
      transition: { duration: 0.2 } 
    }
  };

  // Logo animation with more interesting movement
  const logoVariants = {
    initial: { rotate: 0, scale: 1 },
    animate: {
      rotate: [0, 10, -10, 6, -4, 0],
      scale: [1, 1.1, 0.95, 1.05, 1],
      transition: {
        duration: 3.5,
        ease: "easeInOut",
        repeat: Infinity,
        repeatType: "reverse",
        repeatDelay: 2
      }
    }
  };
  // Tool card grid variants for smoother list rendering
  const toolCardContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.07,
        delayChildren: 0.2
      }
    }
  };

  // Individual tool card animations
  const toolCardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 20
      }
    },
    hover: {
      y: -8,
      boxShadow: "0 15px 30px rgba(0,0,0,0.2)",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 15
      }
    }
  };
  

  return (
    <div className="min-h-screen bg-slate-950 text-white px-6 py-10 overflow-hidden">
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate={isLoaded ? "visible" : "hidden"}
        className="max-w-7xl mx-auto flex flex-col gap-12"
      >
        {/* Header with enhanced animation */}
        <motion.div variants={itemVariants} className="flex items-center justify-center gap-3">
          <motion.div 
            className="w-10 h-10 relative"
            // variants={logoVariants}
            initial="initial"
            animate="animate"
          >
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <motion.path 
                d="M12 2L8 7H16L12 2Z" 
                fill="#FF4D6A"
                animate={{ 
                  fill: ['#FF4D6A', '#FF8A3D', '#FF4D6A'],
                }}
                transition={{ duration: 3, repeat: Infinity }}
              />
              <motion.path 
                d="M12 22C10 19.5 8.5 17.5 8 14H16C15.5 17.5 14 19.5 12 22Z" 
                fill="#FF4D6A"
                animate={{ 
                  fill: ['#FF4D6A', '#FF8A3D', '#FF4D6A'],
                }}
                transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
              />
              <motion.circle 
                cx="12" 
                cy="12" 
                r="6" 
                fill="#FF4D6A"
                animate={{ 
                  fill: ['#FF4D6A', '#FF8A3D', '#FF4D6A'],
                  r: [6, 6.3, 6]
                }}
                transition={{ duration: 3, repeat: Infinity, delay: 1 }}
              />
              <circle cx="9" cy="10" r="1.5" fill="white" />
            </svg>
          </motion.div>
          <motion.h1 
            className="text-4xl md:text-5xl font-extrabold text-green-400"
            animate={{ 
              textShadow: ["0 0 8px rgba(74, 222, 128, 0)", "0 0 15px rgba(74, 222, 128, 0.6)", "0 0 8px rgba(74, 222, 128, 0)"],
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            Developer Tools Installer
          </motion.h1>
        </motion.div>

        {/* Category Tabs */}
        <motion.div variants={itemVariants} className="mt-2 flex justify-center">
          <TabNavigation
            activeCategory={activeCategory}
            onCategoryChange={setActiveCategory}
          />
        </motion.div>

        {/* Package Manager Buttons with hover effects */}
        <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-4">
          {(['npm', 'yarn', 'pnpm', 'bun'] as const).map((manager) => (
            <motion.button
              key={manager}
              onClick={() => handlePackageManagerChange(manager)}
              className={`px-6 py-3 rounded-xl font-semibold transition-all duration-200 ${
                packageManager === manager
                  ? 'bg-green-500 text-white ring-2 ring-green-400'
                  : 'bg-slate-800 text-slate-200'
              }`}
              whileHover={{ 
                scale: packageManager === manager ? 1.05 : 1.03,
                backgroundColor: packageManager === manager ? '#10b981' : '#1e293b',
              }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
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
          transition={{ type: "spring", stiffness: 400, damping: 25 }}
        >
          <SearchBar value={searchQuery} onChange={setSearchQuery} />
        </motion.div>

        {/* Tools Grid with AnimatePresence for smooth transitions */}
        <motion.div
          variants={toolCardContainerVariants}
          layout
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-10"
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
                <ToolCard
                  tool={tool}
                  packageManager={packageManager}
                />
              </motion.div>
            ))}
          </AnimatePresence>
          
          {/* Empty state animation when no tools match */}
          {filteredTools.length === 0 && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="col-span-full text-center py-20"
            >
              <motion.p 
                className="text-xl text-slate-400"
                animate={{ 
                  y: [0, -5, 0],
                  opacity: [0.7, 1, 0.7]
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "reverse"
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