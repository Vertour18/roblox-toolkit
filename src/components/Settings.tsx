import React from 'react';
import { X } from 'lucide-react';
import { Config } from '../types';

interface SettingsProps {
  isOpen: boolean;
  onClose: () => void;
  config: Config;
  onConfigChange: (config: Config) => void;
  theme: 'dark' | 'light';
}

export function Settings({ isOpen, onClose, config, onConfigChange, theme }: SettingsProps) {
  if (!isOpen) return null;

  const handleSave = () => {
    onClose();
  };

  const modalClasses = theme === 'light'
    ? 'bg-white/95 backdrop-blur-md rounded-xl p-6 w-full max-w-md border border-gray-200 shadow-2xl'
    : 'bg-slate-800/95 backdrop-blur-md rounded-xl p-6 w-full max-w-md border border-slate-600 shadow-2xl';

  const textClasses = theme === 'light' ? 'text-gray-900' : 'text-white';
  const subtextClasses = theme === 'light' ? 'text-gray-600' : 'text-gray-300';

  const optionClasses = theme === 'light'
    ? 'flex items-center space-x-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer'
    : 'flex items-center space-x-3 p-3 bg-slate-700/50 rounded-lg hover:bg-slate-700/70 transition-colors cursor-pointer';

  const buttonClasses = theme === 'light'
    ? 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
    : 'text-gray-400 hover:text-white hover:bg-slate-700';

  const cancelButtonClasses = theme === 'light'
    ? 'px-4 py-3 bg-gray-200 text-gray-700 rounded-lg font-medium hover:bg-gray-300 transition-colors'
    : 'px-4 py-3 bg-slate-700 text-gray-300 rounded-lg font-medium hover:bg-slate-600 transition-colors';

  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className={modalClasses}>
        <div className="flex items-center justify-between mb-6">
          <h2 className={`text-xl font-semibold ${textClasses}`}>Configuración</h2>
          <button
            onClick={onClose}
            className={`p-2 rounded-lg transition-colors ${buttonClasses}`}
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="space-y-6">
          <div>
            <label className={`block text-sm font-medium ${subtextClasses} mb-3`}>
              Tema de la Aplicación
            </label>
            <div className="space-y-2">
              <label className={optionClasses}>
                <input
                  type="radio"
                  name="theme"
                  value="dark"
                  checked={config.theme === 'dark'}
                  onChange={(e) => onConfigChange({ ...config, theme: e.target.value as 'dark' | 'light' })}
                  className="text-blue-500 focus:ring-blue-500 bg-gray-600 border-gray-500"
                />
                <span className={subtextClasses}>🌙 Modo Oscuro</span>
              </label>
              <label className={optionClasses}>
                <input
                  type="radio"
                  name="theme"
                  value="light"
                  checked={config.theme === 'light'}
                  onChange={(e) => onConfigChange({ ...config, theme: e.target.value as 'dark' | 'light' })}
                  className="text-blue-500 focus:ring-blue-500 bg-gray-600 border-gray-500"
                />
                <span className={subtextClasses}>☀️ Modo Claro</span>
              </label>
            </div>
          </div>

          <div className="space-y-3">
            <label className={optionClasses}>
              <input
                type="checkbox"
                checked={config.saveCalculations}
                onChange={(e) => onConfigChange({ ...config, saveCalculations: e.target.checked })}
                className="text-blue-500 focus:ring-blue-500 rounded bg-gray-600 border-gray-500"
              />
              <span className={subtextClasses}>💾 Guardar cálculos automáticamente</span>
            </label>
          </div>
        </div>

        <div className="flex space-x-3 mt-6">
          <button
            onClick={handleSave}
            className="flex-1 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-3 rounded-lg font-medium hover:from-blue-600 hover:to-purple-700 transition-all flex items-center justify-center space-x-2 shadow-lg"
          >
            <span>💾</span>
            <span>Guardar</span>
          </button>
          <button
            onClick={onClose}
            className={cancelButtonClasses}
          >
            Cancelar
          </button>
        </div>
      </div>
    </div>
  );
}