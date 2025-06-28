import React, { useState } from 'react';
import { Shirt, TrendingUp, BarChart3 } from 'lucide-react';
import { calculateUGCEarnings, formatNumber } from '../utils/calculations';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

export function UGCCalculator() {
  const [price, setPrice] = useState<string>('');
  const [sales, setSales] = useState<string>('');
  const [timeframe, setTimeframe] = useState<'hour' | 'day' | 'month'>('month');
  const [result, setResult] = useState<number | null>(null);

  const generateChartData = () => {
    if (!price || !sales) return [];
    
    const priceNum = parseInt(price);
    const salesNum = parseInt(sales);
    const earnings = calculateUGCEarnings(priceNum, salesNum);
    
    const periods = timeframe === 'hour' ? 24 : timeframe === 'day' ? 30 : 12;
    const data = [];
    
    for (let i = 0; i < periods; i++) {
      const variation = 0.7 + Math.random() * 0.6;
      data.push({
        period: timeframe === 'hour' ? `${i}:00` : 
                timeframe === 'day' ? `Day ${i + 1}` : 
                `Month ${i + 1}`,
        earnings: Math.floor(earnings * variation / periods)
      });
    }
    
    return data;
  };

  const handleCalculate = () => {
    const priceNum = parseInt(price);
    const salesNum = parseInt(sales);
    if (priceNum && salesNum && priceNum > 0 && salesNum > 0) {
      const calculatedResult = calculateUGCEarnings(priceNum, salesNum);
      setResult(calculatedResult);
    }
  };

  const handleReset = () => {
    setPrice('');
    setSales('');
    setResult(null);
  };

  const chartData = generateChartData();

  return (
    <div className="bg-slate-800/60 backdrop-blur-sm rounded-xl p-6 border border-slate-600 hover:border-slate-500 transition-colors shadow-xl">
      <div className="flex items-center space-x-3 mb-4">
        <Shirt className="w-6 h-6 text-purple-400" />
        <h2 className="text-xl font-semibold text-white">UGC Tax Calculator</h2>
      </div>

      <div className="space-y-4 mb-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Precio del UGC (Robux)
            </label>
            <input
              type="number"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              placeholder="Ej: 100"
              className="w-full px-4 py-3 bg-slate-700/70 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent backdrop-blur-sm"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Número de Ventas
            </label>
            <input
              type="number"
              value={sales}
              onChange={(e) => setSales(e.target.value)}
              placeholder="Ej: 100"
              className="w-full px-4 py-3 bg-slate-700/70 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent backdrop-blur-sm"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Periodo de Análisis
          </label>
          <select
            value={timeframe}
            onChange={(e) => setTimeframe(e.target.value as 'hour' | 'day' | 'month')}
            className="w-full px-4 py-3 bg-slate-700/70 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent backdrop-blur-sm"
          >
            <option value="hour">Por Hora (24h)</option>
            <option value="day">Por Día (30 días)</option>
            <option value="month">Por Mes (12 meses)</option>
          </select>
        </div>

        <div className="flex space-x-3">
          <button
            onClick={handleCalculate}
            disabled={!price || !sales || parseInt(price) <= 0 || parseInt(sales) <= 0}
            className="flex-1 bg-gradient-to-r from-purple-500 to-pink-600 text-white px-6 py-3 rounded-lg font-medium hover:from-purple-600 hover:to-pink-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-lg"
          >
            Calcular Ganancias
          </button>
          <button
            onClick={handleReset}
            className="px-6 py-3 rounded-lg font-medium transition-colors bg-slate-700/70 text-gray-300 hover:bg-slate-600"
          >
            Limpiar
          </button>
        </div>
      </div>

      {result !== null && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="rounded-lg p-4 backdrop-blur-sm bg-green-500/20 border border-green-500/30">
              <div className="flex items-center space-x-2 mb-2">
                <TrendingUp className="w-4 h-4 text-green-400" />
                <span className="text-sm text-green-400 font-medium">Ganancias Netas</span>
              </div>
              <p className="text-xl font-bold text-white">{formatNumber(result)} Robux</p>
              <p className="text-xs text-gray-300">Después del 30% de comisión</p>
            </div>

            <div className="rounded-lg p-4 backdrop-blur-sm bg-blue-500/20 border border-blue-500/30">
              <div className="flex items-center space-x-2 mb-2">
                <BarChart3 className="w-4 h-4 text-blue-400" />
                <span className="text-sm text-blue-400 font-medium">Ingresos Brutos</span>
              </div>
              <p className="text-xl font-bold text-white">
                {formatNumber(parseInt(price) * parseInt(sales))} Robux
              </p>
              <p className="text-xs text-gray-300">Antes de comisión</p>
            </div>

            <div className="rounded-lg p-4 backdrop-blur-sm bg-red-500/20 border border-red-500/30">
              <div className="flex items-center space-x-2 mb-2">
                <TrendingUp className="w-4 h-4 text-red-400 rotate-180" />
                <span className="text-sm text-red-400 font-medium">Comisión</span>
              </div>
              <p className="text-xl font-bold text-white">
                {formatNumber(parseInt(price) * parseInt(sales) - result)} Robux
              </p>
              <p className="text-xs text-gray-300">30% del total</p>
            </div>
          </div>

          {chartData.length > 0 && (
            <div className="bg-slate-700/40 backdrop-blur-sm rounded-lg p-4 border border-slate-600">
              <h3 className="text-lg font-semibold text-white mb-4 flex items-center space-x-2">
                <BarChart3 className="w-5 h-5 text-purple-400" />
                <span>Proyección de Ganancias - {
                  timeframe === 'hour' ? 'Últimas 24 Horas' :
                  timeframe === 'day' ? 'Últimos 30 Días' :
                  'Últimos 12 Meses'
                }</span>
              </h3>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={chartData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#4B5563" />
                    <XAxis 
                      dataKey="period" 
                      stroke="#E5E7EB"
                      fontSize={12}
                      tick={{ fill: '#E5E7EB' }}
                    />
                    <YAxis 
                      stroke="#E5E7EB"
                      fontSize={12}
                      tick={{ fill: '#E5E7EB' }}
                      tickFormatter={(value) => `${value}R`}
                    />
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: '#1F2937', 
                        border: '1px solid #374151',
                        borderRadius: '8px',
                        color: '#E5E7EB'
                      }}
                      formatter={(value: number) => [`${value} Robux`, 'Ganancias']}
                      labelStyle={{ color: '#E5E7EB' }}
                    />
                    <Line 
                      type="monotone" 
                      dataKey="earnings" 
                      stroke="#8B5CF6" 
                      strokeWidth={2}
                      dot={{ fill: '#8B5CF6', strokeWidth: 2, r: 3 }}
                      activeDot={{ r: 5, stroke: '#8B5CF6', strokeWidth: 2 }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}