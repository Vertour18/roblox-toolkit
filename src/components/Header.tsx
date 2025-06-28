import React from 'react';
import { Wrench } from 'lucide-react';

export function Header() {
  return (
    <header className="bg-slate-900/80 backdrop-blur-md border-b border-slate-700 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center h-16">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg shadow-lg">
              <Wrench className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-white">Roblox Toolkit</h1>
              <p className="text-xs text-gray-400">Your Ultimate Roblox Helper</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}