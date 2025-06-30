import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, TrendingDown, PieChart, BarChart3, Plus, Eye, EyeOff } from 'lucide-react';

const portfolioData = {
  totalValue: 485000,
  totalInvested: 420000,
  totalGain: 65000,
  totalGainPercent: 15.48,
  dayChange: 2340,
  dayChangePercent: 0.48
};

const holdings = [
  { symbol: 'RELIANCE', name: 'Reliance Industries', quantity: 50, avgPrice: 2200, currentPrice: 2456.78, invested: 110000, currentValue: 122839, sector: 'Energy' },
  { symbol: 'TCS', name: 'Tata Consultancy Services', quantity: 25, avgPrice: 3500, currentPrice: 3789.12, invested: 87500, currentValue: 94728, sector: 'IT' },
  { symbol: 'HDFCBANK', name: 'HDFC Bank', quantity: 80, avgPrice: 1400, currentPrice: 1567.89, invested: 112000, currentValue: 125431, sector: 'Banking' },
  { symbol: 'INFY', name: 'Infosys', quantity: 60, avgPrice: 1300, currentPrice: 1456.78, invested: 78000, currentValue: 87407, sector: 'IT' },
  { symbol: 'ITC', name: 'ITC Limited', quantity: 200, avgPrice: 220, currentPrice: 245.67, invested: 44000, currentValue: 49134, sector: 'FMCG' },
];

const sectorAllocation = [
  { sector: 'IT', percentage: 37.5, value: 182135, color: 'bg-blue-500' },
  { sector: 'Banking', percentage: 25.9, value: 125431, color: 'bg-lime-accent' },
  { sector: 'Energy', percentage: 25.3, value: 122839, color: 'bg-purple-500' },
  { sector: 'FMCG', percentage: 10.1, value: 49134, color: 'bg-orange-500' },
];

export const Portfolio: React.FC = () => {
  const [showValues, setShowValues] = useState(true);

  return (
    <div className="space-y-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex items-center justify-between"
      >
        <div>
          <h2 className="text-3xl font-bold text-light-text dark:text-dark-text font-editorial">Portfolio</h2>
          <p className="text-light-text-secondary dark:text-dark-text-secondary mt-1">Track your investments and performance</p>
        </div>
        <div className="flex items-center space-x-4">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setShowValues(!showValues)}
            className="p-3 bg-light-glass dark:bg-dark-glass rounded-full hover:bg-lime-accent/10 transition-colors duration-300"
          >
            {showValues ? (
              <Eye className="w-5 h-5 text-light-text dark:text-dark-text" />
            ) : (
              <EyeOff className="w-5 h-5 text-light-text dark:text-dark-text" />
            )}
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center space-x-2 bg-lime-accent text-light-base dark:text-dark-base px-4 py-2 rounded-xl font-medium hover:shadow-glow transition-all"
          >
            <Plus className="w-5 h-5" />
            <span>Add Stock</span>
          </motion.button>
        </div>
      </motion.div>

      {/* Portfolio Summary */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="bg-gradient-to-br from-light-surface to-light-glass dark:from-dark-surface dark:to-dark-glass border border-light-border dark:border-dark-border rounded-xl p-6 shadow-glass transition-colors duration-300"
        >
          <p className="text-light-text-secondary dark:text-dark-text-secondary text-sm">Total Value</p>
          <p className="text-3xl font-bold text-lime-accent font-editorial">
            {showValues ? `₹${portfolioData.totalValue.toLocaleString('en-IN')}` : '••••••••'}
          </p>
          <div className="flex items-center space-x-1 mt-2">
            <TrendingUp className="w-4 h-4 text-lime-accent" />
            <span className="text-lime-accent text-sm">+{portfolioData.totalGainPercent}%</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-light-surface/50 dark:bg-dark-surface/50 backdrop-blur-sm border border-light-border dark:border-dark-border rounded-xl p-6 transition-colors duration-300"
        >
          <p className="text-light-text-secondary dark:text-dark-text-secondary text-sm">Total Invested</p>
          <p className="text-2xl font-bold text-light-text dark:text-dark-text font-editorial">
            {showValues ? `₹${portfolioData.totalInvested.toLocaleString('en-IN')}` : '••••••••'}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="bg-light-surface/50 dark:bg-dark-surface/50 backdrop-blur-sm border border-light-border dark:border-dark-border rounded-xl p-6 transition-colors duration-300"
        >
          <p className="text-light-text-secondary dark:text-dark-text-secondary text-sm">Total Gain/Loss</p>
          <p className="text-2xl font-bold text-lime-accent font-editorial">
            {showValues ? `+₹${portfolioData.totalGain.toLocaleString('en-IN')}` : '••••••••'}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="bg-light-surface/50 dark:bg-dark-surface/50 backdrop-blur-sm border border-light-border dark:border-dark-border rounded-xl p-6 transition-colors duration-300"
        >
          <p className="text-light-text-secondary dark:text-dark-text-secondary text-sm">Day's Change</p>
          <p className="text-2xl font-bold text-lime-accent font-editorial">
            {showValues ? `+₹${portfolioData.dayChange.toLocaleString('en-IN')}` : '••••••••'}
          </p>
          <p className="text-lime-accent text-sm">+{portfolioData.dayChangePercent}%</p>
        </motion.div>
      </div>

      {/* Holdings and Sector Allocation */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Holdings */}
        <div className="lg:col-span-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="bg-light-surface/50 dark:bg-dark-surface/50 backdrop-blur-sm border border-light-border dark:border-dark-border rounded-2xl p-6 shadow-glass transition-colors duration-300"
          >
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold text-light-text dark:text-dark-text font-editorial">Holdings</h3>
              <BarChart3 className="w-5 h-5 text-lime-accent" />
            </div>
            <div className="space-y-4">
              {holdings.map((holding, index) => {
                const gain = holding.currentValue - holding.invested;
                const gainPercent = ((gain / holding.invested) * 100);
                
                return (
                  <motion.div
                    key={holding.symbol}
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                    whileHover={{ scale: 1.01, x: 5 }}
                    className="flex items-center justify-between p-4 rounded-xl hover:bg-light-glass dark:hover:bg-dark-glass transition-all group duration-300"
                  >
                    <div className="flex-1">
                      <div className="flex items-center space-x-3">
                        <div>
                          <p className="font-bold text-light-text dark:text-dark-text font-editorial">{holding.symbol}</p>
                          <p className="text-sm text-light-text-secondary dark:text-dark-text-secondary">{holding.name}</p>
                          <p className="text-xs text-light-text-secondary dark:text-dark-text-secondary">{holding.quantity} shares • Avg: ₹{holding.avgPrice}</p>
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-light-text dark:text-dark-text font-editorial">
                        {showValues ? `₹${holding.currentValue.toLocaleString('en-IN')}` : '••••••'}
                      </p>
                      <p className={`text-sm ${gain >= 0 ? 'text-lime-accent' : 'text-red-400'}`}>
                        {showValues ? `${gain > 0 ? '+' : ''}₹${gain.toLocaleString('en-IN')} (${gainPercent > 0 ? '+' : ''}${gainPercent.toFixed(2)}%)` : '••••••'}
                      </p>
                      <p className="text-xs text-light-text-secondary dark:text-dark-text-secondary">₹{holding.currentPrice.toFixed(2)}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>

        {/* Sector Allocation */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="bg-light-surface/50 dark:bg-dark-surface/50 backdrop-blur-sm border border-light-border dark:border-dark-border rounded-2xl p-6 shadow-glass transition-colors duration-300"
          >
            <div className="flex items-center space-x-2 mb-6">
              <PieChart className="w-5 h-5 text-lime-accent" />
              <h3 className="text-xl font-bold text-light-text dark:text-dark-text font-editorial">Sector Allocation</h3>
            </div>
            <div className="space-y-4">
              {sectorAllocation.map((sector, index) => (
                <motion.div
                  key={sector.sector}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                  className="space-y-2"
                >
                  <div className="flex justify-between items-center">
                    <span className="text-light-text dark:text-dark-text font-medium">{sector.sector}</span>
                    <span className="text-light-text-secondary dark:text-dark-text-secondary text-sm">
                      {sector.percentage}%
                    </span>
                  </div>
                  <div className="w-full bg-light-glass dark:bg-dark-glass rounded-full h-2">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${sector.percentage}%` }}
                      transition={{ duration: 1, delay: 0.8 + index * 0.1 }}
                      className={`h-2 rounded-full ${sector.color}`}
                    />
                  </div>
                  <p className="text-xs text-light-text-secondary dark:text-dark-text-secondary">
                    {showValues ? `₹${sector.value.toLocaleString('en-IN')}` : '••••••'}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};