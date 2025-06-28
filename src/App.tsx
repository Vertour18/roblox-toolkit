import React from 'react';
import { Header } from './components/Header';
import { TaxCalculator } from './components/TaxCalculator';
import { UGCCalculator } from './components/UGCCalculator';
import { DevExCalculator } from './components/DevExCalculator';
import { FAQ } from './components/FAQ';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-gray-950 to-black">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Roblox <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">Toolkit</span>
          </h1>
          <p className="text-xl max-w-2xl mx-auto text-gray-300">
            Las herramientas más completas para desarrolladores y jugadores de Roblox
          </p>
        </div>

        {/* Tools Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <TaxCalculator />
          <DevExCalculator />
        </div>

        {/* UGC Calculator - Full Width */}
        <div className="mb-12">
          <UGCCalculator />
        </div>

        {/* FAQ Section */}
        <div className="mb-8">
          <FAQ />
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default App;