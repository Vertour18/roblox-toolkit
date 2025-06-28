import React, { useState } from 'react';
import { Calculator, Info } from 'lucide-react';
import { calculateTax, formatNumber } from '../utils/calculations';

export function TaxCalculator() {
  const [robux, setRobux] = useState<string>('');
  const [result, setResult] = useState<number | null>(null);

  const handleCalculate = () => {
    const amount = parseInt(robux);
    if (amount && amount > 0) {
      const calculatedResult = calculateTax(amount);
      setResult(calculatedResult);
    }
  };

  const handleReset = () => {
    setRobux('');
    setResult(null);
  };

  return (
    <div className="bg-slate-800/60 backdrop-blur-sm rounded-xl p-6 border border-slate-600 hover:border-slate-500 transition-colors shadow-xl">
      <div className="flex items-center space-x-3 mb-4">
        <Calculator className="w-6 h-6 text-blue-400" />
        <h2 className="text-xl font-semibold text-white">Tax Calculator</h2>
      </div>
      
      <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-3 mb-6">
        <div className="flex items-center space-x-2">
          <Info className="w-4 h-4 text-blue-400 flex-shrink-0" />
          <p className="text-sm text-blue-200">
            Roblox toma una comisión del 30% en todas las transacciones
          </p>
        </div>
      </div>

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Cantidad de Robux
          </label>
          <input
            type="number"
            value={robux}
            onChange={(e) => setRobux(e.target.value)}
            placeholder="Ingresa la cantidad de Robux"
            className="w-full px-4 py-3 bg-slate-700/70 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent backdrop-blur-sm"
          />
        </div>

        <div className="flex space-x-3">
          <button
            onClick={handleCalculate}
            disabled={!robux || parseInt(robux) <= 0}
            className="flex-1 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-lg font-medium hover:from-blue-600 hover:to-purple-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-lg"
          >
            Calcular
          </button>
          <button
            onClick={handleReset}
            className="px-6 py-3 rounded-lg font-medium transition-colors bg-slate-700/70 text-gray-300 hover:bg-slate-600"
          >
            Limpiar
          </button>
        </div>

        {result !== null && (
          <div className="mt-6 p-4 rounded-lg bg-green-500/10 border border-green-500/20">
            <div className="text-center">
              <p className="text-gray-300 mb-2">Recibirás después del 30% de comisión:</p>
              <p className="text-2xl font-bold text-green-400">
                {formatNumber(result)} Robux
              </p>
              <p className="text-sm text-gray-300 mt-1">
                (De {formatNumber(parseInt(robux))} Robux originales)
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}