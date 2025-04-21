'use client';

import { motion } from 'framer-motion';
import { Copy, Check } from 'lucide-react';
import { useState } from 'react';
import { Tool } from '@/src/data/tools';

interface ToolCardProps {
  tool: Tool;
  packageManager: 'npm' | 'yarn' | 'pnpm' | 'bun';
}

export default function ToolCard({ tool, packageManager }: ToolCardProps) {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
      
      className="bg-gray-900/70 border border-gray-700/60 backdrop-blur-md rounded-2xl p-6 shadow-lg transition-all hover:shadow-2xl hover:scale-105 hover:-translate-y-1"
    >
      <div className="flex items-center gap-3 mb-4">
        <div 
          className="w-10 h-10 rounded-lg flex items-center justify-center"
          style={{
            backgroundImage: `url(${tool.logo})`,
            backgroundSize: 'contain',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        />
        <h3 className="text-xl font-bold text-white tracking-wide">
          {tool.name}
        </h3>
      </div>

      <div className="flex items-center gap-3">
        <code className="flex-1 bg-gray-800 text-sm text-lime-400 px-4 py-2 rounded-md overflow-x-auto font-mono border border-gray-700">
          {tool.commands[packageManager]}
        </code>
        <button
          onClick={() => copyToClipboard(tool.commands[packageManager])}
          className={`p-2 rounded-lg transition-colors flex items-center justify-center 
            ${
              copied
                ? 'bg-green-700/20 hover:bg-green-600/30'
                : 'bg-gray-800 hover:bg-gray-700'
            }`}
          aria-label="Copy command"
        >
          {copied ? (
            <Check className="w-5 h-5 text-green-400" />
          ) : (
            <Copy className="w-5 h-5 text-gray-300" />
          )}
        </button>
      </div>
    </motion.div>
  );
}
