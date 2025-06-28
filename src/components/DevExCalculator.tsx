import React, { useState } from 'react';
import { DollarSign, AlertCircle } from 'lucide-react';
import { calculateDevEx, formatCurrency, formatNumber, MIN_DEVEX_ROBUX } from '../utils/calculations';
import { CURRENCIES } from '../data/currencies';

export function DevExCalculator() {
  const [robux, setRobux] = useState<string>('');
  const [selectedCurrency, setSelectedCurrency] = useState('USD');
  const [result, setResult] = useState<number | null>(null);

  const currency = CURRENCIES.find(c => c.code === selectedCurrency) || CURRENCIES[0];

  const handleCalculate = () => {
    const amount = parseInt(robux);
    if (amount && amount >= MIN_DEVEX_ROBUX) {
      const calculatedResult = calculateDevEx(amount, currency.rate);
      setResult(calculatedResult);
    }
  };

  const handleReset = () => {
    setRobux('');
    setResult(null);
  };

  const isValidAmount = robux && parseInt(robux) >= MIN_DEVEX_ROBUX;

  return (
    <div className="bg-slate-800/60 backdrop-blur-sm rounded-xl p-6 border border-slate-600 hover:border-slate-500 transition-colors shadow-xl">
      <div className="flex items-center space-x-3 mb-4">
        <DollarSign className="w-6 h-6 text-green-400" />
        <h2 className="text-xl font-semibold text-white">DevEx Calculator</h2>
      </div>

      <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-lg p-3 mb-6">
        <div className="flex items-center space-x-2">
          <AlertCircle className="w-4 h-4 text-yellow-400 flex-shrink-0" />
          <p className="text-sm text-yellow-200">
            Mínimo requerido: {formatNumber(MIN_DEVEX_ROBUX)} Robux para DevEx
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
            placeholder={`Mínimo ${formatNumber(MIN_DEVEX_ROBUX)} Robux`}
            className="w-full px-4 py-3 bg-slate-700/70 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent backdrop-blur-sm"
          />
          {robux && parseInt(robux) < MIN_DEVEX_ROBUX && (
            <p className="text-red-400 text-sm mt-1">
              Necesitas al menos {formatNumber(MIN_DEVEX_ROBUX)} Robux
            </p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Moneda de Destino
          </label>
          <select
            value={selectedCurrency}
            onChange={(e) => setSelectedCurrency(e.target.value)}
            className="w-full px-4 py-3 bg-slate-700/70 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent backdrop-blur-sm"
          >
            {CURRENCIES.map((curr) => (
              <option key={curr.code} value={curr.code}>
                {curr.code} - {curr.name}
              </option>
            ))}
          </select>
        </div>

        <div className="flex space-x-3">
          <button
            onClick={handleCalculate}
            disabled={!isValidAmount}
            className="flex-1 bg-gradient-to-r from-green-500 to-emerald-600 text-white px-6 py-3 rounded-lg font-medium hover:from-green-600 hover:to-emerald-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-lg"
          >
            Calcular DevEx
          </button>
          <button
            onClick={handleReset}
            className="px-6 py-3 rounded-lg font-medium transition-colors bg-slate-700/70 text-gray-300 hover:bg-slate-600"
          >
            Limpiar
          </button>
        </div>

        {result !== null && isValidAmount && (
          <div className="mt-6 space-y-4">
            <div className="p-4 rounded-lg bg-green-500/10 border border-green-500/20">
              <div className="text-center">
                <p className="text-gray-300 mb-2">Recibirás:</p>
                <p className="text-3xl font-bold text-green-400">
                  {selectedCurrency === 'USD' ? 
                    formatCurrency(result, selectedCurrency) : 
                    `${result.toLocaleString()} ${selectedCurrency}`
                  }
                </p>
                <p className="text-sm text-gray-300 mt-1">
                  Por {formatNumber(parseInt(robux))} Robux
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 text-sm">
              <div className="rounded-lg p-3 bg-slate-700/50">
                <p className="text-gray-300">Tasa de Cambio</p>
                <p className="text-white font-medium">$0.0035 USD/Robux</p>
              </div>
              <div className="rounded-lg p-3 bg-slate-700/50">
                <p className="text-gray-300">Equivalente USD</p>
                <p className="text-white font-medium">
                  {formatCurrency(parseInt(robux) * 0.0035, 'USD')}
                </p>
              </div>
            </div>

            <div className="text-xs text-center text-gray-500">
              * Los montos están sujetos a las tasas de cambio actuales y pueden variar
            </div>
          </div>
        )}
      </div>
    </div>
  );
}