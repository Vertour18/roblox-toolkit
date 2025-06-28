import React, { useState } from 'react';
import { HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';
import { FAQ_DATA } from '../data/faq';

export function FAQ() {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  return (
    <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700">
      <div className="flex items-center space-x-3 mb-6">
        <HelpCircle className="w-6 h-6 text-orange-400" />
        <h2 className="text-xl font-semibold text-white">Preguntas Frecuentes</h2>
      </div>

      <div className="space-y-3">
        {FAQ_DATA.map((item, index) => (
          <div key={index} className="bg-slate-700/30 rounded-lg border border-slate-600/50 overflow-hidden">
            <button
              onClick={() => toggleItem(index)}
              className="w-full px-4 py-4 text-left flex items-center justify-between hover:bg-slate-600/30 transition-colors"
            >
              <span className="text-white font-medium text-sm md:text-base">{item.question}</span>
              {openItems.includes(index) ? (
                <ChevronUp className="w-5 h-5 text-gray-400 flex-shrink-0" />
              ) : (
                <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
              )}
            </button>
            
            {openItems.includes(index) && (
              <div className="px-4 pb-4">
                <p className="text-gray-300 text-sm leading-relaxed">{item.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}