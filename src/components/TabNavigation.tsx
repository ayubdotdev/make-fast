'use client';

import { motion } from 'framer-motion'; 

const categories = [
  { id: 'tech-stack', label: 'Tech Stack' },
  { id: 'database', label: 'Database' },
  { id: 'ui-libraries', label: 'UI Libraries' },
  { id: 'animations', label: 'Animations' },
] as const;

type Category = typeof categories[number]['id'];

interface TabNavigationProps {
  activeCategory: Category;
  onCategoryChange: (category: Category) => void;
}

export default function TabNavigation({
  activeCategory,
  onCategoryChange,
}: TabNavigationProps) {
  return (
    <div className="flex text-amber-50 gap-4 mb-8">
      {categories.map((category) => (
        <button
          key={category.id}
          onClick={() => onCategoryChange(category.id)}
          className={`relative px-4 py-2 text-sm font-medium transition-colors ${
            activeCategory === category.id 
              ? 'text-green-400 hover:text-green-300' 
              : 'text-amber-50 hover:text-shadow-amber-50'
          }`}
        >
          {category.label}
          {activeCategory === category.id && (
            <motion.div
              layoutId="activeTab"
              className="absolute bottom-[-2px] left-0 right-0 h-0.5 bg-green-400 rounded-full"
              transition={{ type: 'spring', stiffness: 500, damping: 30 }}
            />
          )}
        </button>
      ))}
    </div>
  );
}